/*
 * Copyright (C) 2018, 2019 David Cattermole.
 *
 * This file is part of mmSolver.
 *
 * mmSolver is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * mmSolver is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with mmSolver.  If not, see <https://www.gnu.org/licenses/>.
 * ====================================================================
 * 
 */


#ifndef MAYA_MM_SOLVER_CORE_BUNDLE_ADJUST_CMINPACK_LMDER_H
#define MAYA_MM_SOLVER_CORE_BUNDLE_ADJUST_CMINPACK_LMDER_H

// STL
#include <string>
#include <vector>

// Maya
#include <maya/MPoint.h>
#include <maya/MStringArray.h>
#include <maya/MAnimCurveChange.h>
#include <maya/MDGModifier.h>
#include <maya/MComputation.h>

// Internal Objects
#include <Camera.h>
#include <Marker.h>
#include <Bundle.h>
#include <Attr.h>

#include <core/bundleAdjust_solveFunc.h>
#include <core/bundleAdjust_base.h>


bool solve_3d_cminpack_lmder(SolverOptions &solverOptions,
                             int numberOfParameters,
                             int numberOfErrors,
                             std::vector<double> &paramList,
                             std::vector<double> &errorList,
                             std::vector<double> &paramLowerBoundList,
                             std::vector<double> &paramUpperBoundList,
                             std::vector<double> &paramWeightList,
                             SolverData &userData,
                             SolverResult &solveResult,
                             MStringArray &outResult);


int solveFunc_cminpack_lmder(void *data,
                             int m,
                             int n,
                             const double *x,
                             double *fvec,
                             double *fjac, 
                             int ldfjac, 
                             int iflag);

#endif // MAYA_MM_SOLVER_CORE_BUNDLE_ADJUST_CMINPACK_LMDER_H
