/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllRegion({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(payload?.params ? `/regions?${payload.params}&limit=0&search=parent_id:0` : payload?.searchNull ? '/regions?searchNull=rgroup_id&limit=0&search=parent_id:0' : '/regions?limit=0&search=parent_id:0'));
    yield put(Actions.getAllRegionSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getAllRegionFailure(messages));
    }
  }
}

function* getAllRegionGroup({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(payload?.params ? `/region-groups?include=regions${payload.params}&parent_id:0` : '/region-groups?include=regions&parent_id:0'));
    yield put(Actions.getAllRegionGroupSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getAllRegionGroupFailure(messages));
    }
  }
}

function* addRegionGroup({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/region-groups', payload));
    yield put(Actions.addRegionGroupSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.addRegionGroupFailure(messages));
    }
  }
}

function* editRegionGroup({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/region-groups/${payload.id}`, payload));
    yield put(Actions.editRegionGroupSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.editRegionGroupFailure(messages));
    }
  }
}

function* deleteRegionGroup({ payload }) {
  try {
    const response = yield call(() => axiosMicro.delete(`/region-groups/${payload}`));
    yield put(Actions.deleteRegionGroupSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.deleteRegionGroupFailure(messages));
    }
  }
}
// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllRegionRequest, getAllRegion);
  yield takeLatest(Actions.getAllRegionGroupRequest, getAllRegionGroup);
  yield takeLatest(Actions.addRegionGroupRequest, addRegionGroup);
  yield takeLatest(Actions.editRegionGroupRequest, editRegionGroup);
  yield takeLatest(Actions.deleteRegionGroupRequest, deleteRegionGroup);
}
