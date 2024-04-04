// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

// eslint-disable-next-line import/no-extraneous-dependencies
import { handleUpdateDataList } from '~/helpers/utils';
import * as Actions from './actions';

const initialState = {
  // Get All Warehouse
  isFirstGetAllWarehouses: false,
  isGetAllWarehousesRequest: false,
  isGetAllWarehousesSuccess: false,
  isGetAllWarehousesFailure: false,
  getAllWarehousesState: {},
  // Create Warehouse
  isCreateWarehouseRequest: false,
  isCreateWarehouseSuccess: false,
  isCreateWarehouseFailure: false,
  // Update Warehouse
  isUpdateWarehouseRequest: false,
  isUpdateWarehouseSuccess: false,
  isUpdateWarehouseFailure: false,
  // Delete Warehouse
  isDeleteWarehouseRequest: false,
  isDeleteWarehouseSuccess: false,
  isDeleteWarehouseFailure: false,

  // Get Action

  isGetListImportExportWarehouseRequest: false,
  isGetListImportExportWarehouseSuccess: false,
  isGetListImportExportWarehouseFailure: false,
  getListImportExportWarehouseState: {},

  // Import warehouse
  isImportWarehouseRequest: false,
  isImportWarehouseSuccess: false,
  isImportWarehouseFailure: false,

  // Search products inventory

  isSearchProductInventoryRequest: false,
  isSearchProductInventorySuccess: false,
  isSearchProductInventoryFailure: false,
  searchProductInventoryState: {},
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Warehouse
    [Actions.getAllWarehousesRequest]: (state) => ({
      ...state,
      isGetAllWarehousesRequest: true,
      isGetAllWarehousesSuccess: false,
      isGetAllWarehousesFailure: false,
    }),
    [Actions.getAllWarehousesSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllWarehouses: true,
      isGetAllWarehousesRequest: false,
      isGetAllWarehousesSuccess: true,
      isGetAllWarehousesFailure: false,
      getAllWarehousesState: payload,
    }),
    [Actions.getAllWarehousesFailure]: (state, { payload }) => ({
      ...state,
      isGetAllWarehousesRequest: false,
      isGetAllWarehousesSuccess: false,
      isGetAllWarehousesFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Warehouse
    [Actions.createWarehouseRequest]: (state) => ({
      ...state,
      isCreateWarehouseRequest: true,
      isCreateWarehouseSuccess: false,
      isCreateWarehouseFailure: false,
    }),
    [Actions.createWarehouseSuccess]: (state, { payload }) => {
      const getAllWarehousesStateTmp = handleUpdateDataList(state.getAllWarehousesState, payload.data, 'create');

      return ({
        ...state,
        isCreateWarehouseRequest: false,
        isCreateWarehouseSuccess: true,
        isCreateWarehouseFailure: false,
        getAllWarehousesState: { ...getAllWarehousesStateTmp },
      });
    },
    [Actions.createWarehouseFailure]: (state, { payload }) => ({
      ...state,
      isCreateWarehouseRequest: false,
      isCreateWarehouseSuccess: false,
      isCreateWarehouseFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateWarehouse]: (state) => ({
      ...state,
      isCreateWarehouseRequest: false,
      isCreateWarehouseSuccess: false,
      isCreateWarehouseFailure: false,
    }),
    // #endregion
    // #region : Update Warehouse
    [Actions.updateWarehouseRequest]: (state) => ({
      ...state,
      isUpdateWarehouseRequest: true,
      isUpdateWarehouseSuccess: false,
      isUpdateWarehouseFailure: false,
    }),
    [Actions.updateWarehouseSuccess]: (state, { payload }) => {
      const getAllWarehousesStateTmp = handleUpdateDataList(state.getAllWarehousesState, payload.data, 'update');

      return ({
        ...state,
        isUpdateWarehouseRequest: false,
        isUpdateWarehouseSuccess: true,
        isUpdateWarehouseFailure: false,
        getAllWarehousesState: { ...getAllWarehousesStateTmp },
      });
    },
    [Actions.updateWarehouseFailure]: (state, { payload }) => ({
      ...state,
      isUpdateWarehouseRequest: false,
      isUpdateWarehouseSuccess: false,
      isUpdateWarehouseFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateWarehouse]: (state) => ({
      ...state,
      isUpdateWarehouseRequest: false,
      isUpdateWarehouseSuccess: false,
      isUpdateWarehouseFailure: false,
    }),
    // #endregion
    // #region : Delete Warehouse
    [Actions.deleteWarehouseRequest]: (state) => ({
      ...state,
      isDeleteWarehouseRequest: true,
      isDeleteWarehouseSuccess: false,
      isDeleteWarehouseFailure: false,
    }),
    [Actions.deleteWarehouseSuccess]: (state, { payload }) => {
      const getAllWarehousesStateTmp = handleUpdateDataList(state.getAllWarehousesState, payload, 'delete');

      return ({
        ...state,
        isDeleteWarehouseRequest: false,
        isDeleteWarehouseSuccess: true,
        isDeleteWarehouseFailure: false,
        getAllWarehousesState: { ...getAllWarehousesStateTmp },
      });
    },
    [Actions.deleteWarehouseFailure]: (state, { payload }) => ({
      ...state,
      isDeleteWarehouseRequest: false,
      isDeleteWarehouseSuccess: false,
      isDeleteWarehouseFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteWarehouse]: (state) => ({
      ...state,
      isDeleteWarehouseRequest: false,
      isDeleteWarehouseSuccess: false,
      isDeleteWarehouseFailure: false,
    }),
    // #endregion

    // #region Get Action
    [Actions.getListImportExportWarehouseRequest]: (state) => ({
      ...state,
      isGetListImportExportWarehouseRequest: true,
      isGetListImportExportWarehouseSuccess: false,
      isGetListImportExportWarehouseFailure: false,
    }),
    [Actions.getListImportExportWarehouseSuccess]: (state, { payload }) => ({
      ...state,
      isGetListImportExportWarehouseRequest: false,
      isGetListImportExportWarehouseSuccess: true,
      isGetListImportExportWarehouseFailure: false,
      getListImportExportWarehouseState: payload,
    }),
    [Actions.getListImportExportWarehouseFailure]: (state, { payload }) => ({
      ...state,
      isGetListImportExportWarehouseRequest: false,
      isGetListImportExportWarehouseSuccess: false,
      isGetListImportExportWarehouseFailure: true,
      errorMessages: payload,
    }),
    // #endregion

    // #region : Import warehouse
    [Actions.importWarehouseRequest]: (state) => ({
      ...state,
      isImportWarehouseRequest: true,
      isImportWarehouseSuccess: false,
      isImportWarehouseFailure: false,
    }),
    [Actions.importWarehouseSuccess]: (state) => ({
      ...state,
      isImportWarehouseRequest: false,
      isImportWarehouseSuccess: true,
      isImportWarehouseFailure: false,
    }),
    [Actions.importWarehouseFailure]: (state, { payload }) => ({
      ...state,
      isImportWarehouseRequest: false,
      isImportWarehouseSuccess: false,
      isImportWarehouseFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetImportWarehouse]: (state) => ({
      ...state,
      isImportWarehouseRequest: false,
      isImportWarehouseSuccess: false,
      isImportWarehouseFailure: false,
      errorMessages: [],
    }),
    // #endregion

    // #region : Search products inventory
    [Actions.searchProductInventoryRequest]: (state) => ({
      ...state,
      isSearchProductInventoryRequest: true,
      isSearchProductInventorySuccess: false,
      isSearchProductInventoryFailure: false,
    }),

    [Actions.searchProductInventorySuccess]: (state, { payload }) => ({
      ...state,
      isSearchProductInventoryRequest: false,
      isSearchProductInventorySuccess: true,
      isSearchProductInventoryFailure: false,
      searchProductInventoryState: payload,
    }),

    [Actions.searchProductInventoryFailure]: (state, { payload }) => ({
      ...state,
      isSearchProductInventoryRequest: false,
      isSearchProductInventorySuccess: false,
      isSearchProductInventoryFailure: true,
      errorMessages: payload,
    }),

    // #endregion

    // #region : Local
    [Actions.resetWarehouseState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
