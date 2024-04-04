// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

import * as Actions from './actions';

const initialState = {
  //
  isGetListUsersHasRoleRequest: false,
  isGetListUsersHasRoleSuccess: false,
  isGetListUsersHasRoleFailure: false,
  listUsersHasRole: {},
  //
  isGetListUsersNoRoleRequest: false,
  isGetListUsersNoRoleSuccess: false,
  isGetListUsersNoRoleFailure: false,
  listUsersNoRole: {},
  //
  isGetAllListRolesRequest: false,
  isGetAllListRolesSuccess: false,
  isGetAllListRolesFailure: false,
  allListRolesState: {},
  //
  isSyncUserRoleRequest: false,
  isSyncUserRoleSuccess: false,
  isSyncUserRoleFailure: false,
  //
  isRevokeUserRoleRequest: false,
  isRevokeUserRoleSuccess: false,
  isRevokeUserRoleFailure: false,
  //
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get list users has role
    [Actions.getListUsersHasRoleRequest]: (state) => ({
      ...state,
      isGetListUsersHasRoleRequest: true,
      isGetListUsersHasRoleSuccess: false,
      isGetListUsersHasRoleFailure: false,
    }),
    [Actions.getListUsersHasRoleSuccess]: (state, { payload }) => ({
      ...state,
      isGetListUsersHasRoleRequest: false,
      isGetListUsersHasRoleSuccess: true,
      isGetListUsersHasRoleFailure: false,
      listUsersHasRole: payload,
    }),
    [Actions.getListUsersHasRoleFailure]: (state, { payload }) => ({
      ...state,
      isGetListUsersHasRoleRequest: false,
      isGetListUsersHasRoleSuccess: false,
      isGetListUsersHasRoleFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Get list users no role
    [Actions.getListUsersNoRoleRequest]: (state) => ({
      ...state,
      isGetListUsersNoRoleRequest: true,
      isGetListUsersNoRoleSuccess: false,
      isGetListUsersNoRoleFailure: false,
    }),
    [Actions.getListUsersNoRoleSuccess]: (state, { payload }) => ({
      ...state,
      isGetListUsersNoRoleRequest: false,
      isGetListUsersNoRoleSuccess: true,
      isGetListUsersNoRoleFailure: false,
      listUsersNoRole: payload,
    }),
    [Actions.getListUsersNoRoleFailure]: (state, { payload }) => ({
      ...state,
      isGetListUsersNoRoleRequest: false,
      isGetListUsersNoRoleSuccess: false,
      isGetListUsersNoRoleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetListUsersNoRoleState]: (state) => ({
      ...state,
      isGetListUsersNoRoleRequest: false,
      isGetListUsersNoRoleSuccess: false,
      isGetListUsersNoRoleFailure: false,
      listUsersNoRole: {},
      errorMessages: [],
    }),
    // #endregion
    // #region : Sync user role
    [Actions.syncUserRoleRequest]: (state) => ({
      ...state,
      isSyncUserRoleRequest: true,
      isSyncUserRoleSuccess: false,
      isSyncUserRoleFailure: false,
    }),
    [Actions.syncUserRoleSuccess]: (state) => ({
      ...state,
      isSyncUserRoleRequest: false,
      isSyncUserRoleSuccess: true,
      isSyncUserRoleFailure: false,
    }),
    [Actions.syncUserRoleFailure]: (state, { payload }) => ({
      ...state,
      isSyncUserRoleRequest: false,
      isSyncUserRoleSuccess: false,
      isSyncUserRoleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetSyncUserRoleState]: (state) => ({
      ...state,
      isSyncUserRoleRequest: false,
      isSyncUserRoleSuccess: false,
      isSyncUserRoleFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Revoke user role
    [Actions.revokeUserRoleRequest]: (state) => ({
      ...state,
      isRevokeUserRoleRequest: true,
      isRevokeUserRoleSuccess: false,
      isRevokeUserRoleFailure: false,
    }),
    [Actions.revokeUserRoleSuccess]: (state) => ({
      ...state,
      isRevokeUserRoleRequest: false,
      isRevokeUserRoleSuccess: true,
      isRevokeUserRoleFailure: false,
    }),
    [Actions.revokeUserRoleFailure]: (state, { payload }) => ({
      ...state,
      isRevokeUserRoleRequest: false,
      isRevokeUserRoleSuccess: false,
      isRevokeUserRoleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetRevokeUserRoleState]: (state) => ({
      ...state,
      isRevokeUserRoleRequest: false,
      isRevokeUserRoleSuccess: false,
      isRevokeUserRoleFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Get all list roles
    [Actions.getAllListRolesRequest]: (state) => ({
      ...state,
      isGetAllListRolesRequest: true,
      isGetAllListRolesSuccess: false,
      isGetAllListRolesFailure: false,
    }),
    [Actions.getAllListRolesSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllListRolesRequest: false,
      isGetAllListRolesSuccess: true,
      isGetAllListRolesFailure: false,
      allListRolesState: payload,
    }),
    [Actions.getAllListRolesFailure]: (state, { payload }) => ({
      ...state,
      isGetAllListRolesRequest: false,
      isGetAllListRolesSuccess: false,
      isGetAllListRolesFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Local
    [Actions.resetPermissionsState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
