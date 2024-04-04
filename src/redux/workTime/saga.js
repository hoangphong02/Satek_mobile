/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* createWorkTime({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/work-times', payload));
    yield put(Actions.createWorkTimeSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.createWorkTimeFailure(messages));
    }
  }
}

function* updateWorkTime({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/work-times/${payload.id}`, payload));
    yield put(Actions.updateWorkTimeSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.updateWorkTimeFailure(messages));
    }
  }
}

function* deleteWorkTime({ payload }) {
  try {
    const response = yield call(() => axiosMicro.delete(`/work-times/${payload}`));
    yield put(Actions.deleteWorkTimeSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.deleteWorkTimeFailure(messages));
    }
  }
}

function* getWorkTime({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/work-times', { params: payload }));
    yield put(Actions.getWorkTimeSuccess(response.data));
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getWorkTimeFailure(messages));
    }
  }
}

function* getStatisticWorkTime({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/statistics/work-time', { params: payload || {} }));
    yield put(Actions.getStatisticWorkTimeSuccess(response.data));
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getStatisticWorkTimeFailure(messages));
    }
  }
}

function* getWorkTimeStaff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(`/staff/${payload.id}/work-times`, {
      params: {
        ...payload.body,
      },
    }));
    yield put(Actions.getWorkTimeStaffSuccess(response.data));
  } catch (error) {
    if (error.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getWorkTimeStaffFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.createWorkTimeRequest, createWorkTime);
  yield takeLatest(Actions.getWorkTimeRequest, getWorkTime);
  yield takeLatest(Actions.updateWorkTimeRequest, updateWorkTime);
  yield takeLatest(Actions.deleteWorkTimeRequest, deleteWorkTime);
  yield takeLatest(Actions.getStatisticWorkTimeRequest, getStatisticWorkTime);
  yield takeLatest(Actions.getWorkTimeStaffRequest, getWorkTimeStaff);
}
