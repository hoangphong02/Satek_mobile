/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from 'redux-actions';

export const getAllWorkPlaceRequest = createAction('GET_ALL_WORK_PLACE_REQUEST');
export const getAllWorkPlaceSuccess = createAction('GET_ALL_WORK_PLACE_SUCCESS');
export const getAllWorkPlaceFailure = createAction('GET_ALL_WORK_PLACE_FAILURE');

export const addWorkPlaceRequest = createAction('ADD_WORK_PLACE_REQUEST');
export const addWorkPlaceSuccess = createAction('ADD_WORK_PLACE_SUCCESS');
export const addWorkPlaceFailure = createAction('ADD_WORK_PLACE_FAILURE');
export const resetAddWorkPlaceState = createAction('RESET_ADD_WORK_PLACE_STATE');

export const editWorkPlaceRequest = createAction('EDIT_WORK_PLACE_REQUEST');
export const editWorkPlaceSuccess = createAction('EDIT_WORK_PLACE_SUCCESS');
export const editWorkPlaceFailure = createAction('EDIT_WORK_PLACE_FAILURE');
export const resetEditWorkPlaceState = createAction('RESET_EDIT_WORK_PLACE_STATE');

export const deleteWorkPlaceRequest = createAction('DELETE_WORK_PLACE_REQUEST');
export const deleteWorkPlaceSuccess = createAction('DELETE_WORK_PLACE_SUCCESS');
export const deleteWorkPlaceFailure = createAction('DELETE_WORK_PLACE_FAILURE');
export const resetDeleteWorkPlaceState = createAction('RESET_DELETE_WORK_PLACE_STATE');

export const resetStateWorkPlace = createAction('RESET_WORK_PLACE_STATE');
