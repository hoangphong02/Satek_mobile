/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getConfig() {
  try {
    const response = yield call(() => axiosMicro.get('/configs'));
    if (response?.status === 200) {
      yield put(Actions.getConfigSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getConfigFailure(messages));
    }
  }
}

function* saveConfigLala({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/configs/lalamove', payload));
    if (response?.status === 200) {
      yield put(Actions.saveConfigLalaSuccess());
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.saveConfigLalaFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getConfigRequest, getConfig);
  yield takeLatest(Actions.saveConfigLalaRequest, saveConfigLala);
}
