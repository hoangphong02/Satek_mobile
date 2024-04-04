// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  isCreateShopRequest: false,
  isCreateShopSuccess: false,
  isCreateShopFailure: false,
  //
  isUpdateShopRequest: false,
  isUpdateShopSuccess: false,
  isUpdateShopFailure: false,
  //
  isGetShopRequest: false,
  isGetShopSuccess: false,
  isGetShopFailure: false,
  getShopResponse: {},
  //
  isResetPasswordShopRequest: false,
  isResetPasswordShopSuccess: false,
  isResetPasswordShopFailure: false,
  //
  isSaveConfigShopRequest: false,
  isSaveConfigShopSuccess: false,
  isSaveConfigShopFailure: false,
  //
  errorMessages: [],
};

const reducer = handleActions({
  // #region
  [Actions.createShopRequest]: (state) => ({
    ...state,
    isCreateShopRequest: true,
    isCreateShopSuccess: false,
    isCreateShopFailure: false,
  }),
  [Actions.createShopSuccess]: (state) => ({
    ...state,
    isCreateShopRequest: false,
    isCreateShopSuccess: true,
    isCreateShopFailure: false,
  }),
  [Actions.createShopFailure]: (state, { payload }) => ({
    ...state,
    isCreateShopRequest: false,
    isCreateShopSuccess: false,
    isCreateShopFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetCreateShopState]: (state) => ({
    ...state,
    isCreateShopRequest: false,
    isCreateShopSuccess: false,
    isCreateShopFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region
  [Actions.updateShopRequest]: (state) => ({
    ...state,
    isUpdateShopRequest: true,
    isUpdateShopSuccess: false,
    isUpdateShopFailure: false,
  }),
  [Actions.updateShopSuccess]: (state) => ({
    ...state,
    isUpdateShopRequest: false,
    isUpdateShopSuccess: true,
    isUpdateShopFailure: false,
  }),
  [Actions.updateShopFailure]: (state, { payload }) => ({
    ...state,
    isUpdateShopRequest: false,
    isUpdateShopSuccess: false,
    isUpdateShopFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetUpdateShopState]: (state) => ({
    ...state,
    isUpdateShopRequest: false,
    isUpdateShopSuccess: false,
    isUpdateShopFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region GET
  [Actions.getShopRequest]: (state) => ({
    ...state,
    isGetShopRequest: true,
    isGetShopSuccess: false,
    isGetShopFailure: false,
  }),
  [Actions.getShopSuccess]: (state, { payload }) => ({
    ...state,
    isGetShopRequest: false,
    isGetShopSuccess: true,
    isGetShopFailure: false,
    getShopResponse: payload,
  }),
  [Actions.getShopFailure]: (state, { payload }) => ({
    ...state,
    isGetShopRequest: false,
    isGetShopSuccess: false,
    isGetShopFailure: true,
    errorMessages: payload,
  }),
  // #endregion

  // #region : Reset password shop
  [Actions.resetPasswordShopRequest]: (state) => ({
    ...state,
    isResetPasswordShopRequest: true,
    isResetPasswordShopSuccess: false,
    isResetPasswordShopFailure: false,
  }),
  [Actions.resetPasswordShopSuccess]: (state) => ({
    ...state,
    isResetPasswordShopRequest: false,
    isResetPasswordShopSuccess: true,
    isResetPasswordShopFailure: false,
  }),
  [Actions.resetPasswordShopFailure]: (state, { payload }) => ({
    ...state,
    isResetPasswordShopRequest: false,
    isResetPasswordShopSuccess: false,
    isResetPasswordShopFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetResetPasswordShop]: (state) => ({
    ...state,
    isResetPasswordShopRequest: false,
    isResetPasswordShopSuccess: false,
    isResetPasswordShopFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region : Save config shop
  [Actions.saveConfigShopRequest]: (state) => ({
    ...state,
    isSaveConfigShopRequest: true,
    isSaveConfigShopSuccess: false,
    isSaveConfigShopFailure: false,
  }),
  [Actions.saveConfigShopSuccess]: (state) => ({
    ...state,
    isSaveConfigShopRequest: false,
    isSaveConfigShopSuccess: true,
    isSaveConfigShopFailure: false,
  }),
  [Actions.saveConfigShopFailure]: (state, { payload }) => ({
    ...state,
    isSaveConfigShopRequest: false,
    isSaveConfigShopSuccess: false,
    isSaveConfigShopFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetSaveConfigShopState]: (state) => ({
    ...state,
    isSaveConfigShopRequest: false,
    isSaveConfigShopSuccess: false,
    isSaveConfigShopFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region
  [Actions.resetShopState]: () => initialState,
  // #endregion
}, initialState);

export default reducer;
