/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllTransactions({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/transactions?${payload}`)
        : () => axiosMicro.get('/transactions', { params: payload }),
    );
    yield put(Actions.getAllTransactionsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllTransactionsFailure(messages));
    }
  }
}

function* createTransaction({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/transactions', payload));
    yield put(Actions.createTransactionSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createTransactionFailure(messages));
    }
  }
}

function* updateTransaction({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/transactions/${payload.id}`, payload.body));
    yield put(Actions.updateTransactionSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateTransactionFailure(messages));
    }
  }
}

function* deleteTransaction({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/transactions/${payload}`));
    yield put(Actions.deleteTransactionSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteTransactionFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllTransactionsRequest, getAllTransactions);
  yield takeLatest(Actions.createTransactionRequest, createTransaction);
  yield takeLatest(Actions.updateTransactionRequest, updateTransaction);
  yield takeLatest(Actions.deleteTransactionRequest, deleteTransaction);
}
