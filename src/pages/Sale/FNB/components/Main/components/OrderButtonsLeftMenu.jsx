import { memo } from 'react';
import { Button } from 'reactstrap';
import { translate } from '~/helpers/utils';

export const OrderButtonsLeftMenu = memo(
  ({
    handleSeeCart,
  }) => (
    <>
      <div className="order-buttons-wrapper">
        <div className="order-button-see-cart">
          <Button onClick={handleSeeCart}>
            <i className="fa-solid fa-cart-shopping" />
            {translate('sale.fnb.btn-see-cart')}
          </Button>
        </div>
      </div>
    </>
  ),
);
