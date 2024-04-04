// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllFeaturesRequest = createAction('GET_ALL_FEATURES_REQUEST');
export const getAllFeaturesSuccess = createAction('GET_ALL_FEATURES_SUCCESS');
export const getAllFeaturesFailure = createAction('GET_ALL_FEATURES_FAILURE');

export const createFeatureRequest = createAction('CREATE_FEATURE_REQUEST');
export const createFeatureSuccess = createAction('CREATE_FEATURE_SUCCESS');
export const createFeatureFailure = createAction('CREATE_FEATURE_FAILURE');
export const resetCreateFeature = createAction('RESET_CREATE_FEATURE');

export const updateFeatureRequest = createAction('UPDATE_FEATURE_REQUEST');
export const updateFeatureSuccess = createAction('UPDATE_FEATURE_SUCCESS');
export const updateFeatureFailure = createAction('UPDATE_FEATURE_FAILURE');
export const resetUpdateFeature = createAction('RESET_UPDATE_FEATURE');

export const deleteFeatureRequest = createAction('DELETE_FEATURE_REQUEST');
export const deleteFeatureSuccess = createAction('DELETE_FEATURE_SUCCESS');
export const deleteFeatureFailure = createAction('DELETE_FEATURE_FAILURE');
export const resetDeleteFeature = createAction('RESET_DELETE_FEATURE');

export const resetFeatureState = createAction('RESET_FEATURE_STATE');
