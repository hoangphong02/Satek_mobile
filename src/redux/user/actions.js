// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getProfileUserRequest = createAction('GET_PROFILE_REQUEST');
export const getProfileUserSuccess = createAction('GET_PROFILE_SUCCESS');
export const getProfileUserFailure = createAction('GET_PROFILE_FAILURE');
export const resetProfileUserState = createAction('RESET_PROFILE_USER_STATE');

export const updateInformationUserRequest = createAction(
  'UPDATE_INFORMATION_USER_REQUEST',
);
export const updateInformationUserSuccess = createAction(
  'UPDATE_INFORMATION_USER_SUCCESS',
);
export const updateInformationUserFailure = createAction(
  'UPDATE_INFORMATION_USER_FAILURE',
);

export const getVacationUserRequest = createAction('GET_VACATION_USER_REQUEST');
export const getVacationUserSuccess = createAction('GET_VACATION_USER_SUCCESS');
export const getVacationUserFailure = createAction('GET_VACATION_USER_FAILURE');

export const getScheduleUserRequest = createAction('GET_SCHEDULE_USER_REQUEST');
export const getScheduleUserSuccess = createAction('GET_SCHEDULE_USER_SUCCESS');
export const getScheduleUserFailure = createAction('GET_SCHEDULE_USER_FAILURE');

export const getWorkTrackingUserRequest = createAction('GET_WORK_TRACKINGS_USER_REQUEST');
export const getWorkTrackingUserSuccess = createAction('GET_WORK_TRACKINGS_USER_SUCCESS');
export const getWorkTrackingUserFailure = createAction('GET_WORK_TRACKINGS_USER_FAILURE');

export const getAllNotificationRequest = createAction('GET_ALL_NOTIFICATIONS_REQUEST');
export const getAllNotificationSuccess = createAction('GET_ALL_NOTIFICATIONS_SUCCESS');
export const getAllNotificationFailure = createAction('GET_ALL_NOTIFICATIONS_FAILURE');

export const changeStatusNotificationRequest = createAction('CHANGE_STATUS_NOTIFICATIONS_REQUEST');
export const changeStatusNotificationSuccess = createAction('CHANGE_STATUS_NOTIFICATIONS_SUCCESS');
export const changeStatusNotificationFailure = createAction('CHANGE_STATUS_NOTIFICATIONS_FAILURE');
export const resetChangeStatusNotificationState = createAction('RESET_CHANGE_STATUS_NOTIFICATION_STATE');
export const resetUpdateInformationUser = createAction(
  'RESET_UPDATE_INFORMATION_USER',
);

export const getConfigCheckInRequest = createAction('GET_CONFIG_CHECK_IN_REQUEST');
export const getConfigCheckInSuccess = createAction('GET_CONFIG_CHECK_IN_SUCCESS');
export const getConfigCheckInFailure = createAction('GET_CONFIG_CHECK_IN_FAILURE');

export const getDetailConfigCheckInRequest = createAction('GET_DETAIL_CONFIG_CHECK_IN_REQUEST');
export const getDetailConfigCheckInSuccess = createAction('GET_DETAIL_CONFIG_CHECK_IN_SUCCESS');
export const getDetailConfigCheckInFailure = createAction('GET_DETAIL_CONFIG_CHECK_IN_FAILURE');

export const saveConfigCheckInRequest = createAction('SAVE_CONFIG_CHECK_IN_REQUEST');
export const saveConfigCheckInSuccess = createAction('SAVE_CONFIG_CHECK_IN_SUCCESS');
export const saveConfigCheckInFailure = createAction('SAVE_CONFIG_CHECK_IN_FAILURE');
export const resetSaveConfigCheckInState = createAction('RESET_SAVE_CONFIG_CHECK_IN_STATE');

export const getConfigUserRequest = createAction('GET_CONFIG_USER_REQUEST');
export const getConfigUserSuccess = createAction('GET_CONFIG_USER_SUCCESS');
export const getConfigUserFailure = createAction('GET_CONFIG_USER_FAILURE');

export const saveConfigUserRequest = createAction('SAVE_CONFIG_USER_REQUEST');
export const saveConfigUserSuccess = createAction('SAVE_CONFIG_USER_SUCCESS');
export const saveConfigUserFailure = createAction('SAVE_CONFIG_USER_FAILURE');
export const resetSaveConfigUserState = createAction('RESET_SAVE_CONFIG_USER_STATE');

export const resetPasswordUserRequest = createAction('RESET_PASSWORD_USER_REQUEST');
export const resetPasswordUserSuccess = createAction('RESET_PASSWORD_USER_SUCCESS');
export const resetPasswordUserFailure = createAction('RESET_PASSWORD_USER_FAILURE');
export const resetResetPasswordState = createAction('RESET_RESET_PASSWORD_STATE');

export const resetUserState = createAction('RESET_USER_STATE');
