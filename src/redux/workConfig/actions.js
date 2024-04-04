/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from 'redux-actions';

export const getAllWorkConfigsRequest = createAction('GET_ALL_WORK_CONFIGS_REQUEST');
export const getAllWorkConfigsSuccess = createAction('GET_ALL_WORK_CONFIGS_SUCCESS');
export const getAllWorkConfigsFailure = createAction('GET_ALL_WORK_CONFIGS_FAILURE');
export const resetGetAllWorkConfig = createAction('RESET_GET_ALL_WORK_CONFIG');

export const createWorkConfigRequest = createAction('CREATE_WORK_CONFIG_REQUEST');
export const createWorkConfigSuccess = createAction('CREATE_WORK_CONFIG_SUCCESS');
export const createWorkConfigFailure = createAction('CREATE_WORK_CONFIG_FAILURE');
export const resetCreateWorkConfig = createAction('RESET_CREATE_WORK_CONFIG');

export const updateWorkConfigRequest = createAction('UPDATE_WORK_CONFIG_REQUEST');
export const updateWorkConfigSuccess = createAction('UPDATE_WORK_CONFIG_SUCCESS');
export const updateWorkConfigFailure = createAction('UPDATE_WORK_CONFIG_FAILURE');
export const resetUpdateWorkConfig = createAction('RESET_UPDATE_WORK_CONFIG');

export const deleteWorkConfigRequest = createAction('DELETE_WORK_CONFIG_REQUEST');
export const deleteWorkConfigSuccess = createAction('DELETE_WORK_CONFIG_SUCCESS');
export const deleteWorkConfigFailure = createAction('DELETE_WORK_CONFIG_FAILURE');
export const resetDeleteWorkConfig = createAction('RESET_DELETE_WORK_CONFIG');

export const searchUsersRequest = createAction('SEARCH_USERS_REQUEST');
export const searchUsersSuccess = createAction('SEARCH_USERS_SUCCESS');
export const searchUsersFailure = createAction('SEARCH_USERS_FAILURE');
export const resetSearchUsers = createAction('RESET_SEARCH_USERS');

export const searchWorkPlaceRequest = createAction('SEARCH_WORK_PLACE_REQUEST');
export const searchWorkPlaceSuccess = createAction('SEARCH_WORK_PLACE_SUCCESS');
export const searchWorkPlaceFailure = createAction('SEARCH_WORK_PLACE_FAILURE');
export const resetSearchWorkPlace = createAction('RESET_SEARCH_WORK_PLACE');

export const searchWorkTimeRequest = createAction('SEARCH_WORK_TIME_REQUEST');
export const searchWorkTimeSuccess = createAction('SEARCH_WORK_TIME_SUCCESS');
export const searchWorkTimeFailure = createAction('SEARCH_WORK_TIME_FAILURE');
export const resetSearchWorkTime = createAction('RESET_SEARCH_WORK_TIME');

export const changeWorkConfigRequest = createAction('CHANGE_WORK_CONFIG_REQUEST');
export const changeWorkConfigSuccess = createAction('CHANGE_WORK_CONFIG_SUCCESS');
export const changeWorkConfigFailure = createAction('CHANGE_WORK_CONFIG_FAILURE');
export const resetChangeWorkConfig = createAction('RESET_CHANGE_WORK_CONFIG');

export const addWorkConfigRequest = createAction('ADD_WORK_CONFIG_REQUEST');
export const addWorkConfigSuccess = createAction('ADD_WORK_CONFIG_SUCCESS');
export const addWorkConfigFailure = createAction('ADD_WORK_CONFIG_FAILURE');
export const resetAddWorkConfig = createAction('RESET_ADD_WORK_CONFIG');

export const resetWorkConfigState = createAction('RESET_WORK_CONFIG_STATE');
