/* eslint-disable import/no-extraneous-dependencies */
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '~/services';
import * as Actions from './actions';

function* getAllProductsSale({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/products/list?${payload}`)
        : () => axiosMicro.get('/products/list', { params: payload }),
    );
    yield put(Actions.getAllProductsSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllProductsSaleFailure(messages));
    }
  }
}
function* getAllProductsTable({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get('/products/table')
        : () => axiosMicro.get('/products/table', { params: payload }),
    );
    yield put(Actions.getAllTableProductSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllTableProductFailure(messages));
    }
  }
}

function* createCustomerSale({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/customers', payload));
    yield put(Actions.createCustomerSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createCustomerSaleFailure(messages));
    }
  }
}

function* updateCustomerSale({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/customers/${payload.id}`, payload.body));
    yield put(Actions.updateCustomerSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateCustomerSaleFailure(messages));
    }
  }
}

function* checkPhoneNumberCustomerSale({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get(`/customers?search=phone:${encodeURI(payload)}`));
    yield put(Actions.checkPhoneNumberCustomerSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.checkPhoneNumberCustomerSaleFailure(messages));
    }
  }
}

function* getAllDiscountsSale() {
  try {
    const response = yield call(() => axiosMicro.get('/discounts/list?limit=1000'));
    yield put(Actions.getAllDiscountsSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllDiscountsSaleFailure(messages));
    }
  }
}

function* getSellStaffCurrentWorkTimeSale() {
  try {
    const response = yield call(() => axiosMicro.get('/staff/sell?limit=1000'));
    yield put(Actions.getSellStaffCurrentWorkTimeSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getSellStaffCurrentWorkTimeSaleFailure(messages));
    }
  }
}

function* createOrderSale({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/orders/${payload.id}?include=staff`, { ...payload.data, status: 'paid' }));
    yield put(Actions.createOrderSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createOrderSaleFailure(messages));
    }
  }
}

function* getDraftOrdersSale({ payload }) {
  try {
    // const response = yield call(() => axiosMicro.get(`/orders/draft?${payload.params}&limit=1000`));
    const response = yield call(() => axiosMicro.get('/orders/draft', { params: payload }));
    yield put(Actions.getDraftOrdersSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getDraftOrdersSaleFailure(messages));
    }
  }
}

function* saveDraftOrderSale({ payload }) {
  try {
    const response = yield call(
      payload.type === 'create'
        ? () => axiosMicro.post('/orders', { ...payload.data, status: payload.from === 'fnb' ? 'paid' : 'draft' })
        : () => axiosMicro.patch(`/orders/${payload.id}`, payload.data),
    );
    yield put(Actions.saveDraftOrderSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.saveDraftOrderSaleFailure(messages));
    }
  }
}
function* addDraftOrderSale({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/orders', { ...payload.data, status: 'draft' }));
    yield put(Actions.addDraftOrderSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.addDraftOrderSaleFailure(messages));
    }
  }
}
function* updateDraftOrderSale({ payload }) {
  try {
    const response = yield call(() => axiosMicro.patch(`/orders/${payload.id}`, { ...payload.data, status: 'draft' }));
    yield put(Actions.updateDraftOrderSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateDraftOrderSaleFailure(messages));
    }
  }
}
function* updateVatOrderSale({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post(`/orders/${payload.id}/vat`, payload.body));
    yield put(Actions.updateVatOrderSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateVatOrderSaleFailure(messages));
    }
  }
}
function* deleteDraftOrderSale({ payload }) {
  try {
    const response = yield call(() => axiosMicro.delete(`/orders/${payload.id}`));
    yield put(Actions.deleteDraftOrderSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteDraftOrderSaleFailure(messages));
    }
  }
}

function* getAllBillsSale({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/orders/bills?${payload}`)
        : () => axiosMicro.get('/orders/bills', { params: payload }),
    );
    yield put(Actions.getAllBillsSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllBillsSaleFailure(messages));
    }
  }
}

function* getAllCategoriesSale({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/categories?${payload}`)
        : () => axiosMicro.get('/categories', { params: payload }),
    );
    yield put(Actions.getAllCategoriesSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllCategoriesSaleFailure(messages));
    }
  }
}

function* getAllWorkPlacesSale({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/work-places?${payload}`)
        : () => axiosMicro.get('/work-places', { params: payload }),
    );
    yield put(Actions.getAllWorkPlacesSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllWorkPlacesSaleFailure(messages));
    }
  }
}

function* getAllTablesSale({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/tables?${payload}`)
        : () => axiosMicro.get('/tables', { params: payload }),
    );
    yield put(Actions.getAllTablesSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllTablesSaleFailure(messages));
    }
  }
}

function* getAllTableGroupsSale({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/table-groups?${payload}`)
        : () => axiosMicro.get('/table-groups', { params: payload }),
    );
    yield put(Actions.getAllTableGroupsSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllTableGroupsSaleFailure(messages));
    }
  }
}

function* createMoveKitchenSale({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/kitchen/dishes', payload));
    yield put(Actions.createMoveKitchenSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createMoveKitchenSaleFailure(messages));
    }
  }
}

function* createDishCancel({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/kitchen/dish-cancels', payload));
    yield put(Actions.createDishCancelSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createDishCancelFailure(messages));
    }
  }
}

function* createTableOrder({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/orders/table', payload));
    yield put(Actions.createTableOrdersSaleSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createTableOrdersSaleFailure(messages));
    }
  }
}

function* createDishRequest({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/kitchen/dish/requests', payload));
    yield put(Actions.createDishRequestSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createDishRequestFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllProductsSaleRequest, getAllProductsSale);
  yield takeLatest(Actions.createCustomerSaleRequest, createCustomerSale);
  yield takeLatest(Actions.updateCustomerSaleRequest, updateCustomerSale);
  yield takeLatest(Actions.checkPhoneNumberCustomerSaleRequest, checkPhoneNumberCustomerSale);
  yield takeLatest(Actions.getAllDiscountsSaleRequest, getAllDiscountsSale);
  yield takeLatest(Actions.getSellStaffCurrentWorkTimeSaleRequest, getSellStaffCurrentWorkTimeSale);
  yield takeLatest(Actions.createOrderSaleRequest, createOrderSale);
  yield takeLatest(Actions.getDraftOrdersSaleRequest, getDraftOrdersSale);
  yield takeLatest(Actions.saveDraftOrderSaleRequest, saveDraftOrderSale);
  yield takeLatest(Actions.addDraftOrderSaleRequest, addDraftOrderSale);
  yield takeLatest(Actions.updateDraftOrderSaleRequest, updateDraftOrderSale);
  yield takeLatest(Actions.deleteDraftOrderSaleRequest, deleteDraftOrderSale);
  yield takeLatest(Actions.getAllBillsSaleRequest, getAllBillsSale);
  yield takeLatest(Actions.getAllCategoriesSaleRequest, getAllCategoriesSale);
  yield takeLatest(Actions.getAllWorkPlacesSaleRequest, getAllWorkPlacesSale);
  yield takeLatest(Actions.getAllWorkPlacesSaleRequest, getAllWorkPlacesSale);
  yield takeLatest(Actions.getAllWorkPlacesSaleRequest, getAllWorkPlacesSale);
  yield takeLatest(Actions.getAllTablesSaleRequest, getAllTablesSale);
  yield takeLatest(Actions.getAllTableGroupsSaleRequest, getAllTableGroupsSale);
  yield takeLatest(Actions.createMoveKitchenSaleRequest, createMoveKitchenSale);
  yield takeLatest(Actions.createDishCancelRequest, createDishCancel);
  yield takeLatest(Actions.updateVatOrderSaleRequest, updateVatOrderSale);
  yield takeLatest(Actions.getAllTableProductRequest, getAllProductsTable);
  yield takeLatest(Actions.createTableOrdersSaleRequest, createTableOrder);
  yield takeLatest(Actions.createDishRequest, createDishRequest);
}
