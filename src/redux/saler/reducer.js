// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

import * as Actions from './actions';

const initialState = {
  // Get All Saler
  isFirstGetAllSalers: false,
  isGetAllSalersRequest: false,
  isGetAllSalersSuccess: false,
  isGetAllSalersFailure: false,
  getAllSalersState: {},
  // Create Saler
  isCreateSalerRequest: false,
  isCreateSalerSuccess: false,
  isCreateSalerFailure: false,
  // Update Saler
  isUpdateSalerRequest: false,
  isUpdateSalerSuccess: false,
  isUpdateSalerFailure: false,
  // Delete Saler
  isDeleteSalerRequest: false,
  isDeleteSalerSuccess: false,
  isDeleteSalerFailure: false,
  // Rest Password Saler
  isResetPasswordSalerRequest: false,
  isResetPasswordSalerSuccess: false,
  isResetPasswordSalerFailure: false,
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Saler
    [Actions.getAllSalersRequest]: (state) => ({
      ...state,
      isGetAllSalersRequest: true,
      isGetAllSalersSuccess: false,
      isGetAllSalersFailure: false,
    }),
    [Actions.getAllSalersSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllSalers: true,
      isGetAllSalersRequest: false,
      isGetAllSalersSuccess: true,
      isGetAllSalersFailure: false,
      getAllSalersState: payload,
    }),
    [Actions.getAllSalersFailure]: (state, { payload }) => ({
      ...state,
      isGetAllSalersRequest: false,
      isGetAllSalersSuccess: false,
      isGetAllSalersFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Saler
    [Actions.createSalerRequest]: (state) => ({
      ...state,
      isCreateSalerRequest: true,
      isCreateSalerSuccess: false,
      isCreateSalerFailure: false,
    }),
    [Actions.createSalerSuccess]: (state) => ({
      ...state,
      isCreateSalerRequest: false,
      isCreateSalerSuccess: true,
      isCreateSalerFailure: false,
    }),
    [Actions.createSalerFailure]: (state, { payload }) => ({
      ...state,
      isCreateSalerRequest: false,
      isCreateSalerSuccess: false,
      isCreateSalerFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateSaler]: (state) => ({
      ...state,
      isCreateSalerRequest: false,
      isCreateSalerSuccess: false,
      isCreateSalerFailure: false,
    }),
    // #endregion
    // #region : Update Saler
    [Actions.updateSalerRequest]: (state) => ({
      ...state,
      isUpdateSalerRequest: true,
      isUpdateSalerSuccess: false,
      isUpdateSalerFailure: false,
    }),
    [Actions.updateSalerSuccess]: (state) => ({
      ...state,
      isUpdateSalerRequest: false,
      isUpdateSalerSuccess: true,
      isUpdateSalerFailure: false,
    }),
    [Actions.updateSalerFailure]: (state, { payload }) => ({
      ...state,
      isUpdateSalerRequest: false,
      isUpdateSalerSuccess: false,
      isUpdateSalerFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateSaler]: (state) => ({
      ...state,
      isUpdateSalerRequest: false,
      isUpdateSalerSuccess: false,
      isUpdateSalerFailure: false,
    }),
    // #endregion
    // #region : Delete Saler
    [Actions.deleteSalerRequest]: (state) => ({
      ...state,
      isDeleteSalerRequest: true,
      isDeleteSalerSuccess: false,
      isDeleteSalerFailure: false,
    }),
    [Actions.deleteSalerSuccess]: (state) => ({
      ...state,
      isDeleteSalerRequest: false,
      isDeleteSalerSuccess: true,
      isDeleteSalerFailure: false,
    }),
    [Actions.deleteSalerFailure]: (state, { payload }) => ({
      ...state,
      isDeleteSalerRequest: false,
      isDeleteSalerSuccess: false,
      isDeleteSalerFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteSaler]: (state) => ({
      ...state,
      isDeleteSalerRequest: false,
      isDeleteSalerSuccess: false,
      isDeleteSalerFailure: false,
    }),
    // #endregion
    // #region : Reset Password Saler
    [Actions.resetPasswordSalerRequest]: (state) => ({
      ...state,
      isResetPasswordSalerRequest: true,
      isResetPasswordSalerSuccess: false,
      isResetPasswordSalerFailure: false,
    }),
    [Actions.resetPasswordSalerSuccess]: (state) => ({
      ...state,
      isResetPasswordSalerRequest: false,
      isResetPasswordSalerSuccess: true,
      isResetPasswordSalerFailure: false,
    }),
    [Actions.resetPasswordSalerFailure]: (state, { payload }) => ({
      ...state,
      isResetPasswordSalerRequest: false,
      isResetPasswordSalerSuccess: false,
      isResetPasswordSalerFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetResetPasswordSaler]: (state) => ({
      ...state,
      isResetPasswordSalerRequest: false,
      isResetPasswordSalerSuccess: false,
      isResetPasswordSalerFailure: false,
    }),
    // #endregion
    // #region : Local
    [Actions.resetSalerState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
