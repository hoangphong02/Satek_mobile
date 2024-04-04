/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* createShop({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/shops', payload));
    yield put(Actions.createShopSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.createShopFailure(messages));
    }
  }
}

function* updateShop({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/shops/${payload.id}`, payload));
    yield put(Actions.updateShopSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.updateShopFailure(messages));
    }
  }
}

function* getShop({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/shops', { params: payload }));
    yield put(Actions.getShopSuccess(response.data));
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getShopFailure(messages));
    }
  }
}

function* resetPasswordShop({ payload }) {
  try {
    yield call(() => axiosMicro.patch(`/shops/${payload?.id}`, payload.params));
    yield put(Actions.resetPasswordShopSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.resetPasswordShopFailure(messages));
    }
  }
}

function* saveConfigShop({ payload }) {
  try {
    yield axiosMicro.patch('/shops/config', payload);
    yield put(Actions.saveConfigShopSuccess());
  } catch (error) {
    if (error.response?.data) {
      const messages = error.response.data;
      yield put(Actions.saveConfigShopFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.createShopRequest, createShop);
  yield takeLatest(Actions.getShopRequest, getShop);
  yield takeLatest(Actions.updateShopRequest, updateShop);
  yield takeLatest(Actions.resetPasswordShopRequest, resetPasswordShop);
  yield takeLatest(Actions.saveConfigShopRequest, saveConfigShop);
}
