// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getListEmployeesRequest = createAction(
  'GET_LIST_EMPLOYEES_REQUEST',
);
export const getListEmployeesSuccess = createAction(
  'GET_LIST_EMPLOYEES_SUCCESS',
);
export const getListEmployeesFailure = createAction(
  'GET_LIST_EMPLOYEES_FAILURE',
);

export const addEmployeeRequest = createAction('ADD_EMPLOYEE_REQUEST');
export const addEmployeeSuccess = createAction('ADD_EMPLOYEE_SUCCESS');
export const addEmployeeFailure = createAction('ADD_EMPLOYEE_FAILURE');

export const editEmployeeRequest = createAction('EDIT_EMPLOYEE_REQUEST');
export const editEmployeeSuccess = createAction('EDIT_EMPLOYEE_SUCCESS');
export const editEmployeeFailure = createAction('EDIT_EMPLOYEE_FAILURE');

export const deleteEmployeeRequest = createAction('DELETE_EMPLOYEE_REQUEST');
export const deleteEmployeeSuccess = createAction('DELETE_EMPLOYEE_SUCCESS');
export const deleteEmployeeFailure = createAction('DELETE_EMPLOYEE_FAILURE');

export const getDetailEmployeeRequest = createAction('GET_EMPLOYEE_REQUEST');
export const getDetailEmployeeSuccess = createAction('GET_EMPLOYEE_SUCCESS');
export const getDetailEmployeeFailure = createAction('GET_EMPLOYEE_FAILURE');

export const checkEmailExistRequest = createAction('CHECK_EMAIL_EXIST_REQUEST');
export const checkEmailExistSuccess = createAction('CHECK_EMAIL_EXIST_SUCCESS');
export const checkEmailExistFailure = createAction('CHECK_EMAIL_EXIST_FAILURE');

export const resetPasswordEmployeeRequest = createAction('RESET_PASSWORD_EMPLOYEE_REQUEST');
export const resetPasswordEmployeeSuccess = createAction('RESET_PASSWORD_EMPLOYEE_SUCCESS');
export const resetPasswordEmployeeFailure = createAction('RESET_PASSWORD_EMPLOYEE_FAILURE');

export const resetResetPasswordEmployeeState = createAction('RESET_RESET_PASSWORD_EMPLOYEE_STATE');
export const resetAddEmployeeState = createAction('RESET_ADD_EMPLOYEE_STATE');
export const resetEditEmployeeState = createAction('RESET_EDIT_EMPLOYEE_STATE');
export const resetDeleteEmployeeState = createAction('RESET_DELETE_EMPLOYEE_STATE');
export const resetDetailEmployeeState = createAction('RESET_DETAIL_EMPLOYEE_STATE');
export const resetCheckEmailExistState = createAction('RESET_CHECK_EMAIL_EXIST_STATE');
export const resetEmployeeState = createAction('RESET_EMPLOYEE_STATE');
