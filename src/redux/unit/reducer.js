// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

// eslint-disable-next-line import/no-extraneous-dependencies
import { handleUpdateDataList } from '~/helpers/utils';
import * as Actions from './actions';

const initialState = {
  // Get All Unit
  isFirstGetAllUnits: false,
  isGetAllUnitsRequest: false,
  isGetAllUnitsSuccess: false,
  isGetAllUnitsFailure: false,
  getAllUnitsState: {},
  // Create Unit
  isCreateUnitRequest: false,
  isCreateUnitSuccess: false,
  isCreateUnitFailure: false,
  // Update Unit
  isUpdateUnitRequest: false,
  isUpdateUnitSuccess: false,
  isUpdateUnitFailure: false,
  // Delete Unit
  isDeleteUnitRequest: false,
  isDeleteUnitSuccess: false,
  isDeleteUnitFailure: false,
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Unit
    [Actions.getAllUnitsRequest]: (state) => ({
      ...state,
      isGetAllUnitsRequest: true,
      isGetAllUnitsSuccess: false,
      isGetAllUnitsFailure: false,
    }),
    [Actions.getAllUnitsSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllUnits: true,
      isGetAllUnitsRequest: false,
      isGetAllUnitsSuccess: true,
      isGetAllUnitsFailure: false,
      getAllUnitsState: payload,
    }),
    [Actions.getAllUnitsFailure]: (state, { payload }) => ({
      ...state,
      isGetAllUnitsRequest: false,
      isGetAllUnitsSuccess: false,
      isGetAllUnitsFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Unit
    [Actions.createUnitRequest]: (state) => ({
      ...state,
      isCreateUnitRequest: true,
      isCreateUnitSuccess: false,
      isCreateUnitFailure: false,
    }),
    [Actions.createUnitSuccess]: (state, { payload }) => {
      const getAllUnitsStateTmp = handleUpdateDataList(state.getAllUnitsState, payload.data, 'create');

      return ({
        ...state,
        isCreateUnitRequest: false,
        isCreateUnitSuccess: true,
        isCreateUnitFailure: false,
        getAllUnitsState: { ...getAllUnitsStateTmp },
      });
    },
    [Actions.createUnitFailure]: (state, { payload }) => ({
      ...state,
      isCreateUnitRequest: false,
      isCreateUnitSuccess: false,
      isCreateUnitFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateUnit]: (state) => ({
      ...state,
      isCreateUnitRequest: false,
      isCreateUnitSuccess: false,
      isCreateUnitFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Update Unit
    [Actions.updateUnitRequest]: (state) => ({
      ...state,
      isUpdateUnitRequest: true,
      isUpdateUnitSuccess: false,
      isUpdateUnitFailure: false,
    }),
    [Actions.updateUnitSuccess]: (state, { payload }) => {
      const getAllUnitsStateTmp = handleUpdateDataList(state.getAllUnitsState, payload.data, 'update');

      return ({
        ...state,
        isUpdateUnitRequest: false,
        isUpdateUnitSuccess: true,
        isUpdateUnitFailure: false,
        getAllUnitsState: { ...getAllUnitsStateTmp },
      });
    },
    [Actions.updateUnitFailure]: (state, { payload }) => ({
      ...state,
      isUpdateUnitRequest: false,
      isUpdateUnitSuccess: false,
      isUpdateUnitFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateUnit]: (state) => ({
      ...state,
      isUpdateUnitRequest: false,
      isUpdateUnitSuccess: false,
      isUpdateUnitFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Delete Unit
    [Actions.deleteUnitRequest]: (state) => ({
      ...state,
      isDeleteUnitRequest: true,
      isDeleteUnitSuccess: false,
      isDeleteUnitFailure: false,
    }),
    [Actions.deleteUnitSuccess]: (state, { payload }) => {
      const getAllUnitsStateTmp = handleUpdateDataList(state.getAllUnitsState, payload, 'delete');

      return ({
        ...state,
        isDeleteUnitRequest: false,
        isDeleteUnitSuccess: true,
        isDeleteUnitFailure: false,
        getAllUnitsState: { ...getAllUnitsStateTmp },
      });
    },
    [Actions.deleteUnitFailure]: (state, { payload }) => ({
      ...state,
      isDeleteUnitRequest: false,
      isDeleteUnitSuccess: false,
      isDeleteUnitFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteUnit]: (state) => ({
      ...state,
      isDeleteUnitRequest: false,
      isDeleteUnitSuccess: false,
      isDeleteUnitFailure: false,
    }),
    // #endregion
    // #region : Local
    [Actions.resetUnitState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
