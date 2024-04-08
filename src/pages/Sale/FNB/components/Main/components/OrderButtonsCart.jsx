import { memo } from 'react';
import {
  Button,
} from 'reactstrap';
import { translate } from '~/helpers/utils';

export const OrderButtonsCart = memo(
  ({
    handleNotify,
    handleRequestToCashier,
    tabActive,
    handleRequestPayment,
  }) => (
    <>
      <div className="order-buttons-wrapper">
        <div>
          <br />
        </div>
        <div className="order-buttons-inner">
          <Button
            style={{ display: tabActive === 'cart' ? 'block' : 'none' }}
            onClick={() => {
              handleNotify();
              handleRequestToCashier();
            }}
          >
            <i className="simple-icon-bell" />
            {translate('sale.fnb.btn-order-food')}
          </Button>
          <Button onClick={handleRequestPayment}>
            <i className="iconsminds-coins-2" />
            {translate('sale.fnb.btn-cancel')}
          </Button>
        </div>
      </div>
    </>
  ),
);
