// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

// eslint-disable-next-line import/no-extraneous-dependencies
import { handleUpdateDataList } from '~/helpers/utils';
import * as Actions from './actions';

const initialState = {
  // Get All Contract
  isFirstGetAllContracts: false,
  isGetAllContractsRequest: false,
  isGetAllContractsSuccess: false,
  isGetAllContractsFailure: false,
  getAllContractsState: {},
  // Create Contract
  isCreateContractRequest: false,
  isCreateContractSuccess: false,
  isCreateContractFailure: false,
  // Update Contract
  isUpdateContractRequest: false,
  isUpdateContractSuccess: false,
  isUpdateContractFailure: false,
  // Active Contract
  isActiveContractRequest: false,
  isActiveContractSuccess: false,
  isActiveContractFailure: false,
  // Delete Contract
  isDeleteContractRequest: false,
  isDeleteContractSuccess: false,
  isDeleteContractFailure: false,
  // Get histories
  isGetHistoriesContractRequest: false,
  isGetHistoriesContractSuccess: false,
  isGetHistoriesContractFailure: false,
  historiesContractState: {},
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Contract
    [Actions.getAllContractsRequest]: (state) => ({
      ...state,
      isGetAllContractsRequest: true,
      isGetAllContractsSuccess: false,
      isGetAllContractsFailure: false,
    }),
    [Actions.getAllContractsSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllContracts: true,
      isGetAllContractsRequest: false,
      isGetAllContractsSuccess: true,
      isGetAllContractsFailure: false,
      getAllContractsState: payload,
    }),
    [Actions.getAllContractsFailure]: (state, { payload }) => ({
      ...state,
      isGetAllContractsRequest: false,
      isGetAllContractsSuccess: false,
      isGetAllContractsFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Contract
    [Actions.createContractRequest]: (state) => ({
      ...state,
      isCreateContractRequest: true,
      isCreateContractSuccess: false,
      isCreateContractFailure: false,
    }),
    // eslint-disable-next-line no-unused-vars
    [Actions.createContractSuccess]: (state, { payload }) => ({
      ...state,
      isCreateContractRequest: false,
      isCreateContractSuccess: true,
      isCreateContractFailure: false,
      // getAllContractsState: { ...getAllContractsStateTmp },
    }),
    [Actions.createContractFailure]: (state, { payload }) => ({
      ...state,
      isCreateContractRequest: false,
      isCreateContractSuccess: false,
      isCreateContractFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateContract]: (state) => ({
      ...state,
      isCreateContractRequest: false,
      isCreateContractSuccess: false,
      isCreateContractFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Update Contract
    [Actions.updateContractRequest]: (state) => ({
      ...state,
      isUpdateContractRequest: true,
      isUpdateContractSuccess: false,
      isUpdateContractFailure: false,
    }),
    [Actions.updateContractSuccess]: (state) => ({
      ...state,
      isUpdateContractRequest: false,
      isUpdateContractSuccess: true,
      isUpdateContractFailure: false,
    }),
    [Actions.updateContractFailure]: (state, { payload }) => ({
      ...state,
      isUpdateContractRequest: false,
      isUpdateContractSuccess: false,
      isUpdateContractFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateContract]: (state) => ({
      ...state,
      isUpdateContractRequest: false,
      isUpdateContractSuccess: false,
      isUpdateContractFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Active Contract
    [Actions.activeContractRequest]: (state) => ({
      ...state,
      isActiveContractRequest: true,
      isActiveContractSuccess: false,
      isActiveContractFailure: false,
    }),
    [Actions.activeContractSuccess]: (state) => ({
      ...state,
      isActiveContractRequest: false,
      isActiveContractSuccess: true,
      isActiveContractFailure: false,
    }),
    [Actions.activeContractFailure]: (state, { payload }) => ({
      ...state,
      isActiveContractRequest: false,
      isActiveContractSuccess: false,
      isActiveContractFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetActiveContract]: (state) => ({
      ...state,
      isActiveContractRequest: false,
      isActiveContractSuccess: false,
      isActiveContractFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Delete Contract
    [Actions.deleteContractRequest]: (state) => ({
      ...state,
      isDeleteContractRequest: true,
      isDeleteContractSuccess: false,
      isDeleteContractFailure: false,
    }),
    [Actions.deleteContractSuccess]: (state, { payload }) => {
      const getAllContractsStateTmp = handleUpdateDataList(state.getAllContractsState, payload, 'delete');

      return ({
        ...state,
        isDeleteContractRequest: false,
        isDeleteContractSuccess: true,
        isDeleteContractFailure: false,
        getAllContractsState: { ...getAllContractsStateTmp },
      });
    },
    [Actions.deleteContractFailure]: (state, { payload }) => ({
      ...state,
      isDeleteContractRequest: false,
      isDeleteContractSuccess: false,
      isDeleteContractFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteContract]: (state) => ({
      ...state,
      isDeleteContractRequest: false,
      isDeleteContractSuccess: false,
      isDeleteContractFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region Get histories
    [Actions.getHistoriesContractRequest]: (state) => ({
      ...state,
      isGetHistoriesContractRequest: true,
      isGetHistoriesContractSuccess: false,
      isGetHistoriesContractFailure: false,
    }),
    [Actions.getHistoriesContractSuccess]: (state, { payload }) => ({
      ...state,
      isGetHistoriesContractRequest: false,
      isGetHistoriesContractSuccess: true,
      isGetHistoriesContractFailure: false,
      historiesContractState: payload,
    }),
    [Actions.getHistoriesContractFailure]: (state, { payload }) => ({
      ...state,
      isGetHistoriesContractRequest: false,
      isGetHistoriesContractSuccess: false,
      isGetHistoriesContractFailure: true,
      errorMessages: payload,
    }),

    // #endregion
    // #region : Local
    [Actions.resetContractState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
