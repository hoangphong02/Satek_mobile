// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

// eslint-disable-next-line import/no-extraneous-dependencies
import { handleUpdateDataList } from '~/helpers/utils';
import * as Actions from './actions';

const initialState = {
  // Get All Discount
  isFirstGetAllDiscounts: false,
  isGetAllDiscountsRequest: false,
  isGetAllDiscountsSuccess: false,
  isGetAllDiscountsFailure: false,
  getAllDiscountsState: {},
  // Create Discount
  isCreateDiscountRequest: false,
  isCreateDiscountSuccess: false,
  isCreateDiscountFailure: false,
  // Update Discount
  isUpdateDiscountRequest: false,
  isUpdateDiscountSuccess: false,
  isUpdateDiscountFailure: false,
  // Delete Discount
  isDeleteDiscountRequest: false,
  isDeleteDiscountSuccess: false,
  isDeleteDiscountFailure: false,
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Discount
    [Actions.getAllDiscountsRequest]: (state) => ({
      ...state,
      isGetAllDiscountsRequest: true,
      isGetAllDiscountsSuccess: false,
      isGetAllDiscountsFailure: false,
    }),
    [Actions.getAllDiscountsSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllDiscounts: true,
      isGetAllDiscountsRequest: false,
      isGetAllDiscountsSuccess: true,
      isGetAllDiscountsFailure: false,
      getAllDiscountsState: payload,
    }),
    [Actions.getAllDiscountsFailure]: (state, { payload }) => ({
      ...state,
      isGetAllDiscountsRequest: false,
      isGetAllDiscountsSuccess: false,
      isGetAllDiscountsFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Discount
    [Actions.createDiscountRequest]: (state) => ({
      ...state,
      isCreateDiscountRequest: true,
      isCreateDiscountSuccess: false,
      isCreateDiscountFailure: false,
    }),
    [Actions.createDiscountSuccess]: (state, { payload }) => {
      const getAllDiscountsStateTmp = handleUpdateDataList(state.getAllDiscountsState, payload.data, 'create');

      return ({
        ...state,
        isCreateDiscountRequest: false,
        isCreateDiscountSuccess: true,
        isCreateDiscountFailure: false,
        getAllDiscountsState: { ...getAllDiscountsStateTmp },
      });
    },
    [Actions.createDiscountFailure]: (state, { payload }) => ({
      ...state,
      isCreateDiscountRequest: false,
      isCreateDiscountSuccess: false,
      isCreateDiscountFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateDiscount]: (state) => ({
      ...state,
      isCreateDiscountRequest: false,
      isCreateDiscountSuccess: false,
      isCreateDiscountFailure: false,
    }),
    // #endregion
    // #region : Update Discount
    [Actions.updateDiscountRequest]: (state) => ({
      ...state,
      isUpdateDiscountRequest: true,
      isUpdateDiscountSuccess: false,
      isUpdateDiscountFailure: false,
    }),
    [Actions.updateDiscountSuccess]: (state, { payload }) => {
      const getAllDiscountsStateTmp = handleUpdateDataList(state.getAllDiscountsState, payload.data, 'update');

      return ({
        ...state,
        isUpdateDiscountRequest: false,
        isUpdateDiscountSuccess: true,
        isUpdateDiscountFailure: false,
        getAllDiscountsState: { ...getAllDiscountsStateTmp },
      });
    },
    [Actions.updateDiscountFailure]: (state, { payload }) => ({
      ...state,
      isUpdateDiscountRequest: false,
      isUpdateDiscountSuccess: false,
      isUpdateDiscountFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateDiscount]: (state) => ({
      ...state,
      isUpdateDiscountRequest: false,
      isUpdateDiscountSuccess: false,
      isUpdateDiscountFailure: false,
    }),
    // #endregion
    // #region : Delete Discount
    [Actions.deleteDiscountRequest]: (state) => ({
      ...state,
      isDeleteDiscountRequest: true,
      isDeleteDiscountSuccess: false,
      isDeleteDiscountFailure: false,
    }),
    [Actions.deleteDiscountSuccess]: (state, { payload }) => {
      const getAllDiscountsStateTmp = handleUpdateDataList(state.getAllDiscountsState, payload, 'delete');

      return ({
        ...state,
        isDeleteDiscountRequest: false,
        isDeleteDiscountSuccess: true,
        isDeleteDiscountFailure: false,
        getAllDiscountsState: { ...getAllDiscountsStateTmp },
      });
    },
    [Actions.deleteDiscountFailure]: (state, { payload }) => ({
      ...state,
      isDeleteDiscountRequest: false,
      isDeleteDiscountSuccess: false,
      isDeleteDiscountFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteDiscount]: (state) => ({
      ...state,
      isDeleteDiscountRequest: false,
      isDeleteDiscountSuccess: false,
      isDeleteDiscountFailure: false,
    }),
    // #endregion
    // #region : Local
    [Actions.resetDiscountState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
