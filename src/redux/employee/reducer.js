// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

import * as Actions from './actions';

const initialState = {
  isGetListEmployeesRequest: false,
  isGetListEmployeesSuccess: false,
  isGetListEmployeesFailure: false,
  listEmployeesState: {},
  isAddEmployeeRequest: false,
  isAddEmployeeSuccess: false,
  isAddEmployeeFailure: false,
  isEditEmployeeRequest: false,
  isEditEmployeeSuccess: false,
  isEditEmployeeFailure: false,
  isDeleteEmployeeRequest: false,
  isDeleteEmployeeSuccess: false,
  isDeleteEmployeeFailure: false,
  isGetDetailEmployeeRequest: false,
  isGetDetailEmployeeSuccess: false,
  isGetDetailEmployeeFailure: false,
  detailEmployeeState: {},
  isCheckEmailExistRequest: false,
  isCheckEmailExistSuccess: false,
  isCheckEmailExistFailure: false,
  emailExist: false,
  isResetPasswordEmployeeRequest: false,
  isResetPasswordEmployeeSuccess: false,
  isResetPasswordEmployeeFailure: false,
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get list employees
    [Actions.getListEmployeesRequest]: (state) => ({
      ...state,
      isGetListEmployeesRequest: true,
      isGetListEmployeesSuccess: false,
      isGetListEmployeesFailure: false,
    }),
    [Actions.getListEmployeesSuccess]: (state, { payload }) => ({
      ...state,
      isGetListEmployeesRequest: false,
      isGetListEmployeesSuccess: true,
      isGetListEmployeesFailure: false,
      listEmployeesState: payload,
    }),
    [Actions.getListEmployeesFailure]: (state, { payload }) => ({
      ...state,
      isGetListEmployeesRequest: false,
      isGetListEmployeesSuccess: false,
      isGetListEmployeesFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Add employee
    [Actions.addEmployeeRequest]: (state) => ({
      ...state,
      isAddEmployeeRequest: true,
      isAddEmployeeSuccess: false,
      isAddEmployeeFailure: false,
    }),
    [Actions.addEmployeeSuccess]: (state) => ({
      ...state,
      isAddEmployeeRequest: false,
      isAddEmployeeSuccess: true,
      isAddEmployeeFailure: false,
    }),
    [Actions.addEmployeeFailure]: (state, { payload }) => ({
      ...state,
      isAddEmployeeRequest: false,
      isAddEmployeeSuccess: false,
      isAddEmployeeFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetAddEmployeeState]: (state) => ({
      ...state,
      isAddEmployeeRequest: false,
      isAddEmployeeSuccess: false,
      isAddEmployeeFailure: false,
      errorMessages: [],
    }),
    // #endregion

    // #region: edit employee
    [Actions.editEmployeeRequest]: (state) => ({
      ...state,
      isEditEmployeeRequest: true,
      isEditEmployeeSuccess: false,
      isEditEmployeeFailure: false,
    }),
    [Actions.editEmployeeSuccess]: (state) => ({
      ...state,
      isEditEmployeeRequest: false,
      isEditEmployeeSuccess: true,
      isEditEmployeeFailure: false,
    }),
    [Actions.editEmployeeFailure]: (state, { payload }) => ({
      ...state,
      isEditEmployeeRequest: false,
      isEditEmployeeSuccess: false,
      isEditEmployeeFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetEditEmployeeState]: (state) => ({
      ...state,
      isEditEmployeeRequest: false,
      isEditEmployeeSuccess: false,
      isEditEmployeeFailure: false,
      errorMessages: [],
    }),

    // #endregion

    // #region : delete employee

    [Actions.deleteEmployeeRequest]: (state) => ({
      ...state,
      isDeleteEmployeeRequest: true,
      isDeleteEmployeeSuccess: false,
      isDeleteEmployeeFailure: false,
    }),
    [Actions.deleteEmployeeSuccess]: (state) => ({
      ...state,
      isDeleteEmployeeRequest: false,
      isDeleteEmployeeSuccess: true,
      isDeleteEmployeeFailure: false,
    }),
    [Actions.deleteEmployeeFailure]: (state, { payload }) => ({
      ...state,
      isDeleteEmployeeRequest: false,
      isDeleteEmployeeSuccess: false,
      isDeleteEmployeeFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteEmployeeState]: (state) => ({
      ...state,
      isDeleteEmployeeRequest: false,
      isDeleteEmployeeSuccess: false,
      isDeleteEmployeeFailure: false,
      errorMessages: [],
    }),
    // #endregion

    // #region: Get detail employee
    [Actions.getDetailEmployeeRequest]: (state) => ({
      ...state,
      isGetDetailEmployeeRequest: true,
      isGetDetailEmployeeFailure: false,
      isGetDetailEmployeeSuccess: false,
    }),
    [Actions.getDetailEmployeeSuccess]: (state, { payload }) => ({
      ...state,
      isGetDetailEmployeeRequest: false,
      isGetDetailEmployeeSuccess: true,
      isGetDetailEmployeeFailure: false,
      detailEmployeeState: payload,
    }),
    [Actions.getDetailEmployeeFailure]: (state, { payload }) => ({
      ...state,
      isGetDetailEmployeeFailure: true,
      isGetDetailEmployeeRequest: false,
      isGetDetailEmployeeSuccess: false,
      errorMessages: payload,
    }),
    [Actions.resetDetailEmployeeState]: (state) => ({
      ...state,
      isGetDetailEmployeeFailure: false,
      isGetDetailEmployeeRequest: false,
      isGetDetailEmployeeSuccess: false,
      errorMessages: [],

    }),

    // #endregion

    // #region : check email exist
    [Actions.checkEmailExistRequest]: (state) => ({
      ...state,
      isCheckEmailExistRequest: true,
      isCheckEmailExistSuccess: false,
      isCheckEmailExistFailure: false,
    }),
    [Actions.checkEmailExistSuccess]: (state, { payload }) => ({
      ...state,
      isCheckEmailExistRequest: false,
      isCheckEmailExistSuccess: true,
      isCheckEmailExistFailure: false,
      emailExist: payload.data.length > 0,
    }),
    [Actions.checkEmailExistFailure]: (state, { payload }) => ({
      ...state,
      isCheckEmailExistRequest: false,
      isCheckEmailExistSuccess: false,
      isCheckEmailExistFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCheckEmailExistState]: (state) => ({
      ...state,
      isCheckEmailExistFailure: false,
      isCheckEmailExistRequest: false,
      isCheckEmailExistSuccess: false,
      emailExist: false,
      errorMessages: [],
    }),
    // #endregion

    // #region : reset password employee
    [Actions.resetPasswordEmployeeRequest]: (state) => ({
      ...state,
      isResetPasswordEmployeeRequest: true,
      isResetPasswordEmployeeSuccess: false,
      isResetPasswordEmployeeFailure: false,
    }),
    [Actions.resetPasswordEmployeeSuccess]: (state) => ({
      ...state,
      isResetPasswordEmployeeRequest: false,
      isResetPasswordEmployeeSuccess: true,
      isResetPasswordEmployeeFailure: false,
    }),
    [Actions.resetPasswordEmployeeFailure]: (state, { payload }) => ({
      ...state,
      isResetPasswordEmployeeRequest: false,
      isResetPasswordEmployeeSuccess: false,
      isResetPasswordEmployeeFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetResetPasswordEmployeeState]: (state) => ({
      ...state,
      isResetPasswordEmployeeRequest: false,
      isResetPasswordEmployeeSuccess: false,
      isResetPasswordEmployeeFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Local
    [Actions.resetEmployeeState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
