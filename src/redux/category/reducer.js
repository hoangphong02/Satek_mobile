// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

// eslint-disable-next-line import/no-extraneous-dependencies
import { handleUpdateDataList } from '~/helpers/utils';
import * as Actions from './actions';

const initialState = {
  // Get All Category
  isFirstGetAllCategories: false,
  isGetAllCategoriesRequest: false,
  isGetAllCategoriesSuccess: false,
  isGetAllCategoriesFailure: false,
  getAllCategoriesState: {},
  // Create Category
  isCreateCategoryRequest: false,
  isCreateCategorySuccess: false,
  isCreateCategoryFailure: false,
  // Update Category
  isUpdateCategoryRequest: false,
  isUpdateCategorySuccess: false,
  isUpdateCategoryFailure: false,
  // Delete Category
  isDeleteCategoryRequest: false,
  isDeleteCategorySuccess: false,
  isDeleteCategoryFailure: false,
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Category
    [Actions.getAllCategoriesRequest]: (state) => ({
      ...state,
      isGetAllCategoriesRequest: true,
      isGetAllCategoriesSuccess: false,
      isGetAllCategoriesFailure: false,
    }),
    [Actions.getAllCategoriesSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllCategories: true,
      isGetAllCategoriesRequest: false,
      isGetAllCategoriesSuccess: true,
      isGetAllCategoriesFailure: false,
      getAllCategoriesState: payload,
    }),
    [Actions.getAllCategoriesFailure]: (state, { payload }) => ({
      ...state,
      isGetAllCategoriesRequest: false,
      isGetAllCategoriesSuccess: false,
      isGetAllCategoriesFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Category
    [Actions.createCategoryRequest]: (state) => ({
      ...state,
      isCreateCategoryRequest: true,
      isCreateCategorySuccess: false,
      isCreateCategoryFailure: false,
    }),
    [Actions.createCategorySuccess]: (state, { payload }) => {
      const getAllCategoriesStateTmp = handleUpdateDataList(state.getAllCategoriesState, payload.data, 'create');

      return ({
        ...state,
        isCreateCategoryRequest: false,
        isCreateCategorySuccess: true,
        isCreateCategoryFailure: false,
        getAllCategoriesState: { ...getAllCategoriesStateTmp },
      });
    },
    [Actions.createCategoryFailure]: (state, { payload }) => ({
      ...state,
      isCreateCategoryRequest: false,
      isCreateCategorySuccess: false,
      isCreateCategoryFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateCategory]: (state) => ({
      ...state,
      isCreateCategoryRequest: false,
      isCreateCategorySuccess: false,
      isCreateCategoryFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Update Category
    [Actions.updateCategoryRequest]: (state) => ({
      ...state,
      isUpdateCategoryRequest: true,
      isUpdateCategorySuccess: false,
      isUpdateCategoryFailure: false,
    }),
    [Actions.updateCategorySuccess]: (state, { payload }) => {
      const getAllCategoriesStateTmp = handleUpdateDataList(state.getAllCategoriesState, payload.data, 'update');

      return ({
        ...state,
        isUpdateCategoryRequest: false,
        isUpdateCategorySuccess: true,
        isUpdateCategoryFailure: false,
        getAllCategoriesState: { ...getAllCategoriesStateTmp },
      });
    },
    [Actions.updateCategoryFailure]: (state, { payload }) => ({
      ...state,
      isUpdateCategoryRequest: false,
      isUpdateCategorySuccess: false,
      isUpdateCategoryFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateCategory]: (state) => ({
      ...state,
      isUpdateCategoryRequest: false,
      isUpdateCategorySuccess: false,
      isUpdateCategoryFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Delete Category
    [Actions.deleteCategoryRequest]: (state) => ({
      ...state,
      isDeleteCategoryRequest: true,
      isDeleteCategorySuccess: false,
      isDeleteCategoryFailure: false,
    }),
    [Actions.deleteCategorySuccess]: (state, { payload }) => {
      const getAllCategoriesStateTmp = handleUpdateDataList(state.getAllCategoriesState, payload, 'delete');

      return ({
        ...state,
        isDeleteCategoryRequest: false,
        isDeleteCategorySuccess: true,
        isDeleteCategoryFailure: false,
        getAllCategoriesState: { ...getAllCategoriesStateTmp },
      });
    },
    [Actions.deleteCategoryFailure]: (state, { payload }) => ({
      ...state,
      isDeleteCategoryRequest: false,
      isDeleteCategorySuccess: false,
      isDeleteCategoryFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteCategory]: (state) => ({
      ...state,
      isDeleteCategoryRequest: false,
      isDeleteCategorySuccess: false,
      isDeleteCategoryFailure: false,
    }),
    // #endregion
    // #region : Local
    [Actions.resetCategoryState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
