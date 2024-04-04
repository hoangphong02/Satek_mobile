/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from 'redux-actions';

export const createShopRequest = createAction('CREATE_SHOP_REQUEST');
export const createShopSuccess = createAction('CREATE_SHOP_SUCCESS');
export const createShopFailure = createAction('CREATE_SHOP_FAILURE');
export const resetCreateShopState = createAction('RESET_CREATE_SHOP_STATE');

export const updateShopRequest = createAction('UPDATE_SHOP_REQUEST');
export const updateShopSuccess = createAction('UPDATE_SHOP_SUCCESS');
export const updateShopFailure = createAction('UPDATE_SHOP_FAILURE');
export const resetUpdateShopState = createAction('RESET_UPDATE_SHOP_STATE');

export const getShopRequest = createAction('GET_SHOP_REQUEST');
export const getShopSuccess = createAction('GET_SHOP_SUCCESS');
export const getShopFailure = createAction('GET_SHOP_FAILURE');

export const resetPasswordShopRequest = createAction('RESET_RESET_SHOP_REQUEST');
export const resetPasswordShopSuccess = createAction('RESET_RESET_SHOP_SUCCESS');
export const resetPasswordShopFailure = createAction('RESET_RESET_SHOP_FAILURE');
export const resetResetPasswordShopState = createAction('RESET_RESET_RESET_SHOP_STATE');
export const resetResetPasswordShop = createAction('RESET_RESET_PASSWORD_SHOP');

export const saveConfigShopRequest = createAction('SAVE_CONFIG_SHOP_REQUEST');
export const saveConfigShopSuccess = createAction('SAVE_CONFIG_SHOP_SUCCESS');
export const saveConfigShopFailure = createAction('SAVE_CONFIG_SHOP_FAILURE');
export const resetSaveConfigShopState = createAction('RESET_SAVE_CONFIG_SHOP_STATE');

export const resetShopState = createAction('RESET_SHOP_STATE');
