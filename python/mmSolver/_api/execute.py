# Copyright (C) 2019 David Cattermole.
#
# This file is part of mmSolver.
#
# mmSolver is free software: you can redistribute it and/or modify it
# under the terms of the GNU Lesser General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# mmSolver is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Lesser General Public License for more details.
#
# You should have received a copy of the GNU Lesser General Public License
# along with mmSolver.  If not, see <https://www.gnu.org/licenses/>.
#
"""
Execute a solve.

Executing a solve compiles the Collections (of Markers, Bundles and
Solvers) and turns it into a SolveResult, as fast as it can.

Executing a solve has options that control the behaviour of how the
solve is executed. Usually the options are responsible for forcing Maya
to update in various ways (DG or Viewport.
"""

import time
import pprint
import collections

import maya.cmds
import maya.mel

import mmSolver.logger
import mmSolver.utils.viewport as viewport_utils
import mmSolver._api.state as api_state
import mmSolver._api.utils as api_utils
import mmSolver._api.compile as api_compile
import mmSolver._api.excep as excep
import mmSolver._api.solveresult as solveresult
import mmSolver._api.action as api_action
import mmSolver._api.solverbase as solverbase
import mmSolver._api.collectionutils as collectionutils
import mmSolver._api.constant as const

LOG = mmSolver.logger.get_logger()

ExecuteOptions = collections.namedtuple(
    'ExecuteOptions',
    ('verbose',
     'refresh',
     'disable_viewport_two',
     'force_update',
     'pre_solve_force_eval',
     'do_isolate',
     'display_grid',
     'display_node_types')
)


def createExecuteOptions(verbose=False,
                         refresh=False,
                         disable_viewport_two=True,
                         force_update=False,
                         do_isolate=False,
                         pre_solve_force_eval=True,
                         display_grid=True,
                         display_node_types=None):
    """
    Create :py:class:`ExecuteOptions` object.

    If a keyword argument is not given, a reasonable default value is
    used.

    :param verbose: Print extra solver information while a solve is running.
    :type verbose: bool

    :param refresh: Should the solver refresh the viewport while solving?
    :type refresh: bool

    :param disable_viewport_two: Turn off Viewport 2.0 update, before solving?
    :type disable_viewport_two: bool

    :param force_update: Force updating the DG network, to help the
                         solver in case of a Maya evaluation DG bug.
    :type force_update: bool

    :param do_isolate: Isolate only solving objects while performing
                       the solve.
    :type do_isolate: bool

    :param pre_solve_force_eval: Before solving, we kick-start the
                                 evaluation by changing time and
                                 forcing update.
    :type pre_solve_force_eval: bool

    :param display_grid: Display grid in the viewport while performing
                         the solve?
    :type display_grid: bool

    :param display_node_types: Allow a dict to be passed to the function
                               specifying the object type and the
                               visibility status during solving. This
                               allows us to turn on/off any object type
                               during solving. If an argument is not
                               given or is None, the object type
                               visibility will not be changed.
    """
    if display_node_types is None:
        display_node_types = dict()
    options = ExecuteOptions(
        verbose=verbose,
        refresh=refresh,
        disable_viewport_two=disable_viewport_two,
        force_update=force_update,
        do_isolate=do_isolate,
        pre_solve_force_eval=pre_solve_force_eval,
        display_grid=display_grid,
        display_node_types=display_node_types
    )
    return options


def preSolve_updateProgress(prog_fn, status_fn):
    """
    Initialise solver is running, and send info to the Maya GUI before
    a solve starts.

    :param prog_fn: Function to use for printing progress messages.
    :type prog_fn: callable or None

    :param status_fn: Function to use for printing status messages.
    :type status_fn: callable or None
    """
    # Start up solver
    collectionutils.run_progress_func(prog_fn, 0)
    ts = solveresult.format_timestamp(time.time())
    collectionutils.run_status_func(status_fn, 'Solve start (%s)' % ts)
    api_state.set_solver_running(True)
    return


def preSolve_queryViewportState(options, panels):
    """
    If 'refresh' is 'on' change all viewports to 'isolate
    selected' on only the markers and bundles being solved. This
    will speed up computations, especially per-frame solving as
    it will not re-compute any invisible nodes (such as rigs or
    image planes).

    :param options:
    :param panels:
    :return:
    """
    panel_objs = {}
    panel_node_type_vis = collections.defaultdict(dict)
    if options.refresh is not True:
        return panel_objs, panel_node_type_vis

    display_node_types = options.display_node_types
    if display_node_types is not None:
        assert isinstance(display_node_types, dict)
        for panel in panels:
            node_types = display_node_types.keys()
            node_type_vis = dict()
            for node_type in node_types:
                value = viewport_utils.get_node_type_visibility(panel, node_type)
                node_type_vis[node_type] = value
            panel_node_type_vis[panel] = node_type_vis

    if options.do_isolate is True:
        for panel in panels:
            state = maya.cmds.isolateSelect(
                panel,
                query=True,
                state=True)
            nodes = None
            if state is True:
                nodes = viewport_utils.get_isolated_nodes(panel)
            panel_objs[panel] = nodes

    return panel_objs, panel_node_type_vis


def preSolve_setIsolatedNodes(actions_list, options, panels):
    """
    Prepare frame solve

    Isolate all nodes used in all of the kwargs to be run.
    Note; This assumes the isolated objects are visible, but
    they may actually be hidden.
    """
    if options.refresh is not True:
        return
    if options.do_isolate is True:
        isolate_nodes = set()
        for action in actions_list:
            kwargs = action.kwargs
            isolate_nodes |= collectionutils.generate_isolate_nodes(kwargs)
        if len(isolate_nodes) == 0:
            raise excep.NotValid
        isolate_node_list = list(isolate_nodes)
        for panel in panels:
            viewport_utils.set_isolated_nodes(panel, isolate_node_list, True)

    display_node_types = options.display_node_types
    if display_node_types is not None:
        assert isinstance(display_node_types, dict)
        for panel in panels:
            for node_type, value in display_node_types.items():
                if value is None:
                    continue
                assert isinstance(value, bool)
                viewport_utils.set_node_type_visibility(panel, node_type, value)
    return


def preSolve_triggerEvaluation(action_list, cur_frame, options):
    """
    Set the first current time to the frame before current.

    This is to help trigger evaluations on the 'current
    frame', if the current frame is the same as the first
    frame.

    :param action_list: List of :py:class:`Action` objects that are
                        used in the current solve.
    :type action_list: [Action, .. ]

    :param cur_frame: The current frame number.
    :type cur_frame: int or float

    :param options: The execution options for the solve.
    :type options: ExecuteOptions
    """
    if options.pre_solve_force_eval is not True:
        return
    frame_list = []
    for action in action_list:
        kwargs = action.kwargs
        frame_list += kwargs.get('frame', [])
    frame_list = list(set(frame_list))
    frame_list = list(sorted(frame_list))
    is_whole_solve_single_frame = len(frame_list) == 1
    if is_whole_solve_single_frame is False:
        maya.cmds.currentTime(
            cur_frame - 1,
            edit=True,
            update=options.force_update,
            )
    return


def postSolve_refreshViewport(options, frame):
    """
    Refresh the viewport after a solve has finished.

    :param options: The execution options for the current solve.
    :type options: ExecuteOptions

    :param frame:
        The list of frame numbers, first item in list is used to
        refresh the viewport.
    :type frame: [int or float, ..]
    """
    # Refresh the Viewport.
    if options.refresh is not True:
        return

    maya.cmds.currentTime(
        frame[0],
        edit=True,
        update=options.force_update,
    )
    maya.cmds.refresh()
    return


def postSolve_setViewportState(options, panel_objs, panel_node_type_vis):
    """
    Change the viewport state based on the ExecuteOptions given

    :param options: The execution options for the current solve.
    :type options: ExecuteOptions

    :param panel_objs:
        The panels and object to isolate, in a list of tuples.
    :type panel_objs: [(str, [str, ..] or None), ..]

    :param panel_node_type_vis:
        The panels and node-type visibility options in a list of tuples.
    :type panel_node_type_vis: [(str, {str: int or bool or None}), ..]
    """
    if options.refresh is not True:
        return

    # Isolate Objects restore.
    for panel, objs in panel_objs.items():
        if objs is None:
            # No original objects, disable 'isolate
            # selected' after resetting the objects.
            if options.do_isolate is True:
                viewport_utils.set_isolated_nodes(panel, [], False)
        else:
            if options.do_isolate is True:
                viewport_utils.set_isolated_nodes(panel, list(objs), True)

    # Show menu restore.
    for panel, node_types_vis in panel_node_type_vis.items():
        for node_type, value in node_types_vis.items():
            if value is None:
                continue
            viewport_utils.set_node_type_visibility(panel, node_type, value)
    return


def postSolve_setUpdateProgress(progress_min,
                                progress_value,
                                progress_max,
                                solres,
                                prog_fn, status_fn):
    """
    Update the Maya GUI with progress information, and detects users
    wanting to cancel the solve.

    :param progress_min:
        Minimum progress number possible.
        Usually the number is 0.
    :type progress_min: int

    :param progress_value:
        The actual progress value.
        The value is usually between 0 and 100 (inclusive).
    :type progress_value: int

    :param progress_max:
        THe maximum progress number possible.
        Usually the number is 100.
    :type progress_max: int

    :param solres:
        The SolveResult object for the last solved state.
    :type solres: SolveResult or None

    :param prog_fn: The function used report progress messages to
                    the user.
    :type prog_fn: callable or None

    :param status_fn: The function used to report status messages
                      to the user.
    :type status_fn: callable or None

    :returns:
        Should the solver stop executing or not? Has the user
        cancelled the solve?
    :rtype: bool
    """
    stop_solving = False

    # Update progress
    ratio = float(progress_value) / float(progress_max)
    percent = float(progress_min) + (ratio * (100.0 - progress_min))
    collectionutils.run_progress_func(prog_fn, int(percent))

    # Check if the user wants to stop solving.
    if solres is None:
        cmd_cancel = False
    else:
        cmd_cancel = solres.get_user_interrupted()
    gui_cancel = api_state.get_user_interrupt()
    if cmd_cancel is True or gui_cancel is True:
        msg = 'Cancelled by User'
        api_state.set_user_interrupt(False)
        collectionutils.run_status_func(status_fn, 'WARNING: ' + msg)
        LOG.warn(msg)
        stop_solving = True
    if (solres is not None) and (solres.get_success() is False):
        msg = 'Solver failed!!!'
        collectionutils.run_status_func(status_fn, 'ERROR: ' + msg)
        LOG.error(msg)
    return stop_solving


def _run_validate_action(vaction):
    """
    Call a single validate action, and see what happens.

    :param vaction: Validation action object to be run.
    :type vaction: Action

    :return:
        A tuple of 3 parts; First, did the validation succeed (as
        boolean)? Second, the user message we present for the state.
        Third, metrics about the solve (number of parameters, number
        of errors, and number of frames to solve)
    :rtype: (bool, str, (int, int, int))
    """
    num_param = 0
    num_err = 0
    num_frames = 0

    valid = True
    message = ('Validated parameters, errors and frames: '
               'param=%r errors=%r frames=%r')
    metrics = (num_param, num_err, num_frames)
    if not isinstance(vaction, api_action.Action):
        message = message % (num_param, num_err, num_frames)
        return valid, message, metrics
    vfunc, vargs, vkwargs = api_action.action_to_components(vaction)

    num_frames = len(vkwargs.get('frame', []))
    if num_frames == 0:
        valid = False
        metrics = (num_param, num_err, num_frames)
        msg = ('Failed to validate number of frames: '
               'param=%r errors=%r frames=%r')
        message = msg % (num_param, num_err, num_frames)
        return valid, message, metrics

    vfunc_is_mmsolver = api_action.action_func_is_mmSolver(vaction)
    if vfunc_is_mmsolver is False:
        return valid, message, metrics

    solve_data = vfunc(*vargs, **vkwargs)
    solres = solveresult.SolveResult(solve_data)
    print_stats = solres.get_print_stats()
    num_param = print_stats.get('number_of_parameters', 0)
    num_err = print_stats.get('number_of_errors', 0)
    metrics = (num_param, num_err, num_frames)
    if num_param == 0 or num_err == 0 or num_param > num_err:
        valid = False
        msg = ('Failed to validate number of parameters and errors: '
               'param=%r errors=%r frames=%r')
        message = msg % (num_param, num_err, num_frames)
        return valid, message, metrics
    message = message % (num_param, num_err, num_frames)
    return valid, message, metrics


def _run_validate_action_list(vaction_list):
    """
    Calls the validation functions attached to the Action list.

    See :py:func:`_run_validate_action` for more details.

    :param vaction_list: List of validate actions to call.
    :type vaction_list: [Action, ..]

    :return:
        A list of validations, with a single valid boolean (did the
        validation succeed?).
    :rtype: (bool, [str, ..], [(int, int, int), ..])
    """
    assert len(vaction_list) > 0
    valid = True
    message_list = []
    metrics_list = []
    for vaction in vaction_list:
        v, message, metrics = _run_validate_action(vaction)
        metrics_list.append(metrics)
        message_list.append(message)
        if v is not True:
            valid = False
    return valid, message_list, metrics_list


def validate(col):
    """
    Validates the given collection state, is it ready for solving?

    :param col: The Collection object to be validated.
    :type col: Collection

    :return:
        A list of validations, with a single valid boolean (did the
        validation succeed?). See :py:func:`_run_validate_action`
        function return types for more details.
    :rtype: (bool, [str, ..], [(int, int, int), ..])
    """
    valid = False
    message_list = []
    metrics_list = []

    try:
        sol_list = col.get_solver_list()
        mkr_list = col.get_marker_list()
        attr_list = col.get_attribute_list()
        action_list, vaction_list = api_compile.collection_compile(
            col,
            sol_list, mkr_list, attr_list,
            withtest=True,
            prog_fn=None,
            status_fn=None)
    except excep.NotValid as e:
        LOG.warn(e)
        message_list.append(str(e))
        metrics_list.append((0, 0, 0))
        return valid, message_list, metrics_list

    if len(vaction_list) > 0:
        valid, message_list, metrics_list = _run_validate_action_list(vaction_list)
        assert len(message_list) > 0
        assert len(metrics_list) > 0
    return valid, message_list, metrics_list


def execute(col,
            options=None,
            validate_mode=None,
            log_level=None,
            prog_fn=None,
            status_fn=None,
            info_fn=None):
    """
    Compile the collection, then pass that data to the 'mmSolver' command.

    The mmSolver command will return a list of strings, which will then be
    passed to the SolveResult class so the user can query the raw data
    using an interface.

    :param col: The Collection to execute.
    :type col: Collection

    :param options: The options for the execution.
    :type options: ExecuteOptions

    :param validate_mode: How should the solve validate? Must be one of
                          the VALIDATE_MODE_VALUE_LIST values.
    :type validate_mode: str or None

    :param log_level: The log level for the execution.
    :type log_level: str

    :param prog_fn: The function used report progress messages to
                    the user.
    :type prog_fn: callable or None

    :param status_fn: The function used to report status messages
                      to the user.
    :type status_fn: callable or None

    :param info_fn: The function used to report information
                    messages to the user.
    :type info_fn: callable or None

    :return: List of SolveResults from the executed collection.
    :rtype: [SolverResult, ..]
    """
    if options is None:
        options = createExecuteOptions()
    if validate_mode is None:
        validate_mode = const.VALIDATE_MODE_NONE_VALUE
    assert validate_mode in const.VALIDATE_MODE_VALUE_LIST
    if log_level is None:
        log_level = const.LOG_LEVEL_DEFAULT
    assert isinstance(log_level, (str, unicode))

    start_time = time.time()

    # Ensure the plug-in is loaded, so we fail before trying to run.
    api_utils.load_plugin()
    assert 'mmSolver' in dir(maya.cmds)

    vp2_state = viewport_utils.get_viewport2_active_state()
    current_eval_manager_mode = maya.cmds.evaluationManager(
        query=True,
        mode=True
    )

    panels = viewport_utils.get_all_model_panels()
    panel_objs, panel_node_type_vis = preSolve_queryViewportState(
        options, panels
    )

    # Save current frame, to revert to later on.
    cur_frame = maya.cmds.currentTime(query=True)

    try:
        if options.disable_viewport_two is True:
            viewport_utils.set_viewport2_active_state(False)
        maya.cmds.evaluationManager(mode='off')
        preSolve_updateProgress(prog_fn, status_fn)

        # Check for validity and compile actions.
        solres_list = []
        withtest = validate_mode in [const.VALIDATE_MODE_PRE_VALIDATE_VALUE,
                                     const.VALIDATE_MODE_AT_RUNTIME_VALUE]
        sol_list = col.get_solver_list()
        mkr_list = col.get_marker_list()
        attr_list = col.get_attribute_list()
        try:
            action_list, vaction_list = api_compile.collection_compile(
                col,
                sol_list,
                mkr_list,
                attr_list,
                withtest=withtest,
                prog_fn=prog_fn,
                status_fn=status_fn
            )
        except excep.NotValid as e:
            LOG.warn(e)
            return solres_list
        collectionutils.run_progress_func(prog_fn, 1)

        if validate_mode == 'pre_validate':
            valid, msg, metrics_list = _run_validate_action_list(vaction_list)
            if valid is not True:
                LOG.warn(msg)
                return solres_list

        # Prepare frame solve
        preSolve_setIsolatedNodes(action_list, options, panels)
        preSolve_triggerEvaluation(action_list, cur_frame, options)

        # Ensure prediction attributes are created and initialised.
        collectionutils.set_initial_prediction_attributes(
            col, attr_list, cur_frame
        )

        # Run Solver Actions...
        start = 0
        total = len(action_list)
        number_of_solves = 0
        for i, (action, vaction) in enumerate(zip(action_list, vaction_list)):
            if isinstance(vaction, api_action.Action) and validate_mode == 'at_runtime':
                valid, message, metrics = _run_validate_action(vaction)
                if valid is not True:
                    LOG.warn(message)
                    return

            func, args, kwargs = api_action.action_to_components(action)
            func_is_mmsolver = api_action.action_func_is_mmSolver(action)

            save_node_attrs = None
            is_single_frame = None
            if func_is_mmsolver is True:
                frame = kwargs.get('frame')
                collectionutils.run_status_func(info_fn, 'Evaluating frames %r' % frame)
                if frame is None or len(frame) == 0:
                    raise excep.NotValid

                # Write solver flags to a debug file.
                debug_file_path = kwargs.get('debugFile', None)
                if debug_file_path is not None:
                    options_file_path = debug_file_path.replace('.log', '.flags')
                    text = pprint.pformat(kwargs)
                    with open(options_file_path, 'w') as file_:
                        file_.write(text)

                # Overriding the verbosity, irrespective of what the
                # solver verbosity value is set to.
                kwargs['verbose'] = False
                if log_level is not None and log_level.lower() == 'verbose':
                    kwargs['verbose'] = True

                # HACK for single frame solves.
                save_node_attrs = []
                is_single_frame = collectionutils.is_single_frame(kwargs)
                if is_single_frame is True:
                    save_node_attrs = collectionutils.disconnect_animcurves(kwargs)

            # Run Solver Maya plug-in command
            solve_data = func(*args, **kwargs)

            # Revert special HACK for single frame solves
            if func_is_mmsolver is True:
                if is_single_frame is True:
                    collectionutils.reconnect_animcurves(kwargs, save_node_attrs)

            # Create SolveResult.
            solres = None
            if solve_data is not None and func_is_mmsolver is True:
                solres = solveresult.SolveResult(solve_data)
                solres_list.append(solres)

            if func_is_mmsolver is True and solres.get_success() is True:
                frame = kwargs.get('frame')
                if frame is None or len(frame) == 0:
                    raise excep.NotValid
                single_frame = frame[0]

                if number_of_solves == 0:
                    collectionutils.set_initial_prediction_attributes(
                        col, attr_list, single_frame
                    )
                # Count number of solves, so we don't need to set the
                # initial prediction attributes again.
                number_of_solves += 1

                # Calculate the mean, variance values, and predict the
                # next attribute value.
                collectionutils.compute_attribute_value_prediction(
                    col, attr_list, single_frame,
                )

            # Update Progress
            interrupt = postSolve_setUpdateProgress(
                start, i, total, solres,
                prog_fn, status_fn
            )
            if interrupt is True:
                break

            # Refresh the Viewport.
            if func_is_mmsolver is True:
                frame = kwargs.get('frame')
                postSolve_refreshViewport(options, frame)
    finally:
        postSolve_setViewportState(
            options, panel_objs, panel_node_type_vis
        )
        collectionutils.run_status_func(status_fn, 'Solve Ended')
        collectionutils.run_progress_func(prog_fn, 100)
        maya.cmds.evaluationManager(
            mode=current_eval_manager_mode[0]
        )
        api_state.set_solver_running(False)
        if options.disable_viewport_two is True:
            viewport_utils.set_viewport2_active_state(vp2_state)
        maya.cmds.currentTime(
            cur_frame,
            edit=True,
            update=options.force_update
        )

    # Store output information of the solver.
    end_time = time.time()
    duration = end_time - start_time
    col._set_last_solve_timestamp(end_time)
    col._set_last_solve_duration(duration)
    col._set_last_solve_results(solres_list)
    return solres_list
