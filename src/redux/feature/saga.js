/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllFeatures({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/features?${payload}`)
        : () => axiosMicro.get('/features', { params: payload }),
    );
    yield put(Actions.getAllFeaturesSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllFeaturesFailure(messages));
    }
  }
}

function* createFeature({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/features', payload));
    yield put(Actions.createFeatureSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createFeatureFailure(messages));
    }
  }
}

function* updateFeature({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/features/${payload.id}`, payload.body));
    yield put(Actions.updateFeatureSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateFeatureFailure(messages));
    }
  }
}

function* deleteFeature({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/features/${payload}`));
    yield put(Actions.deleteFeatureSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteFeatureFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllFeaturesRequest, getAllFeatures);
  yield takeLatest(Actions.createFeatureRequest, createFeature);
  yield takeLatest(Actions.updateFeatureRequest, updateFeature);
  yield takeLatest(Actions.deleteFeatureRequest, deleteFeature);
}
