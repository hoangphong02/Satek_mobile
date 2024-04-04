/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getListRoles({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(payload?.params ? `/roles?${payload.params}` : '/roles'));
    yield put(Actions.getListRolesSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getListRolesFailure(messages));
    }
  }
}

function* addRole({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/roles', payload));
    yield put(Actions.addRoleSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.addRoleFailure(messages));
    }
  }
}

function* deleteRole({ payload }) {
  try {
    const response = yield call(() => axiosMicro.delete(`/roles/${payload}`));
    yield put(Actions.deleteRoleSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.deleteRoleFailure(messages));
    }
  }
}

function* getListPermissions() {
  try {
    const response = yield call(() => axiosMicro.get('/permissions'));
    yield put(Actions.getListPermissionsSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getListPermissionsFailure(messages));
    }
  }
}

function* attachPermissionsToRole({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/permissions/sync', payload));
    yield put(Actions.attachPermissionsToRoleSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.attachPermissionsToRoleFailure(messages));
    }
  }
}

function* editPermissionsToRole({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/permissions/sync', payload));
    yield put(Actions.editPermissionsToRoleSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.editPermissionsToRoleFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getListRolesRequest, getListRoles);
  yield takeLatest(Actions.addRoleRequest, addRole);
  yield takeLatest(Actions.deleteRoleRequest, deleteRole);
  yield takeLatest(Actions.getListPermissionsRequest, getListPermissions);
  yield takeLatest(
    Actions.attachPermissionsToRoleRequest,
    attachPermissionsToRole,
  );
  yield takeLatest(
    Actions.editPermissionsToRoleRequest,
    editPermissionsToRole,
  );
}
