import { memo } from 'react';

import { CartItem } from './CartItem';

export const CartContainer = memo(
  ({
    productsList,
    handleChangeQuantityProductFromOrder,
    handleRemoveProductFromOrder,
    handleChangeNoteProductFromOrder,
    handleChangeDiscountFromProductItem,
  }) => (
    <div className="cart-container">
      {productsList.map((item, index) => (
        <CartItem
          key={index}
          data={item}
          lengthIndex={index}
          index={productsList.length - index}
          handleChangeQuantityProductFromOrder={handleChangeQuantityProductFromOrder}
          handleRemoveProductFromOrder={handleRemoveProductFromOrder}
          handleChangeNoteProductFromOrder={handleChangeNoteProductFromOrder}
          handleChangeDiscountFromProductItem={handleChangeDiscountFromProductItem}
        />
      ))}
    </div>
  ),
);
