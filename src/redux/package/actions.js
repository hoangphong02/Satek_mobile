// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllpackagesRequest = createAction('GET_ALL_PACKAGES_REQUEST');
export const getAllpackagesSuccess = createAction('GET_ALL_PACKAGES_SUCCESS');
export const getAllpackagesFailure = createAction('GET_ALL_PACKAGES_FAILURE');

export const createPackageRequest = createAction('CREATE_PACKAGE_REQUEST');
export const createPackageSuccess = createAction('CREATE_PACKAGE_SUCCESS');
export const createPackageFailure = createAction('CREATE_PACKAGE_FAILURE');
export const resetCreatePackage = createAction('RESET_CREATE_PACKAGE');

export const updatePackageRequest = createAction('UPDATE_PACKAGE_REQUEST');
export const updatePackageSuccess = createAction('UPDATE_PACKAGE_SUCCESS');
export const updatePackageFailure = createAction('UPDATE_PACKAGE_FAILURE');
export const resetUpdatePackage = createAction('RESET_UPDATE_PACKAGE');

export const deletePackageRequest = createAction('DELETE_PACKAGE_REQUEST');
export const deletePackageSuccess = createAction('DELETE_PACKAGE_SUCCESS');
export const deletePackageFailure = createAction('DELETE_PACKAGE_FAILURE');
export const resetDeletePackage = createAction('RESET_DELETE_PACKAGE');

export const resetPackageState = createAction('RESET_PACKAGE_STATE');
