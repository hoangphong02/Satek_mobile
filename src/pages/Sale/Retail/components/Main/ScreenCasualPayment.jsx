import { memo } from 'react';
import { Offcanvas } from 'react-bootstrap';

import { SellQuickly } from './SellQuickly';

import './ScreenCasualPayment.scss';

export const ScreenCasualPayment = memo(
  ({
    show,
    handleClose,
    paymentOrder,
    productsList,
    handleChangeDiscountFromOrder,
    handleChangePaymentTypeFromOrder,
    handlePaymentOrder,
    handleChangeCustomerPayment,
    handleChangeBillFromOrder,
    handleChangeStaffPayment,
    isShowCustomerSearch = false,
    handleChangeWorkPlacePayment,
  }) => (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      backdropClassName="screen-casual-payment-backdrop"
      className="screen-casual-payment-wrapper"
      enforceFocus={false}
    >
      <Offcanvas.Body>
        <SellQuickly
          isShowCustomerSearch={isShowCustomerSearch}
          paymentOrder={paymentOrder}
          productsList={productsList}
          handleChangeDiscountFromOrder={handleChangeDiscountFromOrder}
          handleChangePaymentTypeFromOrder={handleChangePaymentTypeFromOrder}
          handlePaymentOrder={handlePaymentOrder}
          handleChangeCustomerPayment={handleChangeCustomerPayment}
          handleChangeBillFromOrder={handleChangeBillFromOrder}
          handleChangeStaffPayment={handleChangeStaffPayment}
          handleBack={handleClose}
          handleChangeWorkPlacePayment={handleChangeWorkPlacePayment}
        />
      </Offcanvas.Body>
    </Offcanvas>
  ),
);
