// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllSalersRequest = createAction('GET_ALL_SALERS_REQUEST');
export const getAllSalersSuccess = createAction('GET_ALL_SALERS_SUCCESS');
export const getAllSalersFailure = createAction('GET_ALL_SALERS_FAILURE');

export const createSalerRequest = createAction('CREATE_SALER_REQUEST');
export const createSalerSuccess = createAction('CREATE_SALER_SUCCESS');
export const createSalerFailure = createAction('CREATE_SALER_FAILURE');
export const resetCreateSaler = createAction('RESET_CREATE_SALER');

export const updateSalerRequest = createAction('UPDATE_SALER_REQUEST');
export const updateSalerSuccess = createAction('UPDATE_SALER_SUCCESS');
export const updateSalerFailure = createAction('UPDATE_SALER_FAILURE');
export const resetUpdateSaler = createAction('RESET_UPDATE_SALER');

export const deleteSalerRequest = createAction('DELETE_SALER_REQUEST');
export const deleteSalerSuccess = createAction('DELETE_SALER_SUCCESS');
export const deleteSalerFailure = createAction('DELETE_SALER_FAILURE');
export const resetDeleteSaler = createAction('RESET_DELETE_SALER');

export const resetPasswordSalerRequest = createAction('RESET_PASSWORD_SALER_REQUEST');
export const resetPasswordSalerSuccess = createAction('RESET_PASSWORD_SALER_SUCCESS');
export const resetPasswordSalerFailure = createAction('RESET_PASSWORD_SALER_FAILURE');
export const resetResetPasswordSaler = createAction('RESET_RESET_PASSWORD_SALER');

export const resetSalerState = createAction('RESET_SALER_STATE');
