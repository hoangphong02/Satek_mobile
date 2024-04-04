import { memo } from 'react';

import { CartContainer } from './CartContainer';
import { CartFooter } from './CartFooter';

export const ColLeft = memo(
  ({
    sellType,
    productsList,
    noteOrderData,
    handleChangeQuantityProductFromOrder,
    handleRemoveProductFromOrder,
    handleChangeNoteProductFromOrder,
    handleChangeDiscountFromProductItem,
    handleChangeNoteOrder,
  }) => (
    <div className="col-left">
      <CartContainer
        productsList={productsList}
        handleChangeQuantityProductFromOrder={handleChangeQuantityProductFromOrder}
        handleRemoveProductFromOrder={handleRemoveProductFromOrder}
        handleChangeNoteProductFromOrder={handleChangeNoteProductFromOrder}
        handleChangeDiscountFromProductItem={handleChangeDiscountFromProductItem}
      />
      <CartFooter
        sellType={sellType}
        noteOrderData={noteOrderData}
        productsList={productsList}
        handleChangeNoteOrder={handleChangeNoteOrder}
      />
    </div>
  ),
);
