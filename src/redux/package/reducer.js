// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

// eslint-disable-next-line import/no-extraneous-dependencies
import { handleUpdateDataList } from '~/helpers/utils';
import * as Actions from './actions';

const initialState = {
  // Get All package
  isFirstGetAllPackages: false,
  isGetAllPackagesRequest: false,
  isGetAllPackagesSuccess: false,
  isGetAllPackagesFailure: false,
  getAllPackagesState: {},
  // Create package
  isCreatePackageRequest: false,
  isCreatePackageSuccess: false,
  isCreatePackageFailure: false,
  // Update package
  isUpdatePackageRequest: false,
  isUpdatePackageSuccess: false,
  isUpdatePackageFailure: false,
  // Delete package
  isDeletePackageRequest: false,
  isDeletePackageSuccess: false,
  isDeletePackageFailure: false,
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All package
    [Actions.getAllpackagesRequest]: (state) => ({
      ...state,
      isGetAllPackagesRequest: true,
      isGetAllPackagesSuccess: false,
      isGetAllPackagesFailure: false,
    }),
    [Actions.getAllpackagesSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllPackages: true,
      isGetAllPackagesRequest: false,
      isGetAllPackagesSuccess: true,
      isGetAllPackagesFailure: false,
      getAllPackagesState: payload,
    }),
    [Actions.getAllpackagesFailure]: (state, { payload }) => ({
      ...state,
      isGetAllPackagesRequest: false,
      isGetAllPackagesSuccess: false,
      isGetAllPackagesFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create package
    [Actions.createPackageRequest]: (state) => ({
      ...state,
      isCreatePackageRequest: true,
      isCreatePackageSuccess: false,
      isCreatePackageFailure: false,
    }),
    [Actions.createPackageSuccess]: (state, { payload }) => {
      const getAllPackagesStateTmp = handleUpdateDataList(state.getAllPackagesState, payload.data, 'create');

      return ({
        ...state,
        isCreatePackageRequest: false,
        isCreatePackageSuccess: true,
        isCreatePackageFailure: false,
        getAllPackagesState: { ...getAllPackagesStateTmp },
      });
    },
    [Actions.createPackageFailure]: (state, { payload }) => ({
      ...state,
      isCreatePackageRequest: false,
      isCreatePackageSuccess: false,
      isCreatePackageFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreatePackage]: (state) => ({
      ...state,
      isCreatePackageRequest: false,
      isCreatePackageSuccess: false,
      isCreatePackageFailure: false,
    }),
    // #endregion
    // #region : Update package
    [Actions.updatePackageRequest]: (state) => ({
      ...state,
      isUpdatePackageRequest: true,
      isUpdatePackageSuccess: false,
      isUpdatePackageFailure: false,
    }),
    [Actions.updatePackageSuccess]: (state, { payload }) => {
      const getAllPackagesStateTmp = handleUpdateDataList(state.getAllPackagesState, payload.data, 'update');

      return ({
        ...state,
        isUpdatePackageRequest: false,
        isUpdatePackageSuccess: true,
        isUpdatePackageFailure: false,
        getAllPackagesState: { ...getAllPackagesStateTmp },
      });
    },
    [Actions.updatePackageFailure]: (state, { payload }) => ({
      ...state,
      isUpdatePackageRequest: false,
      isUpdatePackageSuccess: false,
      isUpdatePackageFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdatePackage]: (state) => ({
      ...state,
      isUpdatePackageRequest: false,
      isUpdatePackageSuccess: false,
      isUpdatePackageFailure: false,
    }),
    // #endregion
    // #region : Delete package
    [Actions.deletePackageRequest]: (state) => ({
      ...state,
      isDeletePackageRequest: true,
      isDeletePackageSuccess: false,
      isDeletePackageFailure: false,
    }),
    [Actions.deletePackageSuccess]: (state, { payload }) => {
      const getAllPackagesStateTmp = handleUpdateDataList(state.getAllPackagesState, payload, 'delete');

      return ({
        ...state,
        isDeletePackageRequest: false,
        isDeletePackageSuccess: true,
        isDeletePackageFailure: false,
        getAllPackagesState: { ...getAllPackagesStateTmp },
      });
    },
    [Actions.deletePackageFailure]: (state, { payload }) => ({
      ...state,
      isDeletePackageRequest: false,
      isDeletePackageSuccess: false,
      isDeletePackageFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeletePackage]: (state) => ({
      ...state,
      isDeletePackageRequest: false,
      isDeletePackageSuccess: false,
      isDeletePackageFailure: false,
    }),
    // #endregion
    // #region : Local
    [Actions.resetPackageState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
