/* eslint-disable import/no-extraneous-dependencies */
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  //
  isGetAllDishCancelReportRequest: false,
  isGetAllDishCancelReportSuccess: false,
  isGetAllDishCancelReportFailure: false,
  listDishCancelReportState: {},
  //
  //
  isGetAllDishCancelUserReportRequest: false,
  isGetAllDishCancelUserReportSuccess: false,
  isGetAllDishCancellUserReportFailure: false,
  listDishCancelUserReportState: {},
  //
  errorMessages: [],
};

const reducer = handleActions({
  // #Report list Report
  [Actions.getAllDishCancelReportRequest]: (state) => ({
    ...state,
    isGetAllDishCancelReportRequest: true,
    isGetAllDishCancelReportSuccess: false,
    isGetAllDishCancellReportFailure: false,
  }),
  [Actions.getAllDishCancelReportSuccess]: (state, { payload }) => ({
    ...state,
    isGetAllDishCancelReportRequest: false,
    isGetAllDishCancelReportSuccess: true,
    isGetAllDishCancelReportFailure: false,
    listDishCancelReportState: payload,
  }),
  [Actions.getAllDishCancelReportFailure]: (state, { payload }) => ({
    ...state,
    isGetAllDishCancelReportRequest: false,
    isGetAllDishCancelReportSuccess: false,
    isGetAllDishCancelReportFailure: true,
    errorMessages: payload,
  }),
  // #endReport

  // #Report user Report
  [Actions.getAllDishCancelUserReportRequest]: (state) => ({
    ...state,
    isGetAllDishCancelUserReportRequest: true,
    isGetAllDishCancelUserReportSuccess: false,
    isGetAllDishCancellUserReportFailure: false,
  }),
  [Actions.getAllDishCancelUserReportSuccess]: (state, { payload }) => ({
    ...state,
    isGetAllDishCancelUserReportRequest: false,
    isGetAllDishCancelUserReportSuccess: true,
    isGetAllDishCancelUserReportFailure: false,
    listDishCancelUserReportState: payload,
  }),
  [Actions.getAllDishCancelUserReportFailure]: (state, { payload }) => ({
    ...state,
    isGetAllDishCancelUserReportRequest: false,
    isGetAllDishCancelUserReportSuccess: false,
    isGetAllDishCancelUserReportFailure: true,
    errorMessages: payload,
  }),
  // #endReport

  // #Report local
  [Actions.resetReportState]: () => initialState,
  // #endReport
}, initialState);

export default reducer;
