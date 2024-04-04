// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const uploadFileRequest = createAction('UPLOAD_FILE_REQUEST');
export const uploadFileSuccess = createAction('UPLOAD_FILE_SUCCESS');
export const uploadFileFailure = createAction('UPLOAD_FILE_FAILURE');
export const resetUploadFile = createAction('RESET_UPLOAD_FILE');

export const resetCommonState = createAction('RESET_COMMON_STATE');
