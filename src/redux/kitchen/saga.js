/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllKitchen({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/kitchens', { params: payload }));
    yield put(Actions.getAllKitchenSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllKitchenFailure(messages));
    }
  }
}

function* getAllKitchenDishes({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(`/kitchen/dishes?${payload.params}`));
    yield put(Actions.getAllKitchenDishesSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllKitchenDishesFailure(messages));
    }
  }
}

function* createKitchen({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/kitchens', payload));
    yield put(Actions.createKitchenSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createKitchenFailure(messages));
    }
  }
}

function* updateKitchen({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/kitchens/${payload.id}`, payload.body));
    yield put(Actions.updateKitchenSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateKitchenFailure(messages));
    }
  }
}

function* deleteKitchen({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/kitchens/${payload}`));
    yield put(Actions.deleteKitchenSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteKitchenFailure(messages));
    }
  }
}
function* getAllKitchenDishCancel({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(`/kitchen/dish-cancels?${payload.params}`));
    yield put(Actions.getAllKitchenDishCancelSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllKitchenDishCancelFailure(messages));
    }
  }
}
function* updateStatusKitchenDishCancel({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/kitchen/dish-cancel/status/${payload.id}`, payload.body));
    yield put(Actions.getAllKitchenDishCancelSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllKitchenDishCancelFailure(messages));
    }
  }
}
// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllKitchenRequest, getAllKitchen);
  yield takeLatest(Actions.createKitchenRequest, createKitchen);
  yield takeLatest(Actions.updateKitchenRequest, updateKitchen);
  yield takeLatest(Actions.deleteKitchenRequest, deleteKitchen);
  yield takeLatest(Actions.getAllKitchenDishesRequest, getAllKitchenDishes);
  yield takeLatest(Actions.getAllKitchenDishCancelRequest, getAllKitchenDishCancel);
  yield takeLatest(Actions.updateStatusKitchenDishCancelRequest, updateStatusKitchenDishCancel);
}
