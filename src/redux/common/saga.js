/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* uploadFile({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/files/upload', payload));
    yield put(Actions.uploadFileSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.uploadFileFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.uploadFileRequest, uploadFile);
}
