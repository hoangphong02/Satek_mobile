/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from 'redux-actions';

export const createWorkTimeRequest = createAction('CREATE_WORK_TIME_REQUEST');
export const createWorkTimeSuccess = createAction('CREATE_WORK_TIME_SUCCESS');
export const createWorkTimeFailure = createAction('CREATE_WORK_TIME_FAILURE');
export const resetCreateWorkTimeState = createAction('RESET_CREATE_WORK_TIME_STATE');

export const updateWorkTimeRequest = createAction('UPDATE_WORK_TIME_REQUEST');
export const updateWorkTimeSuccess = createAction('UPDATE_WORK_TIME_SUCCESS');
export const updateWorkTimeFailure = createAction('UPDATE_WORK_TIME_FAILURE');
export const resetUpdateWorkTimeState = createAction('RESET_UPDATE_WORK_TIME_STATE');

export const deleteWorkTimeRequest = createAction('DELETE_WORK_TIME_REQUEST');
export const deleteWorkTimeSuccess = createAction('DELETE_WORK_TIME_SUCCESS');
export const deleteWorkTimeFailure = createAction('DELETE_WORK_TIME_FAILURE');
export const resetDeleteWorkTimeState = createAction('RESET_DELETE_WORK_TIME_STATE');

export const getWorkTimeRequest = createAction('GET_WORK_TIME_REQUEST');
export const getWorkTimeSuccess = createAction('GET_WORK_TIME_SUCCESS');
export const getWorkTimeFailure = createAction('GET_WORK_TIME_FAILURE');

export const getStatisticWorkTimeRequest = createAction('GET_STATISTIC_WORK_TIME_REQUEST');
export const getStatisticWorkTimeSuccess = createAction('GET_STATISTIC_WORK_TIME_SUCCESS');
export const getStatisticWorkTimeFailure = createAction('GET_STATISTIC_WORK_TIME_FAILURE');
export const resetGetStatisticWorkTime = createAction('RESET_GET_STATISTIC_WORK_TIME');

export const getWorkTimeStaffRequest = createAction('GET_WORK_TIME_STAFF_REQUEST');
export const getWorkTimeStaffSuccess = createAction('GET_WORK_TIME_STAFF_SUCCESS');
export const getWorkTimeStaffFailure = createAction('GET_WORK_TIME_STAFF_FAILURE');
export const resetGetWorkTimeStaff = createAction('RESET_GET_WORK_TIME_STAFF');

export const resetWorkTimeState = createAction('RESET_WORK_TIME_STATE');
