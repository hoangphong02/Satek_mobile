/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { put, call, takeLatest } from 'redux-saga/effects';
import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllWorkPlace({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(payload.params ? `/work-places?${payload.params}` : '/work-places'));
    yield put(Actions.getAllWorkPlaceSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const message = e.response.data;
      yield put(Actions.getAllWorkPlaceFailure(message));
    }
  }
}

function* addWorkPlace({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/work-places', payload));
    yield put(Actions.addWorkPlaceSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const message = e.response.data;
      yield put(Actions.addWorkPlaceFailure(message));
    }
  }
}
function* editWorkPlace({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/work-places/${payload.id}`, payload));
    yield put(Actions.editWorkPlaceSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const message = e.response.data;
      yield put(Actions.editWorkPlaceFailure(message));
    }
  }
}

function* deleteWorkPlace({ payload }) {
  try {
    const response = yield call(() => axiosMicro.delete(`/work-places/${payload}`));
    yield put(Actions.deleteWorkPlaceSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const message = e.response.data;
      yield put(Actions.deleteWorkPlaceFailure(message));
    }
  }
}
// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllWorkPlaceRequest, getAllWorkPlace);
  yield takeLatest(Actions.addWorkPlaceRequest, addWorkPlace);
  yield takeLatest(Actions.editWorkPlaceRequest, editWorkPlace);
  yield takeLatest(Actions.deleteWorkPlaceRequest, deleteWorkPlace);
}
