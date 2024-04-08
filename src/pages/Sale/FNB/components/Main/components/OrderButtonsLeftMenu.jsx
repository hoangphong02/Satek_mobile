import { memo } from 'react';
import { Button, Badge } from 'reactstrap';
import { translate } from '~/helpers/utils';

export const OrderButtonsLeftMenu = memo(
  ({
    handleSeeCart, dataCart,
  }) => (
    <>
      <div className="order-buttons-wrapper">
        <div className="order-button-see-cart">
          <Button onClick={handleSeeCart}>
            <i className="fa-solid fa-cart-shopping" />
            {translate('sale.fnb.btn-see-cart')}
            {dataCart?.length ? (
              <Badge color="danger" style={{ margin: '0 5px' }}>
                {dataCart?.length}
              </Badge>
            ) : null}
          </Button>
        </div>
      </div>
    </>
  ),
);
