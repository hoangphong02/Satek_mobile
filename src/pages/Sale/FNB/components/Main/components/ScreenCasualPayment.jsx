import { memo } from 'react';
import { Offcanvas } from 'react-bootstrap';

import { SellQuickly } from './SellQuickly';

import './ScreenCasualPayment.scss';

export const ScreenCasualPayment = memo(
  ({
    show,
    handleClose,
    tableActive,
    handlePayment,
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
          handleBack={handleClose}
          tableActive={tableActive}
          handlePayment={handlePayment}
        />
      </Offcanvas.Body>
    </Offcanvas>
  ),
);
