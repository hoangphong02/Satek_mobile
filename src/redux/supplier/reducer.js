// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';
// eslint-disable-next-line import/no-extraneous-dependencies
import { handleUpdateDataList } from '~/helpers/utils';
import * as Actions from './actions';

const initialState = {
  // Get All Supplier
  isFirstGetAllSuppliers: false,
  isGetAllSuppliersRequest: false,
  isGetAllSuppliersSuccess: false,
  isGetAllSuppliersFailure: false,
  getAllSuppliersState: {},
  // Create Supplier
  isCreateSupplierRequest: false,
  isCreateSupplierSuccess: false,
  isCreateSupplierFailure: false,
  // Update Supplier
  isUpdateSupplierRequest: false,
  isUpdateSupplierSuccess: false,
  isUpdateSupplierFailure: false,
  // Delete Supplier
  isDeleteSupplierRequest: false,
  isDeleteSupplierSuccess: false,
  isDeleteSupplierFailure: false,
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Supplier
    [Actions.getAllSuppliersRequest]: (state) => ({
      ...state,
      isGetAllSuppliersRequest: true,
      isGetAllSuppliersSuccess: false,
      isGetAllSuppliersFailure: false,
    }),
    [Actions.getAllSuppliersSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllSuppliers: true,
      isGetAllSuppliersRequest: false,
      isGetAllSuppliersSuccess: true,
      isGetAllSuppliersFailure: false,
      getAllSuppliersState: payload,
    }),
    [Actions.getAllSuppliersFailure]: (state, { payload }) => ({
      ...state,
      isGetAllSuppliersRequest: false,
      isGetAllSuppliersSuccess: false,
      isGetAllSuppliersFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Supplier
    [Actions.createSupplierRequest]: (state) => ({
      ...state,
      isCreateSupplierRequest: true,
      isCreateSupplierSuccess: false,
      isCreateSupplierFailure: false,
    }),
    [Actions.createSupplierSuccess]: (state, { payload }) => {
      const getAllSuppliersStateTmp = handleUpdateDataList(state.getAllSuppliersState, payload.data, 'create');

      return ({
        ...state,
        isCreateSupplierRequest: false,
        isCreateSupplierSuccess: true,
        isCreateSupplierFailure: false,
        getAllSuppliersState: { ...getAllSuppliersStateTmp },
      });
    },
    [Actions.createSupplierFailure]: (state, { payload }) => ({
      ...state,
      isCreateSupplierRequest: false,
      isCreateSupplierSuccess: false,
      isCreateSupplierFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateSupplier]: (state) => ({
      ...state,
      isCreateSupplierRequest: false,
      isCreateSupplierSuccess: false,
      isCreateSupplierFailure: false,
    }),
    // #endregion
    // #region : Update Supplier
    [Actions.updateSupplierRequest]: (state) => ({
      ...state,
      isUpdateSupplierRequest: true,
      isUpdateSupplierSuccess: false,
      isUpdateSupplierFailure: false,
    }),
    [Actions.updateSupplierSuccess]: (state, { payload }) => {
      const getAllSuppliersStateTmp = handleUpdateDataList(state.getAllSuppliersState, payload.data, 'update');

      return ({
        ...state,
        isUpdateSupplierRequest: false,
        isUpdateSupplierSuccess: true,
        isUpdateSupplierFailure: false,
        getAllSuppliersState: { ...getAllSuppliersStateTmp },
      });
    },
    [Actions.updateSupplierFailure]: (state, { payload }) => ({
      ...state,
      isUpdateSupplierRequest: false,
      isUpdateSupplierSuccess: false,
      isUpdateSupplierFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateSupplier]: (state) => ({
      ...state,
      isUpdateSupplierRequest: false,
      isUpdateSupplierSuccess: false,
      isUpdateSupplierFailure: false,
    }),
    // #endregion
    // #region : Delete Supplier
    [Actions.deleteSupplierRequest]: (state) => ({
      ...state,
      isDeleteSupplierRequest: true,
      isDeleteSupplierSuccess: false,
      isDeleteSupplierFailure: false,
    }),
    [Actions.deleteSupplierSuccess]: (state, { payload }) => {
      const getAllSuppliersStateTmp = handleUpdateDataList(state.getAllSuppliersState, payload, 'delete');

      return ({
        ...state,
        isDeleteSupplierRequest: false,
        isDeleteSupplierSuccess: true,
        isDeleteSupplierFailure: false,
        getAllSuppliersState: { ...getAllSuppliersStateTmp },
      });
    },
    [Actions.deleteSupplierFailure]: (state, { payload }) => ({
      ...state,
      isDeleteSupplierRequest: false,
      isDeleteSupplierSuccess: false,
      isDeleteSupplierFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteSupplier]: (state) => ({
      ...state,
      isDeleteSupplierRequest: false,
      isDeleteSupplierSuccess: false,
      isDeleteSupplierFailure: false,
    }),
    // #endregion
    // #region : Local
    [Actions.resetSupplierState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
