/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import axios from 'axios';
import * as Actions from './actions';

function* getAllTables({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axios.get(`/tables?${payload}`)
        : () => axios.get('/tables', { params: payload }),
    );
    yield put(Actions.getAllTablesSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllTablesFailure(messages));
    }
  }
}

function* createTable({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/tables', payload, {
      params: {
        include: 'group',
      },
    }));
    yield put(Actions.createTableSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createTableFailure(messages));
    }
  }
}

function* updateTable({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/tables/${payload.id}`, payload.body, {
      params: {
        include: 'group',
      },
    }));
    yield put(Actions.updateTableSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateTableFailure(messages));
    }
  }
}

function* deleteTable({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/tables/${payload}`));
    yield put(Actions.deleteTableSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteTableFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllTablesRequest, getAllTables);
  yield takeLatest(Actions.createTableRequest, createTable);
  yield takeLatest(Actions.updateTableRequest, updateTable);
  yield takeLatest(Actions.deleteTableRequest, deleteTable);
}
