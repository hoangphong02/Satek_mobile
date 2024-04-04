/* eslint-disable import/no-extraneous-dependencies */
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  isGetAllWorkPlaceRequest: false,
  isGetAllWorkPlaceSuccess: false,
  isGetAllWorkPlaceFailure: false,
  listWorkPlaceState: {},
  //
  isAddWorkPlaceRequest: false,
  isAddWorkPlaceSuccess: false,
  isAddWorkPlaceFailure: false,
  //
  isEditWorkPlaceRequest: false,
  isEditWorkPlaceSuccess: false,
  isEditWorkPlaceFailure: false,
  //
  isDeleteWorkPlaceRequest: false,
  isDeleteWorkPlaceSuccess: false,
  isDeleteWorkPlaceFailure: false,
  //
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region: get all
    [Actions.getAllWorkPlaceRequest]: (state) => ({
      ...state,
      isGetAllWorkPlaceRequest: true,
      isGetAllWorkPlaceSuccess: false,
      isGetAllWorkPlaceFailure: false,
    }),
    [Actions.getAllWorkPlaceSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllWorkPlaceRequest: false,
      isGetAllWorkPlaceSuccess: true,
      isGetAllWorkPlaceFailure: false,
      listWorkPlaceState: payload,
    }),
    [Actions.getAllWorkPlaceFailure]: (state, { payload }) => ({
      ...state,
      isGetAllWorkPlaceRequest: false,
      isGetAllWorkPlaceSuccess: false,
      isGetAllWorkPlaceFailure: true,
      errorMessages: payload,
    }),
    // #endregion

    // #region : add
    [Actions.addWorkPlaceRequest]: (state) => ({
      ...state,
      isAddWorkPlaceRequest: true,
      isAddWorkPlaceSuccess: false,
      isAddWorkPlaceFailure: false,
    }),
    [Actions.addWorkPlaceSuccess]: (state) => ({
      ...state,
      isAddWorkPlaceRequest: false,
      isAddWorkPlaceSuccess: true,
      isAddWorkPlaceFailure: false,
    }),
    [Actions.addWorkPlaceFailure]: (state, { payload }) => ({
      ...state,
      isAddWorkPlaceRequest: false,
      isAddWorkPlaceSuccess: false,
      isAddWorkPlaceFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetAddWorkPlaceState]: (state) => ({
      ...state,
      isAddWorkPlaceRequest: false,
      isAddWorkPlaceFailure: false,
      isAddWorkPlaceSuccess: false,
      errorMessages: [],
    }),
    // #endregion

    // #region : edit
    [Actions.editWorkPlaceRequest]: (state) => ({
      ...state,
      isEditWorkPlaceRequest: true,
      isEditWorkPlaceSuccess: false,
      isEditWorkPlaceFailure: false,
    }),
    [Actions.editWorkPlaceSuccess]: (state) => ({
      ...state,
      isEditWorkPlaceRequest: false,
      isEditWorkPlaceSuccess: true,
      isEditWorkPlaceFailure: false,
    }),
    [Actions.editWorkPlaceFailure]: (state, { payload }) => ({
      ...state,
      isEditWorkPlaceRequest: false,
      isEditWorkPlaceSuccess: false,
      isEditWorkPlaceFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetEditWorkPlaceState]: (state) => ({
      ...state,
      isEditWorkPlaceRequest: false,
      isEditWorkPlaceFailure: false,
      isEditWorkPlaceSuccess: false,
      errorMessages: [],
    }),
    // #endregion

    // #region : delete
    [Actions.deleteWorkPlaceRequest]: (state) => ({
      ...state,
      isDeleteWorkPlaceRequest: true,
      isDeleteWorkPlaceSuccess: false,
      isDeleteWorkPlaceFailure: false,
    }),
    [Actions.deleteWorkPlaceSuccess]: (state) => ({
      ...state,
      isDeleteWorkPlaceRequest: false,
      isDeleteWorkPlaceSuccess: true,
      isDeleteWorkPlaceFailure: false,
    }),
    [Actions.deleteWorkPlaceFailure]: (state, { payload }) => ({
      ...state,
      isDeleteWorkPlaceRequest: false,
      isDeleteWorkPlaceSuccess: false,
      isDeleteWorkPlaceFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetEditWorkPlaceState]: (state) => ({
      ...state,
      isDeleteWorkPlaceRequest: false,
      isEditWorkPlaceFailure: false,
      isEditWorkPlaceSuccess: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : reset
    [Actions.resetStateWorkPlace]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
