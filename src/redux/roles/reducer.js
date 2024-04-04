// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

import * as Actions from './actions';

const initialState = {
  //
  isGetListRolesRequest: false,
  isGetListRolesSuccess: false,
  isGetListRolesFailure: false,
  listRolesState: {},
  //
  isAddRoleRequest: false,
  isAddRoleSuccess: false,
  isAddRoleFailure: false,
  addRoleResponse: {},
  //
  isDeleteRoleRequest: false,
  isDeleteRoleSuccess: false,
  isDeleteRoleFailure: false,
  //
  isGetListPermissionsRequest: false,
  isGetListPermissionsSuccess: false,
  isGetListPermissionsFailure: false,
  listPermissionsState: {},
  //
  isAttachPermissionsToRoleRequest: false,
  isAttachPermissionsToRoleSuccess: false,
  isAttachPermissionsToRoleFailure: false,
  //
  //
  isEditPermissionsToRoleRequest: false,
  isEditPermissionsToRoleSuccess: false,
  isEditPermissionsToRoleFailure: false,
  //
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get list roles
    [Actions.getListRolesRequest]: (state) => ({
      ...state,
      isGetListRolesRequest: true,
      isGetListRolesSuccess: false,
      isGetListRolesFailure: false,
    }),
    [Actions.getListRolesSuccess]: (state, { payload }) => ({
      ...state,
      isGetListRolesRequest: false,
      isGetListRolesSuccess: true,
      isGetListRolesFailure: false,
      listRolesState: payload,
    }),
    [Actions.getListRolesFailure]: (state, { payload }) => ({
      ...state,
      isGetListRolesRequest: false,
      isGetListRolesSuccess: false,
      isGetListRolesFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Add role
    [Actions.addRoleRequest]: (state) => ({
      ...state,
      isAddRoleRequest: true,
      isAddRoleSuccess: false,
      isAddRoleFailure: false,
    }),
    [Actions.addRoleSuccess]: (state, { payload }) => ({
      ...state,
      isAddRoleRequest: false,
      isAddRoleSuccess: true,
      isAddRoleFailure: false,
      addRoleResponse: payload,
    }),
    [Actions.addRoleFailure]: (state, { payload }) => ({
      ...state,
      isAddRoleRequest: false,
      isAddRoleSuccess: false,
      isAddRoleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetAddRoleState]: (state) => ({
      ...state,
      isAddRoleRequest: false,
      isAddRoleSuccess: false,
      isAddRoleFailure: false,
      addRoleResponse: {},
      errorMessages: [],
    }),
    // #endregion
    // #region : Delete role
    [Actions.deleteRoleRequest]: (state) => ({
      ...state,
      isDeleteRoleRequest: true,
      isDeleteRoleSuccess: false,
      isDeleteRoleFailure: false,
    }),
    [Actions.deleteRoleSuccess]: (state) => ({
      ...state,
      isDeleteRoleRequest: false,
      isDeleteRoleSuccess: true,
      isDeleteRoleFailure: false,
    }),
    [Actions.deleteRoleFailure]: (state, { payload }) => ({
      ...state,
      isDeleteRoleRequest: false,
      isDeleteRoleSuccess: false,
      isDeleteRoleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteRoleState]: (state) => ({
      ...state,
      isDeleteRoleRequest: false,
      isDeleteRoleSuccess: false,
      isDeleteRoleFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Get list permissions
    [Actions.getListPermissionsRequest]: (state) => ({
      ...state,
      isGetListPermissionsRequest: true,
      isGetListPermissionsSuccess: false,
      isGetListPermissionsFailure: false,
    }),
    [Actions.getListPermissionsSuccess]: (state, { payload }) => ({
      ...state,
      isGetListPermissionsRequest: false,
      isGetListPermissionsSuccess: true,
      isGetListPermissionsFailure: false,
      listPermissionsState: payload,
    }),
    [Actions.getListPermissionsFailure]: (state, { payload }) => ({
      ...state,
      isGetListPermissionsRequest: false,
      isGetListPermissionsSuccess: false,
      isGetListPermissionsFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Attach permissions to role
    [Actions.attachPermissionsToRoleRequest]: (state) => ({
      ...state,
      isAttachPermissionsToRoleRequest: true,
      isAttachPermissionsToRoleSuccess: false,
      isAttachPermissionsToRoleFailure: false,
    }),
    [Actions.attachPermissionsToRoleSuccess]: (state) => ({
      ...state,
      isAttachPermissionsToRoleRequest: false,
      isAttachPermissionsToRoleSuccess: true,
      isAttachPermissionsToRoleFailure: false,
    }),
    [Actions.attachPermissionsToRoleFailure]: (state, { payload }) => ({
      ...state,
      isAttachPermissionsToRoleRequest: false,
      isAttachPermissionsToRoleSuccess: false,
      isAttachPermissionsToRoleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetAttachPermissionsToRoleState]: (state) => ({
      ...state,
      isAttachPermissionsToRoleRequest: false,
      isAttachPermissionsToRoleSuccess: false,
      isAttachPermissionsToRoleFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Edit permissions to role
    [Actions.editPermissionsToRoleRequest]: (state) => ({
      ...state,
      isEditPermissionsToRoleRequest: true,
      isEditPermissionsToRoleSuccess: false,
      isEditPermissionsToRoleFailure: false,
    }),
    [Actions.editPermissionsToRoleSuccess]: (state) => ({
      ...state,
      isEditPermissionsToRoleRequest: false,
      isEditPermissionsToRoleSuccess: true,
      isEditPermissionsToRoleFailure: false,
    }),
    [Actions.editPermissionsToRoleFailure]: (state, { payload }) => ({
      ...state,
      isEditPermissionsToRoleRequest: false,
      isEditPermissionsToRoleSuccess: false,
      isEditPermissionsToRoleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetEditPermissionsToRoleState]: (state) => ({
      ...state,
      isEditPermissionsToRoleRequest: false,
      isEditPermissionsToRoleSuccess: false,
      isEditPermissionsToRoleFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Local
    [Actions.resetRoleState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
