// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllSuppliersRequest = createAction('GET_ALL_SUPPLIERS_REQUEST');
export const getAllSuppliersSuccess = createAction('GET_ALL_SUPPLIERS_SUCCESS');
export const getAllSuppliersFailure = createAction('GET_ALL_SUPPLIERS_FAILURE');

export const createSupplierRequest = createAction('CREATE_SUPPLIER_REQUEST');
export const createSupplierSuccess = createAction('CREATE_SUPPLIER_SUCCESS');
export const createSupplierFailure = createAction('CREATE_SUPPLIER_FAILURE');
export const resetCreateSupplier = createAction('RESET_CREATE_SUPPLIER');

export const updateSupplierRequest = createAction('UPDATE_SUPPLIER_REQUEST');
export const updateSupplierSuccess = createAction('UPDATE_SUPPLIER_SUCCESS');
export const updateSupplierFailure = createAction('UPDATE_SUPPLIER_FAILURE');
export const resetUpdateSupplier = createAction('RESET_UPDATE_SUPPLIER');

export const deleteSupplierRequest = createAction('DELETE_SUPPLIER_REQUEST');
export const deleteSupplierSuccess = createAction('DELETE_SUPPLIER_SUCCESS');
export const deleteSupplierFailure = createAction('DELETE_SUPPLIER_FAILURE');
export const resetDeleteSupplier = createAction('RESET_DELETE_SUPPLIER');

export const resetSupplierState = createAction('RESET_SUPPLIER_STATE');
