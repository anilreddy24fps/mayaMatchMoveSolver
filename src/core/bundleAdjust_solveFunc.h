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
 * Universal solver functions, to be used by any library.
 */


#ifndef MAYA_MM_SOLVER_CORE_BUNDLE_ADJUST_SOLVE_FUNC_H
#define MAYA_MM_SOLVER_CORE_BUNDLE_ADJUST_SOLVE_FUNC_H


#include <core/bundleAdjust_data.h>


// success / failure constants.
#define SOLVE_FUNC_SUCCESS (0)
#define SOLVE_FUNC_FAILURE (-1)


void measureErrors(
        int numberOfParameters,
        int numberOfErrors,
        int numberOfMarkerErrors,
        int numberOfAttrStiffnessErrors,
        int numberOfAttrSmoothnessErrors,
        double *errors,
        SolverData *ud,
        double &error_avg,
        double &error_max,
        double &error_min,
        bool writeDebug,
        std::ofstream &debugFile,
        MStatus &status);


int solveFunc(int numberOfParameters,
              int numberOfErrors,
              const double *parameters,
              double *errors,
              double *jacobian,
              void *userData);


#endif // MAYA_MM_SOLVER_CORE_BUNDLE_ADJUST_SOLVE_FUNC_H
