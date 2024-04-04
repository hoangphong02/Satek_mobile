/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllOrdersList({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/orders?${payload}`)
        : () => axiosMicro.get('/orders', { params: payload }),
    );
    yield put(Actions.getAllOrdersListSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllOrdersListFailure(messages));
    }
  }
}

function* createOrderReturn({ payload }) {
  try {
    yield call(() => axiosMicro.post('/order-returns', payload.dataPayload));
    yield put(Actions.createOrderReturnSuccess(payload.dataUpdated));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createOrderReturnFailure(messages));
    }
  }
}

function* getOrderForWarehouse({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/warehouses/get-orders', {
      params: payload,
    }));
    yield put(Actions.getOrderForWarehouseSuccess(response.data));
  } catch (error) {
    if (error.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getOrderForWarehouseFailure(messages));
    }
  }
}

function* getOrdersVat({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/orders/vat', {
      params: payload,
    }));
    yield put(Actions.getOrdersListVatSuccess(response.data));
  } catch (error) {
    if (error.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getOrdersListVatFailure(messages));
    }
  }
}

function* updateOrder({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/orders/${payload.id}`, payload.body));
    yield put(Actions.updateOrderSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateOrderFailure(messages));
    }
  }
}
function* deleteOrder({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/orders/${payload}`));
    yield put(Actions.deleteOrderSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteOrderFailure(messages));
    }
  }
}

function* createRequestPayment({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/orders/request-payments', payload));
    yield put(Actions.createRequestPaymentSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createRequestPaymentFailure(messages));
    }
  }
}
function* getAllRequestPayment({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/orders/request-payments?${payload}`)
        : () => axiosMicro.get('/orders/request-payments', { params: payload }),
    );
    yield put(Actions.getAllRequestPaymentSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllRequestPaymentFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllOrdersListRequest, getAllOrdersList);
  yield takeLatest(Actions.createOrderReturnRequest, createOrderReturn);
  yield takeLatest(Actions.getOrderForWarehouseRequest, getOrderForWarehouse);
  yield takeLatest(Actions.getOrdersListVatRequest, getOrdersVat);
  yield takeLatest(Actions.updateOrderRequest, updateOrder);
  yield takeLatest(Actions.deleteOrderRequest, deleteOrder);
  yield takeLatest(Actions.createRequestPayment, createRequestPayment);
  yield takeLatest(Actions.getAllRequestPayment, getAllRequestPayment);
}
