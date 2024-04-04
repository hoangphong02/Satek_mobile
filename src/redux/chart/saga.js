/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getProductBestSelling({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/statistics/product-best-selling', {
      params: payload,
    }));
    yield put(Actions.getProductBestSellingSuccess(response.data));
  } catch (error) {
    if (error.response.data) {
      const messages = error.response.data;
      yield put(Actions.getProductBestSellingFailure(messages));
    }
  }
}

function* getProductQuantity({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/statistics/product-quantity', {
      params: payload,
    }));
    yield put(Actions.getProductQuantitySuccess(response.data));
  } catch (error) {
    if (error.response.data) {
      const messages = error.response.data;
      yield put(Actions.getProductQuantityFailure(messages));
    }
  }
}

function* getProductExpiry({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/statistics/product-expiry', {
      params: payload,
    }));
    yield put(Actions.getProductExpirySuccess(response.data));
  } catch (error) {
    if (error.response.data) {
      const messages = error.response.data;
      yield put(Actions.getProductExpiryFailure(messages));
    }
  }
}

function* getRevenue({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/statistics/revenue', {
      params: payload,
    }));
    yield put(Actions.getRevenueSuccess(response.data));
  } catch (error) {
    if (error.response.data) {
      const messages = error.response.data;
      yield put(Actions.getRevenueFailure(messages));
    }
  }
}
function* getRevenueToday({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/statistics/revenue', {
      params: payload,
    }));
    yield put(Actions.getRevenueTodaySuccess(response.data));
  } catch (error) {
    if (error.response.data) {
      const messages = error.response.data;
      yield put(Actions.getRevenueTodayFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getProductBestSellingRequest, getProductBestSelling);
  yield takeLatest(Actions.getProductQuantityRequest, getProductQuantity);
  yield takeLatest(Actions.getProductExpiryRequest, getProductExpiry);
  yield takeLatest(Actions.getRevenueRequest, getRevenue);
  yield takeLatest(Actions.getRevenueTodayRequest, getRevenueToday);
}
