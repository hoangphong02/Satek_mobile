/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllDishCancelReport({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/reports/dish-cancel', { params: payload }));
    yield put(Actions.getAllDishCancelReportSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const message = e.response.data;
      yield put(Actions.getAllDishCancelReportFailure(message));
    }
  }
}
function* getAllDishCancelUserReport({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/reports/user-dish-cancel', { params: payload }));
    yield put(Actions.getAllDishCancelUserReportSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const message = e.response.data;
      yield put(Actions.getAllDishCancelUserReportFailure(message));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllDishCancelReportRequest, getAllDishCancelReport);
  yield takeLatest(Actions.getAllDishCancelUserReportRequest, getAllDishCancelUserReport);
}
