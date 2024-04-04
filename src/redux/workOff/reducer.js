// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  isCreateWorkOffRequest: false,
  isCreateWorkOffSuccess: false,
  isCreateWorkOffFailure: false,
  //
  isUpdateWorkOffRequest: false,
  isUpdateWorkOffSuccess: false,
  isUpdateWorkOffFailure: false,
  //
  isGetWorkOffRequest: false,
  isGetWorkOffSuccess: false,
  isGetWorkOffFailure: false,
  getWorkOffResponse: {},
  //
  isDeleteWorkOffRequest: false,
  isDeleteWorkOffSuccess: false,
  isDeleteWorkOffFailure: false,
  //
  isAcceptWorkOffRequest: false,
  isAcceptWorkOffSuccess: false,
  isAcceptWorkOffFailure: false,
  //
  errorMessages: [],
};

const reducer = handleActions({
  // #region
  [Actions.createWorkOffRequest]: (state) => ({
    ...state,
    isCreateWorkOffRequest: true,
    isCreateWorkOffSuccess: false,
    isCreateWorkOffFailure: false,
  }),
  [Actions.createWorkOffSuccess]: (state) => ({
    ...state,
    isCreateWorkOffRequest: false,
    isCreateWorkOffSuccess: true,
    isCreateWorkOffFailure: false,
  }),
  [Actions.createWorkOffFailure]: (state, { payload }) => ({
    ...state,
    isCreateWorkOffRequest: false,
    isCreateWorkOffSuccess: false,
    isCreateWorkOffFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetCreateWorkOffState]: (state) => ({
    ...state,
    isCreateWorkOffRequest: false,
    isCreateWorkOffSuccess: false,
    isCreateWorkOffFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region
  [Actions.updateWorkOffRequest]: (state) => ({
    ...state,
    isUpdateWorkOffRequest: true,
    isUpdateWorkOffSuccess: false,
    isUpdateWorkOffFailure: false,
  }),
  [Actions.updateWorkOffSuccess]: (state) => ({
    ...state,
    isUpdateWorkOffRequest: false,
    isUpdateWorkOffSuccess: true,
    isUpdateWorkOffFailure: false,
  }),
  [Actions.updateWorkOffFailure]: (state, { payload }) => ({
    ...state,
    isUpdateWorkOffRequest: false,
    isUpdateWorkOffSuccess: false,
    isUpdateWorkOffFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetUpdateWorkOffState]: (state) => ({
    ...state,
    isUpdateWorkOffRequest: false,
    isUpdateWorkOffSuccess: false,
    isUpdateWorkOffFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region GET
  [Actions.getWorkOffRequest]: (state) => ({
    ...state,
    isGetWorkOffRequest: true,
    isGetWorkOffSuccess: false,
    isGetWorkOffFailure: false,
  }),
  [Actions.getWorkOffSuccess]: (state, { payload }) => ({
    ...state,
    isGetWorkOffRequest: false,
    isGetWorkOffSuccess: true,
    isGetWorkOffFailure: false,
    getWorkOffResponse: payload,
  }),
  [Actions.getWorkOffFailure]: (state, { payload }) => ({
    ...state,
    isGetWorkOffRequest: false,
    isGetWorkOffSuccess: false,
    isGetWorkOffFailure: true,
    errorMessages: payload,
  }),
  // #endregion

  // #region
  [Actions.deleteWorkOffRequest]: (state) => ({
    ...state,
    isDeleteWorkOffRequest: true,
    isDeleteWorkOffSuccess: false,
    isDeleteWorkOffFailure: false,
  }),
  [Actions.deleteWorkOffSuccess]: (state) => ({
    ...state,
    isDeleteWorkOffRequest: false,
    isDeleteWorkOffSuccess: true,
    isDeleteWorkOffFailure: false,
  }),
  [Actions.deleteWorkOffFailure]: (state, { payload }) => ({
    ...state,
    isDeleteWorkOffRequest: false,
    isDeleteWorkOffSuccess: false,
    isDeleteWorkOffFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetDeleteWorkOffState]: (state) => ({
    ...state,
    isDeleteWorkOffRequest: false,
    isDeleteWorkOffSuccess: false,
    isDeleteWorkOffFailure: false,
    errorMessages: [],
  }),
  // #endregion
  // #region
  [Actions.acceptWorkOffRequest]: (state) => ({
    ...state,
    isAcceptWorkOffRequest: true,
    isAcceptWorkOffSuccess: false,
    isAcceptWorkOffFailure: false,
  }),
  [Actions.acceptWorkOffSuccess]: (state) => ({
    ...state,
    isAcceptWorkOffRequest: false,
    isAcceptWorkOffSuccess: true,
    isAcceptWorkOffFailure: false,
  }),
  [Actions.acceptWorkOffFailure]: (state, { payload }) => ({
    ...state,
    isAcceptWorkOffRequest: false,
    isAcceptWorkOffSuccess: false,
    isAcceptWorkOffFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetAcceptWorkOffState]: (state) => ({
    ...state,
    isAcceptWorkOffRequest: false,
    isAcceptWorkOffSuccess: false,
    isAcceptWorkOffFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region
  [Actions.resetWorkOffState]: () => initialState,
  // #endregion
}, initialState);

export default reducer;
