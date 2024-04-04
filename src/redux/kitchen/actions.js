// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllKitchenRequest = createAction('GET_ALL_KITCHEN_REQUEST');
export const getAllKitchenSuccess = createAction('GET_ALL_KITCHEN_SUCCESS');
export const getAllKitchenFailure = createAction('GET_ALL_KITCHEN_FAILURE');

export const createKitchenRequest = createAction('CREATE_KITCHEN_REQUEST');
export const createKitchenSuccess = createAction('CREATE_KITCHEN_SUCCESS');
export const createKitchenFailure = createAction('CREATE_KITCHEN_FAILURE');
export const resetCreateKitchen = createAction('RESET_CREATE_KITCHEN');

export const updateKitchenRequest = createAction('UPDATE_KITCHEN_REQUEST');
export const updateKitchenSuccess = createAction('UPDATE_KITCHEN_SUCCESS');
export const updateKitchenFailure = createAction('UPDATE_KITCHEN_FAILURE');
export const resetUpdateKitchen = createAction('RESET_UPDATE_KITCHEN');

export const deleteKitchenRequest = createAction('DELETE_KITCHEN_REQUEST');
export const deleteKitchenSuccess = createAction('DELETE_KITCHEN_SUCCESS');
export const deleteKitchenFailure = createAction('DELETE_KITCHEN_FAILURE');
export const resetDeleteKitchen = createAction('RESET_DELETE_KITCHEN');

export const resetKitchenState = createAction('RESET_KITCHEN_STATE');

export const getAllKitchenDishesRequest = createAction('GET_ALL_KITCHEN_DISHES_REQUEST');
export const getAllKitchenDishesSuccess = createAction('GET_ALL_KITCHEN_DISHES_SUCCESS');
export const getAllKitchenDishesFailure = createAction('GET_ALL_KITCHEN_DISHES_FAILURE');

export const getAllKitchenDishCancelRequest = createAction('GET_ALL_KITCHEN_DISH_CANCEL_REQUEST');
export const getAllKitchenDishCancelSuccess = createAction('GET_ALL_KITCHEN_DISH_CANCEL_SUCCESS');
export const getAllKitchenDishCancelFailure = createAction('GET_ALL_KITCHEN_DISH_CANCEL_FAILURE');

export const updateStatusKitchenDishCancelRequest = createAction('UPDATE_STATUS_KITCHEN_DISH_CANCEL_REQUEST');
export const updateStatusKitchenDishCancelSuccess = createAction('UPDATE_STATUS_KITCHEN_DISH_CANCEL_SUCCESS');
export const updateStatusKitchenDishCancelFailure = createAction('UPDATE_STATUS_KITCHEN_DISH_CANCEL_FAILURE');
