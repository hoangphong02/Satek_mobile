// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllPaymentsRequest = createAction('GET_ALL_PAYMENTS_REQUEST');
export const getAllPaymentsSuccess = createAction('GET_ALL_PAYMENTS_SUCCESS');
export const getAllPaymentsFailure = createAction('GET_ALL_PAYMENTS_FAILURE');

export const createPaymentRequest = createAction('CREATE_PAYMENT_REQUEST');
export const createPaymentSuccess = createAction('CREATE_PAYMENT_SUCCESS');
export const createPaymentFailure = createAction('CREATE_PAYMENT_FAILURE');
export const resetCreatePayment = createAction('RESET_CREATE_PAYMENT');

export const updatePaymentRequest = createAction('UPDATE_PAYMENT_REQUEST');
export const updatePaymentSuccess = createAction('UPDATE_PAYMENT_SUCCESS');
export const updatePaymentFailure = createAction('UPDATE_PAYMENT_FAILURE');
export const resetUpdatePayment = createAction('RESET_UPDATE_PAYMENT');

export const deletePaymentRequest = createAction('DELETE_PAYMENT_REQUEST');
export const deletePaymentSuccess = createAction('DELETE_PAYMENT_SUCCESS');
export const deletePaymentFailure = createAction('DELETE_PAYMENT_FAILURE');
export const resetDeletePayment = createAction('RESET_DELETE_PAYMENT');

export const resetPaymentState = createAction('RESET_PAYMENT_STATE');
