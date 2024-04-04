/* eslint-disable import/no-extraneous-dependencies */
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  isGetSalaryRequest: false,
  isGetSalarySuccess: false,
  isGetSalaryFailure: false,
  getSalaryResponse: {},
  //
  isCreateSalaryRequest: false,
  isCreateSalarySuccess: false,
  isCreateSalaryFailure: false,
  //
  isGetBalanceRequest: false,
  isGetBalanceSuccess: false,
  isGetBalanceFailure: false,
  getBalanceResponse: {},
  errorMessages: [],
};

const reducer = handleActions({
  // #region
  [Actions.getSalaryRequest]: (state) => ({
    ...state,
    isGetSalaryRequest: true,
    isGetSalarySuccess: false,
    isGetSalaryFailure: false,
  }),
  [Actions.getSalarySuccess]: (state, { payload }) => ({
    ...state,
    isGetSalaryRequest: false,
    isGetSalarySuccess: true,
    isGetSalaryFailure: false,
    getSalaryResponse: payload,
  }),
  [Actions.getSalaryFailure]: (state, { payload }) => ({
    ...state,
    isGetSalaryRequest: false,
    isGetSalarySuccess: false,
    isGetSalaryFailure: true,
    errorMessages: payload,
  }),
  // #endregion

  // #region create salary
  [Actions.createSalaryRequest]: (state) => ({
    ...state,
    isCreateSalaryRequest: true,
    isCreateSalarySuccess: false,
    isCreateSalaryFailure: false,
  }),
  [Actions.createSalarySuccess]: (state) => ({
    ...state,
    isCreateSalaryRequest: false,
    isCreateSalarySuccess: true,
    isCreateSalaryFailure: false,
  }),
  [Actions.createSalaryFailure]: (state, { payload }) => ({
    ...state,
    isCreateSalaryRequest: false,
    isCreateSalarySuccess: false,
    isCreateSalaryFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetCreateSalaryState]: (state) => ({
    ...state,
    isCreateSalaryRequest: false,
    isCreateSalarySuccess: false,
    isCreateSalaryFailure: false,
    errorMessages: [],
  }),
  // #endregion

  [Actions.getBalanceRequest]: (state) => ({
    ...state,
    isGetBalanceRequest: true,
    isGetBalanceSuccess: false,
    isGetBalanceFailure: false,
  }),
  [Actions.getBalanceSuccess]: (state, { payload }) => ({
    ...state,
    isGetBalanceRequest: false,
    isGetBalanceSuccess: true,
    isGetBalanceFailure: false,
    getBalanceResponse: payload,
  }),
  [Actions.getBalanceFailure]: (state, { payload }) => ({
    ...state,
    isGetBalanceRequest: false,
    isGetBalanceSuccess: false,
    isGetBalanceFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetGetBalanceState]: (state) => ({
    ...state,
    isGetBalanceRequest: false,
    isGetBalanceSuccess: false,
    isGetBalanceFailure: false,
    getBalanceResponse: {},
    errorMessages: [],
  }),

  // #region
  [Actions.resetSalaryState]: () => initialState,
  // #endregion
}, initialState);

export default reducer;
