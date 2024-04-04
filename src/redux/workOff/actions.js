/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from 'redux-actions';

export const createWorkOffRequest = createAction('CREATE_WORK_OFF_REQUEST');
export const createWorkOffSuccess = createAction('CREATE_WORK_OFF_SUCCESS');
export const createWorkOffFailure = createAction('CREATE_WORK_OFF_FAILURE');
export const resetCreateWorkOffState = createAction('RESET_CREATE_WORK_OFF_STATE');

export const updateWorkOffRequest = createAction('UPDATE_WORK_OFF_REQUEST');
export const updateWorkOffSuccess = createAction('UPDATE_WORK_OFF_SUCCESS');
export const updateWorkOffFailure = createAction('UPDATE_WORK_OFF_FAILURE');
export const resetUpdateWorkOffState = createAction('RESET_UPDATE_WORK_OFF_STATE');

export const deleteWorkOffRequest = createAction('DELETE_WORK_OFF_REQUEST');
export const deleteWorkOffSuccess = createAction('DELETE_WORK_OFF_SUCCESS');
export const deleteWorkOffFailure = createAction('DELETE_WORK_OFF_FAILURE');
export const resetDeleteWorkOffState = createAction('RESET_DELETE_WORK_OFF_STATE');

export const acceptWorkOffRequest = createAction('ACCEPT_WORK_OFF_REQUEST');
export const acceptWorkOffSuccess = createAction('ACCEPT_WORK_OFF_SUCCESS');
export const acceptWorkOffFailure = createAction('ACCEPT_WORK_OFF_FAILURE');
export const resetAcceptWorkOffState = createAction('RESET_ACCEPT_WORK_OFF_STATE');

export const getWorkOffRequest = createAction('GET_WORK_OFF_REQUEST');
export const getWorkOffSuccess = createAction('GET_WORK_OFF_SUCCESS');
export const getWorkOffFailure = createAction('GET_WORK_OFF_FAILURE');

export const resetWorkOffState = createAction('RESET_WORK_OFF_STATE');
