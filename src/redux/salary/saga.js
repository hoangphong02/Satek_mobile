/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getSalary({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/salary', {
      params: payload,
    }));
    yield put(Actions.getSalarySuccess(response.data));
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getSalaryFailure(messages));
    }
  }
}

function* getBalance({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(`/salary/get-balance/${payload.id}`, {
      params: {
        from_date: payload.from_date,
        to_date: payload.to_date,
      },
    }));
    yield put(Actions.getBalanceSuccess(response.data));
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getBalanceFailure(messages));
    }
  }
}

function* createSalary({ payload }) {
  try {
    // eslint-disable-next-line no-unused-vars
    const response = yield call(() => axiosMicro.post('/salary', payload));
    yield put(Actions.createSalarySuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.createSalaryFailure(messages));
    }
  }
}

export default function* () {
  yield takeLatest(Actions.getSalaryRequest, getSalary);
  yield takeLatest(Actions.getBalanceRequest, getBalance);
  yield takeLatest(Actions.createSalaryRequest, createSalary);
  yield takeLatest(Actions.createSalaryRequest, createSalary);
}
