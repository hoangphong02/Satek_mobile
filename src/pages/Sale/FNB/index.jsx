import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { NotificationManager } from '~/components/notifications';
import {
  translate,
} from '~/helpers/utils';
import {
  createTableOrdersSaleRequest,
  getAllTableProductRequest,
  getAllTablesSaleRequest,
  getDraftOrdersSaleRequest,
  saveDraftOrderSaleRequest,
  updateDraftOrderSaleRequest,
  createDishRequest,
  resetCreateTableOrdersSale,
} from '~/redux/sale/actions';
import { resetCreateRequestPayment } from '~/redux/order/actions';

import { useDebounce } from '~/helpers/hooks';
import { Realtime } from '~/constants/realtime';
import { Footer, Header, Main } from './components';
import { ModalLoadingCreateOrder } from '../Retail/components';
import { ModalLoading } from './components/Main/components/ModalLoading';

import './SaleFNBPage.scss';

const TABS_LIST_FNB = [
  {
    icon: 'iconsminds-hamburger',
    label: 'sale.fnb.tab-menu',
    key: 'menu',
  },
  {
    icon: '',
    label: 'sale.fnb.tab-cart',
    key: 'cart',
    mobile: true,
  },
  {
    icon: '',
    label: 'sale.fnb.tab-order',
    key: 'order',
    mobile: true,
  },
];

export const SaleFNBPage = () => {
  const {
    isSaveDraftOrderSaleRequest,
    getAllWorkPlacesSaleState,
    isGetDraftOrdersSaleSuccess,
    getDraftOrdersSaleState,
    isUpdateDraftOrderSaleSuccess,
    isUpdateDraftOrderSaleRequest,
    isAddDraftOrderSaleRequest,
    isUpdateVatOrderSaleRequest,
    getAllTableProductsSaleState,
    getAllTablesSaleState,
    isCreateTableOrderSaleSuccess,
    isCreateDishRequestSuccess,
  } = useSelector((store) => store.sale);
  const { isCreateRequestPaymentFailure, isCreateRequestPaymentSuccess } = useSelector((store) => store.order);
  const { isGetAllKitchenSuccess, getAllKitchenState } = useSelector(
    (store) => store.kitchen,
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [groupId, setGroupId] = useState(0);
  const location = useLocation();
  const [productsTableActive, setProductTableActive] = useState([]);
  const [tabActive, setTabActive] = useState(TABS_LIST_FNB[0].key);
  const [ordersList, setOrdersList] = useState({});
  const [isOpenMenuWhenSelectTable, setIsOpenMenuWhenSelectTable] = useState(false);
  const [tableGroupActive, setTableGroupActive] = useState('all');
  const [listKitchen, setListKitchen] = useState([]);
  const [isDraftNewOrder, setIsDraftNewOrder] = useState(false);
  const [isSaveDraftOrder, setIsSaveDraftOrder] = useState(false);
  const [isCreateDraftOrder, setIsCreateDraftOrder] = useState(false);
  const isSaveDraftOrderDebounce = useDebounce(isSaveDraftOrder, 2000);
  const [nameTableActive, setNameTableActive] = useState('');
  const [dataCart, setDataCart] = useState([]);
  const { configState } = useSelector((state) => state.config);
  const urlParams = new URLSearchParams(location.search);
  const shop = urlParams.get('shop');
  const idTable = urlParams.get('idTable');
  const placeId = urlParams.get('placeId');
  // real time
  useEffect(() => {
    if (configState) {
      if (Realtime) {
        Realtime.join(`shop.${shop}.${placeId}`, (e) => {
          console.log('e', e);
        }).on(
          'kitchen-dish.created',
          (e) => {
            console.log('e', e);
            NotificationManager.success(
              translate('sale.fnb.notify.kitchen.fnb.new-dishes-kitchen'),
              translate('common.notice'),
              1500,
              null,
              null,
              '',
            );
          },
        );
      }
    }
    return () => {
      Realtime.off('kitchen-dish.created');
    };
  }, [configState, Realtime, shop, placeId]);

  useEffect(() => {
    if (isCreateRequestPaymentSuccess) {
      dispatch(resetCreateRequestPayment());
      NotificationManager.success(
        translate('sale.send.request.payment-success'),
        translate('common.notice'),
        1500,
        null,
        null,
        '',
      );
    } else if (isCreateRequestPaymentFailure) {
      dispatch(resetCreateRequestPayment());
      NotificationManager.error(
        translate('sale.send.request.payment-failure'),
        translate('common.notice'),
        1500,
        null,
        null,
        '',
      );
    }
  }, [isCreateRequestPaymentSuccess, isCreateRequestPaymentFailure]);

  useEffect(() => {
    if ((shop && placeId)) {
      const payload = {
        shop_id: shop,
        place_id: placeId,
        limit: 1000,
        include: 'requestPayments',
      };
      dispatch(getDraftOrdersSaleRequest(payload));
    }
  }, [shop, placeId]);

  useEffect(() => {
    if (shop > 0) {
      const payload = {
        shop_id: shop,
      };
      dispatch(getAllTablesSaleRequest(payload));
    }
  }, [shop]);

  useEffect(() => {
    if (
      getAllTablesSaleState?.data?.length
      && idTable
      && Number(idTable) % 1 === 0
    ) {
      const group = getAllTablesSaleState?.data?.find(
        (table) => table?.id === idTable,
      )?.group_id;
      setGroupId(group);
    }
  }, [getAllTablesSaleState?.data, idTable]);
  const bringBackInitial = {
    key: idTable ? `${idTable}` : 'bring-back',
    group: groupId !== 0 ? `${groupId}` : 'all',
    products: productsTableActive,
    note: '',
    customer: [],
    notify: false,
  };

  const [tableActive, setTableActive] = useState(bringBackInitial);

  useEffect(() => {
    const productsArr = [];
    if (idTable) {
      getDraftOrdersSaleState?.data
        ?.find(
          (item) => item?.name
            === getAllTablesSaleState?.data?.find(
              (table) => Number(table?.id) === Number(idTable),
            )?.name,
        )
        ?.items?.data?.map((pro) => {
          productsArr.push(pro);
        });
    }
    setProductTableActive(productsArr);
  }, [idTable, getDraftOrdersSaleState, getAllTablesSaleState]);

  // Cập nhật groupId dựa trên getAllTablesSaleState và idTable
  useEffect(() => {
    if (
      getAllTablesSaleState?.data?.length
      && idTable
      && Number(idTable) % 1 === 0
    ) {
      const group = getAllTablesSaleState?.data?.find(
        (table) => table?.id === idTable,
      )?.group_id;
      setGroupId(group);
    }
  }, [getAllTablesSaleState?.data, idTable]);

  useEffect(() => {
    let name = '';
    if (getAllTablesSaleState?.data) {
      name = getAllTablesSaleState?.data?.find(
        (table) => Number(table?.id) === Number(tableActive?.key),
      )?.name;
    }
    setNameTableActive(name);
  }, [getAllTablesSaleState, idTable]);
  useEffect(() => {
    if (isSaveDraftOrderDebounce) {
      setIsCreateDraftOrder(true);
      setIsSaveDraftOrder(false);
    }
  }, [isSaveDraftOrder, isSaveDraftOrderDebounce]);

  useEffect(() => {
    if (isCreateDraftOrder) {
      handleSaveDraftOrder(isDraftNewOrder);
    }
  }, [isCreateDraftOrder]);

  const handleSaveDraftOrder = (isNew) => {
    const payload = {
      type: tableActive.key === 'bring-back' ? 'take-away' : 'table',
      payment: 'cash',
      place_id: getAllWorkPlacesSaleState.data[0].id,
      products: tableActive?.products?.map((item) => {
        const result = {
          id: item.id,
          code: item.code,
          number: item.number,
        };
        if (item.note) {
          result.note = item.note;
        }
        return result;
      }),
    };
    if (tableActive.note) {
      payload.note = tableActive.note;
    }
    if (tableActive.key !== 'bring-back') {
      payload.table_id = tableActive.key;
    }
    if (isNew) {
      dispatch(
        saveDraftOrderSaleRequest({
          type: 'create',
          from: 'fnbs',
          data: payload,
        }),
      );
    } else {
      payload.status = 'draft';
      dispatch(
        saveDraftOrderSaleRequest({
          id: ordersList[tableActive.key]?.id,
          type: 'update',
          from: 'fnbs',
          data: payload,
        }),
      );
    }
    setIsDraftNewOrder(false);
  };
  const handleSelectTable = (tableData) => {
    history.push(`?shop=id&placeId=id&idTable=${tableData.id}`);
    if (isOpenMenuWhenSelectTable) {
      setTabActive(TABS_LIST_FNB[1].key);
    }
    setIsSaveDraftOrder(false);
  };

  console.log('tableActive', tableActive);

  const handleChangeNote = (id, note, tableData) => {
    setOrdersList({
      ...ordersList,
      [id]: Object.keys(ordersList).includes(String(id))
        ? {
          ...ordersList[id],
          note,
          notify: true,
        }
        : {
          group: tableData?.group_id || 'all',
          products: [],
          note,
          customer: [],
          notify: true,
        },
    });
  };

  useEffect(() => {
    if (idTable) {
      const payload = {
        table_id: idTable,
      };
      dispatch(getAllTableProductRequest(payload));
    }
  }, [idTable]);

  useEffect(() => {
    if (isGetAllKitchenSuccess) {
      setListKitchen(getAllKitchenState?.data);
    }
  }, [isGetAllKitchenSuccess]);

  useEffect(() => {
    if (isGetDraftOrdersSaleSuccess) {
      const list = {};
      getDraftOrdersSaleState?.data?.map((item) => {
        list[item?.table?.data?.id] = {
          customer: [],
          group: item?.table?.data?.group_id,
          key: item?.table?.data?.id,
          id: item?.id,
          note: item?.note,
          notify: false,
          products: item?.items?.data?.map((item2) => ({
            code: item2?.code,
            id: item2?.product?.id,
            order_item_id: item2?.id,
            note: item2?.note,
            number: item2?.number,
          })),
          kitchenDishes: item?.kitchenDishes?.data,
        };
      });
      setOrdersList(list);
    }
  }, [isGetDraftOrdersSaleSuccess]);

  // const handleAddProductToOrder = (productItem) => {
  //   if (!tableActive) return;
  //   let products = [];
  //   if (
  //     tableActive?.products?.some(
  //       (item) => item?.product?.id === productItem?.id
  //         && item?.product?.code === productItem?.code,
  //     )
  //   ) {
  //     products = tableActive.products.map((item) => {
  //       const result = {
  //         id: item?.product.id,
  //         code: item?.product?.code,
  //         number:
  //           item?.product?.id === productItem.id
  //           && item?.product?.code === productItem.code
  //             ? item.number + 1
  //             : item.number,
  //       };
  //       return result;
  //     });
  //   } else {
  //     products = tableActive?.products?.map((item) => ({
  //       id: item?.product?.id,
  //       code: item?.product?.code,
  //       number: item?.number,
  //     })) || [];
  //     products.push({
  //       id: productItem.id,
  //       code: productItem.code,
  //       number: 1,
  //     });
  //   }
  //   if (
  //     getDraftOrdersSaleState?.data?.find(
  //       (order) => order.name === nameTableActive,
  //     )
  //   ) {
  //     const payload = {
  //       type: 'table',
  //       products,
  //       place_id: Number(placeId),
  //       payment: 'cash',
  //       table_id: Number(idTable),
  //       shop_id: Number(shop),
  //     };
  //     dispatch(
  //       updateDraftOrderSaleRequest({
  //         id: getDraftOrdersSaleState?.data?.find(
  //           (order) => order.name === nameTableActive,
  //         )?.id,
  //         data: payload,
  //       }),
  //     );
  //     setTableActive({
  //       ...tableActive,
  //       notify: true,
  //     });
  //   } else {
  //     const payload = {
  //       type: 'table',
  //       products: [
  //         {
  //           id: productItem?.id,
  //           code: productItem?.code,
  //           number: 1,
  //         },
  //       ],
  //       place_id: Number(placeId),
  //       payment: 'cash',
  //       table_id: Number(idTable),
  //     };
  //     dispatch(createTableOrdersSaleRequest(payload));
  //     dispatch(
  //       getDraftOrdersSaleRequest({
  //         place_id: placeId,
  //         shop_id: shop,
  //         limit: 1000,
  //         include: 'table, kitchenDishes',
  //       }),
  //     );
  //   }
  // };
  const handleAddProductToOrder = (productItem, numberProduct) => {
    if (!tableActive) return;
    if (dataCart?.some((item) => item?.id === productItem?.id && item?.code === productItem?.code)) {
      const updatedCart = dataCart?.map((item) => ({
        ...item,
        number: item?.id === productItem?.id && item?.code === productItem?.code ? Number(item.number) + Number(numberProduct) : item.number,
      }));
      setDataCart(updatedCart);
    } else {
      setDataCart([...dataCart, { ...productItem, number: numberProduct }]);
    }
    NotificationManager.success(
      translate('sale.add-cart-success'),
      translate('common.notice'),
      1500,
      null,
      null,
      '',
    );
  };

  useEffect(() => {
    if (isCreateTableOrderSaleSuccess) {
      NotificationManager.success(
        translate('sale.create-order-success'),
        translate('common.notice'),
        1500,
        null,
        null,
        '',
      );
    }
    const payload = {
      shop_id: shop,
      place_id: placeId,
      limit: 1000,
      include: 'requestPayments',
    };
    dispatch(getDraftOrdersSaleRequest(payload));
  }, [isCreateTableOrderSaleSuccess]);

  const handleChangeNoteProduct = (productData, note) => {
    let products = [];
    products = tableActive.products.map((item) => {
      const result = {
        id: item?.product.id,
        code: item?.product?.code,
        number: item?.number,
        note:
          item?.id === productData.id && item?.code === productData.code
            ? note
            : item.note || '',
      };
      return result;
    });

    const payload = {
      type: 'table',
      products,
      place_id: Number(placeId),
      payment: 'cash',
      table_id: Number(idTable),
      shop_id: Number(shop),
    };

    dispatch(
      updateDraftOrderSaleRequest({
        id: getDraftOrdersSaleState?.data?.find(
          (order) => order.name === nameTableActive,
        )?.id,
        data: payload,
      }),
    );
  };

  const handleChangeNumberProduct = (productData, type) => {
    const updateProducts = tableActive.products.map((item) => {
      if (type === 'increase') {
        const result = {
          id: item?.product.id,
          code: item?.product?.code,
          number:
            item?.product?.id === productData?.product?.id
            && item?.product?.code === productData?.product?.code
              ? item.number + 1
              : item.number,
        };
        return result;
      } else if (type === 'decrease') {
        if (item?.number > 1) {
          const result = {
            id: item?.product.id,
            code: item?.product?.code,
            number:
              item?.product?.id === productData?.product?.id
              && item?.product?.code === productData?.product?.code
                ? item.number - 1
                : item.number,
          };
          return result;
        } else if (item?.number === 1) {
          if (item?.id === productData?.id) {
            return null;
          } else {
            const result = {
              id: item?.product.id,
              code: item?.product?.code,
              number: item?.number,
            };
            return result;
          }
        }
      } else if (type === 'delete') {
        const result = {
          id: item?.product.id,
          code: item?.product?.code,
          number:
            item?.product?.id === productData?.product?.id
            && item?.product?.code === productData?.product?.code
              ? item.number - 1
              : item.number,
        };
        return result;
      }
    });
    const filteredProducts = updateProducts.filter((item) => item !== null);
    const payload = {
      type: 'table',
      products: filteredProducts,
      place_id: Number(placeId),
      payment: 'cash',
      table_id: Number(idTable),
      shop_id: Number(shop),
    };
    if (type === 'increase') {
      dispatch(
        updateDraftOrderSaleRequest({
          id: getDraftOrdersSaleState?.data?.find(
            (order) => order.name === nameTableActive,
          )?.id,
          data: payload,
        }),
      );
      setTableActive({
        ...tableActive,
        notify: true,
      });
    } else if (type === 'decrease') {
      dispatch(
        updateDraftOrderSaleRequest({
          id: getDraftOrdersSaleState?.data?.find(
            (order) => order.name === nameTableActive,
          )?.id,
          data: payload,
        }),
      );
      setTableActive({
        ...tableActive,
        notify: true,
      });
    } else if (type === 'delete') {
      if (productData?.kitchenDishItems?.data?.length > 0) {
        NotificationManager.error(
          translate('sale.fnb.notify-error'),
          translate('common.notice'),
          2500,
          null,
          null,
          '',
        );
      } else {
        const payloadDelete = {
          type: 'table',
          products: tableActive?.products
            ?.filter((item) => item?.product?.id !== productData?.product?.id)
            .map((item2) => {
              const result = {
                id: item2?.product.id,
                code: item2?.product?.code,
                number: item2?.number,
              };
              return result;
            }),
          place_id: Number(placeId),
          payment: 'cash',
          table_id: Number(idTable),
          shop_id: Number(shop),
        };
        dispatch(
          updateDraftOrderSaleRequest({
            id: getDraftOrdersSaleState?.data?.find(
              (order) => order.name === nameTableActive,
            )?.id,
            data: payloadDelete,
          }),
        );
      }
    }
  };
  const handleChangeNumberProductCart = (productData, type) => {
    const updateProducts = dataCart?.map((item) => {
      if (type === 'increase') {
        const result = {
          ...item,
          number:
            item?.id === productData?.id
            && item?.code === productData?.code
              ? item.number + 1
              : item.number,
        };
        return result;
      } else if (type === 'decrease') {
        if (item?.number > 1) {
          const result = {
            ...item,
            number:
              item?.id === productData?.id
              && item?.code === productData?.code
                ? item.number - 1
                : item.number,
          };
          return result;
        } else if (item?.number === 1) {
          if (item?.id === productData?.id) {
            return null;
          } else {
            const result = {
              ...item,
              number: item?.number,
            };
            return result;
          }
        }
      } else if (type === 'delete') {
        if (item?.id === productData?.id) {
          return null;
        } else {
          const result = {
            item,
          };
          return result;
        }
      }
    });
    const filteredProducts = updateProducts.filter((item) => item !== null);
    setDataCart(filteredProducts);
  };
  // const handleUpdateDraftOrder = () => {
  //   const productCreateOrder = [];
  //   dataCart?.map((item) => {
  //     productCreateOrder.push({
  //       id: item?.id,
  //       code: item?.code,
  //       number: item?.number,
  //     });
  //   });
  //   const arrUpdate = [].concat(
  //     tableActive?.products?.map((item) => ({
  //       id: item?.product.id,
  //       code: item?.product?.code,
  //       number: item?.number,
  //     })),
  //     dataCart?.map((item) => ({
  //       id: item?.id,
  //       code: item?.code,
  //       number: item?.number,
  //     })),
  //   );
  //   const mergedData = new Map();
  //   arrUpdate.forEach((item) => {
  //     const existingItem = mergedData.get(item.id);
  //     if (existingItem) {
  //       mergedData.set(item.id, {
  //         ...existingItem,
  //         number: existingItem.number + item.number,
  //       });
  //     } else {
  //       mergedData.set(item.id, {
  //         ...item,
  //       });
  //     }
  //   });
  //   // Chuyển đổi đối tượng mergedData thành mảng kết quả
  //   const dataMerge = Array.from(mergedData.values());
  //   const payload = {
  //     type: 'table',
  //     products: dataMerge,
  //     place_id: Number(placeId),
  //     payment: 'cash',
  //     table_id: Number(idTable),
  //     shop_id: Number(shop),
  //   };
  //   if (getDraftOrdersSaleState?.data?.find(
  //     (order) => order.name === nameTableActive,
  //   )) {
  //     dispatch(
  //       updateDraftOrderSaleRequest({
  //         id: getDraftOrdersSaleState?.data?.find(
  //           (order) => order.name === nameTableActive,
  //         )?.id,
  //         data: payload,
  //       }),
  //     );
  //     setDataCart([]);
  //   } else {
  //     const payload = {
  //       type: 'table',
  //       products: productCreateOrder,
  //       place_id: Number(placeId),
  //       payment: 'cash',
  //       table_id: Number(idTable),
  //     };
  //     dispatch(createTableOrdersSaleRequest(payload));
  //     setDataCart([]);
  //   }
  //   return new Promise((resolve) => {
  //     // Cập nhật tableActive
  //     setTableActive({
  //       ...tableActive,
  //     });
  //     resolve(); // Đánh dấu rằng đã hoàn tất việc cập nhật tableActive
  //   });
  // };
  const handleUpdateDraftOrder = () => {
    const productCreateOrder = [];
    dataCart?.map((item) => {
      productCreateOrder.push({
        id: item?.id,
        code: item?.code,
        number: item?.number,
      });
    });
    const arrUpdate = [].concat(
      tableActive?.products?.map((item) => ({
        id: item?.product.id,
        code: item?.product?.code,
        number: item?.number,
      })),
      dataCart?.map((item) => ({
        id: item?.id,
        code: item?.code,
        number: item?.number,
      })),
    );
    const mergedData = new Map();
    arrUpdate.forEach((item) => {
      const existingItem = mergedData.get(item.id);
      if (existingItem) {
        mergedData.set(item.id, {
          ...existingItem,
          number: existingItem.number + item.number,
        });
      } else {
        mergedData.set(item.id, {
          ...item,
        });
      }
    });
    const dataMerge = Array.from(mergedData.values());
    const payload = {
      type: 'table',
      products: dataMerge,
      place_id: Number(placeId),
      payment: 'cash',
      table_id: Number(idTable),
      shop_id: Number(shop),
    };
    if (getDraftOrdersSaleState?.data?.find(
      (order) => order.name === nameTableActive,
    )) {
      dispatch(updateDraftOrderSaleRequest({
        id: getDraftOrdersSaleState?.data?.find(
          (order) => order.name === nameTableActive,
        )?.id,
        data: payload,
      }));
      setDataCart([]);
    } else {
      const payload = {
        type: 'table',
        products: productCreateOrder,
        place_id: Number(placeId),
        payment: 'cash',
        table_id: Number(idTable),
      };
      dispatch(createTableOrdersSaleRequest(payload));
      setDataCart([]);
    }
  };

  const handleNotify = () => {
    if (dataCart?.length) {
      // setIsChangeDataTable(true);
      NotificationManager.success(
        translate('sale.fnb.notify-success'),
        translate('common.notice'),
        1500,
        null,
        null,
        '',
      );
    }
  };

  const handleRequestToCashier = async () => {
    handleUpdateDraftOrder();
  };
  useEffect(() => {
    if (isUpdateDraftOrderSaleSuccess) {
      const payload = {
        shop_id: Number(shop),
        order_id: getDraftOrdersSaleState?.data?.find(
          (order) => order.name === nameTableActive,
        )?.id,
        items: tableActive.products?.map((item) => ({
          order_item_id: item?.id,
        })),
        note: 'Yêu cầu gọi món',
      };
      dispatch(createDishRequest(payload));
    }
  }, [isUpdateDraftOrderSaleSuccess, tableActive]);

  useEffect(() => {
    if (isCreateTableOrderSaleSuccess) {
      const payload = {
        shop_id: Number(shop),
        order_id: getDraftOrdersSaleState?.data?.find(
          (order) => order.name === nameTableActive,
        )?.id,
        items: tableActive.products?.map((item) => ({
          order_item_id: item?.id,
        })),
        note: 'Yêu cầu gọi món',
      };
      dispatch(createDishRequest(payload));
      dispatch(resetCreateTableOrdersSale());
    }
  }, [tableActive]);

  useEffect(() => {
    if (isUpdateDraftOrderSaleSuccess) {
      dispatch(
        getDraftOrdersSaleRequest({
          place_id: placeId,
          shop_id: shop,
          limit: 1000,
          include: 'table, kitchenDishes',
        }),
      );
    }
  }, [isUpdateDraftOrderSaleSuccess]);
  useEffect(() => {
    if (isCreateTableOrderSaleSuccess) {
      dispatch(
        getDraftOrdersSaleRequest({
          place_id: placeId,
          shop_id: shop,
          limit: 1000,
          include: 'table, kitchenDishes',
        }),
      );
    }
  }, [isCreateTableOrderSaleSuccess]);

  useEffect(() => {
    if (Number(idTable) % 1 === 0 && productsTableActive) {
      setTableActive({
        key: idTable,
        group: groupId,
        products: productsTableActive,
        note: '',
        customer: [],
        notify: tableActive?.notify,
      });
    }
  }, [groupId, idTable, productsTableActive]);

  console.log('productTableActive', productsTableActive);

  useEffect(() => {
    if (isCreateDishRequestSuccess) {
      NotificationManager.success(
        translate('sale.send.dish.request.payment-success'),
        translate('common.notice'),
        1500,
        null,
        null,
        '',
      );
    }
  }, [isCreateDishRequestSuccess]);

  const handleSeeCart = () => {
    setTabActive('cart');
  };

  const handleRequestPayment = () => {
    setTabActive('order');
  };

  return (
    <>
      <div className="sale-fnb--wrapper">
        <Header
          tabsList={TABS_LIST_FNB}
          tabActive={tabActive}
          setTabActive={setTabActive}
          tableActive={tableActive}
          tableGroupActive={tableGroupActive}
          handleAddProductToOrder={handleAddProductToOrder}
          getAllTablesSaleState={getAllTablesSaleState}
        />
        <Main
          tableGroupActive={tableGroupActive}
          setTableGroupActive={setTableGroupActive}
          tabActive={tabActive}
          tableActive={tableActive}
          handleSelectTable={handleSelectTable}
          ordersList={ordersList}
          handleChangeNote={handleChangeNote}
          isOpenMenuWhenSelectTable={isOpenMenuWhenSelectTable}
          setIsOpenMenuWhenSelectTable={setIsOpenMenuWhenSelectTable}
          handleAddProductToOrder={handleAddProductToOrder}
          handleChangeNoteProduct={handleChangeNoteProduct}
          handleChangeNumberProduct={handleChangeNumberProduct}
          handleNotify={handleNotify}
          handleRequestToCashier={handleRequestToCashier}
          listKitchen={listKitchen}
          handleUpdateDraftOrder={handleUpdateDraftOrder}
          getAllTableProductsSaleState={getAllTableProductsSaleState}
          order_id={
            getDraftOrdersSaleState?.data?.find(
              (order) => order?.name === nameTableActive,
            )?.id
          }
          shopId={shop}
          getDraftOrdersSaleState={getDraftOrdersSaleState}
          dataCart={dataCart}
          handleChangeNumberProductCart={handleChangeNumberProductCart}
          handleSeeCart={handleSeeCart}
          handleRequestPayment={handleRequestPayment}
        />
        <Footer />
      </div>

      {isSaveDraftOrderSaleRequest || isUpdateVatOrderSaleRequest ? (
        <ModalLoadingCreateOrder show />
      ) : null}
      {isUpdateDraftOrderSaleRequest || isAddDraftOrderSaleRequest ? (
        <ModalLoading show />
      ) : null}
    </>
  );
};
