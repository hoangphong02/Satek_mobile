/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllDiscounts({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/discounts?${payload}`)
        : () => axiosMicro.get('/discounts', { params: payload }),
    );
    yield put(Actions.getAllDiscountsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllDiscountsFailure(messages));
    }
  }
}

function* createDiscount({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/discounts', payload));
    yield put(Actions.createDiscountSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createDiscountFailure(messages));
    }
  }
}

function* updateDiscount({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/discounts/${payload.id}`, payload.body));
    yield put(Actions.updateDiscountSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateDiscountFailure(messages));
    }
  }
}

function* deleteDiscount({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/discounts/${payload}`));
    yield put(Actions.deleteDiscountSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteDiscountFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllDiscountsRequest, getAllDiscounts);
  yield takeLatest(Actions.createDiscountRequest, createDiscount);
  yield takeLatest(Actions.updateDiscountRequest, updateDiscount);
  yield takeLatest(Actions.deleteDiscountRequest, deleteDiscount);
}
