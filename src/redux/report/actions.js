/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from 'redux-actions';

export const getAllDishCancelReportRequest = createAction('GET_ALL_DISH_CANCEL_REPORT_REQUEST');
export const getAllDishCancelReportSuccess = createAction('GET_ALL_DISH_CANCEL_REPORT_SUCCESS');
export const getAllDishCancelReportFailure = createAction('GET_ALL_DISH_CANCEL_REPORT_FAILURE');

export const getAllDishCancelUserReportRequest = createAction('GET_ALL_DISH_CANCEL_USER_REPORT_REQUEST');
export const getAllDishCancelUserReportSuccess = createAction('GET_ALL_DISH_CANCEL_USER_REPORT_SUCCESS');
export const getAllDishCancelUserReportFailure = createAction('GET_ALL_DISH_CANCEL_USER_REPORT_FAILURE');

export const resetReportState = createAction('RESET_REPORT_STATE');
