/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getListUsersHasRole({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/users', {
      params: {
        include: 'roles',
        searchRole: 'has',
        ...payload,
      },
    }));
    yield put(Actions.getListUsersHasRoleSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getListUsersHasRoleFailure(messages));
    }
  }
}

function* getListUsersNoRole({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(
      payload?.params
        ? `/users?searchRole=no${payload.params}`
        : '/users?searchRole=no',
    ));
    yield put(Actions.getListUsersNoRoleSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getListUsersNoRoleFailure(messages));
    }
  }
}

function* syncUserRole({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/roles/sync', payload));
    yield put(Actions.syncUserRoleSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.syncUserRoleFailure(messages));
    }
  }
}

function* revokeUserRole({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/roles/revoke', payload));
    yield put(Actions.revokeUserRoleSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.revokeUserRoleFailure(messages));
    }
  }
}

function* getAllListRoles() {
  try {
    const response = yield call(() => axiosMicro.get('/roles?limit=1000'));
    yield put(Actions.getAllListRolesSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getAllListRolesFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getListUsersHasRoleRequest, getListUsersHasRole);
  yield takeLatest(Actions.getListUsersNoRoleRequest, getListUsersNoRole);
  yield takeLatest(Actions.syncUserRoleRequest, syncUserRole);
  yield takeLatest(Actions.revokeUserRoleRequest, revokeUserRole);
  yield takeLatest(Actions.getAllListRolesRequest, getAllListRoles);
}
