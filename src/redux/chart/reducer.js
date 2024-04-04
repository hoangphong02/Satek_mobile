/* eslint-disable import/no-extraneous-dependencies */
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  // Get products best selling
  isGetProductBestSellingRequest: false,
  isGetProductBestSellingSuccess: false,
  isGetProductBestSellingFailure: false,
  getProductBestSellingState: {},
  // Get products expiry
  isGetProductExpiryRequest: false,
  isGetProductExpirySuccess: false,
  isGetProductExpiryFailure: false,
  getProductExpiryState: {},
  // Get products quantity
  isGetProductQuantityRequest: false,
  isGetProductQuantitySuccess: false,
  isGetProductQuantityFailure: false,
  getProductQuantityState: {},
  // Get revenue
  isGetRevenueRequest: false,
  isGetRevenueSuccess: false,
  isGetRevenueFailure: false,
  getRevenueState: {},
  // Get revenue today
  isGetRevenueTodayRequest: false,
  isGetRevenueTodaySuccess: false,
  isGetRevenueTodayFailure: false,
  getRevenueTodayState: {},
  // Local
  errorMessages: [],
};

const reducer = handleActions({
  // #region Get products best selling
  [Actions.getProductBestSellingRequest]: (state) => ({
    ...state,
    isGetProductBestSellingRequest: true,
    isGetProductBestSellingSuccess: false,
    isGetProductBestSellingFailure: false,
  }),
  [Actions.getProductBestSellingSuccess]: (state, { payload }) => ({
    ...state,
    isGetProductBestSellingRequest: false,
    isGetProductBestSellingSuccess: true,
    isGetProductBestSellingFailure: false,
    getProductBestSellingState: payload,
  }),
  [Actions.getProductBestSellingFailure]: (state, { payload }) => ({
    ...state,
    isGetProductBestSellingRequest: false,
    isGetProductBestSellingSuccess: false,
    isGetProductBestSellingFailure: true,
    errorMessages: payload,
  }),
  // #endregion

  // #region Get products quantity
  [Actions.getProductQuantityRequest]: (state) => ({
    ...state,
    isGetProductQuantityRequest: true,
    isGetProductQuantitySuccess: false,
    isGetProductQuantityFailure: false,
  }),
  [Actions.getProductQuantitySuccess]: (state, { payload }) => ({
    ...state,
    isGetProductQuantityRequest: false,
    isGetProductQuantitySuccess: true,
    isGetProductQuantityFailure: false,
    getProductQuantityState: payload,
  }),
  [Actions.getProductQuantityFailure]: (state, { payload }) => ({
    ...state,
    isGetProductQuantityRequest: false,
    isGetProductQuantitySuccess: false,
    isGetProductQuantityFailure: true,
    errorMessages: payload,
  }),
  // #endregion

  // #region Get products expiry
  [Actions.getProductExpiryRequest]: (state) => ({
    ...state,
    isGetProductExpiryRequest: true,
    isGetProductExpirySuccess: false,
    isGetProductExpiryFailure: false,
  }),
  [Actions.getProductExpirySuccess]: (state, { payload }) => ({
    ...state,
    isGetProductExpiryRequest: false,
    isGetProductExpirySuccess: true,
    isGetProductExpiryFailure: false,
    getProductExpiryState: payload,
  }),
  [Actions.getProductExpiryFailure]: (state, { payload }) => ({
    ...state,
    isGetProductExpiryRequest: false,
    isGetProductExpirySuccess: false,
    isGetProductExpiryFailure: true,
    errorMessages: payload,
  }),
  // #endregion

  // #region Get revenue
  [Actions.getRevenueRequest]: (state) => ({
    ...state,
    isGetRevenueRequest: true,
    isGetRevenueSuccess: false,
    isGetRevenueFailure: false,
  }),
  [Actions.getRevenueSuccess]: (state, { payload }) => ({
    ...state,
    isGetRevenueRequest: false,
    isGetRevenueSuccess: true,
    isGetRevenueFailure: false,
    getRevenueState: payload,
  }),
  [Actions.getRevenueFailure]: (state, { payload }) => ({
    ...state,
    isGetRevenueRequest: false,
    isGetRevenueSuccess: false,
    isGetRevenueFailure: true,
    errorMessages: payload,
  }),
  // #endregion

  // #region Get revenue today
  [Actions.getRevenueTodayRequest]: (state) => ({
    ...state,
    isGetRevenueTodayRequest: true,
    isGetRevenueTodaySuccess: false,
    isGetRevenueTodayFailure: false,
  }),
  [Actions.getRevenueTodaySuccess]: (state, { payload }) => ({
    ...state,
    isGetRevenueTodayRequest: false,
    isGetRevenueTodaySuccess: true,
    isGetRevenueTodayFailure: false,
    getRevenueTodayState: payload,
  }),
  [Actions.getRevenueTodayFailure]: (state, { payload }) => ({
    ...state,
    isGetRevenueTodayRequest: false,
    isGetRevenueTodaySuccess: false,
    isGetRevenueTodayFailure: true,
    errorMessages: payload,
  }),
  // #endregion

  // #region Local
  [Actions.resetChartState]: () => initialState,
  // #endregion
}, initialState);

export default reducer;
