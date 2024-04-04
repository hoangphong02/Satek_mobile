// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const updateFirstCallApiNotificationRequest = createAction('updateFirstCallApiNotificationRequest');

export const getConfigRequest = createAction('GET_CONFIG_REQUEST');
export const getConfigSuccess = createAction('GET_CONFIG_SUCCESS');
export const getConfigFailure = createAction('GET_CONFIG_FAILURE');

export const saveConfigLalaRequest = createAction('SAVE_CONFIG_LALA_REQUEST');
export const saveConfigLalaSuccess = createAction('SAVE_CONFIG_LALA_SUCCESS');
export const saveConfigLalaFailure = createAction('SAVE_CONFIG_LALA_FAILURE');
export const resetSaveConfigLalaState = createAction('RESET_SAVE_CONFIG_LALA_STATE');

export const resetConfigState = createAction('RESET_CONFIG_STATE');
