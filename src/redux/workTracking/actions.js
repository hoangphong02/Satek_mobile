/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from 'redux-actions';

export const requireCheckInRequest = createAction('REQUIRE_CHECK_IN_REQUEST');
export const requireCheckInSuccess = createAction('REQUIRE_CHECK_IN_SUCCESS');
export const requireCheckInFailure = createAction('REQUIRE_CHECK_IN_FAILURE');
export const resetRequireCheckInState = createAction('RESET_REQUIRE_CHECK_IN_STATE');

export const checkoutRequest = createAction('CHECKOUT_REQUEST');
export const checkoutSuccess = createAction('CHECKOUT_SUCCESS');
export const checkoutFailure = createAction('CHECKOUT_FAILURE');
export const resetCheckoutState = createAction('RESET_CHECKOUT_STATE');

export const getAllWorkPlaceInWorkTrackingRequest = createAction('GET_ALL_WORK_PLACE_IN_WORK_TRACKING_REQUEST');
export const getAllWorkPlaceInWorkTrackingSuccess = createAction('GET_ALL_WORK_PLACE_IN_WORK_TRACKING_SUCCESS');
export const getAllWorkPlaceInWorkTrackingFailure = createAction('GET_ALL_WORK_PLACE_IN_WORK_TRACKING_FAILURE');

export const getWorkTrackingUserRequest = createAction('GET_WORK_TRACKING_USER_REQUEST');
export const getWorkTrackingUserSuccess = createAction('GET_WORK_TRACKING_USER_SUCCESS');
export const getWorkTrackingUserFailure = createAction('GET_WORK_TRACKING_USER_FAILURE');

export const getAllWorkTrackingRequest = createAction('GET_ALL_WORK_TRACKING_REQUEST');
export const getAllWorkTrackingSuccess = createAction('GET_ALL_WORK_TRACKING_SUCCESS');
export const getAllWorkTrackingFailure = createAction('GET_ALL_WORK_TRACKING_FAILURE');

export const getAllTimekeepingRequest = createAction('GET_ALL_TIMEKEEPING_REQUEST');
export const getAllTimekeepingSuccess = createAction('GET_ALL_TIMEKEEPING_SUCCESS');
export const getAllTimekeepingFailure = createAction('GET_ALL_TIMEKEEPING_FAILURE');

export const exportExcelTimekeepingRequest = createAction('EXPORT_EXCEL_TIMEKEEPING_REQUEST');
export const exportExcelTimekeepingSuccess = createAction('EXPORT_EXCEL_TIMEKEEPING_SUCCESS');
export const exportExcelTimekeepingFailure = createAction('EXPORT_EXCEL_TIMEKEEPING_FAILURE');
export const resetExportExcelTimekeeping = createAction('RESET_EXPORT_EXCEL_TIMEKEEPING');

export const resetWorkTrackingState = createAction('RESET_WORK_TRACKING_STATE');
