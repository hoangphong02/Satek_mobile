// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllOrdersListRequest = createAction('GET_ALL_ORDERS_LIST_REQUEST');
export const getAllOrdersListSuccess = createAction('GET_ALL_ORDERS_LIST_SUCCESS');
export const getAllOrdersListFailure = createAction('GET_ALL_ORDERS_LIST_FAILURE');

export const createOrderReturnRequest = createAction('CREATE_ORDER_RETURN_REQUEST');
export const createOrderReturnSuccess = createAction('CREATE_ORDER_RETURN_SUCCESS');
export const createOrderReturnFailure = createAction('CREATE_ORDER_RETURN_FAILURE');
export const resetCreateOrderReturn = createAction('RESET_CREATE_ORDER_RETURN');

export const getOrderForWarehouseRequest = createAction('GET_ORDER_FOR_WAREHOUSE_REQUEST');
export const getOrderForWarehouseSuccess = createAction('GET_ORDER_FOR_WAREHOUSE_SUCCESS');
export const getOrderForWarehouseFailure = createAction('GET_ORDER_FOR_WAREHOUSE_FAILURE');

export const getOrdersListVatRequest = createAction('GET_ORDERS_LIST_VAT_REQUEST');
export const getOrdersListVatSuccess = createAction('GET_ORDERS_LIST_VAT_SUCCESS');
export const getOrdersListVatFailure = createAction('GET_ORDERS_LIST_VAT_FAILURE');

export const resetOrderState = createAction('RESET_ORDER_STATE');
export const updateOrderRequest = createAction('UPDATE_ORDER_REQUEST');
export const updateOrderSuccess = createAction('UPDATE_ORDER_SUCCESS');
export const updateOrderFailure = createAction('UPDATE_ORDER_FAILURE');
export const resetUpdateOrder = createAction('RESET_UPDATE_ORDER');

export const deleteOrderRequest = createAction('DELETE_ORDER_REQUEST');
export const deleteOrderSuccess = createAction('DELETE_ORDER_SUCCESS');
export const deleteOrderFailure = createAction('DELETE_ORDER_FAILURE');
export const resetDeleteOrder = createAction('RESET_DELETE_ORDER');

export const createRequestPayment = createAction('CREATE_REQUEST_PAYMENT_REQUEST');
export const createRequestPaymentSuccess = createAction('CREATE_REQUEST_PAYMENT_SUCCESS');
export const createRequestPaymentFailure = createAction('CREATE_REQUEST_PAYMENT_FAILURE');
export const resetCreateRequestPayment = createAction('RESET_CREATE_REQUEST_PAYMENT');

export const getAllRequestPayment = createAction('GET_ALL_REQUEST_PAYMENT');
export const getAllRequestPaymentSuccess = createAction('GET_ALL_REQUEST_PAYMENT_SUCCESS');
export const getAllRequestPaymentFailure = createAction('GET_ALL_REQUEST_PAYMENT_FAILURE');
