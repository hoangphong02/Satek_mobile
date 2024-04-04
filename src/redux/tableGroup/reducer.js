// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

// eslint-disable-next-line import/no-extraneous-dependencies
import { handleUpdateDataList } from '~/helpers/utils';
import * as Actions from './actions';

const initialState = {
  // Get All TableGroup
  isFirstGetAllTableGroups: false,
  isGetAllTableGroupsRequest: false,
  isGetAllTableGroupsSuccess: false,
  isGetAllTableGroupsFailure: false,
  getAllTableGroupsState: {},
  // Create TableGroup
  isCreateTableGroupRequest: false,
  isCreateTableGroupSuccess: false,
  isCreateTableGroupFailure: false,
  // Update TableGroup
  isUpdateTableGroupRequest: false,
  isUpdateTableGroupSuccess: false,
  isUpdateTableGroupFailure: false,
  // Delete TableGroup
  isDeleteTableGroupRequest: false,
  isDeleteTableGroupSuccess: false,
  isDeleteTableGroupFailure: false,
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All TableGroup
    [Actions.getAllTableGroupsRequest]: (state) => ({
      ...state,
      isGetAllTableGroupsRequest: true,
      isGetAllTableGroupsSuccess: false,
      isGetAllTableGroupsFailure: false,
    }),
    [Actions.getAllTableGroupsSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllTableGroups: true,
      isGetAllTableGroupsRequest: false,
      isGetAllTableGroupsSuccess: true,
      isGetAllTableGroupsFailure: false,
      getAllTableGroupsState: payload,
    }),
    [Actions.getAllTableGroupsFailure]: (state, { payload }) => ({
      ...state,
      isGetAllTableGroupsRequest: false,
      isGetAllTableGroupsSuccess: false,
      isGetAllTableGroupsFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create TableGroup
    [Actions.createTableGroupRequest]: (state) => ({
      ...state,
      isCreateTableGroupRequest: true,
      isCreateTableGroupSuccess: false,
      isCreateTableGroupFailure: false,
    }),
    [Actions.createTableGroupSuccess]: (state, { payload }) => {
      const getAllTableGroupsStateTmp = handleUpdateDataList(state.getAllTableGroupsState, payload.data, 'create');

      return ({
        ...state,
        isCreateTableGroupRequest: false,
        isCreateTableGroupSuccess: true,
        isCreateTableGroupFailure: false,
        getAllTableGroupsState: { ...getAllTableGroupsStateTmp },
      });
    },
    [Actions.createTableGroupFailure]: (state, { payload }) => ({
      ...state,
      isCreateTableGroupRequest: false,
      isCreateTableGroupSuccess: false,
      isCreateTableGroupFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateTableGroup]: (state) => ({
      ...state,
      isCreateTableGroupRequest: false,
      isCreateTableGroupSuccess: false,
      isCreateTableGroupFailure: false,
    }),
    // #endregion
    // #region : Update TableGroup
    [Actions.updateTableGroupRequest]: (state) => ({
      ...state,
      isUpdateTableGroupRequest: true,
      isUpdateTableGroupSuccess: false,
      isUpdateTableGroupFailure: false,
    }),
    [Actions.updateTableGroupSuccess]: (state, { payload }) => {
      const getAllTableGroupsStateTmp = handleUpdateDataList(state.getAllTableGroupsState, payload.data, 'update');

      return ({
        ...state,
        isUpdateTableGroupRequest: false,
        isUpdateTableGroupSuccess: true,
        isUpdateTableGroupFailure: false,
        getAllTableGroupsState: { ...getAllTableGroupsStateTmp },
      });
    },
    [Actions.updateTableGroupFailure]: (state, { payload }) => ({
      ...state,
      isUpdateTableGroupRequest: false,
      isUpdateTableGroupSuccess: false,
      isUpdateTableGroupFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateTableGroup]: (state) => ({
      ...state,
      isUpdateTableGroupRequest: false,
      isUpdateTableGroupSuccess: false,
      isUpdateTableGroupFailure: false,
    }),
    // #endregion
    // #region : Delete TableGroup
    [Actions.deleteTableGroupRequest]: (state) => ({
      ...state,
      isDeleteTableGroupRequest: true,
      isDeleteTableGroupSuccess: false,
      isDeleteTableGroupFailure: false,
    }),
    [Actions.deleteTableGroupSuccess]: (state, { payload }) => {
      const getAllTableGroupsStateTmp = handleUpdateDataList(state.getAllTableGroupsState, payload, 'delete');

      return ({
        ...state,
        isDeleteTableGroupRequest: false,
        isDeleteTableGroupSuccess: true,
        isDeleteTableGroupFailure: false,
        getAllTableGroupsState: { ...getAllTableGroupsStateTmp },
      });
    },
    [Actions.deleteTableGroupFailure]: (state, { payload }) => ({
      ...state,
      isDeleteTableGroupRequest: false,
      isDeleteTableGroupSuccess: false,
      isDeleteTableGroupFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteTableGroup]: (state) => ({
      ...state,
      isDeleteTableGroupRequest: false,
      isDeleteTableGroupSuccess: false,
      isDeleteTableGroupFailure: false,
    }),
    // #endregion
    // #region : Local
    [Actions.resetTableGroupState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
