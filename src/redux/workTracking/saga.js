/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllWorkTracking({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(payload.params ? `/work-trackings?${payload.params}&include=place` : '/work-trackings&include=place'));
    yield put(Actions.getAllWorkTrackingSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const message = e.response.data;
      yield put(Actions.getAllWorkTrackingFailure(message));
    }
  }
}
function* getWorkTrackingUser({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(`/work-trackings?search=user_id:${payload}&orderBy=time&sortedBy=asc`));
    yield put(Actions.getWorkTrackingUserSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const message = e.response.data;
      yield put(Actions.getWorkTrackingUserFailure(message));
    }
  }
}

function* getAllWorkPlace() {
  try {
    const response = yield call(() => axiosMicro.get('/work-places'));
    yield put(Actions.getAllWorkPlaceInWorkTrackingSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const message = e.response.data;
      yield put(Actions.getAllWorkPlaceInWorkTrackingFailure(message));
    }
  }
}

function* requireCheckIn({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/work-trackings', payload));
    const { data: { time, place_id } } = response.data;
    const timeStore = new Date(time).getDate();
    localStorage.setItem('checkIn', timeStore);
    localStorage.setItem('checkInPlace', place_id);
    yield put(Actions.requireCheckInSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const message = e.response.data;
      yield put(Actions.requireCheckInFailure(message));
    }
  }
}
function* checkout({ payload }) {
  try {
    const data = {
      action: 'out',
    };
    const response = yield call(() => axiosMicro.post('/work-trackings', data));
    yield put(Actions.checkoutSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const message = e.response.data;
      yield put(Actions.checkoutFailure(message));
    }
  }
}

function* getAllTimeKeeping({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/statistics/timekeeping', {
      params: {
        month: payload,
      },
    }));
    if (response?.status === 200) {
      yield put(Actions.getAllTimekeepingSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getAllTimekeepingFailure(messages));
    }
  }
}

function* exportExcelTimekeeping({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/statistics/timekeeping', payload));
    yield put(Actions.exportExcelTimekeepingSuccess(response.data));
  } catch (error) {
    const messages = error.response.data;
    yield put(Actions.exportExcelTimekeepingFailure(messages));
  }
}

/* eslint-disable func-names */
export default function* () {
  yield takeLatest(Actions.getWorkTrackingUserRequest, getWorkTrackingUser);
  yield takeLatest(Actions.getAllWorkPlaceInWorkTrackingRequest, getAllWorkPlace);
  yield takeLatest(Actions.requireCheckInRequest, requireCheckIn);
  yield takeLatest(Actions.getAllWorkTrackingRequest, getAllWorkTracking);
  yield takeLatest(Actions.checkoutRequest, checkout);
  yield takeLatest(Actions.getAllTimekeepingRequest, getAllTimeKeeping);
  yield takeLatest(Actions.exportExcelTimekeepingRequest, exportExcelTimekeeping);
}
