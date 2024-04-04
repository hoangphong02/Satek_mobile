/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllSuppliers({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/suppliers?${payload}`)
        : () => axiosMicro.get('/suppliers', { params: payload }),
    );
    yield put(Actions.getAllSuppliersSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllSuppliersFailure(messages));
    }
  }
}

function* createSupplier({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/suppliers', payload));
    yield put(Actions.createSupplierSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createSupplierFailure(messages));
    }
  }
}

function* updateSupplier({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/suppliers/${payload.id}`, payload.body));
    yield put(Actions.updateSupplierSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateSupplierFailure(messages));
    }
  }
}

function* deleteSupplier({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/suppliers/${payload}`));
    yield put(Actions.deleteSupplierSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteSupplierFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllSuppliersRequest, getAllSuppliers);
  yield takeLatest(Actions.createSupplierRequest, createSupplier);
  yield takeLatest(Actions.updateSupplierRequest, updateSupplier);
  yield takeLatest(Actions.deleteSupplierRequest, deleteSupplier);
}
