/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import {
  call, put, takeLatest,
} from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getListEmployees({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(payload?.params ? `/users?${payload.params}` : '/users'));
    yield put(Actions.getListEmployeesSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getListEmployeesFailure(messages));
    }
  }
}

function* addEmployee({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/register', payload));
    yield put(Actions.addEmployeeSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.addEmployeeFailure(messages));
    }
  }
}

function* editEmployee({ payload }) {
  try {
    const form = new FormData();

    form.append('name', payload.fullname);
    form.append('email', payload.email);

    /* eslint no-underscore-dangle: 0 */

    if (payload.telephone && payload.telephone.length > 0) {
      form.append('telephone', payload.telephone);
    }
    if (payload.label && payload.label.length > 0) {
      form.append('label', payload.label);
    }
    if (payload.time_from) {
      form.append('time_from', payload.time_from.toString());
    }
    if (payload.time_to) {
      form.append('time_to', payload.time_to.toString());
    }
    if (payload.gender) {
      form.append('gender', payload.gender);
    }

    if (payload.id_card) {
      form.append('id_card', payload.id_card);
    }

    if (payload.id_card_place) {
      form.append('id_card_place', payload.id_card_place);
    }

    if (payload.phone) {
      form.append('phone', payload.phone);
    }

    if (payload.zalo !== '') {
      form.append('zalo', payload.zalo);
    }

    if (payload.facebook !== '') {
      form.append('facebook', payload.facebook);
    }

    if (payload.address !== '') {
      form.append('address', payload.address);
    }

    if (payload.position) {
      form.append('position', payload.position);
    }

    if (payload.marital_status?.value) {
      form.append(
        'marital_status',
        payload.marital_status?.value || 'single',
      );
    }

    if (payload.profile_status) {
      form.append('profile_status', payload.profile_status);
    }

    if (payload.status) {
      form.append('status', payload.status || 'disable');
    }

    if (payload.avatar) {
      form.append('avatar', payload.avatar);
    }
    if (payload.birthday) {
      form.append(
        'birthday',
        payload.birthday,
      );
    }
    if (payload.id_card_date) {
      form.append(
        'id_card_date',
        payload.id_card_date,
      );
    }
    if (payload.start_date) {
      form.append(
        'start_date',
        payload.start_date,
      );
    }
    const response = yield call(() => axiosMicro.post(`/users/${payload.id}?_method=PATCH`, form));
    if (response?.status === 200) {
      yield put(Actions.editEmployeeSuccess());
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.editEmployeeFailure(messages));
    }
  }
}

function* deleteEmployee({ payload }) {
  try {
    const response = yield call(() => axiosMicro.delete(`/users/${payload}`));
    yield put(Actions.deleteEmployeeSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.deleteEmployeeFailure(messages));
    }
  }
}
function* getDetailEmployee({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(`/users/${payload}`));
    yield put(Actions.getDetailEmployeeSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getDetailEmployeeFailure(messages));
    }
  }
}

function* checkEmailExist({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(`/users?limit=1000&search=email:${payload}`));
    yield put(Actions.checkEmailExistSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.checkEmailExistFailure(messages));
    }
  }
}

function* resetPassword({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/users/${payload.id}`, payload));
    yield put(Actions.resetPasswordEmployeeSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.resetPasswordEmployeeFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getListEmployeesRequest, getListEmployees);
  yield takeLatest(Actions.addEmployeeRequest, addEmployee);
  yield takeLatest(Actions.getDetailEmployeeRequest, getDetailEmployee);
  yield takeLatest(Actions.editEmployeeRequest, editEmployee);
  yield takeLatest(Actions.resetPasswordEmployeeRequest, resetPassword);
  yield takeLatest(Actions.deleteEmployeeRequest, deleteEmployee);
  yield takeLatest(Actions.checkEmailExistRequest, checkEmailExist);
}
