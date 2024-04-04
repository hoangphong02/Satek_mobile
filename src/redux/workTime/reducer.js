// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  isCreateWorkTimeRequest: false,
  isCreateWorkTimeSuccess: false,
  isCreateWorkTimeFailure: false,
  //
  isUpdateWorkTimeRequest: false,
  isUpdateWorkTimeSuccess: false,
  isUpdateWorkTimeFailure: false,
  //
  isGetWorkTimeRequest: false,
  isGetWorkTimeSuccess: false,
  isGetWorkTimeFailure: false,
  getWorkTimeResponse: {},
  //
  isDeleteWorkTimeRequest: false,
  isDeleteWorkTimeSuccess: false,
  isDeleteWorkTimeFailure: false,
  //
  isGetStatisticWorkTimeRequest: false,
  isGetStatisticWorkTimeSuccess: false,
  isGetStatisticWorkTimeFailure: false,
  getStatisticWorkTimeResponse: {},
  //
  isGetWorkTimeStaffRequest: false,
  isGetWorkTimeStaffSuccess: false,
  isGetWorkTimeStaffFailure: false,
  getWorkTimeStaffState: {},
  //
  errorMessages: [],
};

const reducer = handleActions({
  // #region
  [Actions.createWorkTimeRequest]: (state) => ({
    ...state,
    isCreateWorkTimeRequest: true,
    isCreateWorkTimeSuccess: false,
    isCreateWorkTimeFailure: false,
  }),
  [Actions.createWorkTimeSuccess]: (state) => ({
    ...state,
    isCreateWorkTimeRequest: false,
    isCreateWorkTimeSuccess: true,
    isCreateWorkTimeFailure: false,
  }),
  [Actions.createWorkTimeFailure]: (state, { payload }) => ({
    ...state,
    isCreateWorkTimeRequest: false,
    isCreateWorkTimeSuccess: false,
    isCreateWorkTimeFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetCreateWorkTimeState]: (state) => ({
    ...state,
    isCreateWorkTimeRequest: false,
    isCreateWorkTimeSuccess: false,
    isCreateWorkTimeFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region
  [Actions.updateWorkTimeRequest]: (state) => ({
    ...state,
    isUpdateWorkTimeRequest: true,
    isUpdateWorkTimeSuccess: false,
    isUpdateWorkTimeFailure: false,
  }),
  [Actions.updateWorkTimeSuccess]: (state) => ({
    ...state,
    isUpdateWorkTimeRequest: false,
    isUpdateWorkTimeSuccess: true,
    isUpdateWorkTimeFailure: false,
  }),
  [Actions.updateWorkTimeFailure]: (state, { payload }) => ({
    ...state,
    isUpdateWorkTimeRequest: false,
    isUpdateWorkTimeSuccess: false,
    isUpdateWorkTimeFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetUpdateWorkTimeState]: (state) => ({
    ...state,
    isUpdateWorkTimeRequest: false,
    isUpdateWorkTimeSuccess: false,
    isUpdateWorkTimeFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region GET
  [Actions.getWorkTimeRequest]: (state) => ({
    ...state,
    isGetWorkTimeRequest: true,
    isGetWorkTimeSuccess: false,
    isGetWorkTimeFailure: false,
  }),
  [Actions.getWorkTimeSuccess]: (state, { payload }) => ({
    ...state,
    isGetWorkTimeRequest: false,
    isGetWorkTimeSuccess: true,
    isGetWorkTimeFailure: false,
    getWorkTimeResponse: payload,
  }),
  [Actions.getWorkTimeFailure]: (state, { payload }) => ({
    ...state,
    isGetWorkTimeRequest: false,
    isGetWorkTimeSuccess: false,
    isGetWorkTimeFailure: true,
    errorMessages: payload,
  }),
  // #endregion

  // #region
  [Actions.deleteWorkTimeRequest]: (state) => ({
    ...state,
    isDeleteWorkTimeRequest: true,
    isDeleteWorkTimeSuccess: false,
    isDeleteWorkTimeFailure: false,
  }),
  [Actions.deleteWorkTimeSuccess]: (state) => ({
    ...state,
    isDeleteWorkTimeRequest: false,
    isDeleteWorkTimeSuccess: true,
    isDeleteWorkTimeFailure: false,
  }),
  [Actions.deleteWorkTimeFailure]: (state, { payload }) => ({
    ...state,
    isDeleteWorkTimeRequest: false,
    isDeleteWorkTimeSuccess: false,
    isDeleteWorkTimeFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetDeleteWorkTimeState]: (state) => ({
    ...state,
    isDeleteWorkTimeRequest: false,
    isDeleteWorkTimeSuccess: false,
    isDeleteWorkTimeFailure: false,
    errorMessages: [],
  }),
  // #endregion

  // #region statistic
  [Actions.getStatisticWorkTimeRequest]: (state) => ({
    ...state,
    isGetStatisticWorkTimeRequest: true,
    isGetStatisticWorkTimeSuccess: false,
    isGetStatisticWorkTimeFailure: false,
  }),
  [Actions.getStatisticWorkTimeSuccess]: (state, { payload }) => ({
    ...state,
    isGetStatisticWorkTimeRequest: false,
    isGetStatisticWorkTimeSuccess: true,
    isGetStatisticWorkTimeFailure: false,
    getStatisticWorkTimeResponse: payload,
  }),
  [Actions.getStatisticWorkTimeFailure]: (state, { payload }) => ({
    ...state,
    isGetStatisticWorkTimeRequest: false,
    isGetStatisticWorkTimeSuccess: false,
    isGetStatisticWorkTimeFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetGetStatisticWorkTime]: (state) => ({
    ...state,
    isGetStatisticWorkTimeRequest: false,
    isGetStatisticWorkTimeSuccess: false,
    isGetStatisticWorkTimeFailure: false,
    getStatisticWorkTimeResponse: {},
    errorMessages: [],
  }),
  // #endregion

  // #region : Get work time staff
  [Actions.getWorkTimeStaffRequest]: (state) => ({
    ...state,
    isGetWorkTimeStaffRequest: true,
    isGetWorkTimeStaffSuccess: false,
    isGetWorkTimeStaffFailure: false,
  }),
  [Actions.getWorkTimeStaffSuccess]: (state, { payload }) => ({
    ...state,
    isGetWorkTimeStaffRequest: false,
    isGetWorkTimeStaffSuccess: true,
    isGetWorkTimeStaffFailure: false,
    getWorkTimeStaffState: payload,
  }),
  [Actions.getWorkTimeStaffFailure]: (state, { payload }) => ({
    ...state,
    isGetWorkTimeStaffRequest: false,
    isGetWorkTimeStaffSuccess: false,
    isGetWorkTimeStaffFailure: true,
    errorMessages: payload,
  }),
  [Actions.resetGetWorkTimeStaff]: (state) => ({
    ...state,
    isGetWorkTimeStaffRequest: false,
    isGetWorkTimeStaffSuccess: false,
    isGetWorkTimeStaffFailure: true,
    getWorkTimeStaffState: {},
    errorMessages: [],
  }),
  // #endregion

  // #region
  [Actions.resetWorkTimeState]: () => initialState,
  // #endregion
}, initialState);

export default reducer;
