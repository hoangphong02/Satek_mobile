/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllPayments({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/payments?${payload}`)
        : () => axiosMicro.get('/payments', { params: payload }),
    );
    yield put(Actions.getAllPaymentsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllPaymentsFailure(messages));
    }
  }
}

function* createPayment({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/payments', payload));
    yield put(Actions.createPaymentSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createPaymentFailure(messages));
    }
  }
}

function* updatePayment({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/payments/${payload.id}`, payload.body));
    yield put(Actions.updatePaymentSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updatePaymentFailure(messages));
    }
  }
}

function* deletePayment({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/payments/${payload}`));
    yield put(Actions.deletePaymentSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deletePaymentFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllPaymentsRequest, getAllPayments);
  yield takeLatest(Actions.createPaymentRequest, createPayment);
  yield takeLatest(Actions.updatePaymentRequest, updatePayment);
  yield takeLatest(Actions.deletePaymentRequest, deletePayment);
}
