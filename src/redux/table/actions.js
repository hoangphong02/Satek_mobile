// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllTablesRequest = createAction('GET_ALL_TABLES_REQUEST');
export const getAllTablesSuccess = createAction('GET_ALL_TABLES_SUCCESS');
export const getAllTablesFailure = createAction('GET_ALL_TABLES_FAILURE');

export const createTableRequest = createAction('CREATE_TABLE_REQUEST');
export const createTableSuccess = createAction('CREATE_TABLE_SUCCESS');
export const createTableFailure = createAction('CREATE_TABLE_FAILURE');
export const resetCreateTable = createAction('RESET_CREATE_TABLE');

export const updateTableRequest = createAction('UPDATE_TABLE_REQUEST');
export const updateTableSuccess = createAction('UPDATE_TABLE_SUCCESS');
export const updateTableFailure = createAction('UPDATE_TABLE_FAILURE');
export const resetUpdateTable = createAction('RESET_UPDATE_TABLE');

export const deleteTableRequest = createAction('DELETE_TABLE_REQUEST');
export const deleteTableSuccess = createAction('DELETE_TABLE_SUCCESS');
export const deleteTableFailure = createAction('DELETE_TABLE_FAILURE');
export const resetDeleteTable = createAction('RESET_DELETE_TABLE');

export const resetTableState = createAction('RESET_TABLE_STATE');
