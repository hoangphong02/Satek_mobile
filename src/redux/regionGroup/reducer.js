/* eslint-disable import/no-extraneous-dependencies */
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  isGetAllRegionRequest: false,
  isGetAllRegionSuccess: false,
  isGetAllRegionFailure: false,
  listRegionState: {},

  isGetAllRegionGroupRequest: false,
  isGetAllRegionGroupSuccess: false,
  isGetAllRegionGroupFailure: false,
  listRegionGroupState: {},

  isAddRegionGroupRequest: false,
  isAddRegionGroupSuccess: false,
  isAddRegionGroupFailure: false,

  isEditRegionGroupRequest: false,
  isEditRegionGroupSuccess: false,
  isEditRegionGroupFailure: false,

  isDeleteRegionGroupRequest: false,
  isDeleteRegionGroupSuccess: false,
  isDeleteRegionGroupFailure: false,

  errorMessages: {},
};

const reducer = handleActions(
  {
    // #region : get all
    [Actions.getAllRegionRequest]: (state) => ({
      ...state,
      isGetAllRegionRequest: true,
      isGetAllRegionSuccess: false,
      isGetAllRegionFailure: false,
    }),
    [Actions.getAllRegionSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllRegionRequest: false,
      isGetAllRegionSuccess: true,
      isGetAllRegionFailure: false,
      listRegionState: payload,
    }),
    [Actions.getAllRegionRequest]: (state, { payload }) => ({
      ...state,
      isGetAllRegionRequest: false,
      isGetAllRegionSuccess: false,
      isGetAllRegionFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetListRegionState]: (state) => ({
      ...state,
      isGetAllRegionFailure: false,
      isGetAllRegionSuccess: false,
      isGetAllRegionRequest: false,
      listRegionState: {},
    }),
    // #endregion

    // #region
    [Actions.getAllRegionGroupRequest]: (state) => ({
      ...state,
      isGetAllRegionGroupRequest: true,
      isGetAllRegionGroupSuccess: false,
      isGetAllRegionGroupFailure: false,
    }),
    [Actions.getAllRegionGroupSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllRegionGroupRequest: false,
      isGetAllRegionGroupSuccess: true,
      isGetAllRegionGroupFailure: false,
      listRegionGroupState: payload,
    }),
    [Actions.getAllRegionGroupFailure]: (state, { payload }) => ({
      ...state,
      isGetAllRegionGroupRequest: false,
      isGetAllRegionGroupSuccess: false,
      isGetAllRegionGroupFailure: true,
      errorMessages: payload,
    }),
    // #endregion

    // #region : add
    [Actions.addRegionGroupRequest]: (state) => ({
      ...state,
      isAddRegionGroupRequest: true,
      isAddRegionGroupSuccess: false,
      isAddRegionGroupFailure: false,
    }),
    [Actions.addRegionGroupSuccess]: (state) => ({
      ...state,
      isAddRegionGroupRequest: false,
      isAddRegionGroupSuccess: true,
      isAddRegionGroupFailure: false,
    }),
    [Actions.addRegionGroupFailure]: (state, { payload }) => ({
      ...state,
      isAddRegionGroupRequest: false,
      isAddRegionGroupSuccess: false,
      isAddRegionGroupFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetAddRegionGroupState]: (state) => ({
      ...state,
      isAddRegionGroupFailure: false,
      isAddRegionGroupRequest: false,
      isAddRegionGroupSuccess: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : edit
    [Actions.editRegionGroupRequest]: (state) => ({
      ...state,
      isEditRegionGroupRequest: true,
      isEditRegionGroupSuccess: false,
      isEditRegionGroupFailure: false,
    }),
    [Actions.editRegionGroupSuccess]: (state) => ({
      ...state,
      isEditRegionGroupRequest: false,
      isEditRegionGroupSuccess: true,
      isEditRegionGroupFailure: false,
    }),
    [Actions.editRegionGroupFailure]: (state, { payload }) => ({
      ...state,
      isEditRegionGroupRequest: false,
      isEditRegionGroupSuccess: false,
      isEditRegionGroupFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetEditRegionGroupState]: (state) => ({
      ...state,
      isEditRegionGroupRequest: false,
      isEditRegionGroupSuccess: false,
      isEditRegionGroupFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : delete
    [Actions.deleteRegionGroupRequest]: (state) => ({
      ...state,
      isDeleteRegionGroupRequest: true,
      isDeleteRegionGroupSuccess: false,
      isDeleteRegionGroupFailure: false,
    }),
    [Actions.deleteRegionGroupSuccess]: (state) => ({
      ...state,
      isDeleteRegionGroupRequest: false,
      isDeleteRegionGroupSuccess: true,
      isDeleteRegionGroupFailure: false,
    }),
    [Actions.deleteRegionGroupFailure]: (state, { payload }) => ({
      ...state,
      isDeleteRegionGroupRequest: false,
      isDeleteRegionGroupSuccess: false,
      isDeleteRegionGroupFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteRegionGroupState]: (state) => ({
      ...state,
      isDeleteRegionGroupRequest: false,
      isDeleteRegionGroupSuccess: false,
      isDeleteRegionGroupFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : reset state

    [Actions.resetRegionGroupState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
