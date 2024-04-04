// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

import * as Actions from './actions';

const initialState = {
  //
  isUploadFileRequest: false,
  isUploadFileSuccess: false,
  isUploadFileFailure: false,
  uploadFileState: {},

  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Upload file
    [Actions.uploadFileRequest]: (state) => ({
      ...state,
      isUploadFileRequest: true,
      isUploadFileSuccess: false,
      isUploadFileFailure: false,
    }),
    [Actions.uploadFileSuccess]: (state, { payload }) => ({
      ...state,
      isUploadFileRequest: false,
      isUploadFileSuccess: true,
      isUploadFileFailure: false,
      uploadFileState: payload,
    }),
    [Actions.uploadFileFailure]: (state, { payload }) => ({
      ...state,
      isUploadFileRequest: false,
      isUploadFileSuccess: false,
      isUploadFileFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUploadFile]: (state) => ({
      ...state,
      isUploadFileRequest: false,
      isUploadFileSuccess: false,
      isUploadFileFailure: false,
      uploadFileState: {},
      errorMessages: [],
    }),
    // #endregion
    // #region : Local
    [Actions.resetCommonState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
