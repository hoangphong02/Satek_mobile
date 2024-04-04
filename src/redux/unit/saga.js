/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllUnits({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/units?${payload}`)
        : () => axiosMicro.get('/units', { params: payload }),
    );
    yield put(Actions.getAllUnitsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllUnitsFailure(messages));
    }
  }
}

function* createUnit({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/units', payload));
    yield put(Actions.createUnitSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createUnitFailure(messages));
    }
  }
}

function* updateUnit({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/units/${payload.id}`, payload.body));
    yield put(Actions.updateUnitSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateUnitFailure(messages));
    }
  }
}

function* deleteUnit({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/units/${payload}`));
    yield put(Actions.deleteUnitSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteUnitFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllUnitsRequest, getAllUnits);
  yield takeLatest(Actions.createUnitRequest, createUnit);
  yield takeLatest(Actions.updateUnitRequest, updateUnit);
  yield takeLatest(Actions.deleteUnitRequest, deleteUnit);
}
