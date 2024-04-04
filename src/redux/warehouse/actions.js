// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllWarehousesRequest = createAction('GET_ALL_WAREHOUSES_REQUEST');
export const getAllWarehousesSuccess = createAction('GET_ALL_WAREHOUSES_SUCCESS');
export const getAllWarehousesFailure = createAction('GET_ALL_WAREHOUSES_FAILURE');

export const createWarehouseRequest = createAction('CREATE_WAREHOUSE_REQUEST');
export const createWarehouseSuccess = createAction('CREATE_WAREHOUSE_SUCCESS');
export const createWarehouseFailure = createAction('CREATE_WAREHOUSE_FAILURE');
export const resetCreateWarehouse = createAction('RESET_CREATE_WAREHOUSE');

export const updateWarehouseRequest = createAction('UPDATE_WAREHOUSE_REQUEST');
export const updateWarehouseSuccess = createAction('UPDATE_WAREHOUSE_SUCCESS');
export const updateWarehouseFailure = createAction('UPDATE_WAREHOUSE_FAILURE');
export const resetUpdateWarehouse = createAction('RESET_UPDATE_WAREHOUSE');

export const deleteWarehouseRequest = createAction('DELETE_WAREHOUSE_REQUEST');
export const deleteWarehouseSuccess = createAction('DELETE_WAREHOUSE_SUCCESS');
export const deleteWarehouseFailure = createAction('DELETE_WAREHOUSE_FAILURE');
export const resetDeleteWarehouse = createAction('RESET_DELETE_WAREHOUSE');

export const getListImportExportWarehouseRequest = createAction('GET_LIST_IMPORT_EXPORT_WAREHOUSE_REQUEST');
export const getListImportExportWarehouseSuccess = createAction('GET_LIST_IMPORT_EXPORT_WAREHOUSE_SUCCESS');
export const getListImportExportWarehouseFailure = createAction('GET_LIST_IMPORT_EXPORT_WAREHOUSE_FAILURE');

export const importWarehouseRequest = createAction('IMPORT_WAREHOUSE_REQUEST');
export const importWarehouseSuccess = createAction('IMPORT_WAREHOUSE_SUCCESS');
export const importWarehouseFailure = createAction('IMPORT_WAREHOUSE_FAILURE');
export const resetImportWarehouse = createAction('RESET_IMPORT_WAREHOUSE');

export const searchProductInventoryRequest = createAction('SEARCH_PRODUCT_INVENTORY_REQUEST');
export const searchProductInventorySuccess = createAction('SEARCH_PRODUCT_INVENTORY_SUCCESS');
export const searchProductInventoryFailure = createAction('SEARCH_PRODUCT_INVENTORY_FAILURE');

export const resetWarehouseState = createAction('RESET_WAREHOUSE_STATE');
