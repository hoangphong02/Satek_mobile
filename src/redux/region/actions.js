/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from 'redux-actions';

export const createRegionRequest = createAction('CREATE_REGION_REQUEST');
export const createRegionSuccess = createAction('CREATE_REGION_SUCCESS');
export const createRegionFailure = createAction('CREATE_REGION_FAILURE');
export const resetCreateRegionState = createAction('RESET_CREATE_REGION_STATE');

export const updateRegionRequest = createAction('UPDATE_REGION_REQUEST');
export const updateRegionSuccess = createAction('UPDATE_REGION_SUCCESS');
export const updateRegionFailure = createAction('UPDATE_REGION_FAILURE');
export const resetUpdateRegionState = createAction('RESET_UPDATE_REGION_STATE');

export const deleteRegionRequest = createAction('DELETE_REGION_REQUEST');
export const deleteRegionSuccess = createAction('DELETE_REGION_SUCCESS');
export const deleteRegionFailure = createAction('DELETE_REGION_FAILURE');
export const resetDeleteRegionState = createAction('RESET_DELETE_REGION_STATE');

export const getAllRegionRequest = createAction('GET_ALL_REGION_PAGE_REQUEST');
export const getAllRegionSuccess = createAction('GET_ALL_REGION_PAGE_SUCCESS');
export const getAllRegionFailure = createAction('GET_ALL_REGION_PAGE_FAILURE');

export const searchProvinceRequest = createAction('SEARCH_PROVINCE_REQUEST');
export const searchProvinceSuccess = createAction('SEARCH_PROVINCE_SUCCESS');
export const searchProvinceFailure = createAction('SEARCH_PROVINCE_FAILURE');

export const searchDistrictRequest = createAction('SEARCH_DISTRICT_REQUEST');
export const searchDistrictSuccess = createAction('SEARCH_DISTRICT_SUCCESS');
export const searchDistrictFailure = createAction('SEARCH_DISTRICT_FAILURE');

export const createProvinceRequest = createAction('CREATE_PROVINCE_REQUEST');
export const createProvinceSuccess = createAction('CREATE_PROVINCE_SUCCESS');
export const createProvinceFailure = createAction('CREATE_PROVINCE_FAILURE');
export const resetCreateProvinceState = createAction('RESET_CREATE_PROVINCE_STATE');

export const createDistrictRequest = createAction('CREATE_DISTRICT_REQUEST');
export const createDistrictSuccess = createAction('CREATE_DISTRICT_SUCCESS');
export const createDistrictFailure = createAction('CREATE_DISTRICT_FAILURE');
export const resetCreateDistrictState = createAction('RESET_CREATE_DISTRICT_STATE');

export const findOneRegionRequest = createAction('FIND_ONE_REGION_REQUEST');
export const findOneRegionSuccess = createAction('FIND_ONE_REGION_SUCCESS');
export const findOneRegionFailure = createAction('FIND_ONE_REGION_FAILURE');

export const resetRegionState = createAction('RESET_REGION_STATE');
