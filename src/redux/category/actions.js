// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllCategoriesRequest = createAction('GET_ALL_CATEGORIES_REQUEST');
export const getAllCategoriesSuccess = createAction('GET_ALL_CATEGORIES_SUCCESS');
export const getAllCategoriesFailure = createAction('GET_ALL_CATEGORIES_FAILURE');

export const createCategoryRequest = createAction('CREATE_CATEGORY_REQUEST');
export const createCategorySuccess = createAction('CREATE_CATEGORY_SUCCESS');
export const createCategoryFailure = createAction('CREATE_CATEGORY_FAILURE');
export const resetCreateCategory = createAction('RESET_CREATE_CATEGORY');

export const updateCategoryRequest = createAction('UPDATE_CATEGORY_REQUEST');
export const updateCategorySuccess = createAction('UPDATE_CATEGORY_SUCCESS');
export const updateCategoryFailure = createAction('UPDATE_CATEGORY_FAILURE');
export const resetUpdateCategory = createAction('RESET_UPDATE_CATEGORY');

export const deleteCategoryRequest = createAction('DELETE_CATEGORY_REQUEST');
export const deleteCategorySuccess = createAction('DELETE_CATEGORY_SUCCESS');
export const deleteCategoryFailure = createAction('DELETE_CATEGORY_FAILURE');
export const resetDeleteCategory = createAction('RESET_DELETE_CATEGORY');

export const resetCategoryState = createAction('RESET_CATEGORY_STATE');
