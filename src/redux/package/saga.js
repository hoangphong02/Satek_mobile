/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllpackages({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/packages?${payload}`)
        : () => axiosMicro.get('/packages', { params: payload }),
    );
    yield put(Actions.getAllpackagesSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllpackagesFailure(messages));
    }
  }
}

function* createPackage({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/packages', payload));
    yield put(Actions.createPackageSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createPackageFailure(messages));
    }
  }
}

function* updatePackage({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/packages/${payload.id}`, payload.body));
    yield put(Actions.updatePackageSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updatePackageFailure(messages));
    }
  }
}

function* deletePackage({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/packages/${payload}`));
    yield put(Actions.deletePackageSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deletePackageFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllpackagesRequest, getAllpackages);
  yield takeLatest(Actions.createPackageRequest, createPackage);
  yield takeLatest(Actions.updatePackageRequest, updatePackage);
  yield takeLatest(Actions.deletePackageRequest, deletePackage);
}
