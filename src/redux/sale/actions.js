// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllProductsSaleRequest = createAction('GET_ALL_PRODUCTS_SALE_REQUEST');
export const getAllProductsSaleSuccess = createAction('GET_ALL_PRODUCTS_SALE_SUCCESS');
export const getAllProductsSaleFailure = createAction('GET_ALL_PRODUCTS_SALE_FAILURE');
export const resetGetAllProductsSale = createAction('RESET_GET_ALL_PRODUCTS_SALE');

export const getAllCustomersSaleRequest = createAction('GET_ALL_CUSTOMERS_SALE_REQUEST');
export const getAllCustomersSaleSuccess = createAction('GET_ALL_CUSTOMERS_SALE_SUCCESS');
export const getAllCustomersSaleFailure = createAction('GET_ALL_CUSTOMERS_SALE_FAILURE');
export const resetGetAllCustomersSale = createAction('RESET_GET_ALL_CUSTOMERS_SALE');

export const createCustomerSaleRequest = createAction('CREATE_CUSTOMER_SALE_REQUEST');
export const createCustomerSaleSuccess = createAction('CREATE_CUSTOMER_SALE_SUCCESS');
export const createCustomerSaleFailure = createAction('CREATE_CUSTOMER_SALE_FAILURE');
export const resetCreateCustomerSale = createAction('RESET_CREATE_CUSTOMER_SALE');

export const updateCustomerSaleRequest = createAction('UPDATE_CUSTOMER_SALE_REQUEST');
export const updateCustomerSaleSuccess = createAction('UPDATE_CUSTOMER_SALE_SUCCESS');
export const updateCustomerSaleFailure = createAction('UPDATE_CUSTOMER_SALE_FAILURE');
export const resetUpdateCustomerSale = createAction('RESET_UPDATE_CUSTOMER_SALE');

export const checkPhoneNumberCustomerSaleRequest = createAction('CHECK_PHONE_NUMBER_CUSTOMER_SALE_REQUEST');
export const checkPhoneNumberCustomerSaleSuccess = createAction('CHECK_PHONE_NUMBER_CUSTOMER_SALE_SUCCESS');
export const checkPhoneNumberCustomerSaleFailure = createAction('CHECK_PHONE_NUMBER_CUSTOMER_SALE_FAILURE');
export const resetCheckPhoneNumberCustomerSale = createAction('RESET_CHECK_PHONE_NUMBER_CUSTOMER_SALE');

export const getAllDiscountsSaleRequest = createAction('GET_ALL_DISCOUNTS_SALE_REQUEST');
export const getAllDiscountsSaleSuccess = createAction('GET_ALL_DISCOUNTS_SALE_SUCCESS');
export const getAllDiscountsSaleFailure = createAction('GET_ALL_DISCOUNTS_SALE_FAILURE');
export const resetGetAllDiscountsSale = createAction('RESET_GET_ALL_DISCOUNTS_SALE');

export const getSellStaffCurrentWorkTimeSaleRequest = createAction('GET_SELL_STAFF_CURRENT_WORK_TIME_SALE_REQUEST');
export const getSellStaffCurrentWorkTimeSaleSuccess = createAction('GET_SELL_STAFF_CURRENT_WORK_TIME_SALE_SUCCESS');
export const getSellStaffCurrentWorkTimeSaleFailure = createAction('GET_SELL_STAFF_CURRENT_WORK_TIME_SALE_FAILURE');
export const resetGetSellStaffCurrentWorkTimeSale = createAction('RESET_GET_SELL_STAFF_CURRENT_WORK_TIME_SALE');

export const createOrderSaleRequest = createAction('CREATE_ORDER_SALE_REQUEST');
export const createOrderSaleSuccess = createAction('CREATE_ORDER_SALE_SUCCESS');
export const createOrderSaleFailure = createAction('CREATE_ORDER_SALE_FAILURE');
export const resetCreateOrderSale = createAction('RESET_CREATE_ORDER_SALE');

export const getDraftOrdersSaleRequest = createAction('GET_DRAFT_ORDERS_SALE_REQUEST');
export const getDraftOrdersSaleSuccess = createAction('GET_DRAFT_ORDERS_SALE_SUCCESS');
export const getDraftOrdersSaleFailure = createAction('GET_DRAFT_ORDERS_SALE_FAILURE');
export const resetGetDraftOrdersSale = createAction('RESET_GET_DRAFT_ORDERS_SALE');

export const saveDraftOrderSaleRequest = createAction('SAVE_DRAFT_ORDER_SALE_REQUEST');
export const saveDraftOrderSaleSuccess = createAction('SAVE_DRAFT_ORDER_SALE_SUCCESS');
export const saveDraftOrderSaleFailure = createAction('SAVE_DRAFT_ORDER_SALE_FAILURE');
export const resetSaveDraftOrderSale = createAction('RESET_SAVE_DRAFT_ORDER_SALE');

export const addDraftOrderSaleRequest = createAction('ADD_DRAFT_ORDER_SALE_REQUEST');
export const addDraftOrderSaleSuccess = createAction('ADD_DRAFT_ORDER_SALE_SUCCESS');
export const addDraftOrderSaleFailure = createAction('ADD_DRAFT_ORDER_SALE_FAILURE');
export const resetAddDraftOrderSale = createAction('RESET_ADD_DRAFT_ORDER_SALE');

export const updateDraftOrderSaleRequest = createAction('UPDATE_DRAFT_ORDER_SALE_REQUEST');
export const updateDraftOrderSaleSuccess = createAction('UPDATE_DRAFT_ORDER_SALE_SUCCESS');
export const updateDraftOrderSaleFailure = createAction('UPDATE_DRAFT_ORDER_SALE_FAILURE');
export const resetUpdateDraftOrderSale = createAction('RESET_UPDATE_DRAFT_ORDER_SALE');

export const updateVatOrderSaleRequest = createAction('UPDATE_VAT_ORDER_SALE_REQUEST');
export const updateVatOrderSaleSuccess = createAction('UPDATE_VAT_ORDER_SALE_SUCCESS');
export const updateVatOrderSaleFailure = createAction('UPDATE_VAT_ORDER_SALE_FAILURE');
export const resetUpdateVatOrderSale = createAction('RESET_UPDATE_CAT_ORDER_SALE');

export const deleteDraftOrderSaleRequest = createAction('DELETE_DRAFT_ORDER_SALE_REQUEST');
export const deleteDraftOrderSaleSuccess = createAction('DELETE_DRAFT_ORDER_SALE_SUCCESS');
export const deleteDraftOrderSaleFailure = createAction('DELETE_DRAFT_ORDER_SALE_FAILURE');
export const resetDeleteDraftOrderSale = createAction('RESET_DELETE_DRAFT_ORDER_SALE');

export const getAllBillsSaleRequest = createAction('GET_ALL_BILLS_SALE_REQUEST');
export const getAllBillsSaleSuccess = createAction('GET_ALL_BILLS_SALE_SUCCESS');
export const getAllBillsSaleFailure = createAction('GET_ALL_BILLS_SALE_FAILURE');
export const resetGetAllBillsSale = createAction('RESET_GET_ALL_BILLS_SALE');

export const getAllCategoriesSaleRequest = createAction('GET_ALL_CATEGORIES_SALE_REQUEST');
export const getAllCategoriesSaleSuccess = createAction('GET_ALL_CATEGORIES_SALE_SUCCESS');
export const getAllCategoriesSaleFailure = createAction('GET_ALL_CATEGORIES_SALE_FAILURE');
export const resetGetAllCategoriesSale = createAction('RESET_GET_ALL_CATEGORIES_SALE');

export const getAllWorkPlacesSaleRequest = createAction('GET_ALL_WORK_PLACES_SALE_REQUEST');
export const getAllWorkPlacesSaleSuccess = createAction('GET_ALL_WORK_PLACES_SALE_SUCCESS');
export const getAllWorkPlacesSaleFailure = createAction('GET_ALL_WORK_PLACES_SALE_FAILURE');
export const resetGetAllWorkPlacesSale = createAction('RESET_GET_ALL_WORK_PLACES_SALE');

export const getAllTablesSaleRequest = createAction('GET_ALL_TABLES_SALE_REQUEST');
export const getAllTablesSaleSuccess = createAction('GET_ALL_TABLES_SALE_SUCCESS');
export const getAllTablesSaleFailure = createAction('GET_ALL_TABLES_SALE_FAILURE');
export const resetGetAllTablesSale = createAction('RESET_GET_ALL_TABLES_SALE');

export const getAllTableGroupsSaleRequest = createAction('GET_ALL_TABLE_GROUPS_SALE_REQUEST');
export const getAllTableGroupsSaleSuccess = createAction('GET_ALL_TABLE_GROUPS_SALE_SUCCESS');
export const getAllTableGroupsSaleFailure = createAction('GET_ALL_TABLE_GROUPS_SALE_FAILURE');
export const resetGetAllTableGroupsSale = createAction('RESET_GET_ALL_TABLE_GROUPS_SALE');

export const createMoveKitchenSaleRequest = createAction('CREATE_MOVE_KITCHEN_SALE_REQUEST');
export const createMoveKitchenSaleSuccess = createAction('CREATE_MOVE_KITCHEN_SALE_SUCCESS');
export const createMoveKitchenSaleFailure = createAction('CREATE_MOVE_KITCHEN_SALE_FAILURE');
export const resetCreateMoveKitchenSale = createAction('RESET_CREATE_MOVE_KITCHEN_SALE');

export const createDishCancelRequest = createAction('CREATE_DISH_CANCEL_REQUEST');
export const createDishCancelSuccess = createAction('CREATE_DISH_CANCEL_SUCCESS');
export const createDishCancelFailure = createAction('CREATE_DISH_CANCEL_FAILURE');
export const resetCreateDishCancel = createAction('RESET_CREATE_DISH_CANCEL');

export const getAllTableProductRequest = createAction('GET_ALL_TABLE_PRODUCT_REQUEST');
export const getAllTableProductSuccess = createAction('GET_ALL_TABLE_PRODUCT_SUCCESS');
export const getAllTableProductFailure = createAction('GET_ALL_TABLE_PRODUCT_FAILURE');
export const resetGetAllTableProduct = createAction('RESET_GET_ALL_TABLE_PRODUCT');

export const resetSaleState = createAction('RESET_SALE_STATE');

export const createTableOrdersSaleRequest = createAction('CREATE_TABLE_ORDERS_SALE_REQUEST');
export const createTableOrdersSaleSuccess = createAction('CREATE_TABLE_ORDERS_SALE_SUCCESS');
export const createTableOrdersSaleFailure = createAction('CREATE_TABLE_ORDERS_SALE_FAILURE');
export const resetCreateTableOrdersSale = createAction('RESET_CREATE_TABLE_ORDERS_SALE');

export const createDishRequest = createAction('CREATE_DISHES_SALE_REQUEST');
export const createDishRequestSuccess = createAction('CREATE_DISHES_SALE_SUCCESS');
export const createDishRequestFailure = createAction('CREATE_DISHES_SALE_FAILURE');
export const resetCreateDishRequest = createAction('RESET_CREATE_DISHES_SALE');
