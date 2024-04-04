// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllTableGroupsRequest = createAction('GET_ALL_TABLEGROUPS_REQUEST');
export const getAllTableGroupsSuccess = createAction('GET_ALL_TABLEGROUPS_SUCCESS');
export const getAllTableGroupsFailure = createAction('GET_ALL_TABLEGROUPS_FAILURE');

export const createTableGroupRequest = createAction('CREATE_TABLEGROUP_REQUEST');
export const createTableGroupSuccess = createAction('CREATE_TABLEGROUP_SUCCESS');
export const createTableGroupFailure = createAction('CREATE_TABLEGROUP_FAILURE');
export const resetCreateTableGroup = createAction('RESET_CREATE_TABLEGROUP');

export const updateTableGroupRequest = createAction('UPDATE_TABLEGROUP_REQUEST');
export const updateTableGroupSuccess = createAction('UPDATE_TABLEGROUP_SUCCESS');
export const updateTableGroupFailure = createAction('UPDATE_TABLEGROUP_FAILURE');
export const resetUpdateTableGroup = createAction('RESET_UPDATE_TABLEGROUP');

export const deleteTableGroupRequest = createAction('DELETE_TABLEGROUP_REQUEST');
export const deleteTableGroupSuccess = createAction('DELETE_TABLEGROUP_SUCCESS');
export const deleteTableGroupFailure = createAction('DELETE_TABLEGROUP_FAILURE');
export const resetDeleteTableGroup = createAction('RESET_DELETE_TABLEGROUP');

export const resetTableGroupState = createAction('RESET_TABLEGROUP_STATE');
