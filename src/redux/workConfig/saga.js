/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllWorkConfigs({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/work-configs', {
      params: payload,
    }));
    yield put(Actions.getAllWorkConfigsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllWorkConfigsFailure(messages));
    }
  }
}

function* createWorkConfig({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/work-configs', payload));
    yield put(Actions.createWorkConfigSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createWorkConfigFailure(messages));
    }
  }
}

function* updateWorkConfig({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/work-configs/${payload.id}`, payload.body));
    yield put(Actions.updateWorkConfigSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateWorkConfigFailure(messages));
    }
  }
}

function* deleteWorkConfig({ payload }) {
  try {
    const response = yield call(() => axiosMicro.delete(`/work-configs/${payload}`));
    yield put(Actions.deleteWorkConfigSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteWorkConfigFailure(messages));
    }
  }
}

function* searchUsers({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/staff?limit=0', {
      params: payload,
    }));
    yield put(Actions.searchUsersSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.searchUsersFailure(messages));
    }
  }
}

function* searchWorkPlace({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/work-places?limit=0', {
      params: payload,
    }));
    yield put(Actions.searchWorkPlaceSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.searchWorkPlaceFailure(messages));
    }
  }
}

function* searchWorkTime({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/work-times?limit=0', {
      params: payload,
    }));
    yield put(Actions.searchWorkTimeSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.searchWorkTimeFailure(messages));
    }
  }
}

function* changeWorkConfig({ payload }) {
  try {
    yield call(() => axiosMicro.post('/work-configs/change', payload));
    yield put(Actions.changeWorkConfigSuccess());
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.changeWorkConfigFailure(messages));
    }
  }
}

function* addWorkConfig({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/work-configs/add', payload));
    const newPayload = {
      payload,
      response: response.data,
    };
    yield put(Actions.addWorkConfigSuccess(newPayload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.addWorkConfigFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllWorkConfigsRequest, getAllWorkConfigs);
  yield takeLatest(Actions.createWorkConfigRequest, createWorkConfig);
  yield takeLatest(Actions.updateWorkConfigRequest, updateWorkConfig);
  yield takeLatest(Actions.deleteWorkConfigRequest, deleteWorkConfig);
  yield takeLatest(Actions.searchUsersRequest, searchUsers);
  yield takeLatest(Actions.searchWorkPlaceRequest, searchWorkPlace);
  yield takeLatest(Actions.searchWorkTimeRequest, searchWorkTime);
  yield takeLatest(Actions.changeWorkConfigRequest, changeWorkConfig);
  yield takeLatest(Actions.addWorkConfigRequest, addWorkConfig);
}
