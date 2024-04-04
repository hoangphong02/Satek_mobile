// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

// eslint-disable-next-line import/no-extraneous-dependencies
import { handleUpdateDataList } from '~/helpers/utils';
import * as Actions from './actions';

const initialState = {
  // Get All Kitchen
  isFirstGetAllKitchen: false,
  isGetAllKitchenRequest: false,
  isGetAllKitchenSuccess: false,
  isGetAllKitchenFailure: false,
  getAllKitchenState: [],
  // Create Kitchen
  isCreateKitchenRequest: false,
  isCreateKitchenSuccess: false,
  isCreateKitchenFailure: false,
  // Update Kitchen
  isUpdateKitchenRequest: false,
  isUpdateKitchenSuccess: false,
  isUpdateKitchenFailure: false,
  // Delete Kitchen
  isDeleteKitchenRequest: false,
  isDeleteKitchenSuccess: false,
  isDeleteKitchenFailure: false,

  // Get All Kitchen Dishes
  isFirstGetAllKitchenDishes: false,
  isGetAllKitchenDishesRequest: false,
  isGetAllKitchenDishesSuccess: false,
  isGetAllKitchenDishesFailure: false,
  getAllKitchenDishesState: [],
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Kitchen
    [Actions.getAllKitchenRequest]: (state) => ({
      ...state,
      isGetAllKitchenRequest: true,
      isGetAllKitchenSuccess: false,
      isGetAllKitchenFailure: false,
    }),
    [Actions.getAllKitchenSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllKitchen: true,
      isGetAllKitchenRequest: false,
      isGetAllKitchenSuccess: true,
      isGetAllKitchenFailure: false,
      getAllKitchenState: payload,
    }),
    [Actions.getAllKitchenFailure]: (state, { payload }) => ({
      ...state,
      isGetAllKitchenRequest: false,
      isGetAllKitchenSuccess: false,
      isGetAllKitchenFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Kitchen
    [Actions.createKitchenRequest]: (state) => ({
      ...state,
      isCreateKitchenRequest: true,
      isCreateKitchenSuccess: false,
      isCreateKitchenFailure: false,
    }),
    [Actions.createKitchenSuccess]: (state) => ({
      ...state,
      isCreateKitchenRequest: false,
      isCreateKitchenSuccess: true,
      isCreateKitchenFailure: false,
      // getAllKitchenState: payload,
    }),
    [Actions.createKitchenFailure]: (state, { payload }) => ({
      ...state,
      isCreateKitchenRequest: false,
      isCreateKitchenSuccess: false,
      isCreateKitchenFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateKitchen]: (state) => ({
      ...state,
      isCreateKitchenRequest: false,
      isCreateKitchenSuccess: false,
      isCreateKitchenFailure: false,
    }),
    // #endregion
    // #region : Update Kitchen
    [Actions.updateKitchenRequest]: (state) => ({
      ...state,
      isUpdateKitchenRequest: true,
      isUpdateKitchenSuccess: false,
      isUpdateKitchenFailure: false,
    }),
    [Actions.updateKitchenSuccess]: (state, { payload }) => {
      const getAllKitchenStateTmp = handleUpdateDataList(state.getAllKitchenState, payload.data, 'update');

      return ({
        ...state,
        isUpdateKitchenRequest: false,
        isUpdateKitchenSuccess: true,
        isUpdateKitchenFailure: false,
        getAllKitchenState: { ...getAllKitchenStateTmp },
      });
    },
    [Actions.updateKitchenFailure]: (state, { payload }) => ({
      ...state,
      isUpdateKitchenRequest: false,
      isUpdateKitchenSuccess: false,
      isUpdateKitchenFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateKitchen]: (state) => ({
      ...state,
      isUpdateKitchenRequest: false,
      isUpdateKitchenSuccess: false,
      isUpdateKitchenFailure: false,
    }),
    // #endregion
    // #region : Delete Kitchen
    [Actions.deleteKitchenRequest]: (state) => ({
      ...state,
      isDeleteKitchenRequest: true,
      isDeleteKitchenSuccess: false,
      isDeleteKitchenFailure: false,
    }),
    [Actions.deleteKitchenSuccess]: (state, { payload }) => {
      const getAllKitchenStateTmp = handleUpdateDataList(state.getAllKitchenState, payload, 'delete');

      return ({
        ...state,
        isDeleteKitchenRequest: false,
        isDeleteKitchenSuccess: true,
        isDeleteKitchenFailure: false,
        getAllKitchenState: { ...getAllKitchenStateTmp },
      });
    },
    [Actions.deleteKitchenFailure]: (state, { payload }) => ({
      ...state,
      isDeleteKitchenRequest: false,
      isDeleteKitchenSuccess: false,
      isDeleteKitchenFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteKitchen]: (state) => ({
      ...state,
      isDeleteKitchenRequest: false,
      isDeleteKitchenSuccess: false,
      isDeleteKitchenFailure: false,
    }),
    // #endregion
    // #region : Get All Kitchen Dishes
    [Actions.getAllKitchenDishesRequest]: (state) => ({
      ...state,
      isGetAllKitchenDishesRequest: true,
      isGetAllKitchenDishesSuccess: false,
      isGetAllKitchenDishesFailure: false,
    }),
    [Actions.getAllKitchenDishesSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllKitchenDishes: true,
      isGetAllKitchenDishesRequest: false,
      isGetAllKitchenDishesSuccess: true,
      isGetAllKitchenDishesFailure: false,
      getAllKitchenDishesState: payload,
    }),
    [Actions.getAllKitchenDishesFailure]: (state, { payload }) => ({
      ...state,
      isGetAllKitchenDishesRequest: false,
      isGetAllKitchenDishesSuccess: false,
      isGetAllKitchenDishesFailure: true,
      errorMessages: payload,
    }),
    // #endregion

    // #region : Get All Kitchen Dishes Cancel
    [Actions.getAllKitchenDishCancelRequest]: (state) => ({
      ...state,
      isGetAllKitchenDishCancelRequest: true,
      isGetAllKitchenDishCancelSuccess: false,
      isGetAllKitchenDishCancelFailure: false,
    }),
    [Actions.getAllKitchenDishCancelSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllKitchenDishCancelRequest: false,
      isGetAllKitchenDishCancelSuccess: true,
      isGetAllKitchenDishCancelFailure: false,
      getAllKitchenDishCancelState: payload,
    }),
    [Actions.getAllKitchenDishCancelFailure]: (state, { payload }) => ({
      ...state,
      isGetAllKitchenDishCancelRequest: false,
      isGetAllKitchenDishCancelSuccess: false,
      isGetAllKitchenDishCancelFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Get All Kitchen Dishes Cancel
    [Actions.updateStatusKitchenDishCancelRequest]: (state) => ({
      ...state,
      isUpdateStatusKitchenDishCancelRequest: true,
      isUpdateStatusKitchenDishCancelSuccess: false,
      isUpdateStatusKitchenDishCancelFailure: false,
    }),
    [Actions.updateStatusKitchenDishCancelSuccess]: (state) => ({
      ...state,
      isUpdateStatusKitchenDishCancelRequest: false,
      isUpdateStatusKitchenDishCancelSuccess: true,
      isUpdateStatusKitchenDishCancelFailure: false,
    }),
    [Actions.updateStatusKitchenDishCancelFailure]: (state, { payload }) => ({
      ...state,
      isUpdateStatusKitchenDishCancelRequest: false,
      isUpdateStatusKitchenDishCancelSuccess: false,
      isUpdateStatusKitchenDishCancelFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Local
    [Actions.resetKitchenState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
