// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllUnitsRequest = createAction('GET_ALL_UNITS_REQUEST');
export const getAllUnitsSuccess = createAction('GET_ALL_UNITS_SUCCESS');
export const getAllUnitsFailure = createAction('GET_ALL_UNITS_FAILURE');

export const createUnitRequest = createAction('CREATE_UNIT_REQUEST');
export const createUnitSuccess = createAction('CREATE_UNIT_SUCCESS');
export const createUnitFailure = createAction('CREATE_UNIT_FAILURE');
export const resetCreateUnit = createAction('RESET_CREATE_UNIT');

export const updateUnitRequest = createAction('UPDATE_UNIT_REQUEST');
export const updateUnitSuccess = createAction('UPDATE_UNIT_SUCCESS');
export const updateUnitFailure = createAction('UPDATE_UNIT_FAILURE');
export const resetUpdateUnit = createAction('RESET_UPDATE_UNIT');

export const deleteUnitRequest = createAction('DELETE_UNIT_REQUEST');
export const deleteUnitSuccess = createAction('DELETE_UNIT_SUCCESS');
export const deleteUnitFailure = createAction('DELETE_UNIT_FAILURE');
export const resetDeleteUnit = createAction('RESET_DELETE_UNIT');

export const resetUnitState = createAction('RESET_UNIT_STATE');
