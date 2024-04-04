/* eslint-disable import/no-extraneous-dependencies */
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  //
  isCreateRegionRequest: false,
  isCreateRegionSuccess: false,
  isCreateRegionFailure: false,
  responseCreateRegion: {},
  //
  isUpdateRegionRequest: false,
  isUpdateRegionSuccess: false,
  isUpdateRegionFailure: false,
  //
  isDeleteRegionRequest: false,
  isDeleteRegionSuccess: false,
  isDeleteRegionFailure: false,
  //
  isGetAllRegionRequest: false,
  isGetAllRegionSuccess: false,
  isGetAllRegionFailure: false,
  listRegionState: {},
  //
  isSearchProvinceRequest: false,
  isSearchProvinceSuccess: false,
  isSearchProvinceFailure: false,
  listProvinceState: {},
  //
  isSearchDistrictRequest: false,
  isSearchDistrictSuccess: false,
  isSearchDistrictFailure: false,
  listDistrictState: {},
  //
  isCreateDistrictRequest: false,
  isCreateDistrictSuccess: false,
  isCreateDistrictFailure: false,
  responseCreateDistrict: {},
  //
  isCreateProvinceRequest: false,
  isCreateProvinceSuccess: false,
  isCreateProvinceFailure: false,
  responseCreateProvince: {},
  //
  isFindOneRegionRequest: false,
  isFindOneRegionSuccess: false,
  isFindOneRegionFailure: false,
  responseFindOneRegion: {},
  //
  errorMessages: [],
};

const reducer = handleActions({
  // #region create
  [Actions.createRegionRequest]: (state) => ({
    ...state,
    isCreateRegionRequest: true,
    isCreateRegionSuccess: false,
    isCreateRegionFailure: false,
  }),
  [Actions.createRegionSuccess]: (state, { payload }) => ({
    ...state,
    isCreateRegionRequest: false,
    isCreateRegionSuccess: true,
    isCreateRegionFailure: false,
    responseCreateRegion: payload,
  }),
  [Actions.createRegionFailure]: (state, { payload }) => ({
    ...state,
    isCreateRegionRequest: false,
    isCreateRegionSuccess: false,
    isCreateRegionFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetCreateRegionState]: (state) => ({
    ...state,
    isCreateRegionRequest: false,
    isCreateRegionSuccess: false,
    isCreateRegionFailure: false,
    errorMessages: [],
  }),
  // #endregion
  // #region update
  [Actions.updateRegionRequest]: (state) => ({
    ...state,
    isUpdateRegionRequest: true,
    isUpdateRegionSuccess: false,
    isUpdateRegionFailure: false,
  }),
  [Actions.updateRegionSuccess]: (state) => ({
    ...state,
    isUpdateRegionRequest: false,
    isUpdateRegionSuccess: true,
    isUpdateRegionFailure: false,
  }),
  [Actions.updateRegionFailure]: (state, { payload }) => ({
    ...state,
    isUpdateRegionRequest: false,
    isUpdateRegionSuccess: false,
    isUpdateRegionFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetUpdateRegionState]: (state) => ({
    ...state,
    isUpdateRegionRequest: false,
    isUpdateRegionSuccess: false,
    isUpdateRegionFailure: false,
    errorMessages: [],
  }),
  // #endregion
  // #region delete
  [Actions.deleteRegionRequest]: (state) => ({
    ...state,
    isDeleteRegionRequest: true,
    isDeleteRegionSuccess: false,
    isDeleteRegionFailure: false,
  }),
  [Actions.deleteRegionSuccess]: (state) => ({
    ...state,
    isDeleteRegionRequest: false,
    isDeleteRegionSuccess: true,
    isDeleteRegionFailure: false,
  }),
  [Actions.deleteRegionFailure]: (state, { payload }) => ({
    ...state,
    isDeleteRegionRequest: false,
    isDeleteRegionSuccess: false,
    isDeleteRegionFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetDeleteRegionState]: (state) => ({
    ...state,
    isDeleteRegionRequest: false,
    isDeleteRegionSuccess: false,
    isDeleteRegionFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region list region
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
  [Actions.getAllRegionFailure]: (state, { payload }) => ({
    ...state,
    isGetAllRegionRequest: false,
    isGetAllRegionSuccess: false,
    isGetAllRegionFailure: true,
    errorMessages: payload,
  }),
  // #endregion

  // #region search province
  [Actions.searchProvinceRequest]: (state) => ({
    ...state,
    isSearchProvinceRequest: true,
    isSearchProvinceSuccess: false,
    isSearchProvinceFailure: false,
  }),
  [Actions.searchProvinceSuccess]: (state, { payload }) => ({
    ...state,
    isSearchProvinceRequest: false,
    isSearchProvinceSuccess: true,
    isSearchProvinceFailure: false,
    listProvinceState: payload,
  }),
  [Actions.searchProvinceFailure]: (state, { payload }) => ({
    ...state,
    isSearchProvinceRequest: false,
    isSearchProvinceSuccess: false,
    isSearchProvinceFailure: true,
    errorMessages: payload,
  }),

  // #endregion
  // #region search province
  [Actions.searchDistrictRequest]: (state) => ({
    ...state,
    isSearchDistrictRequest: true,
    isSearchDistrictSuccess: false,
    isSearchDistrictFailure: false,
  }),
  [Actions.searchDistrictSuccess]: (state, { payload }) => ({
    ...state,
    isSearchDistrictRequest: false,
    isSearchDistrictSuccess: true,
    isSearchDistrictFailure: false,
    listDistrictState: payload,
  }),
  [Actions.searchDistrictFailure]: (state, { payload }) => ({
    ...state,
    isSearchDistrictRequest: false,
    isSearchDistrictSuccess: false,
    isSearchDistrictFailure: true,
    errorMessages: payload,
  }),

  // #endregion

  // #region create district
  [Actions.createDistrictRequest]: (state) => ({
    ...state,
    isCreateDistrictRequest: true,
    isCreateDistrictSuccess: false,
    isCreateDistrictFailure: false,
  }),
  [Actions.createDistrictSuccess]: (state, { payload }) => ({
    ...state,
    isCreateDistrictRequest: false,
    isCreateDistrictSuccess: true,
    isCreateDistrictFailure: false,
    responseCreateDistrict: payload,
  }),
  [Actions.createDistrictFailure]: (state, { payload }) => ({
    ...state,
    isCreateDistrictRequest: false,
    isCreateDistrictSuccess: false,
    isCreateDistrictFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetCreateDistrictState]: (state) => ({
    ...state,
    isCreateDistrictRequest: false,
    isCreateDistrictSuccess: false,
    isCreateDistrictFailure: false,
    errorMessages: [],
  }),

  // #endregion

  // #region create province
  [Actions.createProvinceRequest]: (state) => ({
    ...state,
    isCreateProvinceRequest: true,
    isCreateProvinceSuccess: false,
    isCreateProvinceFailure: false,
  }),
  [Actions.createProvinceSuccess]: (state, { payload }) => ({
    ...state,
    isCreateProvinceRequest: false,
    isCreateProvinceSuccess: true,
    isCreateProvinceFailure: false,
    responseCreateProvince: payload,
  }),
  [Actions.createProvinceFailure]: (state, { payload }) => ({
    ...state,
    isCreateProvinceRequest: false,
    isCreateProvinceSuccess: false,
    isCreateProvinceFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetCreateProvinceState]: (state) => ({
    ...state,
    isCreateProvinceRequest: false,
    isCreateProvinceSuccess: false,
    isCreateProvinceFailure: false,
    errorMessages: [],
  }),

  // #endregion

  // #region
  [Actions.findOneRegionRequest]: (state) => ({
    ...state,
    isFindOneRegionRequest: true,
    isFindOneRegionSuccess: false,
    isFindOneRegionFailure: false,
  }),
  [Actions.findOneRegionSuccess]: (state, { payload }) => ({
    ...state,
    isFindOneRegionRequest: false,
    isFindOneRegionSuccess: false,
    isFindOneRegionFailure: false,
    responseFindOneRegion: payload,
  }),
  [Actions.findOneRegionFailure]: (state, { payload }) => ({
    ...state,
    isFindOneRegionRequest: false,
    isFindOneRegionSuccess: false,
    isFindOneRegionFailure: true,
    errorMessages: payload,
  }),

  // #endregion

  // #region local
  [Actions.resetRegionState]: () => initialState,
  // #endregion
}, initialState);

export default reducer;
