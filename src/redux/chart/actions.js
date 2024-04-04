/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from 'redux-actions';

export const getProductBestSellingRequest = createAction('GET_PRODUCT_BEST_SELLING_REQUEST');
export const getProductBestSellingSuccess = createAction('GET_PRODUCT_BEST_SELLING_SUCCESS');
export const getProductBestSellingFailure = createAction('GET_PRODUCT_BEST_SELLING_FAILURE');

export const getProductExpiryRequest = createAction('GET_PRODUCT_EXPIRY_REQUEST');
export const getProductExpirySuccess = createAction('GET_PRODUCT_EXPIRY_SUCCESS');
export const getProductExpiryFailure = createAction('GET_PRODUCT_EXPIRY_FAILURE');

export const getProductQuantityRequest = createAction('GET_PRODUCT_QUANTITY_REQUEST');
export const getProductQuantitySuccess = createAction('GET_PRODUCT_QUANTITY_SUCCESS');
export const getProductQuantityFailure = createAction('GET_PRODUCT_QUANTITY_FAILURE');

export const getRevenueRequest = createAction('GET_REVENUE_REQUEST');
export const getRevenueSuccess = createAction('GET_REVENUE_SUCCESS');
export const getRevenueFailure = createAction('GET_REVENUE_FAILURE');

export const getRevenueTodayRequest = createAction('GET_REVENUE_TODAY_REQUEST');
export const getRevenueTodaySuccess = createAction('GET_REVENUE_TODAY_SUCCESS');
export const getRevenueTodayFailure = createAction('GET_REVENUE_TODAY_FAILURE');

export const resetChartState = createAction('RESET_CHART_STATE');
