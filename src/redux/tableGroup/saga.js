/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import axios from 'axios';
import * as Actions from './actions';

function* getAllTableGroups({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axios.get(`/table-groups?${payload}`)
        : () => axios.get('/table-groups', { params: payload }),
    );
    yield put(Actions.getAllTableGroupsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllTableGroupsFailure(messages));
    }
  }
}

function* createTableGroup({ payload }) {
  try {
    const response = yield call(() => axios.post('/table-groups?include=tables', payload));
    yield put(Actions.createTableGroupSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createTableGroupFailure(messages));
    }
  }
}

function* updateTableGroup({ payload }) {
  try {
    const response = yield call(() => axios.patch(`/table-groups/${payload.id}?include=tables`, payload.body));
    yield put(Actions.updateTableGroupSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateTableGroupFailure(messages));
    }
  }
}

function* deleteTableGroup({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/table-groups/${payload}`));
    yield put(Actions.deleteTableGroupSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteTableGroupFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllTableGroupsRequest, getAllTableGroups);
  yield takeLatest(Actions.createTableGroupRequest, createTableGroup);
  yield takeLatest(Actions.updateTableGroupRequest, updateTableGroup);
  yield takeLatest(Actions.deleteTableGroupRequest, deleteTableGroup);
}
