// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getListUsersHasRoleRequest = createAction(
  'GET_LIST_USERS_HAS_ROLE_REQUEST',
);
export const getListUsersHasRoleSuccess = createAction(
  'GET_LIST_USERS_HAS_ROLE_SUCCESS',
);
export const getListUsersHasRoleFailure = createAction(
  'GET_LIST_USERS_HAS_ROLE_FAILURE',
);

export const getListUsersNoRoleRequest = createAction(
  'GET_LIST_USERS_NO_ROLE_REQUEST',
);
export const getListUsersNoRoleSuccess = createAction(
  'GET_LIST_USERS_NO_ROLE_SUCCESS',
);
export const getListUsersNoRoleFailure = createAction(
  'GET_LIST_USERS_NO_ROLE_FAILURE',
);
export const resetListUsersNoRoleState = createAction(
  'RESET_LIST_USERS_NO_ROLE_STATE',
);

export const getAllListRolesRequest = createAction(
  'GET_ALL_LIST_ROLES_REQUEST',
);
export const getAllListRolesSuccess = createAction(
  'GET_ALL_LIST_ROLES_SUCCESS',
);
export const getAllListRolesFailure = createAction(
  'GET_ALL_LIST_ROLES_FAILURE',
);

export const syncUserRoleRequest = createAction('SYNC_USER_ROLE_REQUEST');
export const syncUserRoleSuccess = createAction('SYNC_USER_ROLE_SUCCESS');
export const syncUserRoleFailure = createAction('SYNC_USER_ROLE_FAILURE');
export const resetSyncUserRoleState = createAction(
  'RESET_SYNC_USER_ROLE_STATE',
);

export const revokeUserRoleRequest = createAction('REVOKE_USER_ROLE_REQUEST');
export const revokeUserRoleSuccess = createAction('REVOKE_USER_ROLE_SUCCESS');
export const revokeUserRoleFailure = createAction('REVOKE_USER_ROLE_FAILURE');
export const resetRevokeUserRoleState = createAction(
  'RESET_REVOKE_USER_ROLE_STATE',
);

export const resetPermissionsState = createAction('RESET_PERMISSIONS_STATE');
