/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllCategories({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/categories?${payload}`)
        : () => axiosMicro.get('/categories', { params: payload }),
    );
    yield put(Actions.getAllCategoriesSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllCategoriesFailure(messages));
    }
  }
}

function* createCategory({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/categories', payload));
    yield put(Actions.createCategorySuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createCategoryFailure(messages));
    }
  }
}

function* updateCategory({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/categories/${payload.id}`, payload.body));
    yield put(Actions.updateCategorySuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateCategoryFailure(messages));
    }
  }
}

function* deleteCategory({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/categories/${payload}`));
    yield put(Actions.deleteCategorySuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteCategoryFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllCategoriesRequest, getAllCategories);
  yield takeLatest(Actions.createCategoryRequest, createCategory);
  yield takeLatest(Actions.updateCategoryRequest, updateCategory);
  yield takeLatest(Actions.deleteCategoryRequest, deleteCategory);
}
