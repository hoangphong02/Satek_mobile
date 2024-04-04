import React, { useEffect, useRef, useState } from 'react';
import { Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Helmet from '~/components/helmet';
import { NotificationManager } from '~/components/notifications';
import { useDebounce, useGetSizeDevice } from '~/helpers/hooks';
import { translate } from '~/helpers/utils';
import {
  createOrderSaleRequest,
  deleteDraftOrderSaleRequest,
  resetCreateOrderSale,
  resetSaveDraftOrderSale,
  saveDraftOrderSaleRequest,
} from '~/redux/sale/actions';
import { useReactToPrint } from 'react-to-print';
import config from '~/configs';
import {
  ColLeft,
  ColRight,
  Footer,
  Header,
  ModalFailure,
  ModalLoadingCreateOrder,
  Print,
} from './components';
import {
  handleCalculateProductPriceWithDiscount,
  handleCalculateTotal,
  handleCalculateTotalWithoutDiscount,
} from './functions';
// import { ModalWorkPlaces } from './components/ModalWorkPlaces';

import './SaleRetailPage.scss';

export const SaleRetailPage = () => {
  // #region : State/Const
  const {
    isCreateOrderSaleRequest,
    isCreateOrderSaleSuccess,
    isCreateOrderSaleFailure,
    createOrderSaleState,
    isSaveDraftOrderSaleSuccess,
    isSaveDraftOrderSaleFailure,
    saveDraftOrderSaleResponse,
    isGetAllProductsSaleSuccess,
    isGetAllProductsSaleFailure,
    getAllProductsSaleState,
    isGetDraftOrdersSaleSuccess,
    isGetDraftOrdersSaleFailure,
    getDraftOrdersSaleState,
    isGetAllWorkPlacesSaleSuccess,
    getAllWorkPlacesSaleState,
  } = useSelector((store) => store.sale);
  const { profileUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const history = useHistory();

  const printRef = useRef();
  const [image, setImage] = useState();
  const [dataOrderPrint, setDataOrderPrint] = useState();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    onBeforeGetContent: async () => {
      const content = `${createOrderSaleState?.data?.code || dataOrderPrint?.data?.code}`;
      const img = `https://img.vietqr.io/image/${profileUser?.data?.shop_info?.config?.bank?.name}-${profileUser?.data?.shop_info?.config?.bank?.number}-qr_only.jpg?amount=${createOrderSaleState?.data?.total}&addInfo=${encodeURIComponent(content)}&accountName=${encodeURIComponent(profileUser?.data?.shop_info?.config?.bank?.account)}`;
      setImage(img);
    },
  });

  const sellTypeInitial = 'sellQuickly';
  const eventKeyInitial = 'tab-1';
  const orderTabItemInitial = eventKeyInitial;
  const productListOrderItemInitial = { key: 'tab-1', items: [] };
  const paymentOrderItemInitial = {
    key: 'tab-1',
    type: 'cash',
    customer: null,
    discount: null,
    paid: -1,
    paidTmp: 0,
    created_at: new Date(),
    orderType: null,
    orderId: null,
    orderCode: null,
    billInfo: null,
    staff: null,
  };
  const noteOrderItemInitial = { key: 'tab-1', value: '' };
  const billInfoInitial = {
    billCode: '',
    doctor: '',
    hospital: '',
    name: '',
    age: '',
    gender: '',
    weight: '',
    id_card: '',
    id_bhyt: '',
    address: '',
    phone: '',
    note: '',
  };

  const [isSetupOrderPage, setIsSetupOrderPage] = useState(true);
  const [isShowModalWorkPlaces, setIsShowModalWorkPlaces] = useState(false);
  const [workPlaceActive, setWorkPlaceActive] = useState(null);
  const [isCreateDraftOrder, setIsCreateDraftOrder] = useState(false);
  const [isSaveDraftOrder, setIsSaveDraftOrder] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isDraftNewOrder, setIsDraftNewOrder] = useState(false);
  const [isShowModalFailure, setIsShowModalFailure] = useState(false);
  const [sellType, setSellType] = useState(sellTypeInitial);
  const [eventKey, setEventKey] = useState(eventKeyInitial);
  const [orderTab, setOrderTab] = useState([]);
  const [productListOrder, setProductListOrder] = useState([]);
  const [paymentOrder, setPaymentOrder] = useState([]);
  const [noteOrder, setNoteOrder] = useState([]);
  const [dataPaid, setDataPaid] = useState();
  const { width } = useGetSizeDevice();
  const isSaveDraftOrderDebounce = useDebounce(isSaveDraftOrder, 2000);
  // #endregion

  // #region : Handle initialize
  useEffect(() => {
    if (profileUser?.data?.shop_info) {
      if (profileUser?.data?.shop_info?.type !== 'pharmacy' && profileUser?.data?.shop_info?.type !== 'other') {
        if (profileUser?.data?.shop_info?.type === 'table') {
          history.push(config.routesSale.fnb);
        } else {
          history.push(config.routesPersonal.homepage);
        }
      }
    }
  }, [profileUser]);

  useEffect(() => {
    if (
      isSetupOrderPage
      && isGetAllProductsSaleSuccess
      && isGetDraftOrdersSaleSuccess
    ) {
      const draftOrdersList = getDraftOrdersSaleState?.data || [];
      const orderTabTmp = [];
      const productListOrderTmp = [];
      const paymentOrderTmp = [];
      const noteOrderTmp = [];
      if (draftOrdersList.length > 0) {
        draftOrdersList.map((orderItem, indexOrderItem) => {
          const tabKey = `tab-${indexOrderItem + 1}`;
          orderTabTmp.push(tabKey);
          productListOrderTmp.push({
            ...productListOrderItemInitial,
            key: tabKey,
            code: orderItem?.code,
            items:
              orderItem?.items?.data?.length > 0
              && getAllProductsSaleState?.data?.length > 0
                ? orderItem.items.data
                  .filter((productItem) => getAllProductsSaleState.data
                    .map((product) => String(product.id)
                      .concat('-')
                      .concat(product.code)
                      .concat('-')
                      .concat(product.barcode))
                    .includes(
                      String(productItem.product?.id)
                        .concat('-')
                        .concat(productItem.code)
                        .concat('-')
                        .concat(productItem.barcode),
                    ))
                  .filter((productItem) => productItem.number > 0)
                  .map((productItem) => {
                    const productChecked = getAllProductsSaleState.data?.find(
                      (product) => String(product.id)
                        .concat('-')
                        .concat(product.code)
                        .concat('-')
                        .concat(product.barcode)
                          === String(productItem.product?.id)
                            .concat('-')
                            .concat(productItem.code)
                            .concat('-')
                            .concat(productItem.barcode),
                    );

                    return {
                      ...productChecked,
                      customId: `${productChecked.code}-${productChecked.barcode}-${productChecked.source}-${productChecked.unit}`,
                      note: productItem.note || '',
                      quantity: productItem.number,
                      discount: null,
                    };
                  })
                : [],
          });
          paymentOrderTmp.push({
            ...paymentOrderItemInitial,
            key: tabKey,
            type: orderItem?.payment || 'cash',
            paidTmp: orderItem?.money || 0,
            created_at: orderItem?.created_at
              ? new Date(orderItem.created_at)
              : new Date(),
            orderType: 'draft',
            orderId: orderItem.id,
            orderCode: orderItem.code,
          });
          noteOrderTmp.push({
            ...noteOrderItemInitial,
            key: tabKey,
            value: orderItem?.note || '',
          });
        });
      } else {
        if (profileUser?.data?.type === 'shop') {
          setIsShowModalWorkPlaces(true);
        } else {
          setIsCreateDraftOrder(true);
        }
        orderTabTmp.push(orderTabItemInitial);
        productListOrderTmp.push(productListOrderItemInitial);
        paymentOrderTmp.push(paymentOrderItemInitial);
        noteOrderTmp.push(noteOrderItemInitial);
      }
      setOrderTab(orderTabTmp);
      setProductListOrder(productListOrderTmp);
      setPaymentOrder(paymentOrderTmp);
      setNoteOrder(noteOrderTmp);
      setIsSetupOrderPage(false);
    }
  }, [isGetAllProductsSaleSuccess, isGetDraftOrdersSaleSuccess]);

  useEffect(() => {
    if (isGetAllWorkPlacesSaleSuccess && isShowModalWorkPlaces) {
      if (getAllWorkPlacesSaleState?.data?.length > 0) {
        setWorkPlaceActive({ value: getAllWorkPlacesSaleState.data[0].id });
      } else {
        setIsShowModalFailure(true);
      }
      setIsShowModalWorkPlaces(false);
    }
  }, [isGetAllWorkPlacesSaleSuccess, isShowModalWorkPlaces]);

  useEffect(() => {
    if (workPlaceActive) {
      setIsCreateDraftOrder(true);
    }
  }, [workPlaceActive]);

  useEffect(() => {
    if (isCreateDraftOrder) {
      handleSaveDraftOrder(isDraftNewOrder);
    }
  }, [isCreateDraftOrder]);

  useEffect(() => {
    if (isCreateDraftOrder && isSaveDraftOrderSaleSuccess) {
      setPaymentOrder(
        paymentOrder.map((item1) => item1.key === eventKey
          ? {
            ...item1,
            orderType: 'draft',
            orderCode: saveDraftOrderSaleResponse.data.code,
            orderId: saveDraftOrderSaleResponse.data.id,
            place_id: saveDraftOrderSaleResponse.data.place_id,
          }
          : item1),
      );
      dispatch(resetSaveDraftOrderSale());
      setIsCreateDraftOrder(false);
    }
  }, [isSaveDraftOrderSaleSuccess]);

  useEffect(() => {
    if (isSaveDraftOrderSaleFailure && isCreateDraftOrder) {
      setIsShowModalFailure(true);
      setIsCreateDraftOrder(false);
    }
    if (isGetAllProductsSaleFailure || isGetDraftOrdersSaleFailure) {
      setIsShowModalFailure(true);
    }
  }, [
    isSaveDraftOrderSaleFailure,
    isGetAllProductsSaleFailure,
    isGetDraftOrdersSaleFailure,
  ]);
  // #endregion

  // #region : Handle action order
  const handleAddOrderTab = () => {
    const newOrderTabName = orderTab.length > 0
      ? `tab-${
        parseInt(
          orderTab[orderTab.length - 1].split('-')[
            orderTab[orderTab.length - 1].split('-').length - 1
          ],
        ) + 1
      }`
      : 'tab-1';
    const orderTabTmp = [...orderTab, newOrderTabName];
    setEventKey(orderTabTmp[orderTabTmp.length - 1]);
    setOrderTab(orderTabTmp);
    setProductListOrder([
      ...productListOrder,
      { ...productListOrderItemInitial, key: newOrderTabName },
    ]);
    setPaymentOrder([
      ...paymentOrder,
      { ...paymentOrderItemInitial, key: newOrderTabName },
    ]);
    setNoteOrder([
      ...noteOrder,
      { ...noteOrderItemInitial, key: newOrderTabName },
    ]);
    if (profileUser?.data?.type === 'shop') {
      setIsShowModalWorkPlaces(true);
    } else {
      // setIsCreateDraftOrder(true);
    }
  };

  const handleRemoveOrderTab = (keyItem, type = 'draft') => {
    const paymentOrderActive = paymentOrder.find(
      (item) => item.key === keyItem,
    );
    if (
      paymentOrderActive.orderType !== null
      && paymentOrderActive.orderId !== null
      && type === 'draft'
    ) {
      dispatch(deleteDraftOrderSaleRequest(paymentOrderActive.orderId));
    }
    setOrderTab(orderTab.filter((item) => item !== keyItem));
    setProductListOrder(
      productListOrder.filter((item) => item.key !== keyItem),
    );
    setPaymentOrder(paymentOrder.filter((item) => item.key !== keyItem));
    setNoteOrder(noteOrder.filter((item) => item.key !== keyItem));
  };
  // #endregion

  // #region : Handle action product from order
  const handleAddProductToOrder = (productItem) => {
    if (!orderTab.find((item) => item === eventKey)) return;
    if (profileUser?.data?.type !== 'shop' && !(productItem?.warehouses?.data?.find((item) => item.warehouse_id === profileUser?.data?.warehouse?.id)?.number > 0)) return;
    if (profileUser?.data?.type === 'shop' && productItem?.warehouses?.data?.length === 0) return;
    const productListOrderTmp = productListOrder.map((item1) => item1.key === eventKey
      ? {
        ...item1,
        items: item1.items.find(
          (item2) => item2.customId
                === `${productItem.code}-${productItem.barcode}-${productItem.source}-${productItem.unit}`,
        )
          ? item1.items.map((item2) => item2.customId
                  === `${productItem.code}-${productItem.barcode}-${productItem.source}-${productItem.unit}`
            ? { ...item2, quantity: profileUser?.data?.type === 'shop' ? item2.quantity + 1 : (item2.quantity + 1 > item2.warehouses.data.find((item3) => item3.warehouse_id === profileUser.data.warehouse.id)?.number ? item2.quantity : item2.quantity + 1) }
            : item2)
          : [
            ...item1.items,
            {
              ...productItem,
              customId: `${productItem.code}-${productItem.barcode}-${productItem.source}-${productItem.unit}`,
              note: '',
              quantity: 1,
              discount: null,
            },
          ],
      }
      : item1);
    const productsListActive = productListOrderTmp.find((item) => item.key === eventKey)?.items || [];
    const paymentOrderActive = paymentOrder.find(
      (item) => item.key === eventKey,
    );
    handleChangeCustomerPayment(
      handleCalculateTotal(productsListActive, paymentOrderActive),
    );
    setProductListOrder(productListOrderTmp);
    setIsSaveDraftOrder(true);
  };

  const handleChangeQuantityProductFromOrder = (
    productItem,
    quantity,
    type,
  ) => {
    if (!orderTab.find((item) => item === eventKey)) return;
    const productListOrderTmp = productListOrder.map((item1) => item1.key === eventKey
      ? {
        ...item1,
        items: item1.items.map((item2) => item2.customId === productItem.customId
          ? {
            ...item2,
            quantity:
                      type === 'increase'
                        ? item2.quantity + quantity
                        : type === 'decrease'
                          ? item2.quantity - quantity
                          : quantity,
          }
          : item2),
      }
      : item1);
    const productsListActive = productListOrderTmp.find((item) => item.key === eventKey)?.items || [];
    const paymentOrderActive = paymentOrder.find(
      (item) => item.key === eventKey,
    );
    const totalOrderWithoutDiscount = handleCalculateTotalWithoutDiscount(productsListActive);
    if (
      paymentOrderActive?.discount
      && totalOrderWithoutDiscount < paymentOrderActive.discount?.condition
    ) {
      handleChangeDiscountFromOrder(null, 'delete');
    }
    handleChangeCustomerPayment(
      handleCalculateTotal(productsListActive, paymentOrderActive),
    );
    setProductListOrder(productListOrderTmp);
    setIsSaveDraftOrder(true);
  };

  const handleChangeNoteProductFromOrder = (productItem, note) => {
    if (!orderTab.find((item) => item === eventKey)) return;
    const productListOrderTmp = productListOrder.map((item1) => item1.key === eventKey
      ? {
        ...item1,
        items: item1.items.map((item2) => item2.customId === productItem.customId
          ? { ...item2, note }
          : item2),
      }
      : item1);
    setProductListOrder(productListOrderTmp);
    setIsSaveDraftOrder(true);
  };

  const handleRemoveProductFromOrder = (productItem) => {
    if (!orderTab.find((item) => item === eventKey)) return;
    const productListOrderTmp = productListOrder.map((item1) => item1.key === eventKey
      ? {
        ...item1,
        items: item1.items.filter(
          (item2) => item2.customId !== productItem.customId,
        ),
      }
      : item1);
    const productsListActive = productListOrderTmp.find((item) => item.key === eventKey)?.items || [];
    const paymentOrderActive = paymentOrder.find(
      (item) => item.key === eventKey,
    );
    const totalOrderWithoutDiscount = handleCalculateTotalWithoutDiscount(productsListActive);
    if (
      paymentOrderActive?.discount
      && totalOrderWithoutDiscount < paymentOrderActive.discount?.condition
    ) {
      handleChangeDiscountFromOrder(null, 'delete');
    }
    handleChangeCustomerPayment(
      handleCalculateTotal(productsListActive, paymentOrderActive),
    );
    setProductListOrder(productListOrderTmp);
    setIsSaveDraftOrder(true);
  };

  const handleSelectBillInfo = (data) => {
    if (!orderTab.find((item) => item === eventKey)) return;
    const productListOrderTmp = productListOrder.map((item1) => item1.key === eventKey
      ? {
        ...item1,
        items:
              data?.order?.data?.items?.data?.length > 0
                ? data.order.data.items.data
                  .map((item2) => {
                    const customId1 = String(item2?.product?.id)
                      .concat('-')
                      .concat(item2.code)
                      .concat('-')
                      .concat(item2.barcode);
                    const dataChecked = getAllProductsSaleState?.data?.find(
                      (item3) => {
                        const customId2 = String(item3?.id)
                          .concat('-')
                          .concat(item3.code)
                          .concat('-')
                          .concat(item3.barcode);
                        return customId1 === customId2;
                      },
                    );
                    return dataChecked
                      ? {
                        ...dataChecked,
                        customId: item2.code
                          .concat('-')
                          .concat(item2.barcode)
                          .concat('-')
                          .concat(item2.product.source)
                          .concat('-')
                          .concat(item2.unit),
                        note: item2.note || '',
                        quantity: item2.number || 1,
                        discount: item2.discount || null,
                      }
                      : null;
                  })
                  .filter((item2) => item2 !== null)
                : [],
      }
      : item1);
    const productsListActive = productListOrderTmp.find((item) => item.key === eventKey)?.items || [];
    const paymentOrderActive = paymentOrder.find(
      (item) => item.key === eventKey,
    );
    handleChangeCustomerPayment(
      handleCalculateTotal(productsListActive, paymentOrderActive),
    );
    setProductListOrder(productListOrderTmp);
    setIsSaveDraftOrder(true);
  };

  const handleChangeDiscountFromProductItem = (value, index) => {
    if (!orderTab.find((item) => item === eventKey)) return;
    const productListOrderTmp = productListOrder.map((item1) => item1.key === eventKey
      ? {
        ...item1,
        items: item1.items.map((item2, index2) => index === index2
          ? {
            ...item2,
            discount: value,
          }
          : item2),
      }
      : item1);
    const productsListActive = productListOrderTmp.find((item) => item.key === eventKey)?.items || [];
    const paymentOrderActive = paymentOrder.find(
      (item) => item.key === eventKey,
    );
    handleChangeCustomerPayment(
      handleCalculateTotal(productsListActive, paymentOrderActive),
    );
    setProductListOrder(productListOrderTmp);
  };
  // #endregion

  // #region : Handle action note order
  const handleChangeNoteOrder = (note) => {
    if (!orderTab.find((item) => item === eventKey)) return;
    const noteOrderTmp = noteOrder.map((item1) => item1.key === eventKey
      ? {
        ...item1,
        value: note,
      }
      : item1);
    setNoteOrder(noteOrderTmp);
    setIsSaveDraftOrder(true);
  };
  // #endregion

  // #region : Handle action customer from order
  const handleChangeCustomerFromOrder = (customer, type = 'create') => {
    if (!orderTab.find((item) => item === eventKey)) return;
    setPaymentOrder(
      paymentOrder.map((item1) => item1.key === eventKey
        ? {
          ...item1,
          customer:
                type === 'create'
                  ? {
                    ...customer,
                    name: customer.name,
                    id: customer.id,
                    phone: customer.phone,
                  }
                  : null,
        }
        : item1),
    );
  };

  const handleChangeCustomerPayment = (value, paymentOrderTmp) => {
    if (!orderTab.find((item) => item === eventKey)) return;
    setPaymentOrder(
      paymentOrderTmp
        ? paymentOrderTmp?.map((item1) => item1.key === eventKey
          ? {
            ...item1,
            paidTmp: parseInt(value) || 0,
          }
          : item1)
        : paymentOrder?.map((item1) => item1.key === eventKey
          ? {
            ...item1,
            paidTmp: parseInt(value) || 0,
          }
          : item1),
    );
  };
  // #endregion

  // #region : Handle action payment discount
  const handleChangeDiscountFromOrder = (value, type = 'add') => {
    if (!orderTab.find((item) => item === eventKey)) return;
    const paymentOrderTmp = paymentOrder.map((item1) => item1.key === eventKey
      ? {
        ...item1,
        discount: type === 'add' ? value : null,
      }
      : item1);
    const productsListActive = productListOrder.find((item) => item.key === eventKey)?.items || [];
    const paymentOrderActive = paymentOrderTmp.find(
      (item) => item.key === eventKey,
    );
    handleChangeCustomerPayment(
      handleCalculateTotal(productsListActive, paymentOrderActive),
      paymentOrderTmp,
    );
  };
  // #endregion

  // #region : Handle action payment staff
  const handleChangeStaffPayment = (value, type = 'add') => {
    if (!orderTab.find((item) => item === eventKey)) return;
    const paymentOrderTmp = paymentOrder.map((item1) => item1.key === eventKey
      ? {
        ...item1,
        staff: type === 'add' ? value : null,
      }
      : item1);
    setPaymentOrder(paymentOrderTmp);
  };
  // #endregion

  // #region : Handle action payment place
  const handleChangeWorkPlacePayment = (value) => {
    if (!orderTab.find((item) => item === eventKey)) return;
    const paymentOrderTmp = paymentOrder.map((item1) => item1.key === eventKey
      ? {
        ...item1,
        place_id: value.id,
      }
      : item1);
    setPaymentOrder(paymentOrderTmp);
  };
  // #endregion

  // #region : Handle action payment type
  const handleChangePaymentTypeFromOrder = (value) => {
    if (!orderTab.find((item) => item === eventKey)) return;
    setPaymentOrder(
      paymentOrder.map((item1) => item1.key === eventKey
        ? {
          ...item1,
          type: value,
        }
        : item1),
    );
    setIsSaveDraftOrder(true);
  };
  // #endregion

  // #region : Handle action bill
  const handleChangeBillFromOrder = (value, type = 'select') => {
    if (!orderTab.find((item) => item === eventKey)) return;
    setPaymentOrder(
      paymentOrder.map((item1) => item1.key === eventKey
        ? {
          ...item1,
          billInfo:
                type === 'select'
                  ? value === true
                    ? billInfoInitial
                    : null
                  : value,
        }
        : item1),
    );
    setIsSaveDraftOrder(true);
  };
  // #endregion

  // #region : Handle payment order
  const handleSaveDraftOrder = (isNew) => {
    let payload;
    if (isNew) {
      payload = {
        type: 'create',
        data: {
          payment: 'cash',
          products: [],
          place_id: 1,
          status: 'draft',
        },
      };
    } else {
      const productListOrderActive = productListOrder.find(
        (item) => item.key === eventKey,
      );
      const paymentOrderActive = paymentOrder.find(
        (item) => item.key === eventKey,
      );
      const noteOrderActive = noteOrder.find((item) => item.key === eventKey);
      if (!(productListOrderActive && paymentOrderActive && noteOrderActive)) { return; }
      const data = {
        payment: paymentOrderActive.type,
        products: productListOrderActive.items.map((item) => {
          const result = {
            id: item.id,
            code: item.code,
            number: item.quantity,
          };
          if (item.note) {
            result.note = item.note;
          }
          return result;
        }),
      };
      if (noteOrderActive.value) {
        data.note = noteOrderActive.value;
      }
      if (workPlaceActive) {
        data.place_id = workPlaceActive.value;
        // setWorkPlaceActive(null);
      }
      payload = {
        data,
      };
      if (
        paymentOrderActive.orderType === null
        && paymentOrderActive.orderId === null
      ) {
        payload.type = 'create';
      } else {
        payload.type = 'update';
        payload.id = paymentOrderActive.orderId;
      }
    }
    dispatch(saveDraftOrderSaleRequest(payload));
    setIsDraftNewOrder(false);
  };

  useEffect(() => {
    if (isSaveDraftOrderDebounce) {
      setIsCreateDraftOrder(true);
      setIsSaveDraftOrder(false);
    }
  }, [isSaveDraftOrder, isSaveDraftOrderDebounce]);

  const handlePaymentOrder = () => {
    const productListOrderActive = productListOrder.find(
      (item) => item.key === eventKey,
    );
    const paymentOrderActive = paymentOrder.find(
      (item) => item.key === eventKey,
    );
    setDataPaid({
      customer: paymentOrderActive?.paidTmp,
      return: paymentOrderActive.paidTmp - handleCalculateTotal(productListOrderActive.items, paymentOrder),
    });
    // if (paymentOrderActive.customer === null) {
    //   NotificationManager.error(
    //     <p
    //       // eslint-disable-next-line react/no-danger
    //       dangerouslySetInnerHTML={{
    //         __html: translate('sale.failure.description.missing-customer'),
    //       }}
    //     />,
    //     translate('sale.failure.title.missing-customer'),
    //     1500,
    //     null,
    //     null,
    //     '',
    //   );
    //   return;
    // }
    if (
      paymentOrderActive.billInfo !== null
      && paymentOrderActive.billInfo.billCode.trim().length === 0
    ) {
      NotificationManager.error(
        <p
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: translate('sale.failure.description.missing-bill-code'),
          }}
        />,
        translate('common.notice'),
        1500,
        null,
        null,
        '',
      );
      return;
    }
    const noteOrderActive = noteOrder.find((item) => item.key === eventKey);
    const payload = {
      payment: paymentOrderActive.type,
      products: productListOrderActive.items.map((item) => {
        const result = {
          id: item.id,
          code: item.code,
          number: parseInt(item.quantity),
        };
        if (item.discount) {
          result.discount = item.discount.id;
        }
        if (item.note) {
          result.note = item.note;
        }
        return result;
      }),
      status: 'paid',
    };
    if (paymentOrderActive.billInfo !== null) {
      payload.info = {
        type: 'bill',
        data: paymentOrderActive.billInfo,
      };
    }
    if (noteOrderActive.value) {
      payload.note = noteOrderActive.value;
    }
    if (paymentOrderActive.discount) {
      payload.discount = paymentOrderActive.discount.id;
    }
    if (paymentOrderActive.paid !== -1) {
      payload.paid = paymentOrderActive.paid;
    }
    if (paymentOrderActive.customer) {
      payload.name = paymentOrderActive.customer?.name;
      payload.customer_id = paymentOrderActive.customer.id;
      if (paymentOrderActive.customer.phone) {
        payload.phone = paymentOrderActive.customer.phone;
      }
    }
    if (paymentOrderActive.staff !== null) {
      payload.staff_id = paymentOrderActive.staff.id;
    }
    if (profileUser?.data?.type === 'shop') {
      payload.place_id = paymentOrderActive.place_id;
    }
    dispatch(
      createOrderSaleRequest({ id: paymentOrderActive.orderId, data: payload }),
    );
  };

  const [isCreateDraft, setIsCreateDraft] = useState(false);

  useEffect(() => {
    if (isCreateDraft && orderTab.length === 0) {
      handleAddOrderTab();
      setIsCreateDraft(false);
    }
  }, [isCreateDraft]);
  useEffect(() => {
    if (isCreateOrderSaleSuccess) {
      if (width > 787) {
        handlePrint();
      }
      handleRemoveOrderTab(eventKey, 'create');
      setIsCreateDraft(true);
      setIsDraftNewOrder(true);

      NotificationManager.success(
        translate('sale.create-order-success'),
        translate('common.notice'),
        1500,
        null,
        null,
        '',
      );
      dispatch(resetCreateOrderSale());
    }
  }, [isCreateOrderSaleSuccess]);

  useEffect(() => {
    if (isCreateOrderSaleFailure) {
      NotificationManager.error(
        translate('sale.create-order-failure'),
        translate('common.notice'),
        1500,
        null,
        null,
        '',
      );
      dispatch(resetCreateOrderSale());
    }
  }, [isCreateOrderSaleFailure]);
  // #endregion

  // #region : Handle print tmp
  const handlePrintTmp = () => {
    const dataTmp = productListOrder.find((item) => item.key === eventKey);
    const orderTmp = getDraftOrdersSaleState?.data?.find((item) => item.code === dataTmp?.code);
    const paymentTmp = paymentOrder.find((item) => item.key === eventKey);
    const totalTmp = dataTmp?.items?.reduce((acc, item) => acc + handleCalculateProductPriceWithDiscount(item.price * item.quantity, item.discount), 0);
    const payload = {
      data: {
        code: orderTmp?.code,
        items: {
          data: dataTmp?.items?.map((item) => ({
            ...item,
            total: item.quantity * item.price,
            number: item.quantity,
            priceDiscount: handleCalculateProductPriceWithDiscount(item.price * item.quantity, item.discount),
          })),
        },
        payment: 'cash',
        created_at: new Date(),
        name: paymentOrder.find((item) => item.key === eventKey)?.customer?.name || 'Khách vãn lai',
        total: totalTmp,
        total2: handleCalculateTotal(dataTmp?.items, paymentTmp),
        discount: paymentTmp,
        discountTmp: handleCalculateTotal(dataTmp?.items, paymentTmp) - totalTmp,
      },
    };
    setDataOrderPrint(payload);
    handlePrint();
  };
  // #endregion

  return (
    <Helmet title={translate('sale.helmet')}>
      <Tab.Container activeKey={eventKey} onSelect={(e) => setEventKey(e)}>
        <Header
          orderTab={orderTab}
          handleAddOrderTab={handleAddOrderTab}
          handleRemoveOrderTab={handleRemoveOrderTab}
          handleAddProductToOrder={handleAddProductToOrder}
          handleSelectBillInfo={handleSelectBillInfo}
          handlePrintTmp={handlePrintTmp}
        />
        <main className={`sale-main ${sellType}`}>
          <Tab.Content>
            {orderTab.map((item, index) => item === eventKey ? (
              <Tab.Pane key={index} eventKey={item}>
                <ColLeft
                  sellType={sellType}
                  productsList={
                      productListOrder.find((item) => item.key === eventKey)
                        ?.items || []
                    }
                  noteOrderData={
                      noteOrder.find((item) => item.key === eventKey)?.value
                      || ''
                    }
                  handleChangeQuantityProductFromOrder={
                      handleChangeQuantityProductFromOrder
                    }
                  handleRemoveProductFromOrder={handleRemoveProductFromOrder}
                  handleChangeNoteProductFromOrder={
                      handleChangeNoteProductFromOrder
                    }
                  handleChangeDiscountFromProductItem={handleChangeDiscountFromProductItem}
                  handleChangeNoteOrder={handleChangeNoteOrder}
                />
                <ColRight
                  sellType={sellType}
                  handleChangeCustomerFromOrder={
                      handleChangeCustomerFromOrder
                    }
                  handleAddProductToOrder={handleAddProductToOrder}
                  handleChangeDiscountFromOrder={
                      handleChangeDiscountFromOrder
                    }
                  handleChangePaymentTypeFromOrder={
                      handleChangePaymentTypeFromOrder
                    }
                  paymentOrder={paymentOrder.find(
                    (item) => item.key === eventKey,
                  )}
                  productsList={
                      productListOrder.find((item) => item.key === eventKey)
                        ?.items || []
                    }
                  handlePaymentOrder={handlePaymentOrder}
                  handleChangeCustomerPayment={handleChangeCustomerPayment}
                  handleChangeBillFromOrder={handleChangeBillFromOrder}
                  handleChangeStaffPayment={handleChangeStaffPayment}
                  handleChangeWorkPlacePayment={handleChangeWorkPlacePayment}
                />
              </Tab.Pane>
            ) : null)}
          </Tab.Content>
        </main>
        <Footer
          sellType={sellType}
          setSellType={setSellType}
          handleSelectBillInfo={handleSelectBillInfo}
          handleAddProductToOrder={handleAddProductToOrder}
          paymentOrder={paymentOrder.find((item) => item.key === eventKey)}
          productsList={
            productListOrder.find((item) => item.key === eventKey)?.items || []
          }
          handleChangeDiscountFromOrder={handleChangeDiscountFromOrder}
          handleChangePaymentTypeFromOrder={handleChangePaymentTypeFromOrder}
          handlePaymentOrder={handlePaymentOrder}
          handleChangeCustomerPayment={handleChangeCustomerPayment}
          handleChangeBillFromOrder={handleChangeBillFromOrder}
          handleChangeStaffPayment={handleChangeStaffPayment}
        />
      </Tab.Container>

      {isSetupOrderPage || isCreateDraftOrder || isCreateOrderSaleRequest ? (
        <ModalLoadingCreateOrder show />
      ) : null}

      {isShowModalFailure ? <ModalFailure /> : null}

      {/* {isShowModalWorkPlaces ? <ModalWorkPlaces setWorkPlaceActive={setWorkPlaceActive} setIsShowModalWorkPlaces={setIsShowModalWorkPlaces} /> : null} */}

      {
        image && (
          <div className="d-none">
            <Print
              ref={printRef}
              dataOrder={createOrderSaleState?.data?.id ? createOrderSaleState : dataOrderPrint}
              dataCustomer={profileUser}
              image={image}
              isTmp={!createOrderSaleState?.data?.total}
              dataPaid={dataPaid}
            />
          </div>
        )
      }

    </Helmet>
  );
};

// const RenderBarcode = React.forwardRef((props, ref) => {
//   const { data } = props;
//   React.useEffect(() => {
//     if (data && ref.current) {
//       JsBarcode(ref.current, data);
//     }
//   }, [data, ref]);
//   return (
//     <div>
//       <svg ref={ref} />
//     </div>
//   );
// });
