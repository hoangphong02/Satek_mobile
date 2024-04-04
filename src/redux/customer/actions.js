// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllCustomersRequest = createAction('GET_ALL_CUSTOMERS_REQUEST');
export const getAllCustomersSuccess = createAction('GET_ALL_CUSTOMERS_SUCCESS');
export const getAllCustomersFailure = createAction('GET_ALL_CUSTOMERS_FAILURE');

export const createCustomerRequest = createAction('CREATE_CUSTOMER_REQUEST');
export const createCustomerSuccess = createAction('CREATE_CUSTOMER_SUCCESS');
export const createCustomerFailure = createAction('CREATE_CUSTOMER_FAILURE');
export const resetCreateCustomer = createAction('RESET_CREATE_CUSTOMER');

export const updateCustomerRequest = createAction('UPDATE_CUSTOMER_REQUEST');
export const updateCustomerSuccess = createAction('UPDATE_CUSTOMER_SUCCESS');
export const updateCustomerFailure = createAction('UPDATE_CUSTOMER_FAILURE');
export const resetUpdateCustomer = createAction('RESET_UPDATE_CUSTOMER');

export const deleteCustomerRequest = createAction('DELETE_CUSTOMER_REQUEST');
export const deleteCustomerSuccess = createAction('DELETE_CUSTOMER_SUCCESS');
export const deleteCustomerFailure = createAction('DELETE_CUSTOMER_FAILURE');
export const resetDeleteCustomer = createAction('RESET_DELETE_CUSTOMER');

export const resetCustomerState = createAction('RESET_CUSTOMER_STATE');
