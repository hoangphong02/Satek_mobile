// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getListRolesRequest = createAction('GET_LIST_ROLES_REQUEST');
export const getListRolesSuccess = createAction('GET_LIST_ROLES_SUCCESS');
export const getListRolesFailure = createAction('GET_LIST_ROLES_FAILURE');

export const addRoleRequest = createAction('ADD_ROLE_REQUEST');
export const addRoleSuccess = createAction('ADD_ROLE_SUCCESS');
export const addRoleFailure = createAction('ADD_ROLE_FAILURE');
export const resetAddRoleState = createAction('RESET_ADD_ROLE_STATE');

export const deleteRoleRequest = createAction('DELETE_ROLE_REQUEST');
export const deleteRoleSuccess = createAction('DELETE_ROLE_SUCCESS');
export const deleteRoleFailure = createAction('DELETE_ROLE_FAILURE');
export const resetDeleteRoleState = createAction('RESET_DELETE_ROLE_STATE');

export const getListPermissionsRequest = createAction(
  'GET_LIST_PERMISSIONS_REQUEST',
);
export const getListPermissionsSuccess = createAction(
  'GET_LIST_PERMISSIONS_SUCCESS',
);
export const getListPermissionsFailure = createAction(
  'GET_LIST_PERMISSIONS_FAILURE',
);

export const attachPermissionsToRoleRequest = createAction(
  'ATTACH_PERMISSION_TO_ROLE_REQUEST',
);
export const attachPermissionsToRoleSuccess = createAction(
  'ATTACH_PERMISSION_TO_ROLE_SUCCESS',
);
export const attachPermissionsToRoleFailure = createAction(
  'ATTACH_PERMISSION_TO_ROLE_FAILURE',
);
export const resetAttachPermissionsToRoleState = createAction(
  'RESET_ATTACH_PERMISSION_TO_ROLE_STATE',
);

export const editPermissionsToRoleRequest = createAction(
  'EDIT_PERMISSION_TO_ROLE_REQUEST',
);
export const editPermissionsToRoleSuccess = createAction(
  'EDIT_PERMISSION_TO_ROLE_SUCCESS',
);
export const editPermissionsToRoleFailure = createAction(
  'EDIT_PERMISSION_TO_ROLE_FAILURE',
);
export const resetEditPermissionsToRoleState = createAction(
  'RESET_EDIT_PERMISSION_TO_ROLE_STATE',
);

export const resetRoleState = createAction('RESET_ROLE_STATE');
