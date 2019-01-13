Search.setIndex({docnames:["commands","index","introduction","mmSolver.api","mmSolver.logger","mmSolver.tools","mmSolver.tools.cameraaim","mmSolver.tools.centertwodee","mmSolver.tools.convertmarker","mmSolver.tools.createbundle","mmSolver.tools.createmarker","mmSolver.tools.linkmarkerbundle","mmSolver.tools.loadmarker","mmSolver.tools.selection","mmSolver.tools.snaponcurve","mmSolver.tools.solver","mmSolver.tools.surfacerivet","mmSolver.ui","mmSolver.ui.base_maya_window","mmSolver.ui.converttypes","mmSolver.ui.nodes","mmSolver.ui.uimodels","mmSolver.ui.uiutils","nodes","references","solver_design","tools","tutorial"],envversion:50,filenames:["commands.rst","index.rst","introduction.rst","mmSolver.api.rst","mmSolver.logger.rst","mmSolver.tools.rst","mmSolver.tools.cameraaim.rst","mmSolver.tools.centertwodee.rst","mmSolver.tools.convertmarker.rst","mmSolver.tools.createbundle.rst","mmSolver.tools.createmarker.rst","mmSolver.tools.linkmarkerbundle.rst","mmSolver.tools.loadmarker.rst","mmSolver.tools.selection.rst","mmSolver.tools.snaponcurve.rst","mmSolver.tools.solver.rst","mmSolver.tools.surfacerivet.rst","mmSolver.ui.rst","mmSolver.ui.base_maya_window.rst","mmSolver.ui.converttypes.rst","mmSolver.ui.nodes.rst","mmSolver.ui.uimodels.rst","mmSolver.ui.uiutils.rst","nodes.rst","references.rst","solver_design.rst","tools.rst","tutorial.rst"],objects:{"mmSolver.api":{ATTR_STATE_ANIMATED:[3,0,1,""],ATTR_STATE_INVALID:[3,0,1,""],ATTR_STATE_LOCKED:[3,0,1,""],ATTR_STATE_STATIC:[3,0,1,""],AUTO_DIFF_TYPE_CENTRAL:[3,0,1,""],AUTO_DIFF_TYPE_FORWARD:[3,0,1,""],AUTO_DIFF_TYPE_LIST:[3,0,1,""],Attribute:[3,1,1,""],Bundle:[3,1,1,""],Camera:[3,1,1,""],Collection:[3,1,1,""],Frame:[3,1,1,""],Marker:[3,1,1,""],MarkerGroup:[3,1,1,""],OBJECT_TYPE_ATTRIBUTE:[3,0,1,""],OBJECT_TYPE_BUNDLE:[3,0,1,""],OBJECT_TYPE_CAMERA:[3,0,1,""],OBJECT_TYPE_COLLECTION:[3,0,1,""],OBJECT_TYPE_LIST:[3,0,1,""],OBJECT_TYPE_MARKER:[3,0,1,""],OBJECT_TYPE_MARKER_GROUP:[3,0,1,""],OBJECT_TYPE_UNKNOWN:[3,0,1,""],SOLVER_TYPE_LEVMAR:[3,0,1,""],SolveResult:[3,1,1,""],Solver:[3,1,1,""],convert_valid_maya_name:[3,3,1,""],get_as_dag_path:[3,3,1,""],get_as_object:[3,3,1,""],get_as_plug:[3,3,1,""],get_as_selection_list:[3,3,1,""],get_bundle_name:[3,3,1,""],get_data_on_node_attr:[3,3,1,""],get_long_name:[3,3,1,""],get_marker_name:[3,3,1,""],get_object_type:[3,3,1,""],get_value_on_node_attr:[3,3,1,""],load_plugin:[3,3,1,""],set_data_on_node_attr:[3,3,1,""],set_value_on_node_attr:[3,3,1,""]},"mmSolver.api.Attribute":{get_attr:[3,2,1,""],get_max_value:[3,2,1,""],get_min_value:[3,2,1,""],get_name:[3,2,1,""],get_node:[3,2,1,""],get_state:[3,2,1,""],is_animated:[3,2,1,""],is_locked:[3,2,1,""],is_static:[3,2,1,""],set_max_value:[3,2,1,""],set_min_value:[3,2,1,""]},"mmSolver.api.Bundle":{create_node:[3,2,1,""],delete_node:[3,2,1,""],get_marker_list:[3,2,1,""],get_node:[3,2,1,""],set_node:[3,2,1,""]},"mmSolver.api.Camera":{get_shape_node:[3,2,1,""],get_shape_uid:[3,2,1,""],get_transform_node:[3,2,1,""],get_transform_uid:[3,2,1,""],is_valid:[3,2,1,""],set_shape_node:[3,2,1,""],set_transform_node:[3,2,1,""]},"mmSolver.api.Collection":{add_attribute:[3,2,1,""],add_attribute_list:[3,2,1,""],add_marker:[3,2,1,""],add_marker_list:[3,2,1,""],add_solver:[3,2,1,""],add_solver_list:[3,2,1,""],clear_attribute_list:[3,2,1,""],clear_marker_list:[3,2,1,""],clear_solver_list:[3,2,1,""],create_node:[3,2,1,""],execute:[3,2,1,""],get_attribute_list:[3,2,1,""],get_attribute_list_length:[3,2,1,""],get_marker_list:[3,2,1,""],get_marker_list_length:[3,2,1,""],get_node:[3,2,1,""],get_node_uid:[3,2,1,""],get_solver_list:[3,2,1,""],get_solver_list_length:[3,2,1,""],is_valid:[3,2,1,""],remove_attribute:[3,2,1,""],remove_attribute_list:[3,2,1,""],remove_marker:[3,2,1,""],remove_marker_list:[3,2,1,""],remove_solver:[3,2,1,""],remove_solver_list:[3,2,1,""],set_attribute_list:[3,2,1,""],set_marker_list:[3,2,1,""],set_node:[3,2,1,""],set_solver_list:[3,2,1,""]},"mmSolver.api.Frame":{add_tag:[3,2,1,""],get_data:[3,2,1,""],get_number:[3,2,1,""],get_tags:[3,2,1,""],set_data:[3,2,1,""],set_number:[3,2,1,""],set_tags:[3,2,1,""]},"mmSolver.api.Marker":{create_node:[3,2,1,""],delete_node:[3,2,1,""],get_bundle:[3,2,1,""],get_camera:[3,2,1,""],get_marker_group:[3,2,1,""],get_node:[3,2,1,""],set_bundle:[3,2,1,""],set_camera:[3,2,1,""],set_marker_group:[3,2,1,""],set_node:[3,2,1,""]},"mmSolver.api.MarkerGroup":{create_node:[3,2,1,""],get_camera:[3,2,1,""],get_node:[3,2,1,""],is_valid:[3,2,1,""],set_node:[3,2,1,""]},"mmSolver.api.SolveResult":{get_error_stats:[3,2,1,""],get_final_error:[3,2,1,""],get_frame_error_list:[3,2,1,""],get_marker_error_list:[3,2,1,""],get_solver_stats:[3,2,1,""],get_success:[3,2,1,""],get_timer_stats:[3,2,1,""]},"mmSolver.api.Solver":{add_frame:[3,2,1,""],add_frame_list:[3,2,1,""],clear_frame_list:[3,2,1,""],get_attributes_use_animated:[3,2,1,""],get_attributes_use_static:[3,2,1,""],get_auto_diff_type:[3,2,1,""],get_data:[3,2,1,""],get_delta_factor:[3,2,1,""],get_enabled:[3,2,1,""],get_error_factor:[3,2,1,""],get_frame_list:[3,2,1,""],get_frame_list_length:[3,2,1,""],get_frames_use_tags:[3,2,1,""],get_gradient_error_factor:[3,2,1,""],get_max_iterations:[3,2,1,""],get_name:[3,2,1,""],get_parameter_error_factor:[3,2,1,""],get_solver_type:[3,2,1,""],get_tau_factor:[3,2,1,""],get_verbose:[3,2,1,""],remove_frame:[3,2,1,""],remove_frame_list:[3,2,1,""],set_attributes_use_animated:[3,2,1,""],set_attributes_use_static:[3,2,1,""],set_auto_diff_type:[3,2,1,""],set_data:[3,2,1,""],set_delta_factor:[3,2,1,""],set_enabled:[3,2,1,""],set_error_factor:[3,2,1,""],set_frame_list:[3,2,1,""],set_frames_use_tags:[3,2,1,""],set_gradient_error_factor:[3,2,1,""],set_max_iterations:[3,2,1,""],set_name:[3,2,1,""],set_parameter_error_factor:[3,2,1,""],set_solver_type:[3,2,1,""],set_tau_factor:[3,2,1,""],set_verbose:[3,2,1,""]},"mmSolver.logger":{get_logger:[4,3,1,""]},"mmSolver.tools":{cameraaim:[6,4,0,"-"],centertwodee:[7,4,0,"-"],convertmarker:[8,4,0,"-"],createbundle:[9,4,0,"-"],createmarker:[10,4,0,"-"],linkmarkerbundle:[11,4,0,"-"],loadmarker:[12,4,0,"-"],solver:[15,4,0,"-"]},"mmSolver.tools.loadmarker":{"interface":[12,4,0,"-"],constant:[12,4,0,"-"],formatmanager:[12,4,0,"-"],formats:[12,4,0,"-"],mayareadfile:[12,4,0,"-"]},"mmSolver.tools.loadmarker.formatmanager":{FormatManager:[12,1,1,""],get_format_manager:[12,3,1,""]},"mmSolver.tools.loadmarker.formatmanager.FormatManager":{get_formats:[12,2,1,""],register_format:[12,2,1,""]},"mmSolver.tools.loadmarker.formats":{rz2:[12,4,0,"-"],tdetxt:[12,4,0,"-"],uvtrack:[12,4,0,"-"]},"mmSolver.tools.loadmarker.formats.rz2":{LoaderRZ2:[12,1,1,""]},"mmSolver.tools.loadmarker.formats.rz2.LoaderRZ2":{args:[12,0,1,""],file_exts:[12,0,1,""],name:[12,0,1,""],parse:[12,2,1,""]},"mmSolver.tools.loadmarker.formats.tdetxt":{Loader3DETXT:[12,1,1,""]},"mmSolver.tools.loadmarker.formats.tdetxt.Loader3DETXT":{args:[12,0,1,""],file_exts:[12,0,1,""],name:[12,0,1,""],parse:[12,2,1,""]},"mmSolver.tools.loadmarker.formats.uvtrack":{LoaderUVTrack:[12,1,1,""],determine_format_version:[12,3,1,""],parse_v1:[12,3,1,""],parse_v2:[12,3,1,""]},"mmSolver.tools.loadmarker.formats.uvtrack.LoaderUVTrack":{args:[12,0,1,""],file_exts:[12,0,1,""],name:[12,0,1,""],parse:[12,2,1,""]},"mmSolver.tools.loadmarker.interface":{KeyframeData:[12,1,1,""],LoaderBase:[12,1,1,""],MarkerData:[12,1,1,""],ParserError:[12,5,1,""],ParserWarning:[12,5,1,""],float_is_equal:[12,3,1,""],get_closest_frame:[12,3,1,""]},"mmSolver.tools.loadmarker.interface.KeyframeData":{get_end_frame:[12,2,1,""],get_keyframe_values:[12,2,1,""],get_length:[12,2,1,""],get_raw_data:[12,2,1,""],get_start_frame:[12,2,1,""],get_times:[12,2,1,""],get_times_and_values:[12,2,1,""],get_value:[12,2,1,""],get_values:[12,2,1,""],set_value:[12,2,1,""],simplify_data:[12,2,1,""]},"mmSolver.tools.loadmarker.interface.LoaderBase":{args:[12,0,1,""],file_exts:[12,0,1,""],name:[12,0,1,""],parse:[12,2,1,""]},"mmSolver.tools.loadmarker.interface.MarkerData":{color:[12,0,1,""],enable:[12,0,1,""],get_color:[12,2,1,""],get_enable:[12,2,1,""],get_group_name:[12,2,1,""],get_id:[12,2,1,""],get_name:[12,2,1,""],get_weight:[12,2,1,""],get_x:[12,2,1,""],get_y:[12,2,1,""],group_name:[12,0,1,""],id:[12,0,1,""],name:[12,0,1,""],set_color:[12,2,1,""],set_enable:[12,2,1,""],set_group_name:[12,2,1,""],set_id:[12,2,1,""],set_name:[12,2,1,""],set_weight:[12,2,1,""],set_x:[12,2,1,""],set_y:[12,2,1,""],weight:[12,0,1,""],x:[12,0,1,""],y:[12,0,1,""]},"mmSolver.tools.loadmarker.mayareadfile":{create_nodes:[12,3,1,""],read:[12,3,1,""],update_nodes:[12,3,1,""]},"mmSolver.tools.selection":{filternodes:[13,4,0,"-"],tools:[13,4,0,"-"]},"mmSolver.tools.selection.convert":{get_bundles_from_markers:[13,3,1,""],get_cameras_from_markers:[13,3,1,""],get_markers_from_bundles:[13,3,1,""]},"mmSolver.tools.selection.filternodes":{get_bundle_nodes:[13,3,1,""],get_camera_nodes:[13,3,1,""],get_collection_nodes:[13,3,1,""],get_marker_group_nodes:[13,3,1,""],get_marker_nodes:[13,3,1,""],get_nodes:[13,3,1,""]},"mmSolver.tools.selection.tools":{select_both_markers_and_bundles:[13,3,1,""],swap_between_selected_markers_and_bundles:[13,3,1,""]},"mmSolver.tools.solver":{constant:[15,4,0,"-"],maya_callbacks:[15,4,0,"-"]},"mmSolver.tools.solver.lib":{attr:[15,4,0,"-"],collection:[15,4,0,"-"],marker:[15,4,0,"-"],maya_utils:[15,4,0,"-"],scene_data:[15,4,0,"-"],solver:[15,4,0,"-"],solver_step:[15,4,0,"-"],state:[15,4,0,"-"],uiquery:[15,4,0,"-"]},"mmSolver.tools.solver.lib.attr":{add_attributes_to_collection:[15,3,1,""],add_callbacks_to_attributes:[15,3,1,""],get_attributes_from_collection:[15,3,1,""],remove_attr_from_collection:[15,3,1,""],remove_callbacks_from_attributes:[15,3,1,""]},"mmSolver.tools.solver.lib.collection":{add_solver_step_to_collection:[15,3,1,""],compile_collection:[15,3,1,""],compile_solvers_from_steps:[15,3,1,""],create_collection:[15,3,1,""],create_solver_step:[15,3,1,""],delete_collection:[15,3,1,""],ensure_override_current_frame_attr_exists:[15,3,1,""],ensure_solver_steps_attr_exists:[15,3,1,""],execute_collection:[15,3,1,""],get_collections:[15,3,1,""],get_named_solver_step_from_collection:[15,3,1,""],get_override_current_frame_from_collection:[15,3,1,""],get_solver_steps_from_collection:[15,3,1,""],log_solve_results:[15,3,1,""],remove_solver_step_from_collection:[15,3,1,""],rename_collection:[15,3,1,""],select_collection:[15,3,1,""],set_named_solver_step_to_collection:[15,3,1,""],set_override_current_frame_on_collection:[15,3,1,""],set_solver_results_on_collection:[15,3,1,""],set_solver_step_list_to_collection:[15,3,1,""]},"mmSolver.tools.solver.lib.marker":{add_markers_to_collection:[15,3,1,""],get_markers_from_collection:[15,3,1,""],remove_markers_from_collection:[15,3,1,""]},"mmSolver.tools.solver.lib.maya_utils":{ensure_plugin_loaded:[15,3,1,""],get_current_frame:[15,3,1,""],get_markers_from_selection:[15,3,1,""],get_selected_maya_attributes:[15,3,1,""],get_timeline_range_inner:[15,3,1,""],get_timeline_range_outer:[15,3,1,""],prompt_for_new_node_name:[15,3,1,""],set_scene_selection:[15,3,1,""]},"mmSolver.tools.solver.lib.scene_data":{get_scene_data:[15,3,1,""],set_scene_data:[15,3,1,""]},"mmSolver.tools.solver.lib.solver":{add_solver_to_collection:[15,3,1,""],create_solver:[15,3,1,""],get_solvers_from_collection:[15,3,1,""],remove_solver_from_collection:[15,3,1,""]},"mmSolver.tools.solver.lib.solver_step":{SolverStep:[15,1,1,""]},"mmSolver.tools.solver.lib.solver_step.SolverStep":{compile:[15,2,1,""],get_data:[15,2,1,""],get_enabled:[15,2,1,""],get_frame_list:[15,2,1,""],get_name:[15,2,1,""],get_strategy:[15,2,1,""],get_use_anim_attrs:[15,2,1,""],get_use_static_attrs:[15,2,1,""],set_data:[15,2,1,""],set_enabled:[15,2,1,""],set_frame_list:[15,2,1,""],set_strategy:[15,2,1,""],set_use_anim_attrs:[15,2,1,""],set_use_static_attrs:[15,2,1,""]},"mmSolver.tools.solver.lib.state":{get_active_collection:[15,3,1,""],get_log_level:[15,3,1,""],get_refresh_viewport_state:[15,3,1,""],set_active_collection:[15,3,1,""],set_log_level:[15,3,1,""],set_refresh_viewport_state:[15,3,1,""]},"mmSolver.tools.solver.lib.uiquery":{convert_ui_nodes_to_nodes:[15,3,1,""],get_selected_ui_nodes:[15,3,1,""],get_selected_ui_table_row:[15,3,1,""],get_ui_node_from_index:[15,3,1,""]},"mmSolver.tools.solver.maya_callbacks":{CallbackManager:[15,1,1,""],add_callbacks_attribute:[15,3,1,""],add_callbacks_new_scene:[15,3,1,""],attribute_changed_func:[15,3,1,""],attribute_node_deleted_func:[15,3,1,""],attribute_node_name_changd_func:[15,3,1,""],new_scene_func:[15,3,1,""],remove_callbacks:[15,3,1,""]},"mmSolver.tools.solver.maya_callbacks.CallbackManager":{add_node_ids:[15,2,1,""],get_all_ids:[15,2,1,""],get_type_node_ids:[15,2,1,""],get_type_nodes:[15,2,1,""],get_types:[15,2,1,""],remove_type_node_ids:[15,2,1,""],type_has_node:[15,2,1,""]},"mmSolver.ui":{base_maya_window:[18,4,0,"-"],converttypes:[19,4,0,"-"],nodes:[20,4,0,"-"],uimodels:[21,4,0,"-"],uiutils:[22,4,0,"-"]},"mmSolver.ui.base_maya_window":{"delete":[18,3,1,""],BaseMayaWindow:[18,0,1,""],create:[18,3,1,""],findWidget:[18,3,1,""],getMayaMainWindow:[18,3,1,""]},"mmSolver.ui.converttypes":{booleanToCheckState:[19,3,1,""],booleanToString:[19,3,1,""],checkStateToBoolean:[19,3,1,""],intListToString:[19,3,1,""],stringToAttrFilter:[19,3,1,""],stringToBoolean:[19,3,1,""],stringToIntList:[19,3,1,""],stringToInteger:[19,3,1,""],stringToStrategy:[19,3,1,""]},"mmSolver.ui.nodes":{Node:[20,1,1,""]},"mmSolver.ui.nodes.Node":{addChild:[20,2,1,""],allTags:[20,2,1,""],allTagsStr:[20,2,1,""],checkable:[20,2,1,""],child:[20,2,1,""],childCount:[20,2,1,""],children:[20,2,1,""],childrenTags:[20,2,1,""],data:[20,2,1,""],editable:[20,2,1,""],enabled:[20,2,1,""],icon:[20,2,1,""],insertChild:[20,2,1,""],name:[20,2,1,""],neverHasChildren:[20,2,1,""],parent:[20,2,1,""],parentTags:[20,2,1,""],removeChild:[20,2,1,""],row:[20,2,1,""],selectable:[20,2,1,""],setCheckable:[20,2,1,""],setData:[20,2,1,""],setEditable:[20,2,1,""],setEnabled:[20,2,1,""],setName:[20,2,1,""],setNeverHasChildren:[20,2,1,""],setSelectable:[20,2,1,""],setStatusTip:[20,2,1,""],setToolTip:[20,2,1,""],statusTip:[20,2,1,""],toolTip:[20,2,1,""]},"mmSolver.ui.uimodels":{ComboBoxDelegate:[21,0,1,""],ItemModel:[21,0,1,""],StringDataListModel:[21,0,1,""],TableModel:[21,0,1,""],getNameFromDict:[21,3,1,""]},"mmSolver.ui.uiutils":{QtInfoMixin:[22,1,1,""],getBaseWindow:[22,3,1,""],getFont:[22,3,1,""],getHostApplication:[22,3,1,""],getIcon:[22,3,1,""],getMayaMainWindow:[22,3,1,""],getParent:[22,3,1,""],isValidQtObject:[22,3,1,""],setWindowWidthHeight:[22,3,1,""]},"mmSolver.ui.uiutils.QtInfoMixin":{qtAboveVersion:[22,2,1,""],qtEqualOrAbove_4_6_X:[22,2,1,""],qtEqualOrAbove_4_7_X:[22,2,1,""],qtEqualOrAbove_4_8_X:[22,2,1,""],qtEqual_4_X_X:[22,2,1,""],qtEqual_5_X_X:[22,2,1,""],qtInitVersion:[22,2,1,""]},mmSolver:{logger:[4,4,0,"-"],tools:[5,4,0,"-"],ui:[17,4,0,"-"]}},objnames:{"0":["py","attribute","Python attribute"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","module","Python module"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:attribute","1":"py:class","2":"py:method","3":"py:function","4":"py:module","5":"py:exception"},terms:{"3dequal":[12,26],"3rd":25,"abstract":5,"boolean":19,"case":3,"class":[3,12,15,18,20,22],"default":[0,3,18,26],"export":12,"final":[3,21,25],"float":[3,12,15,25],"function":[3,13,15,19],"import":[3,4,12,18,25,26],"int":[0,3,12],"long":0,"new":[3,12,15],"return":[3,4,12,13,15,20,21,25],"static":[12,26],"super":18,"true":[0,3,12,18,20,25,26],"try":[3,25],"while":[25,26],But:25,For:[21,25,26],Ids:15,One:[3,15,25],The:[0,3,5,12,13,15,18,21,23,24,25,26],There:[3,12,15,25,26],These:3,UIs:17,Use:26,Used:23,Using:[18,25],With:26,Yes:23,__init__:[12,18],abl:[20,25],about:12,abov:[20,26],accept:[0,25],access:12,accur:25,achiev:25,across:25,activ:[15,26],add:[3,15,25,26],add_attribut:3,add_attribute_list:3,add_attributes_to_collect:15,add_callbacks_attribut:15,add_callbacks_new_scen:15,add_callbacks_to_attribut:15,add_fram:3,add_frame_list:3,add_mark:3,add_marker_list:3,add_markers_to_collect:15,add_node_id:15,add_solv:3,add_solver_list:3,add_solver_step_to_collect:15,add_solver_to_collect:15,add_tag:3,addchild:20,added:[3,25],adding:[3,15],adher:26,adjust:[1,24,25],adt:0,advanc:5,affect:25,after:15,aim:[1,6],aim_at_camera:26,algorithm:[3,25],alia:3,all:[0,1,3,12,13,15,18,20,23,25],allow:[25,26],alltag:20,alltagsstr:20,alreadi:[15,26],also:[25,26],alwai:[3,26],ani:[3,15,23,25,26],anim:[12,26],anoth:25,answer:25,apertur:23,api:1,appli:[18,23,25],applic:[22,25],applybtn:18,applymatrix:23,approach:25,approxim:25,arbitrari:3,arg:[12,18],argument:[3,12],around:3,artist:25,ascii:12,ask:1,aspect:26,assert:0,associ:15,assum:[3,25],attach:[3,13,15,26],attempt:[25,26],attr:[0,3],attr_list:[3,15],attr_nam:3,attr_state_anim:3,attr_state_invalid:3,attr_state_lock:3,attr_state_stat:3,attr_ti:3,attr_tx:3,attribut:[0,1,13,23],attribute_changed_func:15,attribute_node_deleted_func:15,attribute_node_name_changd_func:15,attributemessag:15,auto:[0,3,25],auto_add_num:3,auto_add_num_pad:3,auto_diff_type_centr:3,auto_diff_type_forward:3,auto_diff_type_list:3,auto_inc:3,auto_inc_try_limit:3,autodesk:1,autodifftyp:0,automat:[3,12,26],avail:26,axes:25,back:[15,23],backward:25,bad:4,badli:25,base:[3,12,18,22,25,26],base_maya_window:[1,17],baselin:25,basemayawindow:18,basic:[5,20],becaus:25,becom:26,been:[15,25],befor:[15,25],begin:25,believ:25,belong:15,below:[3,20,23,25,26],best:25,better:25,between:[13,19,25],bnd:3,book:1,bool:[0,3,12],booleantocheckst:19,booleantostr:19,both:[0,12,26],bound:3,box:26,brows:26,brute:25,bundl:[0,1,9,11,13,15,24],bundle1:[0,3],bundle2:0,bundle_shp:3,bundle_tfm:3,button:26,calcul:25,call:[15,25,26],callback:5,callback_id:15,callback_manag:15,callback_msg:15,callback_typ:15,callbackmanag:15,cam:[3,12],cam_shp:[0,3],cam_tfm:[0,3],camera1:0,camera:[0,1,6,7,8,10,13,23,25],cameraaim:[1,5,26],cameraaim_tool:26,cameraapertur:23,camerascal:23,camerashape1:0,cameraworldmatrix:23,can:[0,3,12,15,20,23,25,26],cannot:[3,12,25,26],canon:3,care:4,categori:13,categoris:13,caus:13,center:[1,23],center_two_de:26,centertwode:[1,5,26],centertwodee_tool:26,central:[0,25],chang:[0,3,15,25,26],charact:3,check:[3,12,15,20,25,26],checkabl:20,checkstatetoboolean:19,child:20,childcount:20,children:20,childrentag:20,choic:25,class_obj:12,clear_attribute_list:3,clear_frame_list:3,clear_marker_list:3,clear_solver_list:3,click:[18,25],clientdata:15,clip:23,clipboard:26,close:[15,26],closest:12,clstyp:18,cmd:[0,3],cmd_data:3,col:[3,15],collect:[1,13],color:12,column:21,combin:25,comboboxdeleg:21,come:25,command:[1,3,26],common:[13,26],commonli:25,compil:[3,15],compile_collect:15,compile_solvers_from_step:15,complic:25,comput:[3,23,24,25],concept:1,concern:25,condit:[12,25],configur:3,connect:[3,13,18,23,26],consid:25,constant:[1,5,12],contain:[3,12,13,22,25,26],content:26,continu:12,control:[21,25,26],convent:3,converg:25,convers:[3,19],convert:[1,3,5,7,8,12,19],convert_to_mark:26,convert_ui_nodes_to_nod:15,convert_valid_maya_nam:3,convertmark:[1,5,26],convertmarker_tool:26,converttyp:[1,17],coord:12,coordin:[12,23],copi:26,core:0,corner:23,correct:25,could:25,count:26,creat:[1,3,4,9,10,12,15,18,25],create_bundl:26,create_collect:15,create_mark:26,create_nod:[3,12],create_solv:15,create_solver_step:15,createbundl:[1,5,26],createbundle_tool:26,createmark:[1,5,26],createmarker_tool:26,createnod:[0,3],creation:15,current:[0,13,15,20,26],curv:26,custom:[12,15,23],customis:25,dag:[3,25],damp:[0,25],data:[0,3,12,20,21,25],decent:25,decod:12,decreas:25,def:18,defin:[3,13,17,20,23,26],degre:25,delet:[15,18],delete_collect:15,delete_nod:3,delta:[0,25],depend:[3,12,25],depth:23,depthscal:23,deriv:12,describ:[3,25],descript:[0,3,23],design:[1,21,24,26],desir:25,detail:[1,3,25],detect:25,determin:3,determine_format_vers:12,dict:[3,12,13],dictionari:[12,13],did:3,differ:[3,25],differenc:[0,25],direct:25,directli:25,disconnect:3,discov:25,displai:[15,23,26],distanc:25,document:[1,3,23,25],doe:[1,3,15,22,23],doesn:[12,25],dof:25,don:25,done:3,doubl:0,down:23,downward:26,due:25,dure:3,dynam:26,each:[0,12,13,15,25,26],edit:20,effect:23,either:[25,26],enabl:[3,12,20,25],end:12,engin:0,english:26,enough:25,ensure_override_current_frame_attr_exist:15,ensure_plugin_load:15,ensure_solver_steps_attr_exist:15,enter:26,entir:15,enumer:3,environ:25,epsilon1:0,epsilon2:0,epsilon3:0,epsilon:25,equal:[21,25],error:[0,3,4,12,13,15,25],especi:25,estim:25,etc:[15,25,26],evalu:[25,26],even:25,event:[4,15],everyon:4,exampl:[1,4,21,25,26],except:[3,12],execut:[3,15,25],execute_collect:15,exist:[3,15],expect:[3,12,13,15,23],extend:25,extens:12,fact:25,factor:[0,25],fail:3,fals:[0,3,15,20,26],far:23,farclipplan:23,fast:25,faster:25,fastest:26,featur:[3,25],feed:23,field:26,file:[12,15,26],file_ext:12,file_path:12,film:[23,25],filmfit:23,filmoffset:23,filter:[5,25,26],filter_model:15,filternod:13,find:[3,12,15,25],findwidget:18,first:[3,12,15,26],fit:23,flag:3,float_is_equ:12,focal:23,focallength:23,follow:13,forc:[3,15,25,26],form:25,format:[3,5,26],formatmanag:12,forward:[0,25],fov:25,frame:[0,1,12,15,25],freedom:25,frequent:1,frm:3,frm_list:3,from:[0,1,3,10,12,15,18,21,24,25],front:26,frustum:23,full:[3,15],full_path:3,fwd:26,gauss:25,gener:[1,15,24],geometr:24,geometri:24,get:[3,12,13,15,20,21,25],get_active_collect:15,get_all_id:15,get_as_dag_path:3,get_as_object:3,get_as_plug:3,get_as_selection_list:3,get_attr:3,get_attribute_list:3,get_attribute_list_length:3,get_attributes_from_collect:15,get_attributes_use_anim:3,get_attributes_use_stat:3,get_auto_diff_typ:3,get_bundl:3,get_bundle_nam:3,get_bundle_nod:13,get_bundles_from_mark:13,get_camera:3,get_camera_nod:13,get_cameras_from_mark:13,get_closest_fram:12,get_collect:15,get_collection_nod:13,get_color:12,get_current_fram:15,get_data:[3,15],get_data_on_node_attr:3,get_delta_factor:3,get_en:[3,12,15],get_end_fram:12,get_error:3,get_error_factor:3,get_error_stat:3,get_final_error:3,get_format:12,get_format_manag:12,get_frame_error_list:3,get_frame_list:[3,15],get_frame_list_length:3,get_frames_use_tag:3,get_gradient_error_factor:3,get_group_nam:12,get_i:12,get_id:12,get_keyframe_valu:12,get_length:12,get_log_level:15,get_logg:4,get_long_nam:3,get_marker_error_list:3,get_marker_group:3,get_marker_group_nod:13,get_marker_list:3,get_marker_list_length:3,get_marker_nam:3,get_marker_nod:13,get_markers_from_bundl:13,get_markers_from_collect:15,get_markers_from_select:15,get_max_iter:3,get_max_valu:3,get_min_valu:3,get_nam:[3,12,15],get_named_solver_step_from_collect:15,get_nod:[3,13],get_node_uid:3,get_numb:3,get_object_typ:3,get_override_current_frame_from_collect:15,get_parameter_error_factor:3,get_raw_data:12,get_refresh_viewport_st:15,get_scene_data:15,get_selected_maya_attribut:15,get_selected_ui_nod:15,get_selected_ui_table_row:15,get_shape_nod:3,get_shape_uid:3,get_solver_list:3,get_solver_list_length:3,get_solver_stat:3,get_solver_steps_from_collect:15,get_solver_typ:3,get_solvers_from_collect:15,get_start_fram:12,get_stat:3,get_strategi:15,get_success:3,get_tag:3,get_tau_factor:3,get_tim:12,get_timeline_range_inn:15,get_timeline_range_out:15,get_timer_stat:3,get_times_and_valu:12,get_transform_nod:3,get_transform_uid:3,get_typ:15,get_type_nod:15,get_type_node_id:15,get_ui_node_from_index:15,get_use_anim_attr:15,get_use_static_attr:15,get_valu:12,get_value_on_node_attr:3,get_verbos:3,get_weight:12,get_x:12,getbasewindow:22,getfont:22,gethostappl:22,geticon:22,getmayamainwindow:[18,22],getnamefromdict:21,getpar:22,github:1,give:[3,12,25],given:[3,12,15,26],global:26,goe:25,going:26,good:25,gradient:[0,25],greater:25,group:[3,23],group_nam:12,guarante:15,guess:[0,25],had:25,half:12,handl:15,happen:[3,4,15],has:[0,4,12,15,25],have:[3,25,26],height:[12,23,26],heigth:23,hello:4,help:[13,23,26],here:[0,3,17,24],hierarch:25,hierarchi:[3,25],high:25,hit:26,hold:15,horizontalfilmapertur:23,horizontalfilmoffset:23,how:[1,3,23,26],hundr:25,icon:20,ideal:25,identifi:3,ids:15,idx:15,imag:[23,25],image_height:12,image_width:12,imageheight:23,imagewidth:23,implicitli:3,inch:23,includ:25,increas:25,increment:[3,25],independ:26,index:[1,21],indirectli:25,individu:[12,25,26],info:4,inform:[0,3,15,25],inher:25,inherit:12,initi:[0,25],initialis:25,input:[3,23,25,26],ins:12,insertchild:20,insid:[3,15,18,23,25],inspir:24,instead:[25,26],integ:[12,19,25],intend:[23,25,26],interfac:[3,5,12,22],intern:[0,12],interpret:3,intlisttostr:19,introduct:1,invalid:3,invers:23,is_anim:3,is_lock:3,is_stat:3,is_undistort:12,is_valid:3,isvalidqtobject:22,itemmodel:21,iter:[0,25],job:25,json:12,just:[12,15,25],kei:[12,15,21],keyfram:12,keyframedata:12,keyword:12,known:25,kwarg:[12,18],larg:25,larger:25,last:[20,25],layer:25,lead:25,least:[24,25],left:[12,23,26],length:[12,15,23],letter:3,level:[4,25],levmar:[0,25],lib:15,librari:5,light:25,like:[12,25,26],likewis:25,limit:25,linear:24,link:[1,3,11,15,25],link_marker_bundl:26,link_mb_tool:26,linkmarkerbundl:[1,5,26],list:[0,3,12,13,15,19,20,24,26],load:[1,3,12,15],load_plugin:3,loader3detxt:12,loader:12,loaderbas:12,loaderrz2:12,loaderuvtrack:12,loadmark:[1,5,26],loadmarker_window:26,locat:3,lock:[25,26],log:[4,15],log_level:15,log_solve_result:15,logger:[1,15],logic:15,long_nam:3,longer:25,look:[12,21,25,26],lookup_dict:21,loop:[25,26],low:25,lower:[12,23],made:15,magnitud:25,mai:[3,15,25,26],main:26,maintain:15,major:22,make:[15,25],manag:[12,15],mani:[3,15,25],manipul:[3,13,15,26],manual:26,map:[21,23],marker1:[0,3],marker2:0,marker:[0,1,7,8,10,11,12,13,23],marker_nod:3,marker_shp:3,marker_tfm:3,markerdata:12,markergroup1:3,markergroup:[1,13],match:[12,25],matchmov:[12,25],matrix:23,max:0,maximum:[0,25],maya:[0,3,5,7,8,12,13,18,23,25,26],maya_callback:15,maya_util:15,mayabasewindow:18,mayareadfil:12,mcallbackid:15,mdagpath:3,mean:25,measur:25,mel:0,member:15,merg:25,messag:15,met:25,method:[12,24,26],min:0,minimis:25,minimum:25,minor:22,mixtur:25,mkr:3,mkr_data_list:12,mkr_grp:[3,12],mkr_list:[3,12,15],mmapi:3,mmmarkergrouptransform:[1,3],mmmarkerscal:1,mmreproject:1,mmsolver:[23,26],mmtestcameramatrix:1,mnodemessag:15,mobject:[3,15],model:[15,20,21],modifi:[3,25],modul:[1,12,13,18],more:[0,25],most:26,motion:24,move:25,movement:25,mplug:[3,15],mselectionlist:3,much:25,multipl:[12,24,25,26],multipli:23,must:[3,12,15,23,25],mysolvecollect:3,mytool:18,mytoollayout:18,mytoolwindow:18,name:[0,3,12,15,18,20,21,22,23,25,26],name_0001:3,name_001:3,name_002:3,name_01:3,name_02:3,names_dict:21,natur:25,nearclipplan:23,necessari:25,need:[3,12,15,25,26],network:[3,25],never:[3,25,26],neverhaschildren:20,new_nam:15,new_scene_func:15,newli:[3,4],newton:25,next:3,node:[0,1,3,5,9,17,25,26],node_attr:3,node_nam:3,node_path:15,node_str:3,node_uuid:15,non:[3,12,24],none:[0,3,4,12,15,18,20,22],normal:[23,25],note:[3,12],noth:[3,15],now:25,num_point:12,number:[0,3,12,23,25,26],numer:3,obj:22,obj_ui:15,object:[1,4,6,12,13,22,23,25],object_type_:3,object_type_attribut:3,object_type_bundl:3,object_type_camera:3,object_type_collect:3,object_type_list:3,object_type_mark:3,object_type_marker_group:3,object_type_unknown:3,obtain:25,occur:3,offset:23,old:3,onc:[25,26],one:[12,15,25,26],onli:[0,3,15,20,25,26],onto:3,open:26,open_window:26,openmaya:[3,15],oper:15,opposit:26,optim:24,optimis:[20,25],option:[3,26],order:[15,26],origin:26,other:[13,25,26],otherwis:25,out:[12,25],outcameraprojectionmatrix:23,outcoord:23,outcoordi:23,outcoordx:23,outhorizontalpan:23,outinsidefrustum:23,outinversecameraprojectionmatrix:23,outlier:25,outmatrix:23,outnormcoord:23,outnormcoordi:23,outnormcoordx:23,outpan:23,outpix:23,outpixel:23,outpixelx:23,outpoint:23,outpointi:23,outpointx:23,outpointz:23,output:[3,23],outscal:23,outscalei:23,outscalex:23,outscalez:23,outtransl:23,outtranslatei:23,outtranslatex:23,outtranslatez:23,outverticalpan:23,outworldcameraprojectionmatrix:23,outworldinversecameraprojectionmatrix:23,outworldmatrix:23,outworldpoint:23,outworldpointi:23,outworldpointx:23,outworldpointz:23,over:[3,26],overrid:[12,15,23,26],override_current_fram:15,overridescreeni:23,overridescreenx:23,overridescreenz:23,overview:[1,25],overwritten:26,packag:[4,13,24],pad:3,page:1,pair:26,pan:[23,25],paper:1,paramet:[0,3,4,12,13,15,21,25],parent:[0,3,18,20,23,26],parenttag:20,pars:12,parse_v1:12,parse_v2:12,parser:12,parsererror:12,parserwarn:12,pass:3,past:26,patch:22,path:[3,12,15,22,26],pattern:25,per:[25,26],per_fram:12,perfectli:25,perform:[0,15,25,26],persp:26,perspect:[3,25],photogrammetri:25,pixel:23,place:[25,26],plain:3,plane:23,plug:[1,3,12,15],pluga:15,plugb:15,plugin:3,point:[3,12,23,25,26],pointer:[15,22],poor:25,pos:12,posit:[12,20,23,25],possibl:[3,25],power:25,practic:[0,25],pre:13,predict:25,prefix:3,prefix_002:3,press:26,prevnam:15,primari:[0,3,25],print:[0,3,18],problem:[24,25],process:[1,26],produc:25,product:25,prog_fn:[3,15],project:[1,3,15,17,23,25],prompt_for_new_node_nam:15,provid:[12,13,25],purpos:25,python:[0,1,3,22,26],qtabovevers:22,qtequal_4_x_x:22,qtequal_5_x_x:22,qtequalorabove_4_6_x:22,qtequalorabove_4_7_x:22,qtequalorabove_4_8_x:22,qtinfomixin:22,qtinitvers:22,qualiti:25,queri:[3,12,26],queryi:3,question:1,qwidget:18,rais:[3,12],rang:[19,26],rather:25,ratio:25,raw:3,read:12,readi:15,real:3,recommend:26,reduc:25,refer:[15,21,22,25],referenc:3,refin:25,refresh:[3,15,26],regist:12,register_format:12,registr:15,rel:15,relat:[1,13,15],relev:15,reload:18,rememb:25,remov:[3,15],remove_attr_from_collect:15,remove_attribut:3,remove_attribute_list:3,remove_callback:15,remove_callbacks_from_attribut:15,remove_fram:3,remove_frame_list:3,remove_mark:3,remove_marker_list:3,remove_markers_from_collect:15,remove_solv:3,remove_solver_from_collect:15,remove_solver_list:3,remove_solver_step_from_collect:15,remove_type_node_id:15,removechild:20,renam:15,rename_collect:15,render:23,repeat:25,repres:[3,15,25],represent:[25,26],requir:[25,26],resolut:[12,26],result:[0,3,15,25],revisit:24,rig:25,right:[12,23],root:25,rotat:25,roughli:25,row:20,rtype:3,rule:[25,26],run:[0,3,15,18,25,26],runtimeerror:3,rz2:[12,26],safe:25,sai:25,same:[12,25,26],save:15,sba:24,scale:[23,26],scene:[25,26],scene_data:15,scratch:[3,10,25],screen:[3,23,25,26],screeni:23,screenx:23,screenz:23,script:26,search:1,second:[12,15,21],secondari:3,section:26,see:25,select:[1,3,5,15,20],select_both_markers_and_bundl:[13,26],select_collect:15,selection_tool:26,self:18,sensit:25,sensor:25,sequenc:25,sequenti:26,set:[3,4,12,15,20,25,26],set_active_collect:15,set_attribute_list:3,set_attributes_use_anim:3,set_attributes_use_stat:3,set_auto_diff_typ:3,set_bundl:3,set_camera:3,set_color:12,set_data:[3,15],set_data_on_node_attr:3,set_delta_factor:3,set_en:[3,12,15],set_error_factor:3,set_frame_list:[3,15],set_frames_use_tag:3,set_gradient_error_factor:3,set_group_nam:12,set_i:12,set_id:12,set_log_level:15,set_marker_group:3,set_marker_list:3,set_max_iter:3,set_max_valu:3,set_min_valu:3,set_nam:[3,12],set_named_solver_step_to_collect:15,set_nod:3,set_numb:3,set_override_current_frame_on_collect:15,set_parameter_error_factor:3,set_refresh_viewport_st:15,set_scene_data:15,set_scene_select:15,set_shape_nod:3,set_solv:3,set_solver_list:3,set_solver_results_on_collect:15,set_solver_step_list_to_collect:15,set_solver_typ:3,set_strategi:15,set_tag:3,set_tau_factor:3,set_transform_nod:3,set_use_anim_attr:15,set_use_static_attr:15,set_valu:12,set_value_on_node_attr:3,set_verbos:3,set_weight:12,set_x:12,setattr:3,setcheck:20,setdata:20,setedit:20,seten:20,setnam:20,setneverhaschildren:20,setselect:20,setstatustip:20,settooltip:20,setupui:18,setwindowtitl:18,setwindowwidthheight:22,shape:[0,3,12],should:[3,12,15,18,25,26],show:[18,26],shown:26,similar:25,simpl:[12,25],simplify_data:12,sinc:25,singl:[12,25],slower:25,slowest:25,small:25,smart:15,snaponcurv:[1,5],softwar:[24,25],sol:[3,15],sol_list:3,solres_list:15,solut:25,solv:[0,1,3,15,23,26],solver:[0,5,13,24],solver_step:15,solver_type_levmar:3,solver_window:15,solveresult:[1,15],solverresult:3,solverstep:15,solvertyp:0,solverwindow:15,some:[4,15,25],sort:13,sound:25,space:[3,23,25,26],spars:24,specif:[0,13,21,25],specifi:0,squar:[24,25],start:25,state:26,status_fn:[3,15],statustip:20,steepest:25,step:25,step_list:15,still:25,stop:25,store:[0,3,12,15,26],str:[3,4,12,13,15,20,21],string:[0,3,12,19,26],stringdatalistmodel:21,stringtoattrfilt:19,stringtoboolean:19,stringtointeg:19,stringtointlist:19,stringtostrategi:19,structur:[0,3,12,15,21,24],sub:[18,25],sublayout:18,subtract:25,succe:26,success:3,suffix:3,support:[13,26],sure:20,surfacerivet:[1,5],swap_between_selected_markers_and_bundl:[13,26],tabl:0,tablemodel:21,tag:3,take:[12,25],task:1,tau:25,taufactor:0,tdetxt:12,temporari:26,temporarili:26,test:0,text:[15,26],than:25,thei:[0,3,25],them:[13,25],therefor:25,thi:[0,1,3,12,13,15,20,23,24,25,26],thing:[4,25],thirdparti:12,though:[7,8,25,26],thousand:25,three:25,through:25,thumb:25,tilt:25,time:[3,12,15,26],titl:15,togeth:[25,26],toggl:[1,13],too:25,tool:[1,18],tooltip:20,top:26,total_tim:15,toward:26,track:[12,25],trackpoint:12,tradit:25,tradition:25,transform:[0,3,7,8,23,25,26],transformworldmatrix:23,translat:[23,25],tree:20,tree_view:15,tri:[12,25],trigger:15,true_word:19,tupl:15,tutori:1,two:[12,25,26],txt:[12,26],type:[0,3,13,15,19,21,25,26],type_has_nod:15,ui_mytool:18,ui_nod:15,ui_widget:18,uimodel:[1,17],uiqueri:15,uiutil:[1,17],unchang:15,under:[3,26],underli:[3,12,25],underneath:[3,23],understand:25,unfortun:26,unicod:3,unifi:4,uniqu:[3,15],unknown:[3,25],unlink:[1,3,11],unlink_marker_bundl:26,unsign:0,until:[3,25],unus:26,updat:[12,26],update_func:15,update_nod:12,upper:12,usag:[4,18],use:[0,3,25,26],used:[0,3,12,15,20,21,23,25,26],user:[0,3,5,12,22,25,26],uses:[23,25],using:[3,12,15,19,21,25],util:[1,22,26],utilis:25,uuid:3,uv_track_format_version_list:12,uvtrack:12,valid:[3,15,22],valu:[0,3,12,15,19,20,23,26],variabl:3,variou:[12,13,19,25],verbos:[0,3],veri:25,vers:25,versa:[13,26],version:12,vertex:25,verticalfilmapertr:23,verticalfilmapertur:23,verticalfilmoffset:23,vice:[13,26],view:[3,7,8,21,24,25,26],viewport:26,vision:24,wai:[15,25],warn:[4,12],weight:12,welcom:1,were:24,what:[3,25],whatev:0,when:[3,12,15,25,26],where:25,which:[3,25],why:25,width:[12,23,26],widthheight:22,window:18,wish:0,with_bundl:12,without:[15,26],won:26,word:[25,26],work:[1,12],workflow:[23,26],world:[3,4,23,25],would:[25,26],wrapper:3,written:[2,25,27],yes:26,yet:26,you:[25,26],zero:25},titles:["Commands","mmSolver - Maya MatchMove Solver","Introduction","mmSolver.api","mmSolver.logger","mmSolver.tools","mmSolver.tools.cameraaim","mmSolver.tools.centertwodee","mmSolver.tools.convertmarker","mmSolver.tools.createbundle","mmSolver.tools.createmarker","mmSolver.tools.linkmarkerbundle","mmSolver.tools.loadmarker","mmSolver.tools.selection","mmSolver.tools.snaponcurve","mmSolver.tools.solver","mmSolver.tools.surfacerivet","mmSolver.ui","mmSolver.ui.base_maya_window","mmSolver.ui.converttypes","mmSolver.ui.nodes","mmSolver.ui.uimodels","mmSolver.ui.uiutils","Nodes","Related Books and Papers","Solver Design","Tools","Tutorial"],titleterms:{"abstract":15,"return":0,"static":25,advanc:12,aim:26,all:26,anim:25,api:3,ask:25,attr:15,attribut:[3,15,25,26],base_maya_window:18,basic:12,book:24,bound:25,bundl:[3,25,26],callback:15,camera:[3,26],cameraaim:6,center:26,centertwode:7,collect:[3,15],command:0,concept:25,constant:[3,15],constraint:25,convert:[13,15,26],convertmark:8,converttyp:19,creat:26,createbundl:9,createmark:10,curv:25,data:15,design:25,doe:25,enabl:26,exampl:[0,3],filter:13,flag:0,format:12,frame:[3,26],frequent:25,from:26,gener:25,how:25,indic:1,interfac:15,introduct:2,layout:15,librari:15,line:25,link:26,linkmarkerbundl:11,load:26,loadmark:12,logger:4,lower:25,marker:[3,15,25,26],markergroup:3,matchmov:1,maya:[1,15],mmmarkergrouptransform:23,mmmarkerscal:23,mmreproject:23,mmsolver:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],mmtestcameramatrix:0,node:[13,15,20,23],object:[3,15,26],option:25,over:25,overview:3,paper:24,parameter:25,plane:25,process:25,queri:15,question:25,relat:24,scene:15,script:1,select:[13,26],snaponcurv:14,solv:25,solver:[1,3,15,25,26],solveresult:3,state:15,step:[15,26],strategi:[25,26],surfacerivet:16,tabl:1,time:25,toggl:26,tool:[5,6,7,8,9,10,11,12,13,14,15,16,26],topic:1,tutori:27,uimodel:21,uiutil:22,unlink:26,upper:25,user:15,util:[3,15],valu:25,window:15,work:25}})