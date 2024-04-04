// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

// eslint-disable-next-line import/no-extraneous-dependencies
import { handleUpdateDataList } from '~/helpers/utils';
import * as Actions from './actions';

const initialState = {
  // Get All Table
  isFirstGetAllTables: false,
  isGetAllTablesRequest: false,
  isGetAllTablesSuccess: false,
  isGetAllTablesFailure: false,
  getAllTablesState: {},
  // Create Table
  isCreateTableRequest: false,
  isCreateTableSuccess: false,
  isCreateTableFailure: false,
  // Update Table
  isUpdateTableRequest: false,
  isUpdateTableSuccess: false,
  isUpdateTableFailure: false,
  // Delete Table
  isDeleteTableRequest: false,
  isDeleteTableSuccess: false,
  isDeleteTableFailure: false,
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Table
    [Actions.getAllTablesRequest]: (state) => ({
      ...state,
      isGetAllTablesRequest: true,
      isGetAllTablesSuccess: false,
      isGetAllTablesFailure: false,
    }),
    [Actions.getAllTablesSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllTables: true,
      isGetAllTablesRequest: false,
      isGetAllTablesSuccess: true,
      isGetAllTablesFailure: false,
      getAllTablesState: payload,
    }),
    [Actions.getAllTablesFailure]: (state, { payload }) => ({
      ...state,
      isGetAllTablesRequest: false,
      isGetAllTablesSuccess: false,
      isGetAllTablesFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Table
    [Actions.createTableRequest]: (state) => ({
      ...state,
      isCreateTableRequest: true,
      isCreateTableSuccess: false,
      isCreateTableFailure: false,
    }),
    [Actions.createTableSuccess]: (state, { payload }) => {
      const getAllTablesStateTmp = handleUpdateDataList(state.getAllTablesState, payload.data, 'create');

      return ({
        ...state,
        isCreateTableRequest: false,
        isCreateTableSuccess: true,
        isCreateTableFailure: false,
        getAllTablesState: { ...getAllTablesStateTmp },
      });
    },
    [Actions.createTableFailure]: (state, { payload }) => ({
      ...state,
      isCreateTableRequest: false,
      isCreateTableSuccess: false,
      isCreateTableFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateTable]: (state) => ({
      ...state,
      isCreateTableRequest: false,
      isCreateTableSuccess: false,
      isCreateTableFailure: false,
    }),
    // #endregion
    // #region : Update Table
    [Actions.updateTableRequest]: (state) => ({
      ...state,
      isUpdateTableRequest: true,
      isUpdateTableSuccess: false,
      isUpdateTableFailure: false,
    }),
    [Actions.updateTableSuccess]: (state, { payload }) => {
      const getAllTablesStateTmp = handleUpdateDataList(state.getAllTablesState, payload.data, 'update');

      return ({
        ...state,
        isUpdateTableRequest: false,
        isUpdateTableSuccess: true,
        isUpdateTableFailure: false,
        getAllTablesState: { ...getAllTablesStateTmp },
      });
    },
    [Actions.updateTableFailure]: (state, { payload }) => ({
      ...state,
      isUpdateTableRequest: false,
      isUpdateTableSuccess: false,
      isUpdateTableFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateTable]: (state) => ({
      ...state,
      isUpdateTableRequest: false,
      isUpdateTableSuccess: false,
      isUpdateTableFailure: false,
    }),
    // #endregion
    // #region : Delete Table
    [Actions.deleteTableRequest]: (state) => ({
      ...state,
      isDeleteTableRequest: true,
      isDeleteTableSuccess: false,
      isDeleteTableFailure: false,
    }),
    [Actions.deleteTableSuccess]: (state, { payload }) => {
      const getAllTablesStateTmp = handleUpdateDataList(state.getAllTablesState, payload, 'delete');

      return ({
        ...state,
        isDeleteTableRequest: false,
        isDeleteTableSuccess: true,
        isDeleteTableFailure: false,
        getAllTablesState: { ...getAllTablesStateTmp },
      });
    },
    [Actions.deleteTableFailure]: (state, { payload }) => ({
      ...state,
      isDeleteTableRequest: false,
      isDeleteTableSuccess: false,
      isDeleteTableFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteTable]: (state) => ({
      ...state,
      isDeleteTableRequest: false,
      isDeleteTableSuccess: false,
      isDeleteTableFailure: false,
    }),
    // #endregion
    // #region : Local
    [Actions.resetTableState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
