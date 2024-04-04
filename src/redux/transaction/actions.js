// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllTransactionsRequest = createAction('GET_ALL_TRANSACTIONS_REQUEST');
export const getAllTransactionsSuccess = createAction('GET_ALL_TRANSACTIONS_SUCCESS');
export const getAllTransactionsFailure = createAction('GET_ALL_TRANSACTIONS_FAILURE');

export const createTransactionRequest = createAction('CREATE_TRANSACTION_REQUEST');
export const createTransactionSuccess = createAction('CREATE_TRANSACTION_SUCCESS');
export const createTransactionFailure = createAction('CREATE_TRANSACTION_FAILURE');
export const resetCreateTransaction = createAction('RESET_CREATE_TRANSACTION');

export const updateTransactionRequest = createAction('UPDATE_TRANSACTION_REQUEST');
export const updateTransactionSuccess = createAction('UPDATE_TRANSACTION_SUCCESS');
export const updateTransactionFailure = createAction('UPDATE_TRANSACTION_FAILURE');
export const resetUpdateTransaction = createAction('RESET_UPDATE_TRANSACTION');

export const deleteTransactionRequest = createAction('DELETE_TRANSACTION_REQUEST');
export const deleteTransactionSuccess = createAction('DELETE_TRANSACTION_SUCCESS');
export const deleteTransactionFailure = createAction('DELETE_TRANSACTION_FAILURE');
export const resetDeleteTransaction = createAction('RESET_DELETE_TRANSACTION');

export const resetTransactionState = createAction('RESET_TRANSACTION_STATE');
