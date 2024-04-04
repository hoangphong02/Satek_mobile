import { memo } from 'react';

import { FormPayment } from './FormPayment';
import { OrderButtons } from './OrderButtons';
import { OrderContainer } from './OrderContainer';

export const ColRight = memo(
  ({
    tableActive,
    handleChangeNoteProduct,
    handleChangeNumberProduct,
    handleNotify,
    setIsClickNoteTableFromForm,
    ordersList,
    handleDecouplingTable,
    handlePayment,
    handleMoveKitchen,
    listKitchen,
    isShowModalConfirmDeleteDish,
    setIsShowModalConfirmDeleteDish,
    handleUpdateVat,
    order_id,
    shopId,
    getDraftOrdersSaleState,
    handleRequestToCashier,
    getAllTableProductsSaleState,
    tabActive,

  }) => (
    <div className="col-right">
      <OrderContainer
        tableActive={tableActive}
        handleChangeNoteProduct={handleChangeNoteProduct}
        handleChangeNumberProduct={handleChangeNumberProduct}
        handleMoveKitchen={handleMoveKitchen}
        listKitchen={listKitchen}
        isShowModalConfirmDeleteDish={isShowModalConfirmDeleteDish}
        setIsShowModalConfirmDeleteDish={setIsShowModalConfirmDeleteDish}
      />
      <div className="col-right-footer">
        <FormPayment
          tableActive={tableActive}
          setIsClickNoteTableFromForm={setIsClickNoteTableFromForm}
          ordersList={ordersList}
          handleDecouplingTable={handleDecouplingTable}
          handleUpdateVat={handleUpdateVat}
        />
        <OrderButtons
          tabActive={tabActive}
          tableActive={tableActive}
          handleNotify={handleNotify}
          handlePayment={handlePayment}
          order_id={order_id}
          shopId={shopId}
          getDraftOrdersSaleState={getDraftOrdersSaleState}
          handleRequestToCashier={handleRequestToCashier}
          getAllTableProductsSaleState={getAllTableProductsSaleState}
        />
      </div>
    </div>
  ),
);
