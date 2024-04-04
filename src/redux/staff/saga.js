/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* createStaff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/staff', payload));
    yield put(Actions.createStaffSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.createStaffFailure(messages));
    }
  }
}

function* updateStaff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post(`/staff/${payload.id}?_method=patch`, payload));
    yield put(Actions.updateStaffSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.updateStaffFailure(messages));
    }
  }
}

function* disableStaff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/staff/${payload.id}`, payload));
    yield put(Actions.disableStaffSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.disableStaffFailure(messages));
    }
  }
}

function* deleteStaff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.delete(`/staff/${payload}`));
    yield put(Actions.deleteStaffSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.deleteStaffFailure(messages));
    }
  }
}

function* resetPasswordStaff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/staff/${payload?.id}`, payload.params));
    yield put(Actions.resetPasswordStaffSuccess());
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.resetPasswordStaffFailure(messages));
    }
  }
}

function* getStaff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/staff', { params: { ...payload, include: 'permissions,currentWorkTime,currentSalary' } }));
    yield put(Actions.getStaffSuccess(response.data));
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getStaffFailure(messages));
    }
  }
}

function* getListStaffHasRole({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(
      payload?.params ? `/staff?include=roles&searchRole=has${payload.params}` : '/staff?include=roles&searchRole=has',
    ));
    yield put(Actions.getListStaffHasRoleSuccess(response.data));
  } catch (e) {
    if (e.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getListStaffHasRoleFailure(messages));
    }
  }
}

function* getListStaffNoRole({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(
      payload?.params
        ? `/staff?searchRole=no${payload.params}`
        : '/staff?searchRole=no',
    ));
    yield put(Actions.getListStaffNoRoleSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getListStaffNoRoleFailure(messages));
    }
  }
}

function* attachPermissionStaff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/staff/permissions', payload));
    yield put(Actions.attachPermissionStaffSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.attachPermissionStaffFailure(messages));
    }
  }
}

function* paySalaryStaff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/salary/advance', payload));
    if (response?.data?.success) {
      yield put(Actions.paySalaryStaffSuccess());
    } else {
      const messages = { message: response?.data?.error };
      yield put(Actions.paySalaryStaffFailure(messages));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.paySalaryStaffFailure(messages));
    }
  }
}

// function* paySalaryStaffDate({ payload }) {
//   try {
//     const response = yield call(() => axiosMicro.post('/salary/advance', payload));
//     if (response?.data?.success) {
//       yield put(Actions.paySalaryStaffSuccess());
//     } else {
//       const messages = { message: response?.data?.error };
//       yield put(Actions.paySalaryStaffFailure(messages));
//     }
//   } catch (e) {
//     if (e?.response?.data) {
//       const messages = e.response.data;
//       yield put(Actions.paySalaryStaffFailure(messages));
//     }
//   }
// }

function* bonusSalaryStaff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/salary/bonus', payload));
    yield put(Actions.bonusSalaryStaffSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.bonusSalaryStaffFailure(messages));
    }
  }
}

function* deductionSalaryStaff({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/salary/deduction', payload));
    yield put(Actions.deductionSalaryStaffSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.deductionSalaryStaffFailure(messages));
    }
  }
}

function* getStaffNotBusy({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get('/staff/not-busy', {
      params: payload,
    }));
    yield put(Actions.getStaffNotBusySuccess(response.data));
  } catch (error) {
    if (error.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getStaffNotBusyFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.createStaffRequest, createStaff);
  yield takeLatest(Actions.getStaffRequest, getStaff);
  yield takeLatest(Actions.updateStaffRequest, updateStaff);
  yield takeLatest(Actions.deleteStaffRequest, deleteStaff);
  yield takeLatest(Actions.resetPasswordStaffRequest, resetPasswordStaff);
  yield takeLatest(Actions.disableStaffRequest, disableStaff);
  yield takeLatest(Actions.getListStaffHasRoleRequest, getListStaffHasRole);
  yield takeLatest(Actions.getListStaffNoRoleRequest, getListStaffNoRole);
  yield takeLatest(Actions.attachPermissionStaffRequest, attachPermissionStaff);
  yield takeLatest(Actions.paySalaryStaffRequest, paySalaryStaff);
  yield takeLatest(Actions.bonusSalaryStaffRequest, bonusSalaryStaff);
  yield takeLatest(Actions.deductionSalaryStaffRequest, deductionSalaryStaff);
  yield takeLatest(Actions.getStaffNotBusyRequest, getStaffNotBusy);
}
