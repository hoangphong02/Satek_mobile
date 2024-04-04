// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllRegionRequest = createAction('GET_ALL_REGION_REQUEST');
export const getAllRegionSuccess = createAction('GET_ALL_REGION_SUCCESS');
export const getAllRegionFailure = createAction('GET_ALL_REGION_FAILURE');

export const getAllRegionGroupRequest = createAction('GET_ALL_REGION_GROUP_REQUEST');
export const getAllRegionGroupSuccess = createAction('GET_ALL_REGION_GROUP_SUCCESS');
export const getAllRegionGroupFailure = createAction('GET_ALL_REGION_GROUP_FAILURE');

export const addRegionGroupRequest = createAction('ADD_REGION_GROUP_REQUEST');
export const addRegionGroupSuccess = createAction('ADD_REGION_GROUP_SUCCESS');
export const addRegionGroupFailure = createAction('ADD_REGION_GROUP_FAILURE');

export const editRegionGroupRequest = createAction('EDIT_REGION_GROUP_REQUEST');
export const editRegionGroupSuccess = createAction('EDIT_REGION_GROUP_SUCCESS');
export const editRegionGroupFailure = createAction('EDIT_REGION_GROUP_FAILURE');

export const deleteRegionGroupRequest = createAction('DELETE_REGION_GROUP_REQUEST');
export const deleteRegionGroupSuccess = createAction('DELETE_REGION_GROUP_SUCCESS');
export const deleteRegionGroupFailure = createAction('DELETE_REGION_GROUP_FAILURE');

export const resetListRegionState = createAction('RESET_LIST_REGION_STATE');
export const resetDeleteRegionGroupState = createAction('RESET_DELETE_REGION_GROUP_STATE');
export const resetEditRegionGroupState = createAction('RESET_EDIT_REGION_GROUP_STATE');
export const resetAddRegionGroupState = createAction('RESET_ADD_REGION_GROUP_STATE');
export const resetRegionGroupState = createAction('RESET_REGION_GROUP_STATE');
