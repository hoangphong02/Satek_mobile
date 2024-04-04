// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';

import * as Actions from './actions';

const initialState = {
  // Get All Products
  isFirstGetAllProductsSale: false,
  isGetAllProductsSaleRequest: false,
  isGetAllProductsSaleSuccess: false,
  isGetAllProductsSaleFailure: false,
  getAllProductsSaleState: {},
  // Get All Customers
  isGetAllCustomersSaleRequest: false,
  isGetAllCustomersSaleSuccess: false,
  isGetAllCustomersSaleFailure: false,
  getAllCustomersSaleState: {},
  // Create Customer
  isCreateCustomerSaleRequest: false,
  isCreateCustomerSaleSuccess: false,
  isCreateCustomerSaleFailure: false,
  createCustomerSaleResponse: {},
  // Update Customer
  isUpdateCustomerSaleRequest: false,
  isUpdateCustomerSaleSuccess: false,
  isUpdateCustomerSaleFailure: false,
  updateCustomerSaleResponse: {},
  // Check Phone Number Customer
  isCheckPhoneNumberCustomerSaleRequest: false,
  isCheckPhoneNumberCustomerSaleSuccess: false,
  isCheckPhoneNumberCustomerSaleFailure: false,
  checkPhoneNumberCustomerSaleState: {},
  // Get All Discounts
  isFirstGetAllDiscountsSale: false,
  isGetAllDiscountsSaleRequest: false,
  isGetAllDiscountsSaleSuccess: false,
  isGetAllDiscountsSaleFailure: false,
  getAllDiscountsSaleState: {},
  // Get Sell Staff Current Work Time
  isFirstGetSellStaffCurrentWorkTimeSale: false,
  isGetSellStaffCurrentWorkTimeSaleRequest: false,
  isGetSellStaffCurrentWorkTimeSaleSuccess: false,
  isGetSellStaffCurrentWorkTimeSaleFailure: false,
  getSellStaffCurrentWorkTimeSaleState: {},
  // Create Order
  isCreateOrderSaleRequest: false,
  isCreateOrderSaleSuccess: false,
  isCreateOrderSaleFailure: false,
  createOrderSaleState: {},
  // Get Draft Orders Sale
  isFirstGetDraftOrdersSale: false,
  isGetDraftOrdersSaleRequest: false,
  isGetDraftOrdersSaleSuccess: false,
  isGetDraftOrdersSaleFailure: false,
  getDraftOrdersSaleState: {},
  // Save Draft Order
  isSaveDraftOrderSaleRequest: false,
  isSaveDraftOrderSaleSuccess: false,
  isSaveDraftOrderSaleFailure: false,
  saveDraftOrderSaleResponse: {},
  // Delete Draft Order
  isDeleteDraftOrderSaleRequest: false,
  isDeleteDraftOrderSaleSuccess: false,
  isDeleteDraftOrderSaleFailure: false,
  // Get All Bills
  isGetAllBillsSaleRequest: false,
  isGetAllBillsSaleSuccess: false,
  isGetAllBillsSaleFailure: false,
  getAllBillsSaleState: {},
  // Get All Categories
  isFirstGetAllCategoriesSale: false,
  isGetAllCategoriesSaleRequest: false,
  isGetAllCategoriesSaleSuccess: false,
  isGetAllCategoriesSaleFailure: false,
  getAllCategoriesState: {},
  // Get All Work Places
  isFirstGetAllWorkPlacesSale: false,
  isGetAllWorkPlacesSaleRequest: false,
  isGetAllWorkPlacesSaleSuccess: false,
  isGetAllWorkPlacesSaleFailure: false,
  getAllWorkPlacesSaleState: {},
  // Get All Tables
  isFirstGetAllTablesSale: false,
  isGetAllTablesSaleRequest: false,
  isGetAllTablesSaleSuccess: false,
  isGetAllTablesSaleFailure: false,
  getAllTablesSaleState: {},
  // Get All Table Groups
  isFirstGetAllTableGroupsSale: false,
  isGetAllTableGroupsSaleRequest: false,
  isGetAllTableGroupsSaleSuccess: false,
  isGetAllTableGroupsSaleFailure: false,
  getAllTableGroupsSaleState: {},
  // Update vat
  isUpdateVatOrderSaleRequest: false,
  isUpdateVatOrderSaleSuccess: false,
  isUpdateVatOrderSaleFailure: false,

  // Get All Table Products
  isFirstGetAllTableProductsSale: false,
  isGetAllTableProductsSaleRequest: false,
  isGetAllTableProductsSaleSuccess: false,
  isGetAllTableProductsSaleFailure: false,
  getAllTableProductsSaleState: {},

  // Create Table Order Customer
  isCreateTableOrderSaleRequest: false,
  isCreateTableOrderSaleSuccess: false,
  isCreateTableOrderSaleFailure: false,
  createTableOrderSaleState: {},

  // Create Dish Request
  isCreateDishRequest: false,
  isCreateDishRequestSuccess: false,
  isCreateDishRequestFailure: false,
  createDishRequestState: {},
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Products
    [Actions.getAllProductsSaleRequest]: (state) => ({
      ...state,
      isGetAllProductsSaleRequest: true,
      isGetAllProductsSaleSuccess: false,
      isGetAllProductsSaleFailure: false,
    }),
    [Actions.getAllProductsSaleSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllProductsSale: true,
      isGetAllProductsSaleRequest: false,
      isGetAllProductsSaleSuccess: true,
      isGetAllProductsSaleFailure: false,
      getAllProductsSaleState: payload,
    }),
    [Actions.getAllProductsSaleFailure]: (state, { payload }) => ({
      ...state,
      isGetAllProductsSaleRequest: false,
      isGetAllProductsSaleSuccess: false,
      isGetAllProductsSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetAllProductsSale]: (state) => ({
      ...state,
      isFirstGetAllProductsSale: false,
      isGetAllProductsSaleRequest: false,
      isGetAllProductsSaleSuccess: false,
      isGetAllProductsSaleFailure: false,
      getAllProductsSaleState: {},
    }),
    // #endregion
    // #region : Get All Customers
    [Actions.getAllCustomersSaleRequest]: (state) => ({
      ...state,
      isGetAllCustomersSaleRequest: true,
      isGetAllCustomersSaleSuccess: false,
      isGetAllCustomersSaleFailure: false,
    }),
    [Actions.getAllCustomersSaleSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllCustomersSaleRequest: false,
      isGetAllCustomersSaleSuccess: true,
      isGetAllCustomersSaleFailure: false,
      getAllCustomersSaleState: payload,
    }),
    [Actions.getAllCustomersSaleFailure]: (state, { payload }) => ({
      ...state,
      isGetAllCustomersSaleRequest: false,
      isGetAllCustomersSaleSuccess: false,
      isGetAllCustomersSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetAllCustomersSale]: (state) => ({
      ...state,
      isGetAllCustomersSaleRequest: false,
      isGetAllCustomersSaleSuccess: false,
      isGetAllCustomersSaleFailure: false,
      getAllCustomersSaleState: {},
    }),
    // #endregion
    // #region : Create Customer
    [Actions.createCustomerSaleRequest]: (state) => ({
      ...state,
      isCreateCustomerSaleRequest: true,
      isCreateCustomerSaleSuccess: false,
      isCreateCustomerSaleFailure: false,
    }),
    [Actions.createCustomerSaleSuccess]: (state, { payload }) => ({
      ...state,
      isCreateCustomerSaleRequest: false,
      isCreateCustomerSaleSuccess: true,
      isCreateCustomerSaleFailure: false,
      createCustomerSaleResponse: payload,
    }),
    [Actions.createCustomerSaleFailure]: (state, { payload }) => ({
      ...state,
      isCreateCustomerSaleRequest: false,
      isCreateCustomerSaleSuccess: false,
      isCreateCustomerSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateCustomerSale]: (state) => ({
      ...state,
      isCreateCustomerSaleRequest: false,
      isCreateCustomerSaleSuccess: false,
      isCreateCustomerSaleFailure: false,
      createCustomerSaleResponse: {},
    }),
    // #endregion
    // #region : Update Customer
    [Actions.updateCustomerSaleRequest]: (state) => ({
      ...state,
      isUpdateCustomerSaleRequest: true,
      isUpdateCustomerSaleSuccess: false,
      isUpdateCustomerSaleFailure: false,
    }),
    [Actions.updateCustomerSaleSuccess]: (state, { payload }) => ({
      ...state,
      isUpdateCustomerSaleRequest: false,
      isUpdateCustomerSaleSuccess: true,
      isUpdateCustomerSaleFailure: false,
      updateCustomerSaleResponse: payload,
    }),
    [Actions.updateCustomerSaleFailure]: (state, { payload }) => ({
      ...state,
      isUpdateCustomerSaleRequest: false,
      isUpdateCustomerSaleSuccess: false,
      isUpdateCustomerSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateCustomerSale]: (state) => ({
      ...state,
      isUpdateCustomerSaleRequest: false,
      isUpdateCustomerSaleSuccess: false,
      isUpdateCustomerSaleFailure: false,
      updateCustomerSaleResponse: {},
    }),
    // #endregion
    // #region : Check Phone Number Customer
    [Actions.checkPhoneNumberCustomerSaleRequest]: (state) => ({
      ...state,
      isCheckPhoneNumberCustomerSaleRequest: true,
      isCheckPhoneNumberCustomerSaleSuccess: false,
      isCheckPhoneNumberCustomerSaleFailure: false,
    }),
    [Actions.checkPhoneNumberCustomerSaleSuccess]: (state, { payload }) => ({
      ...state,
      isCheckPhoneNumberCustomerSaleRequest: false,
      isCheckPhoneNumberCustomerSaleSuccess: true,
      isCheckPhoneNumberCustomerSaleFailure: false,
      checkPhoneNumberCustomerSaleState: payload,
    }),
    [Actions.checkPhoneNumberCustomerSaleFailure]: (state, { payload }) => ({
      ...state,
      isCheckPhoneNumberCustomerSaleRequest: false,
      isCheckPhoneNumberCustomerSaleSuccess: false,
      isCheckPhoneNumberCustomerSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCheckPhoneNumberCustomerSale]: (state) => ({
      ...state,
      isCheckPhoneNumberCustomerSaleRequest: false,
      isCheckPhoneNumberCustomerSaleSuccess: false,
      isCheckPhoneNumberCustomerSaleFailure: false,
      checkPhoneNumberCustomerSaleState: {},
    }),
    // #endregion
    // #region : Get All Discounts
    [Actions.getAllDiscountsSaleRequest]: (state) => ({
      ...state,
      isGetAllDiscountsSaleRequest: true,
      isGetAllDiscountsSaleSuccess: false,
      isGetAllDiscountsSaleFailure: false,
    }),
    [Actions.getAllDiscountsSaleSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllDiscountsSale: true,
      isGetAllDiscountsSaleRequest: false,
      isGetAllDiscountsSaleSuccess: true,
      isGetAllDiscountsSaleFailure: false,
      getAllDiscountsSaleState: {
        ...payload,
        data: payload?.data?.filter((item) => item.quantity > 0 && item.remain > 0 && (new Date(item.start).getTime() < new Date().getTime() && new Date().getTime() < new Date(item.end).getTime())) || [],
      },
    }),
    [Actions.getAllDiscountsSaleFailure]: (state, { payload }) => ({
      ...state,
      isGetAllDiscountsSaleRequest: false,
      isGetAllDiscountsSaleSuccess: false,
      isGetAllDiscountsSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetAllDiscountsSale]: (state) => ({
      ...state,
      isFirstGetAllDiscountsSale: false,
      isGetAllDiscountsSaleRequest: false,
      isGetAllDiscountsSaleSuccess: false,
      isGetAllDiscountsSaleFailure: false,
      getAllDiscountsSaleState: {},
    }),
    // #endregion
    // #region : Get Sell Staff Current Work Time
    [Actions.getSellStaffCurrentWorkTimeSaleRequest]: (state) => ({
      ...state,
      isGetSellStaffCurrentWorkTimeSaleRequest: true,
      isGetSellStaffCurrentWorkTimeSaleSuccess: false,
      isGetSellStaffCurrentWorkTimeSaleFailure: false,
    }),
    [Actions.getSellStaffCurrentWorkTimeSaleSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetSellStaffCurrentWorkTimeSale: true,
      isGetSellStaffCurrentWorkTimeSaleRequest: false,
      isGetSellStaffCurrentWorkTimeSaleSuccess: true,
      isGetSellStaffCurrentWorkTimeSaleFailure: false,
      getSellStaffCurrentWorkTimeSaleState: payload,
    }),
    [Actions.getSellStaffCurrentWorkTimeSaleFailure]: (state, { payload }) => ({
      ...state,
      isGetSellStaffCurrentWorkTimeSaleRequest: false,
      isGetSellStaffCurrentWorkTimeSaleSuccess: false,
      isGetSellStaffCurrentWorkTimeSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetSellStaffCurrentWorkTimeSale]: (state) => ({
      ...state,
      isFirstGetSellStaffCurrentWorkTimeSale: false,
      isGetSellStaffCurrentWorkTimeSaleRequest: false,
      isGetSellStaffCurrentWorkTimeSaleSuccess: false,
      isGetSellStaffCurrentWorkTimeSaleFailure: false,
      getSellStaffCurrentWorkTimeSaleState: {},
    }),
    // #endregion
    // #region : Create Order
    [Actions.createOrderSaleRequest]: (state) => ({
      ...state,
      isCreateOrderSaleRequest: true,
      isCreateOrderSaleSuccess: false,
      isCreateOrderSaleFailure: false,
    }),
    [Actions.createOrderSaleSuccess]: (state, { payload }) => ({
      ...state,
      isCreateOrderSaleRequest: false,
      isCreateOrderSaleSuccess: true,
      isCreateOrderSaleFailure: false,
      createOrderSaleState: payload,
    }),
    [Actions.createOrderSaleFailure]: (state, { payload }) => ({
      ...state,
      isCreateOrderSaleRequest: false,
      isCreateOrderSaleSuccess: false,
      isCreateOrderSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateOrderSale]: (state) => ({
      ...state,
      isCreateOrderSaleRequest: false,
      isCreateOrderSaleSuccess: false,
      isCreateOrderSaleFailure: false,
    }),
    // #endregion
    // #region : Get Draft Orders Sale
    [Actions.getDraftOrdersSaleRequest]: (state) => ({
      ...state,
      isGetDraftOrdersSaleRequest: true,
      isGetDraftOrdersSaleSuccess: false,
      isGetDraftOrdersSaleFailure: false,
    }),
    [Actions.getDraftOrdersSaleSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetDraftOrdersSale: true,
      isGetDraftOrdersSaleRequest: false,
      isGetDraftOrdersSaleSuccess: true,
      isGetDraftOrdersSaleFailure: false,
      getDraftOrdersSaleState: payload,
    }),
    [Actions.getDraftOrdersSaleFailure]: (state, { payload }) => ({
      ...state,
      isGetDraftOrdersSaleRequest: false,
      isGetDraftOrdersSaleSuccess: false,
      isGetDraftOrdersSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetDraftOrdersSale]: (state) => ({
      ...state,
      isFirstGetDraftOrdersSale: false,
      isGetDraftOrdersSaleRequest: false,
      isGetDraftOrdersSaleSuccess: false,
      isGetDraftOrdersSaleFailure: false,
      getDraftOrdersSaleState: {},
    }),
    // #endregion
    // #region : Save Draft Order
    [Actions.saveDraftOrderSaleRequest]: (state) => ({
      ...state,
      isSaveDraftOrderSaleRequest: true,
      isSaveDraftOrderSaleSuccess: false,
      isSaveDraftOrderSaleFailure: false,
    }),
    [Actions.saveDraftOrderSaleSuccess]: (state, { payload }) => ({
      ...state,
      isSaveDraftOrderSaleRequest: false,
      isSaveDraftOrderSaleSuccess: true,
      isSaveDraftOrderSaleFailure: false,
      saveDraftOrderSaleResponse: payload,
    }),
    [Actions.saveDraftOrderSaleFailure]: (state, { payload }) => ({
      ...state,
      isSaveDraftOrderSaleRequest: false,
      isSaveDraftOrderSaleSuccess: false,
      isSaveDraftOrderSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetSaveDraftOrderSale]: (state) => ({
      ...state,
      isSaveDraftOrderSaleRequest: false,
      isSaveDraftOrderSaleSuccess: false,
      isSaveDraftOrderSaleFailure: false,
      saveDraftOrderSaleResponse: {},
    }),
    // #endregion
    // #region : Add Draft Order
    [Actions.addDraftOrderSaleRequest]: (state) => ({
      ...state,
      isAddDraftOrderSaleRequest: true,
      isAddDraftOrderSaleSuccess: false,
      isAddDraftOrderSaleFailure: false,
    }),
    [Actions.addDraftOrderSaleSuccess]: (state, { payload }) => ({
      ...state,
      isAddDraftOrderSaleRequest: false,
      isAddDraftOrderSaleSuccess: true,
      isAddDraftOrderSaleFailure: false,
      addDraftOrderSaleResponse: payload,
    }),
    [Actions.addDraftOrderSaleFailure]: (state, { payload }) => ({
      ...state,
      isAddDraftOrderSaleRequest: false,
      isAddDraftOrderSaleSuccess: false,
      isAddDraftOrderSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetAddDraftOrderSale]: (state) => ({
      ...state,
      isAddDraftOrderSaleRequest: false,
      isAddDraftOrderSaleSuccess: false,
      isAddDraftOrderSaleFailure: false,
      addDraftOrderSaleResponse: {},
    }),
    // #endregion
    // #region : Update Draft Order
    [Actions.updateDraftOrderSaleRequest]: (state) => ({
      ...state,
      isUpdateDraftOrderSaleRequest: true,
      isUpdateDraftOrderSaleSuccess: false,
      isUpdateDraftOrderSaleFailure: false,
    }),
    [Actions.updateDraftOrderSaleSuccess]: (state, { payload }) => ({
      ...state,
      isUpdateDraftOrderSaleRequest: false,
      isUpdateDraftOrderSaleSuccess: true,
      isUpdateDraftOrderSaleFailure: false,
      updateDraftOrderSaleResponse: payload,
    }),
    [Actions.updateDraftOrderSaleFailure]: (state, { payload }) => ({
      ...state,
      isUpdateDraftOrderSaleRequest: false,
      isUpdateDraftOrderSaleSuccess: false,
      isUpdateDraftOrderSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateDraftOrderSale]: (state) => ({
      ...state,
      isUpdateDraftOrderSaleRequest: false,
      isUpdateDraftOrderSaleSuccess: false,
      isUpdateDraftOrderSaleFailure: false,
      updateDraftOrderSaleResponse: {},
    }),
    // #endregion
    // #region : Delete Draft Order
    [Actions.deleteDraftOrderSaleRequest]: (state) => ({
      ...state,
      isDeleteDraftOrderSaleRequest: true,
      isDeleteDraftOrderSaleSuccess: false,
      isDeleteDraftOrderSaleFailure: false,
    }),
    [Actions.deleteDraftOrderSaleSuccess]: (state) => ({
      ...state,
      isDeleteDraftOrderSaleRequest: false,
      isDeleteDraftOrderSaleSuccess: true,
      isDeleteDraftOrderSaleFailure: false,
    }),
    [Actions.deleteDraftOrderSaleFailure]: (state, { payload }) => ({
      ...state,
      isDeleteDraftOrderSaleRequest: false,
      isDeleteDraftOrderSaleSuccess: false,
      isDeleteDraftOrderSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteDraftOrderSale]: (state) => ({
      ...state,
      isDeleteDraftOrderSaleRequest: false,
      isDeleteDraftOrderSaleSuccess: false,
      isDeleteDraftOrderSaleFailure: false,
    }),
    // #endregion
    // #region : Get All Bills
    [Actions.getAllBillsSaleRequest]: (state) => ({
      ...state,
      isGetAllBillsSaleRequest: true,
      isGetAllBillsSaleSuccess: false,
      isGetAllBillsSaleFailure: false,
    }),
    [Actions.getAllBillsSaleSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllBillsSaleRequest: false,
      isGetAllBillsSaleSuccess: true,
      isGetAllBillsSaleFailure: false,
      getAllBillsSaleState: payload,
    }),
    [Actions.getAllBillsSaleFailure]: (state, { payload }) => ({
      ...state,
      isGetAllBillsSaleRequest: false,
      isGetAllBillsSaleSuccess: false,
      isGetAllBillsSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetAllBillsSale]: (state) => ({
      ...state,
      isGetAllBillsSaleRequest: false,
      isGetAllBillsSaleSuccess: false,
      isGetAllBillsSaleFailure: false,
      getAllBillsSaleState: {},
    }),
    // #endregion
    // #region : Get All Categories
    [Actions.getAllCategoriesSaleRequest]: (state) => ({
      ...state,
      isGetAllCategoriesSaleRequest: true,
      isGetAllCategoriesSaleSuccess: false,
      isGetAllCategoriesSaleFailure: false,
    }),
    [Actions.getAllCategoriesSaleSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllCategoriesSale: true,
      isGetAllCategoriesSaleRequest: false,
      isGetAllCategoriesSaleSuccess: true,
      isGetAllCategoriesSaleFailure: false,
      getAllCategoriesState: payload,
    }),
    [Actions.getAllCategoriesSaleFailure]: (state, { payload }) => ({
      ...state,
      isGetAllCategoriesSaleRequest: false,
      isGetAllCategoriesSaleSuccess: false,
      isGetAllCategoriesSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetAllCategoriesSale]: (state) => ({
      ...state,
      isFirstGetAllCategoriesSale: false,
      isGetAllCategoriesSaleRequest: false,
      isGetAllCategoriesSaleSuccess: false,
      isGetAllCategoriesSaleFailure: false,
      getAllCategoriesState: {},
    }),
    // #endregion
    // #region : Get All WorkPlaces
    [Actions.getAllWorkPlacesSaleRequest]: (state) => ({
      ...state,
      isGetAllWorkPlacesSaleRequest: true,
      isGetAllWorkPlacesSaleSuccess: false,
      isGetAllWorkPlacesSaleFailure: false,
    }),
    [Actions.getAllWorkPlacesSaleSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllWorkPlacesSale: true,
      isGetAllWorkPlacesSaleRequest: false,
      isGetAllWorkPlacesSaleSuccess: true,
      isGetAllWorkPlacesSaleFailure: false,
      getAllWorkPlacesSaleState: payload,
    }),
    [Actions.getAllWorkPlacesSaleFailure]: (state, { payload }) => ({
      ...state,
      isGetAllWorkPlacesSaleRequest: false,
      isGetAllWorkPlacesSaleSuccess: false,
      isGetAllWorkPlacesSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetAllWorkPlacesSale]: (state) => ({
      ...state,
      isFirstGetAllWorkPlacesSale: false,
      isGetAllWorkPlacesSaleRequest: false,
      isGetAllWorkPlacesSaleSuccess: false,
      isGetAllWorkPlacesSaleFailure: false,
      getAllWorkPlacesSaleState: {},
    }),
    // #endregion
    // #region : Get All Tables
    [Actions.getAllTablesSaleRequest]: (state) => ({
      ...state,
      isGetAllTablesSaleRequest: true,
      isGetAllTablesSaleSuccess: false,
      isGetAllTablesSaleFailure: false,
    }),
    [Actions.getAllTablesSaleSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllTablesSale: true,
      isGetAllTablesSaleRequest: false,
      isGetAllTablesSaleSuccess: true,
      isGetAllTablesSaleFailure: false,
      getAllTablesSaleState: payload,
    }),
    [Actions.getAllTablesSaleFailure]: (state, { payload }) => ({
      ...state,
      isGetAllTablesSaleRequest: false,
      isGetAllTablesSaleSuccess: false,
      isGetAllTablesSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetAllTablesSale]: (state) => ({
      ...state,
      isFirstGetAllTablesSale: false,
      isGetAllTablesSaleRequest: false,
      isGetAllTablesSaleSuccess: false,
      isGetAllTablesSaleFailure: false,
      getAllTablesSaleState: {},
    }),
    // #endregion
    // #region : Get All Table Groups
    [Actions.getAllTableGroupsSaleRequest]: (state) => ({
      ...state,
      isGetAllTableGroupsSaleRequest: true,
      isGetAllTableGroupsSaleSuccess: false,
      isGetAllTableGroupsSaleFailure: false,
    }),
    [Actions.getAllTableGroupsSaleSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllTableGroupsSale: true,
      isGetAllTableGroupsSaleRequest: false,
      isGetAllTableGroupsSaleSuccess: true,
      isGetAllTableGroupsSaleFailure: false,
      getAllTableGroupsSaleState: {
        ...payload,
        data: payload.data.filter((item) => item.active).sort((a, b) => (a.sort > b.sort ? 0 : -1)),
      },
    }),
    [Actions.getAllTableGroupsSaleFailure]: (state, { payload }) => ({
      ...state,
      isGetAllTableGroupsSaleRequest: false,
      isGetAllTableGroupsSaleSuccess: false,
      isGetAllTableGroupsSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetAllTableGroupsSale]: (state) => ({
      ...state,
      isFirstGetAllTableGroupsSale: false,
      isGetAllTableGroupsSaleRequest: false,
      isGetAllTableGroupsSaleSuccess: false,
      isGetAllTableGroupsSaleFailure: false,
      getAllTableGroupsSaleState: {},
    }),
    // #endregion

    // #region : Create move kitchen
    [Actions.createMoveKitchenSaleRequest]: (state) => ({
      ...state,
      isCreateMoveKitchenSaleRequest: true,
      isCreateMoveKitchenSaleSuccess: false,
      isCreateMoveKitchenSaleFailure: false,
    }),
    [Actions.createMoveKitchenSaleSuccess]: (state, { payload }) => ({
      ...state,
      isCreateMoveKitchenSaleRequest: false,
      isCreateMoveKitchenSaleSuccess: true,
      isCreateMoveKitchenSaleFailure: false,
      createMoveKitchenSaleResponse: payload,
    }),
    [Actions.createMoveKitchenSaleFailure]: (state, { payload }) => ({
      ...state,
      isCreateMoveKitchenSaleRequest: false,
      isCreateMoveKitchenSaleSuccess: false,
      isCreateMoveKitchenSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateMoveKitchenSale]: (state) => ({
      ...state,
      isCreateMoveKitchenSaleRequest: false,
      isCreateMoveKitchenSaleSuccess: false,
      isCreateMoveKitchenSaleFailure: false,
      createMoveKitchenSaleResponse: {},
    }),
    // #endregion

    // #region : Create move kitchen
    [Actions.createDishCancelRequest]: (state) => ({
      ...state,
      isCreateDishCancelRequest: true,
      isCreateDishCancelSuccess: false,
      isCreateDishCancelFailure: false,
    }),
    [Actions.createDishCancelSuccess]: (state, { payload }) => ({
      ...state,
      isCreateDishCancelRequest: false,
      isCreateDishCancelSuccess: true,
      isCreateDishCancelFailure: false,
      createDishCancelResponse: payload,
    }),
    [Actions.createDishCancelFailure]: (state, { payload }) => ({
      ...state,
      isCreateDishCancelRequest: false,
      isCreateDishCancelSuccess: false,
      isCreateDishCancelFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateDishCancel]: (state) => ({
      ...state,
      isCreateDishCancelRequest: false,
      isCreateDishCancelSuccess: false,
      isCreateDishCancelFailure: false,
      createDishCancelResponse: {},
    }),
    // #endregion

    // #region : Update vat
    [Actions.updateVatOrderSaleRequest]: (state) => ({
      ...state,
      isUpdateVatOrderSaleRequest: true,
      isUpdateVatOrderSaleSuccess: false,
      isUpdateVatOrderSaleFailure: false,
    }),
    [Actions.updateVatOrderSaleSuccess]: (state) => ({
      ...state,
      isUpdateVatOrderSaleRequest: false,
      isUpdateVatOrderSaleSuccess: true,
      isUpdateVatOrderSaleFailure: false,
    }),
    [Actions.updateVatOrderSaleFailure]: (state, { payload }) => ({
      ...state,
      isUpdateVatOrderSaleRequest: false,
      isUpdateVatOrderSaleSuccess: false,
      isUpdateVatOrderSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateVatOrderSale]: (state) => ({
      ...state,
      isUpdateVatOrderSaleRequest: false,
      isUpdateVatOrderSaleFailure: false,
      isUpdateVatOrderSaleSuccess: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Get All Table Products
    [Actions.getAllTableProductRequest]: (state) => ({
      ...state,
      isGetAllTableProductsSaleRequest: false,
      isGetAllTableProductsSaleSuccess: false,
      isGetAllTableProductsSaleFailure: false,
    }),
    [Actions.getAllTableProductSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllTableProductsSale: true,
      isGetAllTableProductsSaleRequest: false,
      isGetAllTableProductsSaleSuccess: true,
      isGetAllTableProductsSaleFailure: false,
      getAllTableProductsSaleState: payload,
    }),
    [Actions.getAllTableProductFailure]: (state, { payload }) => ({
      ...state,
      isGetAllTableProductsSaleRequest: false,
      isGetAllTableProductsSaleSuccess: false,
      isGetAllTableProductsSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetAllTableProduct]: (state) => ({
      ...state,
      isFirstGetAllTableProductsSale: true,
      isGetAllTableProductsSaleRequest: false,
      isGetAllTableProductsSaleSuccess: true,
      isGetAllTableProductsSaleFailure: false,
      getAllTableProductsSaleState: {},
    }),

    // #region : Create Table Order Customer
    [Actions.createTableOrdersSaleRequest]: (state) => ({
      ...state,
      isCreateTableOrderSaleRequest: true,
      isCreateTableOrderSaleSuccess: false,
      isCreateTableOrderSaleFailure: false,
    }),
    [Actions.createTableOrdersSaleSuccess]: (state, { payload }) => ({
      ...state,
      isCreateTableOrderSaleRequest: false,
      isCreateTableOrderSaleSuccess: true,
      isCreateTableOrderSaleFailure: false,
      createTableOrderSaleState: payload,
    }),
    [Actions.createTableOrdersSaleFailure]: (state, { payload }) => ({
      ...state,
      isCreateTableOrderSaleRequest: false,
      isCreateTableOrderSaleSuccess: false,
      isCreateTableOrderSaleFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateTableOrdersSale]: (state) => ({
      ...state,
      isCreateTableOrderSaleRequest: false,
      isCreateTableOrderSaleSuccess: false,
      isCreateTableOrderSaleFailure: false,
    }),

    // #region : Create dish request customer
    [Actions.createDishRequest]: (state) => ({
      ...state,
      isCreateDishRequest: true,
      isCreateDishRequestSuccess: false,
      isCreateDishRequestFailure: false,
    }),
    [Actions.createDishRequestSuccess]: (state, { payload }) => ({
      ...state,
      isCreateDishRequest: false,
      isCreateDishRequestSuccess: true,
      isCreateDishRequestFailure: false,
      createDishRequestState: payload,
    }),
    [Actions.createDishRequestFailure]: (state, { payload }) => ({
      ...state,
      isCreateDishRequest: false,
      isCreateDishRequestSuccess: false,
      isCreateDishRequestFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateDishRequest]: (state) => ({
      ...state,
      isCreateDishRequest: false,
      isCreateDishRequestSuccess: false,
      isCreateDishRequestFailure: false,
    }),

    // #region : Local
    [Actions.resetSaleState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
