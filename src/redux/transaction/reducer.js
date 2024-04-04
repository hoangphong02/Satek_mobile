// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

// eslint-disable-next-line import/no-extraneous-dependencies
import { handleUpdateDataList } from '~/helpers/utils';
import * as Actions from './actions';

const initialState = {
  // Get All Transaction
  isFirstGetAllTransactions: false,
  isGetAllTransactionsRequest: false,
  isGetAllTransactionsSuccess: false,
  isGetAllTransactionsFailure: false,
  getAllTransactionsState: {},
  // Create Transaction
  isCreateTransactionRequest: false,
  isCreateTransactionSuccess: false,
  isCreateTransactionFailure: false,
  createTransactionState: {},
  // Update Transaction
  isUpdateTransactionRequest: false,
  isUpdateTransactionSuccess: false,
  isUpdateTransactionFailure: false,
  // Delete Transaction
  isDeleteTransactionRequest: false,
  isDeleteTransactionSuccess: false,
  isDeleteTransactionFailure: false,
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Transaction
    [Actions.getAllTransactionsRequest]: (state) => ({
      ...state,
      isGetAllTransactionsRequest: true,
      isGetAllTransactionsSuccess: false,
      isGetAllTransactionsFailure: false,
    }),
    [Actions.getAllTransactionsSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllTransactions: true,
      isGetAllTransactionsRequest: false,
      isGetAllTransactionsSuccess: true,
      isGetAllTransactionsFailure: false,
      getAllTransactionsState: payload,
    }),
    [Actions.getAllTransactionsFailure]: (state, { payload }) => ({
      ...state,
      isGetAllTransactionsRequest: false,
      isGetAllTransactionsSuccess: false,
      isGetAllTransactionsFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Transaction
    [Actions.createTransactionRequest]: (state) => ({
      ...state,
      isCreateTransactionRequest: true,
      isCreateTransactionSuccess: false,
      isCreateTransactionFailure: false,
    }),
    [Actions.createTransactionSuccess]: (state, { payload }) => {
      const getAllTransactionsStateTmp = handleUpdateDataList(state.getAllTransactionsState, payload.data, 'create');

      return ({
        ...state,
        isCreateTransactionRequest: false,
        isCreateTransactionSuccess: true,
        isCreateTransactionFailure: false,
        getAllTransactionsState: { ...getAllTransactionsStateTmp },
        createTransactionState: payload,
      });
    },
    [Actions.createTransactionFailure]: (state, { payload }) => ({
      ...state,
      isCreateTransactionRequest: false,
      isCreateTransactionSuccess: false,
      isCreateTransactionFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateTransaction]: (state) => ({
      ...state,
      isCreateTransactionRequest: false,
      isCreateTransactionSuccess: false,
      isCreateTransactionFailure: false,
    }),
    // #endregion
    // #region : Update Transaction
    [Actions.updateTransactionRequest]: (state) => ({
      ...state,
      isUpdateTransactionRequest: true,
      isUpdateTransactionSuccess: false,
      isUpdateTransactionFailure: false,
    }),
    [Actions.updateTransactionSuccess]: (state, { payload }) => {
      const getAllTransactionsStateTmp = handleUpdateDataList(state.getAllTransactionsState, payload.data, 'update');

      return ({
        ...state,
        isUpdateTransactionRequest: false,
        isUpdateTransactionSuccess: true,
        isUpdateTransactionFailure: false,
        getAllTransactionsState: { ...getAllTransactionsStateTmp },
      });
    },
    [Actions.updateTransactionFailure]: (state, { payload }) => ({
      ...state,
      isUpdateTransactionRequest: false,
      isUpdateTransactionSuccess: false,
      isUpdateTransactionFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateTransaction]: (state) => ({
      ...state,
      isUpdateTransactionRequest: false,
      isUpdateTransactionSuccess: false,
      isUpdateTransactionFailure: false,
    }),
    // #endregion
    // #region : Delete Transaction
    [Actions.deleteTransactionRequest]: (state) => ({
      ...state,
      isDeleteTransactionRequest: true,
      isDeleteTransactionSuccess: false,
      isDeleteTransactionFailure: false,
    }),
    [Actions.deleteTransactionSuccess]: (state, { payload }) => {
      const getAllTransactionsStateTmp = handleUpdateDataList(state.getAllTransactionsState, payload, 'delete');

      return ({
        ...state,
        isDeleteTransactionRequest: false,
        isDeleteTransactionSuccess: true,
        isDeleteTransactionFailure: false,
        getAllTransactionsState: { ...getAllTransactionsStateTmp },
      });
    },
    [Actions.deleteTransactionFailure]: (state, { payload }) => ({
      ...state,
      isDeleteTransactionRequest: false,
      isDeleteTransactionSuccess: false,
      isDeleteTransactionFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteTransaction]: (state) => ({
      ...state,
      isDeleteTransactionRequest: false,
      isDeleteTransactionSuccess: false,
      isDeleteTransactionFailure: false,
    }),
    // #endregion
    // #region : Local
    [Actions.resetTransactionState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
