/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllCustomers({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/customers?${payload}`)
        : () => axiosMicro.get('/customers', { params: payload }),
    );
    yield put(Actions.getAllCustomersSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllCustomersFailure(messages));
    }
  }
}

function* createCustomer({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/customers', payload));
    yield put(Actions.createCustomerSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createCustomerFailure(messages));
    }
  }
}

function* updateCustomer({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/customers/${payload.id}`, payload.body));
    yield put(Actions.updateCustomerSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateCustomerFailure(messages));
    }
  }
}

function* deleteCustomer({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/customers/${payload}`));
    yield put(Actions.deleteCustomerSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteCustomerFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllCustomersRequest, getAllCustomers);
  yield takeLatest(Actions.createCustomerRequest, createCustomer);
  yield takeLatest(Actions.updateCustomerRequest, updateCustomer);
  yield takeLatest(Actions.deleteCustomerRequest, deleteCustomer);
}
