// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  isCreateStaffRequest: false,
  isCreateStaffSuccess: false,
  isCreateStaffFailure: false,
  //
  isUpdateStaffRequest: false,
  isUpdateStaffSuccess: false,
  isUpdateStaffFailure: false,
  //
  isDeleteStaffRequest: false,
  isDeleteStaffSuccess: false,
  isDeleteStaffFailure: false,
  //
  isDisableStaffRequest: false,
  isDisableStaffSuccess: false,
  isDisableStaffFailure: false,
  //
  isResetPasswordStaffRequest: false,
  isResetPasswordStaffSuccess: false,
  isResetPasswordStaffFailure: false,
  //
  isGetStaffRequest: false,
  isGetStaffSuccess: false,
  isGetStaffFailure: false,
  getStaffResponse: {},
  //
  isGetListStaffHasRoleRequest: false,
  isGetListStaffHasRoleSuccess: false,
  isGetListStaffHasRoleFailure: false,
  getListStaffHasRoleResponse: {},
  //
  isGetListStaffNoRoleRequest: false,
  isGetListStaffNoRoleSuccess: false,
  isGetListStaffNoRoleFailure: false,
  getListStaffNoRoleResponse: {},
  //
  isAttachPermissionStaffRequest: false,
  isAttachPermissionStaffSuccess: false,
  isAttachPermissionStaffFailure: false,
  //
  isPaySalaryStaffRequest: false,
  isPaySalaryStaffSuccess: false,
  isPaySalaryStaffFailure: false,
  //
  isBonusSalaryStaffRequest: false,
  isBonusSalaryStaffSuccess: false,
  isBonusSalaryStaffFailure: false,
  //
  isDeductionSalaryStaffRequest: false,
  isDeductionSalaryStaffSuccess: false,
  isDeductionSalaryStaffFailure: false,
  //

  // Get staff not  busy
  isGetStaffNotBusyRequest: false,
  isGetStaffNotBusySuccess: false,
  isGetStaffNotBusyFailure: false,
  getStaffNotBusyState: {},

  errorMessages: [],
};

const reducer = handleActions({
  // #region
  [Actions.createStaffRequest]: (state) => ({
    ...state,
    isCreateStaffRequest: true,
    isCreateStaffSuccess: false,
    isCreateStaffFailure: false,
  }),
  [Actions.createStaffSuccess]: (state) => ({
    ...state,
    isCreateStaffRequest: false,
    isCreateStaffSuccess: true,
    isCreateStaffFailure: false,
  }),
  [Actions.createStaffFailure]: (state, { payload }) => ({
    ...state,
    isCreateStaffRequest: false,
    isCreateStaffSuccess: false,
    isCreateStaffFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetCreateStaffState]: (state) => ({
    ...state,
    isCreateStaffRequest: false,
    isCreateStaffSuccess: false,
    isCreateStaffFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region
  [Actions.updateStaffRequest]: (state) => ({
    ...state,
    isUpdateStaffRequest: true,
    isUpdateStaffSuccess: false,
    isUpdateStaffFailure: false,
  }),
  [Actions.updateStaffSuccess]: (state) => ({
    ...state,
    isUpdateStaffRequest: false,
    isUpdateStaffSuccess: true,
    isUpdateStaffFailure: false,
  }),
  [Actions.updateStaffFailure]: (state, { payload }) => ({
    ...state,
    isUpdateStaffRequest: false,
    isUpdateStaffSuccess: false,
    isUpdateStaffFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetUpdateStaffState]: (state) => ({
    ...state,
    isUpdateStaffRequest: false,
    isUpdateStaffSuccess: false,
    isUpdateStaffFailure: false,
    errorMessages: [],
  }),
  // #endregion
  // #region
  [Actions.deleteStaffRequest]: (state) => ({
    ...state,
    isDeleteStaffRequest: true,
    isDeleteStaffSuccess: false,
    isDeleteStaffFailure: false,
  }),
  [Actions.deleteStaffSuccess]: (state) => ({
    ...state,
    isDeleteStaffRequest: false,
    isDeleteStaffSuccess: true,
    isDeleteStaffFailure: false,
  }),
  [Actions.deleteStaffFailure]: (state, { payload }) => ({
    ...state,
    isDeleteStaffRequest: false,
    isDeleteStaffSuccess: false,
    isDeleteStaffFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetDeleteStaffState]: (state) => ({
    ...state,
    isDeleteStaffRequest: false,
    isDeleteStaffSuccess: false,
    isDeleteStaffFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region
  [Actions.disableStaffRequest]: (state) => ({
    ...state,
    isDisableStaffRequest: true,
    isDisableStaffSuccess: false,
    isDisableStaffFailure: false,
  }),
  [Actions.disableStaffSuccess]: (state) => ({
    ...state,
    isDisableStaffRequest: false,
    isDisableStaffSuccess: true,
    isDisableStaffFailure: false,
  }),
  [Actions.disableStaffFailure]: (state, { payload }) => ({
    ...state,
    isDisableStaffRequest: false,
    isDisableStaffSuccess: false,
    isDisableStaffFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetDisableStaffState]: (state) => ({
    ...state,
    isDisableStaffRequest: false,
    isDisableStaffSuccess: false,
    isDisableStaffFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region
  [Actions.resetPasswordStaffRequest]: (state) => ({
    ...state,
    isResetPasswordStaffRequest: true,
    isResetPasswordStaffSuccess: false,
    isResetPasswordStaffFailure: false,
  }),
  [Actions.resetPasswordStaffSuccess]: (state) => ({
    ...state,
    isResetPasswordStaffRequest: false,
    isResetPasswordStaffSuccess: true,
    isResetPasswordStaffFailure: false,
  }),
  [Actions.resetPasswordStaffFailure]: (state, { payload }) => ({
    ...state,
    isResetPasswordStaffRequest: false,
    isResetPasswordStaffSuccess: false,
    isResetPasswordStaffFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetResetPasswordStaffState]: (state) => ({
    ...state,
    isResetPasswordStaffRequest: false,
    isResetPasswordStaffSuccess: false,
    isResetPasswordStaffFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region GET
  [Actions.getStaffRequest]: (state) => ({
    ...state,
    isGetStaffRequest: true,
    isGetStaffSuccess: false,
    isGetStaffFailure: false,
  }),
  [Actions.getStaffSuccess]: (state, { payload }) => ({
    ...state,
    isGetStaffRequest: false,
    isGetStaffSuccess: true,
    isGetStaffFailure: false,
    getStaffResponse: payload,
  }),
  [Actions.getStaffFailure]: (state, { payload }) => ({
    ...state,
    isGetStaffRequest: false,
    isGetStaffSuccess: false,
    isGetStaffFailure: true,
    errorMessages: payload,
  }),
  // #endregion

  // #region GET has role
  [Actions.getListStaffHasRoleRequest]: (state) => ({
    ...state,
    isGetListStaffHasRoleRequest: true,
    isGetListStaffHasRoleSuccess: false,
    isGetListStaffHasRoleFailure: false,
  }),
  [Actions.getListStaffHasRoleSuccess]: (state, { payload }) => ({
    ...state,
    isGetListStaffHasRoleRequest: false,
    isGetListStaffHasRoleSuccess: true,
    isGetListStaffHasRoleFailure: false,
    getListStaffHasRoleResponse: payload,
  }),
  [Actions.getListStaffHasRoleFailure]: (state, { payload }) => ({
    ...state,
    isGetListStaffHasRoleRequest: false,
    isGetListStaffHasRoleSuccess: false,
    isGetListStaffHasRoleFailure: true,
    errorMessages: payload,
  }),
  // #endregion

  // #region GET has role
  [Actions.getListStaffNoRoleRequest]: (state) => ({
    ...state,
    isGetListStaffNoRoleRequest: true,
    isGetListStaffNoRoleSuccess: false,
    isGetListStaffNoRoleFailure: false,
  }),
  [Actions.getListStaffNoRoleSuccess]: (state, { payload }) => ({
    ...state,
    isGetListStaffNoRoleRequest: false,
    isGetListStaffNoRoleSuccess: true,
    isGetListStaffNoRoleFailure: false,
    getListStaffNoRoleResponse: payload,
  }),
  [Actions.getListStaffNoRoleFailure]: (state, { payload }) => ({
    ...state,
    isGetListStaffNoRoleRequest: false,
    isGetListStaffNoRoleSuccess: false,
    isGetListStaffNoRoleFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetListStaffNoRoleState]: (state) => ({
    ...state,
    isGetListStaffNoRoleRequest: false,
    isGetListStaffNoRoleSuccess: false,
    isGetListStaffNoRoleFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region attach permissions
  [Actions.attachPermissionStaffRequest]: (state) => ({
    ...state,
    isAttachPermissionStaffRequest: true,
    isAttachPermissionStaffSuccess: false,
    isAttachPermissionStaffFailure: false,
  }),
  [Actions.attachPermissionStaffSuccess]: (state) => ({
    ...state,
    isAttachPermissionStaffRequest: false,
    isAttachPermissionStaffSuccess: true,
    isAttachPermissionStaffFailure: false,
  }),
  [Actions.attachPermissionStaffFailure]: (state, { payload }) => ({
    ...state,
    isAttachPermissionStaffRequest: false,
    isAttachPermissionStaffSuccess: false,
    isAttachPermissionStaffFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetAttachPermissionStaffState]: (state) => ({
    ...state,
    isAttachPermissionStaffRequest: false,
    isAttachPermissionStaffSuccess: false,
    isAttachPermissionStaffFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region pay
  [Actions.paySalaryStaffRequest]: (state) => ({
    ...state,
    isPaySalaryStaffRequest: true,
    isPaySalaryStaffSuccess: false,
    isPaySalaryStaffFailure: false,
  }),
  [Actions.paySalaryStaffSuccess]: (state) => ({
    ...state,
    isPaySalaryStaffRequest: false,
    isPaySalaryStaffSuccess: true,
    isPaySalaryStaffFailure: false,
  }),
  [Actions.paySalaryStaffFailure]: (state, { payload }) => ({
    ...state,
    isPaySalaryStaffRequest: false,
    isPaySalaryStaffSuccess: false,
    isPaySalaryStaffFailure: true,
    errorMessages: payload,
    isPaySalaryStaffReset: true,

  }),
  [Actions.resetPaySalaryStaffState]: (state) => ({
    ...state,
    isPaySalaryStaffRequest: false,
    isPaySalaryStaffSuccess: false,
    isPaySalaryStaffFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region action salary
  [Actions.bonusSalaryStaffRequest]: (state) => ({
    ...state,
    isBonusSalaryStaffRequest: true,
    isBonusSalaryStaffSuccess: false,
    isBonusSalaryStaffFailure: false,
  }),
  [Actions.bonusSalaryStaffSuccess]: (state) => ({
    ...state,
    isBonusSalaryStaffRequest: false,
    isBonusSalaryStaffSuccess: true,
    isBonusSalaryStaffFailure: false,
  }),
  [Actions.bonusSalaryStaffFailure]: (state, { payload }) => ({
    ...state,
    isBonusSalaryStaffRequest: false,
    isBonusSalaryStaffSuccess: false,
    isBonusSalaryStaffFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetBonusSalaryStaffState]: (state) => ({
    ...state,
    isBonusSalaryStaffRequest: false,
    isBonusSalaryStaffSuccess: false,
    isBonusSalaryStaffFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region action salary
  [Actions.deductionSalaryStaffRequest]: (state) => ({
    ...state,
    isDeductionSalaryStaffRequest: true,
    isDeductionSalaryStaffSuccess: false,
    isDeductionSalaryStaffFailure: false,
  }),
  [Actions.deductionSalaryStaffSuccess]: (state) => ({
    ...state,
    isDeductionSalaryStaffRequest: false,
    isDeductionSalaryStaffSuccess: true,
    isDeductionSalaryStaffFailure: false,
  }),
  [Actions.deductionSalaryStaffFailure]: (state, { payload }) => ({
    ...state,
    isDeductionSalaryStaffRequest: false,
    isDeductionSalaryStaffSuccess: false,
    isDeductionSalaryStaffFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetDeductionSalaryStaffState]: (state) => ({
    ...state,
    isDeductionSalaryStaffRequest: false,
    isDeductionSalaryStaffSuccess: false,
    isDeductionSalaryStaffFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region : Get staff not busy
  [Actions.getStaffNotBusyRequest]: (state) => ({
    ...state,
    isGetStaffNotBusyRequest: true,
    isGetStaffNotBusySuccess: false,
    isGetStaffNotBusyFailure: false,
  }),
  [Actions.getStaffNotBusySuccess]: (state, { payload }) => ({
    ...state,
    isGetStaffNotBusyRequest: false,
    isGetStaffNotBusySuccess: true,
    isGetStaffNotBusyFailure: false,
    getStaffNotBusyState: payload,
  }),
  [Actions.getStaffNotBusyFailure]: (state, { payload }) => ({
    ...state,
    isGetStaffNotBusyRequest: false,
    isGetStaffNotBusySuccess: false,
    isGetStaffNotBusyFailure: true,
    errorMessages: payload,
  }),

  // #endregion

  // #region
  [Actions.resetStaffState]: () => initialState,
  // #endregion
}, initialState);

export default reducer;
