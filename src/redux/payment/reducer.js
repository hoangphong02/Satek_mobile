// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

// eslint-disable-next-line import/no-extraneous-dependencies
import { handleUpdateDataList } from '~/helpers/utils';
import * as Actions from './actions';

const initialState = {
  // Get All Payment
  isFirstGetAllPayments: false,
  isGetAllPaymentsRequest: false,
  isGetAllPaymentsSuccess: false,
  isGetAllPaymentsFailure: false,
  getAllPaymentsState: {},
  // Create Payment
  isCreatePaymentRequest: false,
  isCreatePaymentSuccess: false,
  isCreatePaymentFailure: false,
  // Update Payment
  isUpdatePaymentRequest: false,
  isUpdatePaymentSuccess: false,
  isUpdatePaymentFailure: false,
  // Delete Payment
  isDeletePaymentRequest: false,
  isDeletePaymentSuccess: false,
  isDeletePaymentFailure: false,
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Payment
    [Actions.getAllPaymentsRequest]: (state) => ({
      ...state,
      isGetAllPaymentsRequest: true,
      isGetAllPaymentsSuccess: false,
      isGetAllPaymentsFailure: false,
    }),
    [Actions.getAllPaymentsSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllPayments: true,
      isGetAllPaymentsRequest: false,
      isGetAllPaymentsSuccess: true,
      isGetAllPaymentsFailure: false,
      getAllPaymentsState: payload,
    }),
    [Actions.getAllPaymentsFailure]: (state, { payload }) => ({
      ...state,
      isGetAllPaymentsRequest: false,
      isGetAllPaymentsSuccess: false,
      isGetAllPaymentsFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Payment
    [Actions.createPaymentRequest]: (state) => ({
      ...state,
      isCreatePaymentRequest: true,
      isCreatePaymentSuccess: false,
      isCreatePaymentFailure: false,
    }),
    [Actions.createPaymentSuccess]: (state, { payload }) => {
      const getAllPaymentsStateTmp = handleUpdateDataList(state.getAllPaymentsState, payload.data, 'create');

      return ({
        ...state,
        isCreatePaymentRequest: false,
        isCreatePaymentSuccess: true,
        isCreatePaymentFailure: false,
        getAllPaymentsState: { ...getAllPaymentsStateTmp },
      });
    },
    [Actions.createPaymentFailure]: (state, { payload }) => ({
      ...state,
      isCreatePaymentRequest: false,
      isCreatePaymentSuccess: false,
      isCreatePaymentFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreatePayment]: (state) => ({
      ...state,
      isCreatePaymentRequest: false,
      isCreatePaymentSuccess: false,
      isCreatePaymentFailure: false,
    }),
    // #endregion
    // #region : Update Payment
    [Actions.updatePaymentRequest]: (state) => ({
      ...state,
      isUpdatePaymentRequest: true,
      isUpdatePaymentSuccess: false,
      isUpdatePaymentFailure: false,
    }),
    [Actions.updatePaymentSuccess]: (state, { payload }) => {
      const getAllPaymentsStateTmp = handleUpdateDataList(state.getAllPaymentsState, payload.data, 'update');

      return ({
        ...state,
        isUpdatePaymentRequest: false,
        isUpdatePaymentSuccess: true,
        isUpdatePaymentFailure: false,
        getAllPaymentsState: { ...getAllPaymentsStateTmp },
      });
    },
    [Actions.updatePaymentFailure]: (state, { payload }) => ({
      ...state,
      isUpdatePaymentRequest: false,
      isUpdatePaymentSuccess: false,
      isUpdatePaymentFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdatePayment]: (state) => ({
      ...state,
      isUpdatePaymentRequest: false,
      isUpdatePaymentSuccess: false,
      isUpdatePaymentFailure: false,
    }),
    // #endregion
    // #region : Delete Payment
    [Actions.deletePaymentRequest]: (state) => ({
      ...state,
      isDeletePaymentRequest: true,
      isDeletePaymentSuccess: false,
      isDeletePaymentFailure: false,
    }),
    [Actions.deletePaymentSuccess]: (state, { payload }) => {
      const getAllPaymentsStateTmp = handleUpdateDataList(state.getAllPaymentsState, payload, 'delete');

      return ({
        ...state,
        isDeletePaymentRequest: false,
        isDeletePaymentSuccess: true,
        isDeletePaymentFailure: false,
        getAllPaymentsState: { ...getAllPaymentsStateTmp },
      });
    },
    [Actions.deletePaymentFailure]: (state, { payload }) => ({
      ...state,
      isDeletePaymentRequest: false,
      isDeletePaymentSuccess: false,
      isDeletePaymentFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeletePayment]: (state) => ({
      ...state,
      isDeletePaymentRequest: false,
      isDeletePaymentSuccess: false,
      isDeletePaymentFailure: false,
    }),
    // #endregion
    // #region : Local
    [Actions.resetPaymentState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
