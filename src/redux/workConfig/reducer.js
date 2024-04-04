// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  // Get All Work Configs
  isGetAllWorkConfigsRequest: false,
  isGetAllWorkConfigsSuccess: false,
  isGetAllWorkConfigsFailure: false,
  getAllWorkConfigsState: {},
  // Create WorkConfig
  isCreateWorkConfigRequest: false,
  isCreateWorkConfigSuccess: false,
  isCreateWorkConfigFailure: false,
  // Update WorkConfig
  isUpdateWorkConfigRequest: false,
  isUpdateWorkConfigSuccess: false,
  isUpdateWorkConfigFailure: false,
  // Delete WorkConfig
  isDeleteWorkConfigRequest: false,
  isDeleteWorkConfigSuccess: false,
  isDeleteWorkConfigFailure: false,
  // Search Users
  isSearchUsersRequest: false,
  isSearchUsersSuccess: false,
  isSearchUsersFailure: false,
  searchUsersState: false,
  // Search WorkPlace
  isSearchWorkPlaceRequest: false,
  isSearchWorkPlaceSuccess: false,
  isSearchWorkPlaceFailure: false,
  searchWorkPlaceState: false,
  // Search WorkTime
  isSearchWorkTimeRequest: false,
  isSearchWorkTimeSuccess: false,
  isSearchWorkTimeFailure: false,
  searchWorkTimeState: false,
  // Change work config
  isChangeWorkConfigRequest: false,
  isChangeWorkConfigSuccess: false,
  isChangeWorkConfigFailure: false,
  // Add WorkConfig
  isAddsWorkConfigRequest: false,
  isAddsWorkConfigSuccess: false,
  isAddsWorkConfigFailure: false,
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Work Configs
    [Actions.getAllWorkConfigsRequest]: (state) => ({
      ...state,
      isGetAllWorkConfigsRequest: true,
      isGetAllWorkConfigsSuccess: false,
      isGetAllWorkConfigsFailure: false,
    }),
    [Actions.getAllWorkConfigsSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllWorkConfigsRequest: false,
      isGetAllWorkConfigsSuccess: true,
      isGetAllWorkConfigsFailure: false,
      getAllWorkConfigsState: payload,
    }),
    [Actions.getAllWorkConfigsFailure]: (state, { payload }) => ({
      ...state,
      isGetAllWorkConfigsRequest: false,
      isGetAllWorkConfigsSuccess: false,
      isGetAllWorkConfigsFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetAllWorkConfig]: (state, { payload }) => ({
      ...state,
      isGetAllWorkConfigsRequest: false,
      isGetAllWorkConfigsSuccess: false,
      isGetAllWorkConfigsFailure: false,
      getAllWorkConfigsState: {},
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create WorkConfig
    [Actions.createWorkConfigRequest]: (state) => ({
      ...state,
      isCreateWorkConfigRequest: true,
      isCreateWorkConfigSuccess: false,
      isCreateWorkConfigFailure: false,
    }),
    [Actions.createWorkConfigSuccess]: (state) => ({
      ...state,
      isCreateWorkConfigRequest: false,
      isCreateWorkConfigSuccess: true,
      isCreateWorkConfigFailure: false,
    }),
    [Actions.createWorkConfigFailure]: (state, { payload }) => ({
      ...state,
      isCreateWorkConfigRequest: false,
      isCreateWorkConfigSuccess: false,
      isCreateWorkConfigFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateWorkConfig]: (state) => ({
      ...state,
      isCreateWorkConfigRequest: false,
      isCreateWorkConfigSuccess: false,
      isCreateWorkConfigFailure: false,
    }),
    // #endregion
    // #region : Update WorkConfig
    [Actions.updateWorkConfigRequest]: (state) => ({
      ...state,
      isUpdateWorkConfigRequest: true,
      isUpdateWorkConfigSuccess: false,
      isUpdateWorkConfigFailure: false,
    }),
    [Actions.updateWorkConfigSuccess]: (state) => ({
      ...state,
      isUpdateWorkConfigRequest: false,
      isUpdateWorkConfigSuccess: true,
      isUpdateWorkConfigFailure: false,
    }),
    [Actions.updateWorkConfigFailure]: (state, { payload }) => ({
      ...state,
      isUpdateWorkConfigRequest: false,
      isUpdateWorkConfigSuccess: false,
      isUpdateWorkConfigFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateWorkConfig]: (state) => ({
      ...state,
      isUpdateWorkConfigRequest: false,
      isUpdateWorkConfigSuccess: false,
      isUpdateWorkConfigFailure: false,
    }),
    // #endregion
    // #region : Delete WorkConfig
    [Actions.deleteWorkConfigRequest]: (state) => ({
      ...state,
      isDeleteWorkConfigRequest: true,
      isDeleteWorkConfigSuccess: false,
      isDeleteWorkConfigFailure: false,
    }),
    [Actions.deleteWorkConfigSuccess]: (state) => ({
      ...state,
      isDeleteWorkConfigRequest: false,
      isDeleteWorkConfigSuccess: true,
      isDeleteWorkConfigFailure: false,
    }),
    [Actions.deleteWorkConfigFailure]: (state, { payload }) => ({
      ...state,
      isDeleteWorkConfigRequest: false,
      isDeleteWorkConfigSuccess: false,
      isDeleteWorkConfigFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteWorkConfig]: (state) => ({
      ...state,
      isDeleteWorkConfigRequest: false,
      isDeleteWorkConfigSuccess: false,
      isDeleteWorkConfigFailure: false,
    }),
    // #endregion
    // #region : Search Users
    [Actions.searchUsersRequest]: (state) => ({
      ...state,
      isSearchUsersRequest: true,
      isSearchUsersSuccess: false,
      isSearchUsersFailure: false,
    }),
    [Actions.searchUsersSuccess]: (state, { payload }) => ({
      ...state,
      isSearchUsersRequest: false,
      isSearchUsersSuccess: true,
      isSearchUsersFailure: false,
      searchUsersState: payload,
    }),
    [Actions.searchUsersFailure]: (state, { payload }) => ({
      ...state,
      isSearchUsersRequest: false,
      isSearchUsersSuccess: false,
      isSearchUsersFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetSearchUsers]: (state) => ({
      ...state,
      isSearchUsersRequest: false,
      isSearchUsersSuccess: false,
      isSearchUsersFailure: false,
      searchUsersState: {},
    }),
    // #endregion
    // #region : Search WorkPlace
    [Actions.searchWorkPlaceRequest]: (state) => ({
      ...state,
      isSearchWorkPlaceRequest: true,
      isSearchWorkPlaceSuccess: false,
      isSearchWorkPlaceFailure: false,
    }),
    [Actions.searchWorkPlaceSuccess]: (state, { payload }) => ({
      ...state,
      isSearchWorkPlaceRequest: false,
      isSearchWorkPlaceSuccess: true,
      isSearchWorkPlaceFailure: false,
      searchWorkPlaceState: payload,
    }),
    [Actions.searchWorkPlaceFailure]: (state, { payload }) => ({
      ...state,
      isSearchWorkPlaceRequest: false,
      isSearchWorkPlaceSuccess: false,
      isSearchWorkPlaceFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetSearchWorkPlace]: (state) => ({
      ...state,
      isSearchWorkPlaceRequest: false,
      isSearchWorkPlaceSuccess: false,
      isSearchWorkPlaceFailure: false,
      searchWorkPlaceState: {},
    }),
    // #endregion
    // #region : Search WorkTime
    [Actions.searchWorkTimeRequest]: (state) => ({
      ...state,
      isSearchWorkTimeRequest: true,
      isSearchWorkTimeSuccess: false,
      isSearchWorkTimeFailure: false,
    }),
    [Actions.searchWorkTimeSuccess]: (state, { payload }) => ({
      ...state,
      isSearchWorkTimeRequest: false,
      isSearchWorkTimeSuccess: true,
      isSearchWorkTimeFailure: false,
      searchWorkTimeState: payload,
    }),
    [Actions.searchWorkTimeFailure]: (state, { payload }) => ({
      ...state,
      isSearchWorkTimeRequest: false,
      isSearchWorkTimeSuccess: false,
      isSearchWorkTimeFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetSearchWorkTime]: (state) => ({
      ...state,
      isSearchWorkTimeRequest: false,
      isSearchWorkTimeSuccess: false,
      isSearchWorkTimeFailure: false,
      searchWorkTimeState: {},
    }),
    // #endregion

    // #region : Change work config
    [Actions.changeWorkConfigRequest]: (state) => ({
      ...state,
      isChangeWorkConfigRequest: true,
      isChangeWorkConfigSuccess: false,
      isChangeWorkConfigFailure: false,
    }),
    [Actions.changeWorkConfigSuccess]: (state) => ({
      ...state,
      isChangeWorkConfigRequest: false,
      isChangeWorkConfigSuccess: true,
      isChangeWorkConfigFailure: false,
    }),
    [Actions.changeWorkConfigFailure]: (state, { payload }) => ({
      ...state,
      isChangeWorkConfigRequest: false,
      isChangeWorkConfigSuccess: false,
      isChangeWorkConfigFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetChangeWorkConfig]: (state) => ({
      ...state,
      isChangeWorkConfigRequest: false,
      isChangeWorkConfigSuccess: false,
      isChangeWorkConfigFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Add WorkConfig
    [Actions.addWorkConfigRequest]: (state) => ({
      ...state,
      isAddWorkConfigRequest: true,
      isAddWorkConfigSuccess: false,
      isAddWorkConfigFailure: false,
    }),
    [Actions.addWorkConfigSuccess]: (state) => ({
      ...state,
      isAddWorkConfigRequest: false,
      isAddWorkConfigSuccess: true,
      isAddWorkConfigFailure: false,
    }),
    [Actions.addWorkConfigFailure]: (state, { payload }) => ({
      ...state,
      isAddWorkConfigRequest: false,
      isAddWorkConfigSuccess: false,
      isAddWorkConfigFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetAddWorkConfig]: (state) => ({
      ...state,
      isAddWorkConfigRequest: false,
      isAddWorkConfigSuccess: false,
      isAddWorkConfigFailure: false,
    }),
    // #endregion
    // #region : Local
    [Actions.resetWorkConfigState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
