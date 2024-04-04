/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* createRegion({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/regions', payload));
    if (response?.status === 201) {
      yield put(Actions.createRegionSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.createRegionFailure(messages));
    }
  }
}

function* updateRegion({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/regions/${payload.id}`, payload));
    if (response?.status === 200) {
      yield put(Actions.updateRegionSuccess());
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.updateRegionFailure(messages));
    }
  }
}

function* deleteRegion({ payload }) {
  try {
    const response = yield call(() => axiosMicro.delete(`/regions/${payload}`));
    if (response?.status === 204) {
      yield put(Actions.deleteRegionSuccess());
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.deleteRegionFailure(messages));
    }
  }
}

function* getAllRegion({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(payload?.params ? `/regions?${payload.params}` : '/regions'));
    if (response?.status === 200) {
      yield put(Actions.getAllRegionSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const message = e.response.data;
      yield put(Actions.getAllRegionFailure(message));
    }
  }
}

function* searchProvince({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(payload?.params ? `/regions${payload.params}` : '/regions'));
    if (response?.status === 200) {
      yield put(Actions.searchProvinceSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.searchProvinceFailure(messages));
    }
  }
}

function* searchDistrict({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(payload?.params ? `/regions${payload.params}` : '/regions'));
    if (response?.status === 200) {
      yield put(Actions.searchDistrictSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.searchDistrictFailure(messages));
    }
  }
}

function* createProvince({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/regions', payload));
    if (response?.status === 201) {
      yield put(Actions.createProvinceSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.createProvinceFailure(messages));
    }
  }
}
function* createDistrict({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/regions', payload));
    if (response?.status === 201) {
      yield put(Actions.createDistrictSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.createDistrictFailure(messages));
    }
  }
}

function* findOneRegion({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(`/regions/${payload}`));
    yield put(Actions.findOneRegionSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.findOneRegionFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllRegionRequest, getAllRegion);
  yield takeLatest(Actions.createRegionRequest, createRegion);
  yield takeLatest(Actions.updateRegionRequest, updateRegion);
  yield takeLatest(Actions.deleteRegionRequest, deleteRegion);
  yield takeLatest(Actions.searchProvinceRequest, searchProvince);
  yield takeLatest(Actions.searchDistrictRequest, searchDistrict);
  yield takeLatest(Actions.createDistrictRequest, createDistrict);
  yield takeLatest(Actions.createProvinceRequest, createProvince);
  yield takeLatest(Actions.findOneRegionRequest, findOneRegion);
}
