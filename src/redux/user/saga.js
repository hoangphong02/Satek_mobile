/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getProfile() {
  try {
    const response = yield call(() => axiosMicro.get('/profile', {
      params: {
        include: 'roles',
      },
    }));
    yield put(Actions.getProfileUserSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getProfileUserFailure(messages));
    }
  }
}

function* updateInformationUser({ payload }) {
  try {
    const form = new FormData();
    if (payload?.name) {
      form.append('name', payload.name);
    }
    if (payload?.email) {
      form.append('email', payload.email);
    }
    if (payload?.gender) {
      form.append('gender', payload.gender);
    }
    if (payload?.marital_status) {
      form.append('marital_status', payload.marital_status);
    }
    if (payload?.birthday) {
      form.append('birthday', payload.birthday);
    }
    if (payload?.id_card) {
      form.append('id_card', payload.id_card);
    }
    if (payload?.id_card_date) {
      form.append('id_card_date', payload.id_card_date);
    }
    if (payload?.id_card_place) {
      form.append('id_card_place', payload.id_card_place);
    }
    if (payload?.phone) {
      form.append('phone', payload.phone);
    }
    if (payload?.zalo) {
      form.append('zalo', payload.zalo);
    }
    if (payload?.facebook) {
      form.append('facebook', payload.facebook);
    }
    if (payload?.address) {
      form.append('address', payload.address);
    }
    if (payload?.avatar) {
      form.append('avatar', payload.avatar);
    }
    if (payload?.label) {
      form.append('label', payload.label);
    }
    if (payload?.telephone) {
      form.append('telephone', payload.telephone);
    }
    const response = yield call(() => axiosMicro.post(`/users/${payload.id}?_method=PATCH`, form));
    yield put(Actions.updateInformationUserSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.updateInformationUserFailure(messages));
    }
  }
}

function* getVacation({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(`/schedule-books?search=user_id:${payload}`));
    if (response?.status === 200) {
      yield put(Actions.getVacationUserSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getVacationUserFailure(messages));
    }
  }
}

function* getSchedule({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(`/schedules?search=user_id:${payload}`));
    if (response?.status === 200) {
      yield put(Actions.getScheduleUserSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getScheduleUserFailure(messages));
    }
  }
}

function* getWorkTracking({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(!payload?.params ? `/work-trackings?user_id=${payload.id}&include=workPlace` : `/work-trackings?user_id=${payload.id}${payload.params}&include=workPlace`));
    if (response?.status === 200) {
      yield put(Actions.getWorkTrackingUserSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getWorkTrackingUserFailure(messages));
    }
  }
}

function* getAllNotification() {
  try {
    const response = yield call(() => axiosMicro.get('/notifications/my?include=order,user'));
    if (response?.status === 200) {
      yield put(Actions.getAllNotificationSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getAllNotificationFailure(messages));
    }
  }
}

function* changeStatusNotification({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch('/notifications/my/read', { id: payload.toString() }));
    if (response?.status === 204) {
      yield put(Actions.changeStatusNotificationSuccess());
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.changeStatusNotificationFailure(messages));
    }
  }
}

//

function* getConfigCheckIn() {
  try {
    const response = yield call(() => axiosMicro.get('/work-configs'));
    if (response?.status === 200) {
      yield put(Actions.getConfigCheckInSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getConfigCheckInFailure(messages));
    }
  }
}

function* getDetailConfigCheckIn({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(`/work-configs/${payload}`));
    if (response?.status === 200) {
      yield put(Actions.getDetailConfigCheckInSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getDetailConfigCheckInFailure(messages));
    }
  }
}

function* saveConfigCheckIn({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch('/work-configs', payload));
    yield put(Actions.saveConfigCheckInSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.saveConfigCheckInFailure(messages));
    }
  }
}

function* getConfigUser({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(payload ? `/configs/setting${payload}` : '/configs/setting'));
    yield put(Actions.getConfigUserSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.getConfigUserFailure(messages));
    }
  }
}

function* saveConfigUser({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch('/configs', payload));
    yield put(Actions.saveConfigUserSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.saveConfigUserFailure(messages));
    }
  }
}

function* resetPasswordUser({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch('/configs', payload));
    yield put(Actions.saveConfigUserSuccess());
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.saveConfigUserFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getProfileUserRequest, getProfile);
  yield takeLatest(Actions.updateInformationUserRequest, updateInformationUser);
  yield takeLatest(Actions.getVacationUserRequest, getVacation);
  yield takeLatest(Actions.getScheduleUserRequest, getSchedule);
  yield takeLatest(Actions.getWorkTrackingUserRequest, getWorkTracking);
  yield takeLatest(Actions.getAllNotificationRequest, getAllNotification);
  yield takeLatest(Actions.changeStatusNotificationRequest, changeStatusNotification);
  yield takeLatest(Actions.getConfigCheckInRequest, getConfigCheckIn);
  yield takeLatest(Actions.getDetailConfigCheckInRequest, getDetailConfigCheckIn);
  yield takeLatest(Actions.saveConfigCheckInRequest, saveConfigCheckIn);
  yield takeLatest(Actions.getConfigUserRequest, getConfigUser);
  yield takeLatest(Actions.saveConfigUserRequest, saveConfigUser);
}
