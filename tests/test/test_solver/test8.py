"""
Test multi-camera solving on a single frame, using Ceres solver.
"""

import os
import math
import time
import unittest

try:
    import maya.standalone
    maya.standalone.initialize()
except RuntimeError:
    pass
import maya.cmds


import test.test_solver.solverutils as solverUtils


# @unittest.skip
class TestSolver8(solverUtils.SolverTestCase):

    def test_init(self):
        # Open File Path
        scenePath = self.get_data_path('solver_test7.ma')
        maya.cmds.file(scenePath,
                       open=True,
                       force=True,
                       typ='mayaAscii',
                       ignoreVersion=True,
                       options='v=0')

        # Get cameras
        cameras = []
        nodes = maya.cmds.ls('|cam_tfm*',
                             type='transform',
                             long=True)
        for node in nodes:
            print "camera node:", node
            camTfm = node
            camShape = maya.cmds.listRelatives(node,
                                               children=True,
                                               type='camera',
                                               fullPath=True)[0]
            print 'nodes', (camTfm, camShape)
            cameras.append((camTfm, camShape))

        # Get Markers
        markers = []
        nodes = maya.cmds.ls('|cam_tfm*|marker_tfm*',
                             type='transform', long=True)
        for node in nodes:
            markerTfm = node
            camTfm = maya.cmds.listRelatives(node,
                                             parent=True,
                                             type='transform',
                                             fullPath=True)[0]
            camShape = maya.cmds.listRelatives(camTfm, children=True,
                                               type='camera',
                                               fullPath=True)[0]
            bundleName = markerTfm.rpartition('|')[-1]
            bundleName = bundleName.replace('marker', 'bundle')
            bundleTfm = maya.cmds.ls(bundleName, type='transform')[0]
            markers.append((markerTfm, camShape, bundleTfm))

        # Get Attrs
        node_attrs = [
            (cameras[0][0] + '.tx'),
            (cameras[0][0] + '.ty'),
            (cameras[0][0] + '.tz'),
            (cameras[0][0] + '.rx'),
            (cameras[0][0] + '.ry'),
            (cameras[0][0] + '.rz'),

            (cameras[1][0] + '.tx'),
            (cameras[1][0] + '.ty'),
            (cameras[1][0] + '.tz'),
            (cameras[1][0] + '.rx'),
            (cameras[1][0] + '.ry'),
            (cameras[1][0] + '.rz'),
        ]
        frames = [1]

        # Run solver!
        s = time.time()
        result = maya.cmds.mmSolver(
        camera=cameras,
            marker=markers,
            attr=node_attrs,
            frame=frames,
            solverType=2,  # ceres solver
            iterations=1000,
            verbose=True,
        )
        e = time.time()
        print 'total time:', e - s

        # Ensure the values are correct
        self.assertEqual(result[0], 'success=1')


if __name__ == '__main__':
    prog = unittest.main()