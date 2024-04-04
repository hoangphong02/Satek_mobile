/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from 'redux-actions';

export const createStaffRequest = createAction('CREATE_STAFF_REQUEST');
export const createStaffSuccess = createAction('CREATE_STAFF_SUCCESS');
export const createStaffFailure = createAction('CREATE_STAFF_FAILURE');
export const resetCreateStaffState = createAction('RESET_CREATE_STAFF_STATE');

export const updateStaffRequest = createAction('UPDATE_STAFF_REQUEST');
export const updateStaffSuccess = createAction('UPDATE_STAFF_SUCCESS');
export const updateStaffFailure = createAction('UPDATE_STAFF_FAILURE');
export const resetUpdateStaffState = createAction('RESET_UPDATE_STAFF_STATE');

export const deleteStaffRequest = createAction('DELETE_STAFF_REQUEST');
export const deleteStaffSuccess = createAction('DELETE_STAFF_SUCCESS');
export const deleteStaffFailure = createAction('DELETE_STAFF_FAILURE');
export const resetDeleteStaffState = createAction('RESET_DELETE_STAFF_STATE');

export const resetPasswordStaffRequest = createAction('RESET_RESET_STAFF_REQUEST');
export const resetPasswordStaffSuccess = createAction('RESET_RESET_STAFF_SUCCESS');
export const resetPasswordStaffFailure = createAction('RESET_RESET_STAFF_FAILURE');
export const resetResetPasswordStaffState = createAction('RESET_RESET_RESET_STAFF_STATE');

export const disableStaffRequest = createAction('DISABLE_STAFF_REQUEST');
export const disableStaffSuccess = createAction('DISABLE_STAFF_SUCCESS');
export const disableStaffFailure = createAction('DISABLE_STAFF_FAILURE');
export const resetDisableStaffState = createAction('RESET_DISABLE_STAFF_STATE');

export const getStaffRequest = createAction('GET_STAFF_REQUEST');
export const getStaffSuccess = createAction('GET_STAFF_SUCCESS');
export const getStaffFailure = createAction('GET_STAFF_FAILURE');

export const getListStaffHasRoleRequest = createAction(
  'GET_LIST_STAFF_HAS_ROLE_REQUEST',
);
export const getListStaffHasRoleSuccess = createAction(
  'GET_LIST_STAFF_HAS_ROLE_SUCCESS',
);
export const getListStaffHasRoleFailure = createAction(
  'GET_LIST_STAFF_HAS_ROLE_FAILURE',
);

export const getListStaffNoRoleRequest = createAction(
  'GET_LIST_STAFF_NO_ROLE_REQUEST',
);
export const getListStaffNoRoleSuccess = createAction(
  'GET_LIST_STAFF_NO_ROLE_SUCCESS',
);
export const getListStaffNoRoleFailure = createAction(
  'GET_LIST_STAFF_NO_ROLE_FAILURE',
);
export const resetListStaffNoRoleState = createAction(
  'RESET_LIST_STAFF_NO_ROLE_STATE',
);

export const attachPermissionStaffRequest = createAction('ATTACH_PERMISSION_STAFF_REQUEST');
export const attachPermissionStaffSuccess = createAction('ATTACH_PERMISSION_STAFF_SUCCESS');
export const attachPermissionStaffFailure = createAction('ATTACH_PERMISSION_STAFF_FAILURE');
export const resetAttachPermissionStaffState = createAction('RESET_ATTACH_PERMISSION_STAFF_STATE');

export const paySalaryStaffRequest = createAction('PAY_SALARY_STAFF_REQUEST');
export const paySalaryStaffSuccess = createAction('PAY_SALARY_STAFF_SUCCESS');
export const paySalaryStaffFailure = createAction('PAY_SALARY_STAFF_FAILURE');
export const resetPaySalaryStaffState = createAction('RESET_PAY_SALARY_STAFF_STATE');

export const bonusSalaryStaffRequest = createAction('BONUS_SALARY_STAFF_REQUEST');
export const bonusSalaryStaffSuccess = createAction('BONUS_SALARY_STAFF_SUCCESS');
export const bonusSalaryStaffFailure = createAction('BONUS_SALARY_STAFF_FAILURE');
export const resetBonusSalaryStaffState = createAction('RESET_BONUS_SALARY_STAFF_STATE');

export const deductionSalaryStaffRequest = createAction('DEDUCTION_SALARY_STAFF_REQUEST');
export const deductionSalaryStaffSuccess = createAction('DEDUCTION_SALARY_STAFF_SUCCESS');
export const deductionSalaryStaffFailure = createAction('DEDUCTION_SALARY_STAFF_FAILURE');
export const resetDeductionSalaryStaffState = createAction('RESET_DEDUCTION_SALARY_STAFF_STATE');

export const getStaffNotBusyRequest = createAction('GET_STAFF_NOT_BUSY_REQUEST');
export const getStaffNotBusySuccess = createAction('GET_STAFF_NOT_BUSY_SUCCESS');
export const getStaffNotBusyFailure = createAction('GET_STAFF_NOT_BUSY_FAILURE');

export const resetStaffState = createAction('RESET_STAFF_STATE');
