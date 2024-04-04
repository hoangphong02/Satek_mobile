import { Fragment, memo, useState } from 'react';
import { Offcanvas, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';

import { parseCurrency, translate } from '~/helpers/utils';
import { CustomerSearchInput } from './CustomerSearchInput';
import { ScreenCasualPayment } from './ScreenCasualPayment';

export const SellCasual = memo(
  ({
    handleChangeCustomerFromOrder,
    paymentOrder,
    productsList,
    handleAddProductToOrder,
    handleChangeDiscountFromOrder,
    handleChangePaymentTypeFromOrder,
    handlePaymentOrder,
    handleChangeCustomerPayment,
    handleChangeBillFromOrder,
    handleChangeStaffPayment,
    handleChangeWorkPlacePayment,
  }) => {
    const { getAllCategoriesState, getAllProductsSaleState } = useSelector((store) => store.sale);

    const [viewType, setViewType] = useState('thumbnail');
    const [isShowScreenPayment, setIsShowScreenPayment] = useState(false);
    const [isShowScreenFilterProduct, setIsShowScreenFilterProduct] = useState(false);
    const [filterState, setFilterState] = useState([]);

    const renderProductList = () => {
      if (filterState.length === 0 || filterState.length === getAllCategoriesState?.data?.length) {
        return getAllProductsSaleState?.data || [];
      } else {
        const result = [];
        getAllProductsSaleState?.data?.map((item) => {
          let isPush = false;
          item.categoryIds.map((item2) => {
            if (filterState.includes(item2)) {
              isPush = true;
            }
          });
          if (isPush) result.push(item);
        });
        return result;
      }
    };

    return (
      <>
        <div className="sell-casual-container">
          <div className="payment-header">
            <CustomerSearchInput
              paymentOrder={paymentOrder}
              handleChangeCustomerFromOrder={handleChangeCustomerFromOrder}
            />
            <div className="header-button-actions">
              <OverlayTrigger
                placement="bottom"
                overlay={(
                  <Tooltip id="tooltip-bottom">
                    {translate('sale.sell-casual-tab.btn-filter')}
                  </Tooltip>
                )}
              >
                <i
                  className="iconsminds-filter-2"
                  onClick={() => setIsShowScreenFilterProduct(true)}
                />
              </OverlayTrigger>
              {viewType === 'list' ? (
                <OverlayTrigger
                  placement="bottom"
                  overlay={(
                    <Tooltip id="tooltip-bottom">
                      {translate(
                        'sale.sell-casual-tab.btn-view-mode-thumbnail',
                      )}
                    </Tooltip>
                  )}
                >
                  <i
                    className="simple-icon-picture"
                    onClick={() => setViewType('thumbnail')}
                  />
                </OverlayTrigger>
              ) : (
                <OverlayTrigger
                  placement="bottom"
                  overlay={(
                    <Tooltip id="tooltip-bottom">
                      {translate('sale.sell-casual-tab.btn-view-mode-list')}
                    </Tooltip>
                  )}
                >
                  <i
                    className="simple-icon-list"
                    onClick={() => setViewType('list')}
                  />
                </OverlayTrigger>
              )}
            </div>
          </div>
          <div className="payment-content">
            <div className={`product-list-scroll ${viewType}`}>
              {renderProductList()?.map((item, index) => (
                <Fragment key={index}>
                  {viewType === 'list' ? (
                    <ProductList
                      data={item}
                      handleAddProductToOrder={handleAddProductToOrder}
                    />
                  ) : (
                    <ProductThumbnail
                      data={item}
                      handleAddProductToOrder={handleAddProductToOrder}
                    />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="payment-footer">
            <button type="button" onClick={() => setIsShowScreenPayment(true)}>
              {translate('sale.sell-casual-tab.btn-payment')}
            </button>
          </div>
        </div>

        {isShowScreenPayment ? (
          <ScreenCasualPayment
            show
            handleClose={() => setIsShowScreenPayment(false)}
            paymentOrder={paymentOrder}
            productsList={productsList}
            handleChangeDiscountFromOrder={handleChangeDiscountFromOrder}
            handleChangePaymentTypeFromOrder={handleChangePaymentTypeFromOrder}
            handlePaymentOrder={handlePaymentOrder}
            handleChangeCustomerPayment={handleChangeCustomerPayment}
            handleChangeBillFromOrder={handleChangeBillFromOrder}
            handleChangeStaffPayment={handleChangeStaffPayment}
            handleChangeWorkPlacePayment={handleChangeWorkPlacePayment}
          />
        ) : null}

        {isShowScreenFilterProduct ? (
          <ScreenFilterProduct
            show
            handleClose={() => setIsShowScreenFilterProduct(false)}
            filterState={filterState}
            setFilterState={setFilterState}
            handleClearFilter={() => {
              setFilterState([]);
              setIsShowScreenFilterProduct(false);
            }}
          />
        ) : null}
      </>
    );
  },
);

const ProductThumbnail = memo(({ data, handleAddProductToOrder }) => {
  const {
    profileUser,
  } = useSelector((store) => store.user);

  return (
    <div
      className="product-item-thumbnail"
      onClick={() => handleAddProductToOrder(data)}
    >
      <figure>
        <img src={data?.image} alt="" />
        <span>{parseCurrency(data?.price)}</span>
      </figure>
      <p>
        {data?.name}
        {data?.source ? ' - '.concat(data?.source) : ''} - {data?.units?.number}{' '}
        {data?.unit}
      </p>
      {
        profileUser?.data?.type === 'shop' ? (
          <>
            <p className="mb-0">
              {translate('sale.quantity')}: {data?.warehouses?.data?.length === 0 ? translate('sale.inventory-empty') : null}
            </p>
            {data?.warehouses?.data?.map((item, index) => (
              <p key={index} className="mb-0">
                <span style={index > 0 ? { color: 'transparent' } : {}}>-</span> {item?.warehouse_name}: {item?.number}
              </p>
            ))}
          </>
        ) : (
          <p className="mb-0">
            {translate('sale.quantity')}: {data?.warehouses?.data?.find((item) => item?.warehouse_id === profileUser?.data?.warehouse?.id)?.number || translate('sale.inventory-empty')}
          </p>
        )
      }
    </div>
  );
});

const ProductList = memo(({ data, handleAddProductToOrder }) => {
  const {
    profileUser,
  } = useSelector((store) => store.user);

  return (
    <div
      className="product-item-list"
      onClick={() => handleAddProductToOrder(data)}
    >
      <img src={data?.image} alt="" />
      <div>
        <p>
          {data?.name}
          {data?.source ? ' - '.concat(data?.source) : ''} - {data?.units?.number}{' '}
          {data?.unit}
        </p>
        <p>{parseCurrency(data?.price)}</p>
        {
          profileUser?.data?.type === 'shop' ? (
            <>
              <p className="mb-0">
                {translate('sale.quantity')}: {data?.warehouses?.data?.length === 0 ? translate('sale.inventory-empty') : null}
              </p>
              {data?.warehouses?.data?.map((item, index) => (
                <p key={index} className="mb-0">
                  <span style={index > 0 ? { color: 'transparent' } : {}}>-</span> {item?.warehouse_name}: {item?.number}
                </p>
              ))}
            </>
          ) : (
            <p className="mb-0">
              {translate('sale.quantity')}: {data?.warehouses?.data?.find((item) => item?.warehouse_id === profileUser?.data?.warehouse?.id)?.number || translate('sale.inventory-empty')}
            </p>
          )
        }
      </div>
    </div>
  );
});

const ScreenFilterProduct = memo(
  ({
    show,
    handleClose,
    handleClearFilter,
    filterState,
    setFilterState,
  }) => {
    const { getAllCategoriesState } = useSelector((store) => store.sale);

    const [filterStateActive, setFilterStateActive] = useState(filterState);

    return (
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        backdropClassName="screen-casual-payment-backdrop"
        className="screen-casual-payment-wrapper screen-filter-product-wrapper"
        enforceFocus={false}
      >
        <Offcanvas.Body>
          <div>
            <h3>{translate('sale.screen-filter-product.title')}</h3>
            <div className="section-main">
              <h6>
                {translate('sale.screen-filter-product.sub-title-category')}
              </h6>
              <ul>
                <li
                  className={(filterStateActive.length === 0 || filterStateActive.length === getAllCategoriesState?.data?.length) ? 'active' : ''}
                  onClick={() => setFilterStateActive([])}
                >
                  <span />
                  {translate('sale.screen-filter-product.all')}
                </li>
                {getAllCategoriesState?.data?.map((item, index) => (
                  <li
                    key={index}
                    className={
                      filterStateActive.includes(item.id)
                      || filterStateActive.length === 0
                        ? 'active'
                        : ''
                    }
                    onClick={() => setFilterStateActive((prev) => prev.includes(item.id)
                      ? prev.length > 1
                        ? prev.filter((item2) => item2 !== item.id)
                        : prev
                      : [...prev, item.id])}
                  >
                    <span />
                    {item?.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="section-footer d-flex" style={{ gap: '8px' }}>
              <Button
                style={{ flex: 1 }}
                color="primary"
                className="btn-multiple-state"
                type="button"
                onClick={() => { setFilterState(filterStateActive); handleClose(); }}
              >
                {translate('sale.screen-filter-product.btn-accept')}
              </Button>
              <Button
                style={{ flex: 1 }}
                color="primary"
                outline
                className="btn-multiple-state"
                type="button"
                onClick={handleClearFilter}
              >
                {translate('sale.screen-filter-product.btn-clear')}
              </Button>
              <Button
                style={{ flex: 1 }}
                color="primary"
                outline
                className="btn-multiple-state"
                type="button"
                onClick={handleClose}
              >
                {translate('sale.screen-filter-product.btn-back')}
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    );
  },
);
