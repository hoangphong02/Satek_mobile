/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllSalers({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/salers?${payload}`)
        : () => axiosMicro.get('/salers', { params: payload }),
    );
    yield put(Actions.getAllSalersSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllSalersFailure(messages));
    }
  }
}

function* createSaler({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/salers', payload));
    yield put(Actions.createSalerSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createSalerFailure(messages));
    }
  }
}

function* updateSaler({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post(`/salers/${payload.id}?_method=patch`, payload.body));
    yield put(Actions.updateSalerSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateSalerFailure(messages));
    }
  }
}

function* deleteSaler({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/salers/${payload}`));
    yield put(Actions.deleteSalerSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteSalerFailure(messages));
    }
  }
}

function* resetPasswordSaler({ payload }) {
  try {
    yield call(() => axiosMicro.patch(`/salers/${payload?.id}`, payload.params));
    yield put(Actions.resetPasswordSalerSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.resetPasswordSalerFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllSalersRequest, getAllSalers);
  yield takeLatest(Actions.createSalerRequest, createSaler);
  yield takeLatest(Actions.updateSalerRequest, updateSaler);
  yield takeLatest(Actions.deleteSalerRequest, deleteSaler);
  yield takeLatest(Actions.resetPasswordSalerRequest, resetPasswordSaler);
}
