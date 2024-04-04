// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  // Get All Orders List
  isGetAllOrdersListRequest: false,
  isGetAllOrdersListSuccess: false,
  isGetAllOrdersListFailure: false,
  getAllOrdersListState: {},
  // Create Order Return
  isCreateOrderReturnRequest: false,
  isCreateOrderReturnSuccess: false,
  isCreateOrderReturnFailure: false,
  // Get order for warehouse
  isGetOrderForWarehouseRequest: false,
  isGetOrderForWarehouseSuccess: false,
  isGetOrderForWarehouseFailure: false,
  getOrderForWarehouseState: {},
  // Get orders vat
  isGetOrdersListVatRequest: false,
  isGetOrdersListVatSuccess: false,
  isGetOrdersListVatFailure: false,
  getOrdersListVatState: {},
  // Delete order
  isDeleteOrderRequest: false,
  isDeleteOrderSuccess: false,
  isDeleteOrderFailure: false,
  // Update order
  isUpdateOrderRequest: false,
  isUpdateOrderSuccess: false,
  isUpdateOrderFailure: false,
  // Create request payment
  isCreateRequestPayment: false,
  isCreateRequestPaymentSuccess: false,
  isCreateRequestPaymentFailure: false,

  // Get All Request Payment
  isGetAllRequestPayment: false,
  isGetAllRequestPaymentSuccess: false,
  isGetAllRequestPaymentFailure: false,
  getAllRequestPaymentState: {},

  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Orders List
    [Actions.getAllOrdersListRequest]: (state) => ({
      ...state,
      isGetAllOrdersListRequest: true,
      isGetAllOrdersListSuccess: false,
      isGetAllOrdersListFailure: false,
    }),
    [Actions.getAllOrdersListSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllOrdersListRequest: false,
      isGetAllOrdersListSuccess: true,
      isGetAllOrdersListFailure: false,
      getAllOrdersListState: payload,
    }),
    [Actions.getAllOrdersListFailure]: (state, { payload }) => ({
      ...state,
      isGetAllOrdersListRequest: false,
      isGetAllOrdersListSuccess: false,
      isGetAllOrdersListFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Order Return
    [Actions.createOrderReturnRequest]: (state) => ({
      ...state,
      isCreateOrderReturnRequest: true,
      isCreateOrderReturnSuccess: false,
      isCreateOrderReturnFailure: false,
    }),
    [Actions.createOrderReturnSuccess]: (state, { payload }) => ({
      ...state,
      isCreateOrderReturnRequest: false,
      isCreateOrderReturnSuccess: true,
      isCreateOrderReturnFailure: false,
      getAllOrdersListState: {
        ...state.getAllOrdersListState,
        data: state.getAllOrdersListState.data.map((item) => item.id === payload.id
          ? {
            ...item,
            return: payload.items.data.reduce(
              (initial, total) => (total.returnTmp < total.return
                ? total.return
                : total.returnTmp) + initial,
              0,
            ),
            items: {
              data: item.items.data.map((item2) => payload.items.data
                .map((item3) => item3.id)
                .includes(item2.id)
                ? {
                  ...item2,
                  return:
                            payload.items.data.find(
                              (item3) => item3.id === item2.id,
                            ).returnTmp
                            < payload.items.data.find(
                              (item3) => item3.id === item2.id,
                            ).return
                              ? payload.items.data.find(
                                (item3) => item3.id === item2.id,
                              ).return
                              : payload.items.data.find(
                                (item3) => item3.id === item2.id,
                              ).returnTmp,
                }
                : item2),
            },
          }
          : item),
      },
    }),
    [Actions.createOrderReturnFailure]: (state, { payload }) => ({
      ...state,
      isCreateOrderReturnRequest: false,
      isCreateOrderReturnSuccess: false,
      isCreateOrderReturnFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateOrderReturn]: (state, { payload }) => ({
      ...state,
      isCreateOrderReturnRequest: false,
      isCreateOrderReturnSuccess: false,
      isCreateOrderReturnFailure: false,
      errorMessages: payload,
    }),
    // #endregion

    // #region Get order for warehouse
    [Actions.getOrderForWarehouseRequest]: (state) => ({
      ...state,
      isGetOrderForWarehouseRequest: true,
      isGetOrderForWarehouseSuccess: false,
      isGetOrderForWarehouseFailure: false,
    }),
    [Actions.getOrderForWarehouseSuccess]: (state, { payload }) => ({
      ...state,
      isGetOrderForWarehouseRequest: false,
      isGetOrderForWarehouseSuccess: true,
      isGetOrderForWarehouseFailure: false,
      getOrderForWarehouseState: payload,
    }),
    [Actions.getOrderForWarehouseFailure]: (state, { payload }) => ({
      ...state,
      isGetOrderForWarehouseRequest: false,
      isGetOrderForWarehouseSuccess: false,
      isGetOrderForWarehouseFailure: true,
      errorMessages: payload,
    }),

    // #region : Update Product
    [Actions.updateOrderRequest]: (state) => ({
      ...state,
      isUpdateOrderRequest: true,
      isUpdateOrderSuccess: false,
      isUpdateOrderFailure: false,
    }),
    [Actions.updateOrderSuccess]: (state) => ({
      ...state,
      isUpdateOrderRequest: false,
      isUpdateOrderSuccess: true,
      isUpdateOrderFailure: false,
    }),
    [Actions.updateOrderFailure]: (state, { payload }) => ({
      ...state,
      isUpdateOrderRequest: false,
      isUpdateOrderSuccess: false,
      isUpdateOrderFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateOrder]: (state) => ({
      ...state,
      isUpdateOrderRequest: false,
      isUpdateOrderSuccess: false,
      isUpdateOrderFailure: false,
      errorMessages: [],
    }),

    // #region : Delete Product
    [Actions.deleteOrderRequest]: (state) => ({
      ...state,
      isDeleteOrderRequest: true,
      isDeleteOrderSuccess: false,
      isDeleteOrderFailure: false,
    }),
    [Actions.deleteOrderSuccess]: (state) => ({
      ...state,
      isDeleteOrderRequest: false,
      isDeleteOrderSuccess: true,
      isDeleteOrderFailure: false,
    }),
    [Actions.deleteOrderFailure]: (state, { payload }) => ({
      ...state,
      isDeleteOrderRequest: false,
      isDeleteOrderSuccess: false,
      isDeleteOrderFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteOrder]: (state) => ({
      ...state,
      isDeleteOrderRequest: false,
      isDeleteOrderSuccess: false,
      isDeleteOrderFailure: false,
      errorMessages: [],
    }),
    // #endregion

    // #region : Update Product
    [Actions.updateOrderRequest]: (state) => ({
      ...state,
      isUpdateOrderRequest: true,
      isUpdateOrderSuccess: false,
      isUpdateOrderFailure: false,
    }),
    [Actions.updateOrderSuccess]: (state) => ({
      ...state,
      isUpdateOrderRequest: false,
      isUpdateOrderSuccess: true,
      isUpdateOrderFailure: false,
    }),
    [Actions.updateOrderFailure]: (state, { payload }) => ({
      ...state,
      isUpdateOrderRequest: false,
      isUpdateOrderSuccess: false,
      isUpdateOrderFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateOrder]: (state) => ({
      ...state,
      isUpdateOrderRequest: false,
      isUpdateOrderSuccess: false,
      isUpdateOrderFailure: false,
      errorMessages: [],
    }),
    // #endregion

    // #region : Delete Product
    [Actions.deleteOrderRequest]: (state) => ({
      ...state,
      isDeleteOrderRequest: true,
      isDeleteOrderSuccess: false,
      isDeleteOrderFailure: false,
    }),
    [Actions.deleteOrderSuccess]: (state) => ({
      ...state,
      isDeleteOrderRequest: false,
      isDeleteOrderSuccess: true,
      isDeleteOrderFailure: false,
    }),
    [Actions.deleteOrderFailure]: (state, { payload }) => ({
      ...state,
      isDeleteOrderRequest: false,
      isDeleteOrderSuccess: false,
      isDeleteOrderFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteOrder]: (state) => ({
      ...state,
      isDeleteOrderRequest: false,
      isDeleteOrderSuccess: false,
      isDeleteOrderFailure: false,
      errorMessages: [],
    }),
    // #endregion

    // #region Get order list
    [Actions.getOrdersListVatRequest]: (state) => ({
      ...state,
      isGetOrdersListVatRequest: true,
      isGetOrdersListVatSuccess: false,
      isGetOrdersListVatFailure: false,
    }),
    [Actions.getOrdersListVatSuccess]: (state, { payload }) => ({
      ...state,
      isGetOrdersListVatRequest: false,
      isGetOrdersListVatSuccess: true,
      isGetOrdersListVatFailure: false,
      getOrdersListVatState: payload,
    }),
    [Actions.getOrdersListVatFailure]: (state, { payload }) => ({
      ...state,
      isGetOrdersListVatRequest: false,
      isGetOrdersListVatSuccess: false,
      isGetOrdersListVatFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Request Payment
    [Actions.createRequestPayment]: (state) => ({
      ...state,
      isCreateRequestPayment: true,
      isCreateRequestPaymentSuccess: false,
      isCreateRequestPaymentFailure: false,
    }),
    [Actions.createRequestPaymentSuccess]: (state) => ({
      ...state,
      isCreateRequestPayment: false,
      isCreateRequestPaymentSuccess: true,
      isCreateRequestPaymentFailure: false,
    }),
    [Actions.createRequestPaymentFailure]: (state, { payload }) => ({
      ...state,
      isCreateRequestPayment: false,
      isCreateRequestPaymentSuccess: false,
      isCreateRequestPaymentFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateRequestPayment]: (state) => ({
      ...state,
      isCreateRequestPayment: true,
      isCreateRequestPaymentSuccess: false,
      isCreateRequestPaymentFailure: false,
      errorMessages: [],
    }),

    // #region : Get All Request Payment
    [Actions.getAllRequestPayment]: (state) => ({
      ...state,
      isGetAllRequestPayment: true,
      isGetAllRequestPaymentSuccess: false,
      isGetAllRequestPaymentFailure: false,
    }),
    [Actions.getAllRequestPaymentSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllRequestPayment: false,
      isGetAllRequestPaymentSuccess: true,
      isGetAllRequestPaymentFailure: false,
      getAllRequestPaymentState: payload,
    }),
    [Actions.getAllRequestPaymentFailure]: (state, { payload }) => ({
      ...state,
      isGetAllRequestPayment: false,
      isGetAllRequestPaymentSuccess: false,
      isGetAllRequestPaymentFailure: true,
      errorMessages: payload,
    }),

    // #region : Local
    [Actions.resetOrderState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
