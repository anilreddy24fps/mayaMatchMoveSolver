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
Tests printing statistics from the 'mmSolver' command using the
'printStatistics' flag.
"""

import unittest

try:
    import maya.standalone
    maya.standalone.initialize()
except RuntimeError:
    pass
import maya.cmds


import test.test_solver.solverutils as solverUtils


# @unittest.skip
class TestSolverDeviationCalculation(solverUtils.SolverTestCase):

    def do_solve(self, solver_name, solver_index):
        if self.haveSolverType(name=solver_name) is False:
            msg = '%r solver is not available!' % solver_name
            raise unittest.SkipTest(msg)

        # Open the Maya file
        file_name = 'solverDeviationCalculation.ma'
        path = self.get_data_path('scenes', file_name)
        maya.cmds.file(path, open=True, force=True, ignoreVersion=True)

        mkr_topRight = 'topRight_01_MKR'
        bnd_topRight = 'topRight_01_BND'
        mkr_middleLeft = 'middleLeft_01_MKR'
        bnd_middleLeft = 'middleLeft_01_BND'
        mkr_middleTop = 'middleTop_01_MKR'
        bnd_middleTop = 'middleTop_01_BND'
        mkr_topLeft = 'topLeft_01_MKR'
        bnd_topLeft = 'topLeft_01_BND'
        cam_tfm = '|camera1'
        cam_shp = '|camera1|cameraShape1'
        image_width = 2048.0
        image_height = 2048.0 / 1.777777777

        mkr_topRight_values = maya.cmds.mmReprojection(
            mkr_topRight,
            camera=(cam_tfm, cam_shp),
            time=(1001.0),
            imageResolution=(image_width, image_height),
            asPixelCoordinate=True,
        )
        mkr_topLeft_values = maya.cmds.mmReprojection(
            mkr_topLeft,
            camera=(cam_tfm, cam_shp),
            time=(1001.0),
            imageResolution=(image_width, image_height),
            asPixelCoordinate=True,
        )
        mkr_middleTop_values = maya.cmds.mmReprojection(
            mkr_middleTop,
            camera=(cam_tfm, cam_shp),
            time=(1001.0),
            imageResolution=(image_width, image_height),
            asPixelCoordinate=True,
        )
        mkr_middleLeft_values = maya.cmds.mmReprojection(
            mkr_middleLeft,
            camera=(cam_tfm, cam_shp),
            time=(1001.0),
            imageResolution=(image_width, image_height),
            asPixelCoordinate=True,
        )

        cameras = (
            (cam_tfm, cam_shp),
        )
        markers = (
            (mkr_topRight, cam_shp, bnd_topRight),
            (mkr_middleLeft, cam_shp, bnd_middleLeft),
            (mkr_topLeft, cam_shp, bnd_topLeft),
            (mkr_middleTop, cam_shp, bnd_middleTop),
        )
        node_attrs = []
        frames = [
            (1),
        ]

        # Print Statistics
        result = maya.cmds.mmSolver(
            camera=cameras,
            marker=markers,
            attr=node_attrs,
            solverType=solver_index,
            frame=frames,
            printStatistics=('deviation', 'inputs'),
        )
        num_params = result[0]
        num_errors = result[1]
        print('result:', result)
        self.assertEqual(num_params, 'numberOfParameters=0')
        self.assertEqual(num_errors, 'numberOfErrors=8')
        print('mkr_topRight_values:', mkr_topRight_values)
        print('mkr_topLeft_values:', mkr_topLeft_values)
        print('mkr_middleTop_values:', mkr_middleTop_values)
        print('mkr_middleLeft_values:', mkr_middleLeft_values)
        eps = 0.00001
        self.assertTrue(self.approx_equal(mkr_topRight_values[0], 2048.0, eps=eps))
        self.assertTrue(self.approx_equal(mkr_topRight_values[1], 1258.6666666, eps=eps))
        self.assertTrue(self.approx_equal(mkr_topLeft_values[0], 0.0, eps=eps))
        self.assertTrue(self.approx_equal(mkr_topLeft_values[1], 1258.6666666, eps=eps))
        self.assertTrue(self.approx_equal(mkr_middleTop_values[0], 1024.0, eps=eps))
        self.assertTrue(self.approx_equal(mkr_middleTop_values[1], 1258.6666666, eps=eps))
        self.assertTrue(self.approx_equal(mkr_middleLeft_values[0], 0.0, eps=eps))
        self.assertTrue(self.approx_equal(mkr_middleLeft_values[1], 576.0, eps=eps))
        return

    def test_init_levmar(self):
        self.do_solve('levmar', 0)

    def test_init_cminpack_lmdif(self):
        self.do_solve('cminpack_lmdif', 1)

    def test_init_cminpack_lmder(self):
        self.do_solve('cminpack_lmder', 2)


if __name__ == '__main__':
    prog = unittest.main()
