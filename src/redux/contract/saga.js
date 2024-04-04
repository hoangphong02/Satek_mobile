/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllContracts({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/contracts?${payload}`)
        : () => axiosMicro.get('/contracts', { params: payload }),
    );
    yield put(Actions.getAllContractsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllContractsFailure(messages));
    }
  }
}

function* createContract({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/contracts', payload));
    yield put(Actions.createContractSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createContractFailure(messages));
    }
  }
}

function* updateContract({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/contracts/${payload.id}`, payload.body));
    yield put(Actions.updateContractSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateContractFailure(messages));
    }
  }
}

function* activeContract({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/contracts/${payload}/active`));
    yield put(Actions.activeContractSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.activeContractFailure(messages));
    }
  }
}

function* deleteContract({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/contracts/${payload}`));
    yield put(Actions.deleteContractSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteContractFailure(messages));
    }
  }
}

function* getHistoryContracts({ payload }) {
  try {
    const { id, ...params } = payload;
    const response = yield call(() => axiosMicro.get(`/contracts/${payload.id}/histories`, { params }));
    yield put(Actions.getHistoriesContractSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getHistoriesContractFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllContractsRequest, getAllContracts);
  yield takeLatest(Actions.createContractRequest, createContract);
  yield takeLatest(Actions.updateContractRequest, updateContract);
  yield takeLatest(Actions.activeContractRequest, activeContract);
  yield takeLatest(Actions.deleteContractRequest, deleteContract);
  yield takeLatest(Actions.getHistoriesContractRequest, getHistoryContracts);
}
