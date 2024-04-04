// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  isFirstCallApiNotification: true,

  isGetConfigRequest: false,
  isGetConfigSuccess: false,
  isGetConfigFailure: false,
  configState: {},
  //
  isSaveConfigLalaRequest: false,
  isSaveConfigLalaSuccess: false,
  isSaveConfigLalaFailure: false,
  //
  errorMessages: [],
};

const reducer = handleActions({
  [Actions.getConfigRequest]: (state) => ({
    ...state,
    isGetConfigRequest: true,
    isGetConfigSuccess: false,
    isGetConfigFailure: false,
  }),
  [Actions.getConfigSuccess]: (state, { payload }) => ({
    ...state,
    isGetConfigRequest: false,
    isGetConfigSuccess: true,
    isGetConfigFailure: false,
    configState: payload,
  }),
  [Actions.getConfigFailure]: (state, { payload }) => ({
    ...state,
    isGetConfigRequest: false,
    isGetConfigSuccess: false,
    isGetConfigFailure: true,
    errorMessages: payload,
  }),
  //

  [Actions.updateFirstCallApiNotificationRequest]: (state) => ({
    ...state,
    isFirstCallApiNotification: false,
  }),

  [Actions.saveConfigLalaRequest]: (state) => ({
    ...state,
    isSaveConfigLalaRequest: true,
    isSaveConfigLalaSuccess: false,
    isSaveConfigLalaFailure: false,
  }),
  [Actions.saveConfigLalaSuccess]: (state) => ({
    ...state,
    isSaveConfigLalaRequest: false,
    isSaveConfigLalaSuccess: true,
    isSaveConfigLalaFailure: false,
  }),
  [Actions.saveConfigLalaFailure]: (state, { payload }) => ({
    ...state,
    saveConfigLalaRequest: false,
    saveConfigLalaSuccess: false,
    saveConfigLalaFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetSaveConfigLalaState]: (state) => ({
    ...state,
    isSaveConfigLalaRequest: false,
    isSaveConfigLalaSuccess: false,
    isSaveConfigLalaFailure: false,
    errorMessages: [],
  }),
  //
  [Actions.resetConfigState]: () => initialState,
}, initialState);

export default reducer;
