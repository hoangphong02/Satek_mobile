/* eslint-disable import/no-extraneous-dependencies */
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  isRequireCheckInRequest: false,
  isRequireCheckInSuccess: false,
  isRequireCheckInFailure: false,

  isCheckoutRequest: false,
  isCheckoutSuccess: false,
  isCheckoutFailure: false,

  isGetAllWorkPlaceRequest: false,
  isGetAllWorkPlaceSuccess: false,
  isGetAllWorkPlaceFailure: false,
  listWorkPlaceState: {},

  isGetWorkTrackingUserRequest: false,
  isGetWorkTrackingUserSuccess: false,
  isGetWorkTrackingUserFailure: false,
  workTrackingUser: {},

  isGetAllWorkTrackingRequest: false,
  isGetAllWorkTrackingSuccess: false,
  isGetAllWorkTrackingFailure: false,
  listWorkTrackingState: {},

  //
  isGetAllTimekeepingRequest: false,
  isGetAllTimekeepingSuccess: false,
  isGetAllTimekeepingFailure: false,
  listTimekeeping: {},
  // Export excel timekeeping
  isExportExcelTimekeepingRequest: false,
  isExportExcelTimekeepingSuccess: false,
  isExportExcelTimekeepingFailure: false,
  exportExcelTimekeepingState: {},
  //
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region
    [Actions.requireCheckInRequest]: (state) => ({
      ...state,
      isRequireCheckInRequest: true,
      isRequireCheckInSuccess: false,
      isRequireCheckInFailure: false,
    }),
    [Actions.requireCheckInSuccess]: (state) => ({
      ...state,
      isRequireCheckInRequest: false,
      isRequireCheckInSuccess: true,
      isRequireCheckInFailure: false,
    }),
    [Actions.requireCheckInFailure]: (state, { payload }) => ({
      ...state,
      isRequireCheckInRequest: false,
      isRequireCheckInSuccess: false,
      isRequireCheckInFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetRequireCheckInState]: (state) => ({
      ...state,
      isRequireCheckInRequest: false,
      isRequireCheckInSuccess: false,
      isRequireCheckInFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region
    [Actions.checkoutRequest]: (state) => ({
      ...state,
      isCheckoutRequest: true,
      isCheckoutSuccess: false,
      isCheckoutFailure: false,
    }),
    [Actions.checkoutSuccess]: (state) => ({
      ...state,
      isCheckoutRequest: false,
      isCheckoutSuccess: true,
      isCheckoutFailure: false,
    }),
    [Actions.checkoutFailure]: (state, { payload }) => ({
      ...state,
      isCheckoutRequest: false,
      isCheckoutSuccess: false,
      isCheckoutFailure: false,
      errorMessages: payload,
    }),
    [Actions.resetCheckoutState]: (state) => ({
      ...state,
      isCheckoutRequest: false,
      isCheckoutSuccess: false,
      isCheckoutFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region
    [Actions.getAllWorkPlaceInWorkTrackingRequest]: (state) => ({
      ...state,
      isGetAllWorkPlaceRequest: true,
      isGetAllWorkPlaceSuccess: false,
      isGetAllWorkPlaceFailure: false,
    }),
    [Actions.getAllWorkPlaceInWorkTrackingSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllWorkPlaceRequest: false,
      isGetAllWorkPlaceSuccess: true,
      isGetAllWorkPlaceFailure: false,
      listWorkPlaceState: payload,
    }),
    [Actions.getAllWorkPlaceInWorkTrackingFailure]: (state, { payload }) => ({
      ...state,
      isGetAllWorkPlaceRequest: false,
      isGetAllWorkPlaceSuccess: false,
      isGetAllWorkPlaceFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region: work tracking user
    [Actions.getWorkTrackingUserRequest]: (state) => ({
      ...state,
      isGetWorkTrackingUserRequest: true,
      isGetWorkTrackingUserSuccess: false,
      isGetWorkTrackingUserFailure: false,
    }),
    [Actions.getWorkTrackingUserSuccess]: (state, { payload }) => ({
      ...state,
      isGetWorkTrackingUserRequest: false,
      isGetWorkTrackingUserSuccess: true,
      isGetWorkTrackingUserFailure: false,
      workTrackingUser: payload,
    }),
    [Actions.getWorkTrackingUserFailure]: (state, { payload }) => ({
      ...state,
      isGetWorkTrackingUserRequest: false,
      isGetWorkTrackingUserSuccess: false,
      isGetWorkTrackingUserFailure: true,
      errorMessages: payload,
    }),
    // #endregion

    // #region : work tracking
    [Actions.getAllWorkTrackingRequest]: (state) => ({
      ...state,
      isGetAllWorkTrackingRequest: true,
      isGetAllWorkTrackingSuccess: false,
      isGetAllWorkTrackingFailure: false,
    }),
    [Actions.getAllWorkTrackingSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllWorkTrackingRequest: false,
      isGetAllWorkTrackingSuccess: true,
      isGetAllWorkTrackingFailure: false,
      listWorkTrackingState: payload,
    }),
    [Actions.getAllWorkTrackingFailure]: (state, { payload }) => ({
      ...state,
      isGetAllWorkTrackingRequest: false,
      isGetAllWorkTrackingSuccess: false,
      isGetAllWorkTrackingFailure: true,
      errorMessages: payload,
    }),
    // #endregion

    // #region
    [Actions.getAllTimekeepingRequest]: (state) => ({
      ...state,
      isGetAllTimekeepingRequest: true,
      isGetAllTimekeepingSuccess: false,
      isGetAllTimekeepingFailure: false,
    }),
    [Actions.getAllTimekeepingSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllTimekeepingRequest: false,
      isGetAllTimekeepingSuccess: true,
      isGetAllTimekeepingFailure: false,
      listTimekeeping: payload,
    }),
    [Actions.getAllTimekeepingFailure]: (state, { payload }) => ({
      ...state,
      isGetAllTimekeepingRequest: false,
      isGetAllTimekeepingSuccess: false,
      isGetAllTimekeepingFailure: true,
      errorMessages: payload,
    }),
    // #endregion

    // #region Export excel timekeeping
    [Actions.exportExcelTimekeepingRequest]: (state) => ({
      ...state,
      isExportExcelTimekeepingRequest: true,
      isExportExcelTimekeepingSuccess: false,
      isExportExcelTimekeepingFailure: false,
    }),
    [Actions.exportExcelTimekeepingSuccess]: (state, { payload }) => ({
      ...state,
      isExportExcelTimekeepingRequest: false,
      isExportExcelTimekeepingSuccess: true,
      isExportExcelTimekeepingFailure: false,
      exportExcelTimekeepingState: payload,
    }),
    [Actions.exportExcelTimekeepingFailure]: (state, { payload }) => ({
      ...state,
      isExportExcelTimekeepingRequest: false,
      isExportExcelTimekeepingSuccess: false,
      isExportExcelTimekeepingFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetExportExcelTimekeeping]: (state) => ({
      ...state,
      isExportExcelTimekeepingRequest: false,
      isExportExcelTimekeepingSuccess: false,
      isExportExcelTimekeepingFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region
    [Actions.resetWorkTrackingState]: () => initialState,
    // #endregion
  }, initialState,
);
export default reducer;
