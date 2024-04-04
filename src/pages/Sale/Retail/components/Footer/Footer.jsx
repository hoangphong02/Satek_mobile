import { memo, useEffect, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { translate } from '~/helpers/utils';
import { useSelector } from 'react-redux';
import { ScreenCasualPayment } from '../Main/ScreenCasualPayment';
import { SearchProductSection } from '../SearchProductSection';

export const Footer = memo(
  ({
    sellType,
    setSellType,
    handleSelectBillInfo,
    handleAddProductToOrder,
    paymentOrder,
    productsList,
    handleChangeDiscountFromOrder,
    handleChangePaymentTypeFromOrder,
    handlePaymentOrder,
    handleChangeCustomerPayment,
    handleChangeBillFromOrder,
    handleChangeStaffPayment,
  }) => {
    const {
      isCreateOrderSaleSuccess,
    } = useSelector((store) => store.sale);
    const [isShowPaymentScreen, setIsShowPaymentScreen] = useState(false);
    useEffect(() => {
      if (isCreateOrderSaleSuccess) {
        setIsShowPaymentScreen(false);
      }
    }, [isCreateOrderSaleSuccess]);
    return (
      <>
        <footer className="sale-footer">
          <div className="section-search-product--mobile">
            <SearchProductSection
              handleSelectBillInfo={handleSelectBillInfo}
              handleAddProductToOrder={handleAddProductToOrder}
            />
          </div>
          <ul className="footer-nav">
            <li
              className={sellType === 'sellQuickly' ? 'active' : ''}
              onClick={() => setSellType('sellQuickly')}
            >
              <i className="iconsminds-flash-2" />{' '}
              <span>{translate('sale.footer.tab.sell-quickly')}</span>
            </li>
            <li
              className={sellType === 'sellCasual' ? 'active' : ''}
              onClick={() => setSellType('sellCasual')}
            >
              <i className="simple-icon-clock" />{' '}
              <span>{translate('sale.footer.tab.sell-casual')}</span>
            </li>
          </ul>
          <div className="footer-right">
            <p className="btn-hotline mb-0">
              <a href="tel:19006522">
                <i className="simple-icon-phone" /> 0988 434 937
              </a>
            </p>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>{translate('sale.footer.btn-tutorial')}</Tooltip>
              }
            >
              <i className="simple-icon-question btn-tutorial" />
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{translate('sale.footer.btn-letter')}</Tooltip>}
            >
              <i className="simple-icon-envelope-letter btn-letter" />
            </OverlayTrigger>
          </div>
          <button type="button" onClick={() => setIsShowPaymentScreen(true)}>
            {translate('sale.sell-casual-tab.btn-payment')}
          </button>
        </footer>

        {isShowPaymentScreen && (
          <ScreenCasualPayment
            show
            isShowCustomerSearch
            handleClose={() => setIsShowPaymentScreen(false)}
            paymentOrder={paymentOrder}
            productsList={productsList}
            handleChangeDiscountFromOrder={handleChangeDiscountFromOrder}
            handleChangePaymentTypeFromOrder={handleChangePaymentTypeFromOrder}
            handlePaymentOrder={handlePaymentOrder}
            handleChangeCustomerPayment={handleChangeCustomerPayment}
            handleChangeBillFromOrder={handleChangeBillFromOrder}
            handleChangeStaffPayment={handleChangeStaffPayment}
          />
        )}
      </>
    );
  },
);
