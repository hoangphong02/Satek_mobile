// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

import * as Actions from './actions';

const initialState = {
  //
  isGetProfileUserRequest: false,
  isGetProfileUserSuccess: false,
  isGetProfileUserFailure: false,
  profileUser: {},
  //
  isUpdateInformationUserRequest: false,
  isUpdateInformationUserSuccess: false,
  isUpdateInformationUserFailure: false,
  //
  isGetVacationUserRequest: false,
  isGetVacationUserSuccess: false,
  isGetVacationUserFailure: false,
  listVacation: {},
  //
  isGetScheduleUserRequest: false,
  isGetScheduleUserSuccess: false,
  isGetScheduleUserFailure: false,
  listSchedule: {},
  //
  isGetWorkTrackingUserRequest: false,
  isGetWorkTrackingUserSuccess: false,
  isGetWorkTrackingUserFailure: false,
  listWorkTracking: {},
  //
  isGetAllNotificationsRequest: false,
  isGetAllNotificationsSuccess: false,
  isGetAllNotificationsFailure: false,
  listNotifications: {},
  //
  isChangeStatusNotificationRequest: false,
  isChangeStatusNotificationSuccess: false,
  isChangeStatusNotificationFailure: false,
  //
  isGetConfigCheckInRequest: false,
  isGetConfigCheckInSuccess: false,
  isGetConfigCheckInFailure: false,
  configCheckInState: {},
  //
  isGetDetailConfigCheckInRequest: false,
  isGetDetailConfigCheckInSuccess: false,
  isGetDetailConfigCheckInFailure: false,
  detailConfigCheckInState: {},
  //
  isSaveConfigCheckInRequest: false,
  isSaveConfigCheckInSuccess: false,
  isSaveConfigCheckInFailure: false,
  //
  isGetConfigUserRequest: false,
  isGetConfigUserSuccess: false,
  isGetConfigUserFailure: false,
  responseGetConfigUser: {},
  //
  isSaveConfigUserRequest: false,
  isSaveConfigUserSuccess: false,
  isSaveConfigUserFailure: false,
  //
  isResetPasswordUserRequest: false,
  isResetPasswordUserSuccess: false,
  isResetPasswordUserFailure: false,
  //
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get profile user
    [Actions.getProfileUserRequest]: (state) => ({
      ...state,
      isGetProfileUserRequest: true,
      isGetProfileUserSuccess: false,
      isGetProfileUserFailure: false,
    }),
    [Actions.getProfileUserSuccess]: (state, { payload }) => ({
      ...state,
      isGetProfileUserRequest: false,
      isGetProfileUserSuccess: true,
      isGetProfileUserFailure: false,
      profileUser: payload,
    }),
    [Actions.getProfileUserFailure]: (state, { payload }) => ({
      ...state,
      isGetProfileUserRequest: false,
      isGetProfileUserSuccess: false,
      isGetProfileUserFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetProfileUserState]: (state) => ({
      ...state,
      isGetProfileUserRequest: false,
      isGetProfileUserSuccess: false,
      isGetProfileUserFailure: false,
      profileUser: {},
      errorMessages: [],
    }),
    // #endregion
    // #region : Update information user
    [Actions.updateInformationUserRequest]: (state) => ({
      ...state,
      isUpdateInformationUserRequest: true,
      isUpdateInformationUserSuccess: false,
      isUpdateInformationUserFailure: false,
    }),
    [Actions.updateInformationUserSuccess]: (state) => ({
      ...state,
      isUpdateInformationUserRequest: false,
      isUpdateInformationUserSuccess: true,
      isUpdateInformationUserFailure: false,
    }),
    [Actions.updateInformationUserFailure]: (state, { payload }) => ({
      ...state,
      isUpdateInformationUserRequest: false,
      isUpdateInformationUserSuccess: false,
      isUpdateInformationUserFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateInformationUser]: (state) => ({
      ...state,
      isUpdateInformationUserRequest: false,
      isUpdateInformationUserSuccess: false,
      isUpdateInformationUserFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : get list vacation
    [Actions.getVacationUserRequest]: (state) => ({
      ...state,
      isGetVacationUserRequest: true,
      isGetVacationUserSuccess: false,
      isGetVacationUserFailure: false,
    }),
    [Actions.getVacationUserSuccess]: (state, { payload }) => ({
      ...state,
      isGetVacationUserRequest: false,
      isGetVacationUserSuccess: true,
      isGetVacationUserFailure: false,
      listVacation: payload,
    }),
    [Actions.getVacationUserFailure]: (state, { payload }) => ({
      ...state,
      isGetVacationUserRequest: false,
      isGetVacationUserSuccess: false,
      isGetVacationUserFailure: true,
      errorMessages: payload,
    }),
    // #region

    // #region
    [Actions.getScheduleUserRequest]: (state) => ({
      ...state,
      isGetScheduleUserRequest: true,
      isGetScheduleUserSuccess: false,
      isGetScheduleUserFailure: false,
    }),
    [Actions.getScheduleUserSuccess]: (state, { payload }) => ({
      ...state,
      isGetScheduleUserRequest: false,
      isGetScheduleUserSuccess: true,
      isGetScheduleUserFailure: false,
      listSchedule: payload,
    }),
    [Actions.getScheduleUserFailure]: (state, { payload }) => ({
      ...state,
      isGetScheduleUserRequest: false,
      isGetScheduleUserSuccess: false,
      isGetScheduleUserFailure: true,
      errorMessages: payload,
    }),
    // #endregion

    // #region
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
      listWorkTracking: payload,
    }),
    [Actions.getWorkTrackingUserFailure]: (state, { payload }) => ({
      ...state,
      isGetWorkTrackingUserRequest: false,
      isGetWorkTrackingUserSuccess: false,
      isGetWorkTrackingUserFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region
    [Actions.getAllNotificationRequest]: (state) => ({
      ...state,
      isGetAllNotificationsRequest: true,
      isGetAllNotificationsSuccess: false,
      isGetAllNotificationsFailure: false,
    }),
    [Actions.getAllNotificationSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllNotificationsRequest: false,
      isGetAllNotificationsSuccess: true,
      isGetAllNotificationsFailure: false,
      listNotifications: payload,
    }),
    [Actions.getAllNotificationFailure]: (state, { payload }) => ({
      ...state,
      isGetAllNotificationsRequest: false,
      isGetAllNotificationsSuccess: false,
      isGetAllNotificationsFailure: true,
      errorMessages: payload,
    }),
    // #endregion

    // #region
    [Actions.changeStatusNotificationRequest]: (state) => ({
      ...state,
      isChangeStatusNotificationRequest: true,
      isChangeStatusNotificationSuccess: false,
      isChangeStatusNotificationFailure: false,
    }),
    [Actions.changeStatusNotificationSuccess]: (state) => ({
      ...state,
      isChangeStatusNotificationRequest: false,
      isChangeStatusNotificationSuccess: true,
      isChangeStatusNotificationFailure: false,
    }),
    [Actions.changeStatusNotificationFailure]: (state, { payload }) => ({
      ...state,
      isChangeStatusNotificationRequest: false,
      isChangeStatusNotificationSuccess: false,
      isChangeStatusNotificationFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetChangeStatusNotificationState]: (state) => ({
      ...state,
      isChangeStatusNotificationRequest: false,
      isChangeStatusNotificationSuccess: false,
      isChangeStatusNotificationFailure: false,
      errorMessages: [],
    }),
    // #endregion

    // #region get config check in
    [Actions.getConfigCheckInRequest]: (state) => ({
      ...state,
      isGetConfigCheckInRequest: true,
      isGetConfigCheckInSuccess: false,
      isGetConfigCheckInFailure: false,
    }),
    [Actions.getConfigCheckInSuccess]: (state, { payload }) => ({
      ...state,
      isGetConfigCheckInRequest: false,
      isGetConfigCheckInSuccess: true,
      isGetConfigCheckInFailure: false,
      configCheckInState: payload,
    }),
    [Actions.getConfigCheckInFailure]: (state, { payload }) => ({
      ...state,
      isGetConfigCheckInRequest: false,
      isGetConfigCheckInSuccess: false,
      isGetConfigCheckInFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region get config check in
    [Actions.getDetailConfigCheckInRequest]: (state) => ({
      ...state,
      isDetailGetConfigCheckInRequest: true,
      isDetailGetConfigCheckInSuccess: false,
      isDetailGetConfigCheckInFailure: false,
    }),
    [Actions.getDetailConfigCheckInSuccess]: (state, { payload }) => ({
      ...state,
      isDetailGetConfigCheckInRequest: false,
      isDetailGetConfigCheckInSuccess: true,
      isDetailGetConfigCheckInFailure: false,
      detailConfigCheckInState: payload,
    }),
    [Actions.getDetailConfigCheckInFailure]: (state, { payload }) => ({
      ...state,
      isDetailGetConfigCheckInRequest: false,
      isDetailGetConfigCheckInSuccess: false,
      isDetailGetConfigCheckInFailure: true,
      errorMessages: payload,
    }),
    // #endregion

    // #region
    [Actions.saveConfigCheckInRequest]: (state) => ({
      ...state,
      isSaveConfigCheckInRequest: true,
      isSaveConfigCheckInSuccess: false,
      isSaveConfigCheckInFailure: false,
    }),
    [Actions.saveConfigCheckInSuccess]: (state) => ({
      ...state,
      isSaveConfigCheckInRequest: false,
      isSaveConfigCheckInSuccess: true,
      isSaveConfigCheckInFailure: false,
    }),
    [Actions.saveConfigCheckInFailure]: (state, { payload }) => ({
      ...state,
      isSaveConfigCheckInRequest: false,
      isSaveConfigCheckInSuccess: false,
      isSaveConfigCheckInFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetSaveConfigCheckInState]: (state) => ({
      ...state,
      isSaveConfigCheckInRequest: false,
      isSaveConfigCheckInSuccess: false,
      isSaveConfigCheckInFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region
    [Actions.resetPasswordUserRequest]: (state) => ({
      ...state,
      isResetPasswordUserRequest: true,
      isResetPasswordUserSuccess: false,
      isResetPasswordUserFailure: false,
    }),
    [Actions.resetPasswordUserSuccess]: (state) => ({
      ...state,
      isResetPasswordUserRequest: false,
      isResetPasswordUserSuccess: true,
      isResetPasswordUserFailure: false,
    }),
    [Actions.resetPasswordUserFailure]: (state, { payload }) => ({
      ...state,
      isResetPasswordUserRequest: false,
      isResetPasswordUserSuccess: false,
      isResetPasswordUserFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetResetPasswordState]: (state) => ({
      ...state,
      isResetPasswordUserRequest: false,
      isResetPasswordUserSuccess: false,
      isResetPasswordUserFailure: false,
      errorMessages: [],
    }),
    // #endregion

    // #region get config user
    [Actions.getConfigUserRequest]: (state) => ({
      ...state,
      isGetConfigUserRequest: true,
      isGetConfigUserSuccess: false,
      isGetConfigUserFailure: false,
    }),
    [Actions.getConfigUserSuccess]: (state, { payload }) => ({
      ...state,
      isGetConfigUserRequest: false,
      isGetConfigUserSuccess: true,
      isGetConfigUserFailure: false,
      responseGetConfigUser: payload,
    }),
    [Actions.getConfigUserFailure]: (state, { payload }) => ({
      ...state,
      isGetConfigUserRequest: false,
      isGetConfigUserSuccess: false,
      isGetConfigUserFailure: true,
      errorMessages: payload,
    }),
    // #endregion

    // #region save config
    [Actions.saveConfigUserRequest]: (state) => ({
      ...state,
      isSaveConfigUserRequest: true,
      isSaveConfigUserSuccess: false,
      isSaveConfigUserFailure: false,
    }),
    [Actions.saveConfigUserSuccess]: (state) => ({
      ...state,
      isSaveConfigUserRequest: false,
      isSaveConfigUserSuccess: true,
      isSaveConfigUserFailure: false,
    }),
    [Actions.saveConfigUserFailure]: (state, { payload }) => ({
      ...state,
      isSaveConfigUserRequest: false,
      isSaveConfigUserSuccess: false,
      isSaveConfigUserFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetSaveConfigUserState]: (state) => ({
      ...state,
      isSaveConfigUserRequest: false,
      isSaveConfigUserSuccess: false,
      isSaveConfigUserFailure: false,
      errorMessages: [],
    }),

    // #endregion

    // #region : Local
    [Actions.resetUserState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
