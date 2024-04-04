/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllWarehouses({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/warehouses?${payload}`)
        : () => axiosMicro.get('/warehouses', { params: payload }),
    );
    yield put(Actions.getAllWarehousesSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllWarehousesFailure(messages));
    }
  }
}

function* createWarehouse({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/warehouses', payload));
    yield put(Actions.createWarehouseSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createWarehouseFailure(messages));
    }
  }
}

function* updateWarehouse({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/warehouses/${payload.id}`, payload.body));
    yield put(Actions.updateWarehouseSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateWarehouseFailure(messages));
    }
  }
}

function* deleteWarehouse({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/warehouses/${payload}`));
    yield put(Actions.deleteWarehouseSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteWarehouseFailure(messages));
    }
  }
}

function* getListImportExportWarehouse({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/warehouses/changes', {
      params: payload,
    }));
    yield put(Actions.getListImportExportWarehouseSuccess(response.data));
  } catch (error) {
    if (error.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getListImportExportWarehouseFailure(messages));
    }
  }
}

function* importWarehouse({ payload }) {
  try {
    yield call(() => axiosMicro.post(`/warehouses/${payload.id}/change`, payload.body));
    yield put(Actions.importWarehouseSuccess());
  } catch (error) {
    if (error.response?.data) {
      const messages = error.response.data;
      yield put(Actions.importWarehouseFailure(messages));
    }
  }
}

function* searchProductsInventory({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/products/list?${payload}`)
        : () => axiosMicro.get('/products/list', { params: payload }),
    );
    yield put(Actions.searchProductInventorySuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.searchProductInventoryFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllWarehousesRequest, getAllWarehouses);
  yield takeLatest(Actions.createWarehouseRequest, createWarehouse);
  yield takeLatest(Actions.updateWarehouseRequest, updateWarehouse);
  yield takeLatest(Actions.deleteWarehouseRequest, deleteWarehouse);
  yield takeLatest(Actions.getListImportExportWarehouseRequest, getListImportExportWarehouse);
  yield takeLatest(Actions.importWarehouseRequest, importWarehouse);
  yield takeLatest(Actions.searchProductInventoryRequest, searchProductsInventory);
}
