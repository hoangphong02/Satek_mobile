// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

import * as Actions from './actions';

const initialState = {
  // Get All Customer
  isFirstGetAllCustomers: false,
  isGetAllCustomersRequest: false,
  isGetAllCustomersSuccess: false,
  isGetAllCustomersFailure: false,
  getAllCustomersState: {},
  // Create Customer
  isCreateCustomerRequest: false,
  isCreateCustomerSuccess: false,
  isCreateCustomerFailure: false,
  // Update Customer
  isUpdateCustomerRequest: false,
  isUpdateCustomerSuccess: false,
  isUpdateCustomerFailure: false,
  // Delete Customer
  isDeleteCustomerRequest: false,
  isDeleteCustomerSuccess: false,
  isDeleteCustomerFailure: false,
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Customer
    [Actions.getAllCustomersRequest]: (state) => ({
      ...state,
      isGetAllCustomersRequest: true,
      isGetAllCustomersSuccess: false,
      isGetAllCustomersFailure: false,
    }),
    [Actions.getAllCustomersSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllCustomers: true,
      isGetAllCustomersRequest: false,
      isGetAllCustomersSuccess: true,
      isGetAllCustomersFailure: false,
      getAllCustomersState: payload,
    }),
    [Actions.getAllCustomersFailure]: (state, { payload }) => ({
      ...state,
      isGetAllCustomersRequest: false,
      isGetAllCustomersSuccess: false,
      isGetAllCustomersFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Customer
    [Actions.createCustomerRequest]: (state) => ({
      ...state,
      isCreateCustomerRequest: true,
      isCreateCustomerSuccess: false,
      isCreateCustomerFailure: false,
    }),
    [Actions.createCustomerSuccess]: (state) => ({
      ...state,
      isCreateCustomerRequest: false,
      isCreateCustomerSuccess: true,
      isCreateCustomerFailure: false,
    }),
    [Actions.createCustomerFailure]: (state, { payload }) => ({
      ...state,
      isCreateCustomerRequest: false,
      isCreateCustomerSuccess: false,
      isCreateCustomerFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateCustomer]: (state) => ({
      ...state,
      isCreateCustomerRequest: false,
      isCreateCustomerSuccess: false,
      isCreateCustomerFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Update Customer
    [Actions.updateCustomerRequest]: (state) => ({
      ...state,
      isUpdateCustomerRequest: true,
      isUpdateCustomerSuccess: false,
      isUpdateCustomerFailure: false,
    }),
    [Actions.updateCustomerSuccess]: (state) => ({
      ...state,
      isUpdateCustomerRequest: false,
      isUpdateCustomerSuccess: true,
      isUpdateCustomerFailure: false,
    }),
    [Actions.updateCustomerFailure]: (state, { payload }) => ({
      ...state,
      isUpdateCustomerRequest: false,
      isUpdateCustomerSuccess: false,
      isUpdateCustomerFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateCustomer]: (state) => ({
      ...state,
      isUpdateCustomerRequest: false,
      isUpdateCustomerSuccess: false,
      isUpdateCustomerFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Delete Customer
    [Actions.deleteCustomerRequest]: (state) => ({
      ...state,
      isDeleteCustomerRequest: true,
      isDeleteCustomerSuccess: false,
      isDeleteCustomerFailure: false,
    }),
    [Actions.deleteCustomerSuccess]: (state) => ({
      ...state,
      isDeleteCustomerRequest: false,
      isDeleteCustomerSuccess: true,
      isDeleteCustomerFailure: false,
    }),
    [Actions.deleteCustomerFailure]: (state, { payload }) => ({
      ...state,
      isDeleteCustomerRequest: false,
      isDeleteCustomerSuccess: false,
      isDeleteCustomerFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteCustomer]: (state) => ({
      ...state,
      isDeleteCustomerRequest: false,
      isDeleteCustomerSuccess: false,
      isDeleteCustomerFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Local
    [Actions.resetCustomerState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
