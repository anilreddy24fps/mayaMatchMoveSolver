# -*- mode: python-mode; python-indent-offset: 4 -*-
#
# Copyright (C) 2018, 2019, 2020 David Cattermole.
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
# ----------------------------------------------------------------------
#
# 3DE4.script.name:     Copy 2D Tracks (MM Solver)
#
# 3DE4.script.version:  v1.7
#
# 3DE4.script.gui:      Object Browser::Context Menu Point
# 3DE4.script.gui:      Object Browser::Context Menu Points
# 3DE4.script.gui:      Object Browser::Context Menu PGroup
#
# 3DE4.script.comment:  Copies the selected 2D track points to a temporary
# 3DE4.script.comment:  file and puts the file path on the Operating
# 3DE4.script.comment:  System's clipboard.
# 3DE4.script.comment:
# 3DE4.script.comment:  The 2D Tracks are stored distorted and undistorted.
# 3DE4.script.comment:
# 3DE4.script.comment:  To use the file with MM Solver in Maya, open the
# 3DE4.script.comment:  Load Markers UI in Maya, the UI will
# 3DE4.script.comment:  automatically read the Operating System's
# 3DE4.script.comment:  clipboard and add it into the file path field.
# 3DE4.script.comment:
# 3DE4.script.comment:  All 2D Tracks are resolution independent.
# 3DE4.script.comment:
# 3DE4.script.comment:  Files created with this tool will only work with
# 3DE4.script.comment:  MM Solver v0.3.1+.
#


import tempfile
import tde4
import uvtrack_format


TITLE = 'Copy 2D Tracks to MM Solver...'
EXT = '.uv'


def main():
    camera = tde4.getCurrentCamera()
    point_group = tde4.getCurrentPGroup()
    if camera is None or point_group is None:
        msg = 'There is no current Point Group or Camera.'
        tde4.postQuestionRequester(TITLE, msg, 'Ok')
        return

    # check if context menu has been used, and retrieve point...
    point = tde4.getContextMenuObject()
    if point is not None:
        # retrieve point's parent pgroup (not necessarily being the current one!)...
        point_group = tde4.getContextMenuParentObject()
        points = tde4.getPointList(point_group, 1)
    else:
        # otherwise use regular selection...
        points = tde4.getPointList(point_group, 1)
    if len(points) == 0:
        msg = 'There are no selected points.'
        tde4.postQuestionRequester(TITLE, msg, 'Ok')
        return

    # Generate file contents
    start_frame = 1
    # Backwards compatibility with 3DE4 Release 2.
    if uvtrack_format.SUPPORT_CAMERA_FRAME_OFFSET is True:
        start_frame = tde4.getCameraFrameOffset(camera)
    data_str = uvtrack_format.generate(
        point_group, camera, points,
        start_frame=start_frame,
        fmt=uvtrack_format.UV_TRACK_FORMAT_VERSION_PREFERRED
    )

    # Write file.
    file_ext = EXT
    f = tempfile.NamedTemporaryFile(
        mode='w+b',
        bufsize=-1,
        suffix=file_ext,
        delete=False
    )
    if f.closed:
        msg = "Error: Couldn't open file.\n%r"
        msg = msg % f.name
        tde4.postQuestionRequester(TITLE, msg, 'Ok')
        return
    f.write(data_str)
    f.close()

    # Override the user's clipboard with the temporary file path.
    if uvtrack_format.SUPPORT_CLIPBOARD is True:
        tde4.setClipboardString(f.name)
    else:
        # Cannot set the clipboard, so we'll print to the Python Console
        # and the user can copy it. Pretty bad workaround.
        print f.name
    return


if __name__ == '__main__':
    main()
