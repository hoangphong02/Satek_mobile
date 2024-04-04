// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

// eslint-disable-next-line import/no-extraneous-dependencies
import { handleUpdateDataList } from '~/helpers/utils';
import * as Actions from './actions';

const initialState = {
  // Get All Feature
  isFirstGetAllFeatures: false,
  isGetAllFeaturesRequest: false,
  isGetAllFeaturesSuccess: false,
  isGetAllFeaturesFailure: false,
  getAllFeaturesState: {},
  // Create Feature
  isCreateFeatureRequest: false,
  isCreateFeatureSuccess: false,
  isCreateFeatureFailure: false,
  // Update Feature
  isUpdateFeatureRequest: false,
  isUpdateFeatureSuccess: false,
  isUpdateFeatureFailure: false,
  // Delete Feature
  isDeleteFeatureRequest: false,
  isDeleteFeatureSuccess: false,
  isDeleteFeatureFailure: false,
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Feature
    [Actions.getAllFeaturesRequest]: (state) => ({
      ...state,
      isGetAllFeaturesRequest: true,
      isGetAllFeaturesSuccess: false,
      isGetAllFeaturesFailure: false,
    }),
    [Actions.getAllFeaturesSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllFeatures: true,
      isGetAllFeaturesRequest: false,
      isGetAllFeaturesSuccess: true,
      isGetAllFeaturesFailure: false,
      getAllFeaturesState: payload,
    }),
    [Actions.getAllFeaturesFailure]: (state, { payload }) => ({
      ...state,
      isGetAllFeaturesRequest: false,
      isGetAllFeaturesSuccess: false,
      isGetAllFeaturesFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Feature
    [Actions.createFeatureRequest]: (state) => ({
      ...state,
      isCreateFeatureRequest: true,
      isCreateFeatureSuccess: false,
      isCreateFeatureFailure: false,
    }),
    [Actions.createFeatureSuccess]: (state, { payload }) => {
      const getAllFeaturesStateTmp = handleUpdateDataList(state.getAllFeaturesState, payload.data, 'create');

      return ({
        ...state,
        isCreateFeatureRequest: false,
        isCreateFeatureSuccess: true,
        isCreateFeatureFailure: false,
        getAllFeaturesState: { ...getAllFeaturesStateTmp },
      });
    },
    [Actions.createFeatureFailure]: (state, { payload }) => ({
      ...state,
      isCreateFeatureRequest: false,
      isCreateFeatureSuccess: false,
      isCreateFeatureFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateFeature]: (state) => ({
      ...state,
      isCreateFeatureRequest: false,
      isCreateFeatureSuccess: false,
      isCreateFeatureFailure: false,
    }),
    // #endregion
    // #region : Update Feature
    [Actions.updateFeatureRequest]: (state) => ({
      ...state,
      isUpdateFeatureRequest: true,
      isUpdateFeatureSuccess: false,
      isUpdateFeatureFailure: false,
    }),
    [Actions.updateFeatureSuccess]: (state, { payload }) => {
      const getAllFeaturesStateTmp = handleUpdateDataList(state.getAllFeaturesState, payload.data, 'update');

      return ({
        ...state,
        isUpdateFeatureRequest: false,
        isUpdateFeatureSuccess: true,
        isUpdateFeatureFailure: false,
        getAllFeaturesState: { ...getAllFeaturesStateTmp },
      });
    },
    [Actions.updateFeatureFailure]: (state, { payload }) => ({
      ...state,
      isUpdateFeatureRequest: false,
      isUpdateFeatureSuccess: false,
      isUpdateFeatureFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateFeature]: (state) => ({
      ...state,
      isUpdateFeatureRequest: false,
      isUpdateFeatureSuccess: false,
      isUpdateFeatureFailure: false,
    }),
    // #endregion
    // #region : Delete Feature
    [Actions.deleteFeatureRequest]: (state) => ({
      ...state,
      isDeleteFeatureRequest: true,
      isDeleteFeatureSuccess: false,
      isDeleteFeatureFailure: false,
    }),
    [Actions.deleteFeatureSuccess]: (state, { payload }) => {
      const getAllFeaturesStateTmp = handleUpdateDataList(state.getAllFeaturesState, payload, 'delete');

      return ({
        ...state,
        isDeleteFeatureRequest: false,
        isDeleteFeatureSuccess: true,
        isDeleteFeatureFailure: false,
        getAllFeaturesState: { ...getAllFeaturesStateTmp },
      });
    },
    [Actions.deleteFeatureFailure]: (state, { payload }) => ({
      ...state,
      isDeleteFeatureRequest: false,
      isDeleteFeatureSuccess: false,
      isDeleteFeatureFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteFeature]: (state) => ({
      ...state,
      isDeleteFeatureRequest: false,
      isDeleteFeatureSuccess: false,
      isDeleteFeatureFailure: false,
    }),
    // #endregion
    // #region : Local
    [Actions.resetFeatureState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
