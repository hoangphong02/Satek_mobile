// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllDiscountsRequest = createAction('GET_ALL_DISCOUNTS_REQUEST');
export const getAllDiscountsSuccess = createAction('GET_ALL_DISCOUNTS_SUCCESS');
export const getAllDiscountsFailure = createAction('GET_ALL_DISCOUNTS_FAILURE');

export const createDiscountRequest = createAction('CREATE_DISCOUNT_REQUEST');
export const createDiscountSuccess = createAction('CREATE_DISCOUNT_SUCCESS');
export const createDiscountFailure = createAction('CREATE_DISCOUNT_FAILURE');
export const resetCreateDiscount = createAction('RESET_CREATE_DISCOUNT');

export const updateDiscountRequest = createAction('UPDATE_DISCOUNT_REQUEST');
export const updateDiscountSuccess = createAction('UPDATE_DISCOUNT_SUCCESS');
export const updateDiscountFailure = createAction('UPDATE_DISCOUNT_FAILURE');
export const resetUpdateDiscount = createAction('RESET_UPDATE_DISCOUNT');

export const deleteDiscountRequest = createAction('DELETE_DISCOUNT_REQUEST');
export const deleteDiscountSuccess = createAction('DELETE_DISCOUNT_SUCCESS');
export const deleteDiscountFailure = createAction('DELETE_DISCOUNT_FAILURE');
export const resetDeleteDiscount = createAction('RESET_DELETE_DISCOUNT');

export const resetDiscountState = createAction('RESET_DISCOUNT_STATE');
