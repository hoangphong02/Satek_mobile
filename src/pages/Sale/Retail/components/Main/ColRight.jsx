import { memo } from 'react';

import { SellCasual } from './SellCasual';
import { SellQuickly } from './SellQuickly';

export const ColRight = memo(
  ({
    sellType,
    handleChangeCustomerFromOrder,
    handleAddProductToOrder,
    handleChangeDiscountFromOrder,
    paymentOrder,
    productsList,
    handleChangePaymentTypeFromOrder,
    handlePaymentOrder,
    handleChangeCustomerPayment,
    handleChangeBillFromOrder,
    handleChangeStaffPayment,
    handleChangeWorkPlacePayment,
  }) => (
    <div className="col-right">
      {sellType === 'sellQuickly' ? (
        <SellQuickly
          handleChangeCustomerFromOrder={handleChangeCustomerFromOrder}
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
      ) : (
        <SellCasual
          handleChangeCustomerFromOrder={handleChangeCustomerFromOrder}
          paymentOrder={paymentOrder}
          productsList={productsList}
          handleAddProductToOrder={handleAddProductToOrder}
          handleChangeDiscountFromOrder={handleChangeDiscountFromOrder}
          handleChangePaymentTypeFromOrder={handleChangePaymentTypeFromOrder}
          handlePaymentOrder={handlePaymentOrder}
          handleChangeCustomerPayment={handleChangeCustomerPayment}
          handleChangeBillFromOrder={handleChangeBillFromOrder}
          handleChangeStaffPayment={handleChangeStaffPayment}
          handleChangeWorkPlacePayment={handleChangeWorkPlacePayment}
        />
      )}
    </div>
  ),
);
