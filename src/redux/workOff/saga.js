/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* createWorkOff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/work-offs', payload));
    yield put(Actions.createWorkOffSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.createWorkOffFailure(messages));
    }
  }
}

function* updateWorkOff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/work-offs/${payload.id}`, payload));
    yield put(Actions.updateWorkOffSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.updateWorkOffFailure(messages));
    }
  }
}

function* deleteWorkOff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.delete(`/work-offs/${payload}`));
    yield put(Actions.deleteWorkOffSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.deleteWorkOffFailure(messages));
    }
  }
}

function* acceptWorkOff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/work-offs/${payload.id}`, payload.params));
    yield put(Actions.acceptWorkOffSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.acceptWorkOffFailure(messages));
    }
  }
}

function* getWorkOff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/work-offs', { params: payload }));
    yield put(Actions.getWorkOffSuccess(response.data));
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getWorkOffFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.createWorkOffRequest, createWorkOff);
  yield takeLatest(Actions.getWorkOffRequest, getWorkOff);
  yield takeLatest(Actions.updateWorkOffRequest, updateWorkOff);
  yield takeLatest(Actions.deleteWorkOffRequest, deleteWorkOff);
  yield takeLatest(Actions.acceptWorkOffRequest, acceptWorkOff);
}
