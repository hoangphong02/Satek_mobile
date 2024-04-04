import { memo } from 'react';

// import { FormPayment } from './FormPayment';
import { OrderContainerCart } from './OrderContainerCart';
import { OrderButtonsCart } from './OrderButtonsCart';

export const ColRightCart = memo(
  ({
    tabActive,
    tableActive,
    handleChangeNoteProduct,
    handleChangeNumberProduct,
    handleNotify,
    // setIsClickNoteTableFromForm,
    // ordersList,
    // handleDecouplingTable,
    handlePayment,
    handleMoveKitchen,
    listKitchen,
    isShowModalConfirmDeleteDish,
    setIsShowModalConfirmDeleteDish,
    // handleUpdateVat,
    order_id,
    shopId,
    getDraftOrdersSaleState,
    handleRequestToCashier,
    getAllTableProductsSaleState,
    dataCart,
    handleChangeNumberProductCart,
    handleUpdateDraftOrder,
    handleRequestPayment,
  }) => (
    <div className="col-right">
      <OrderContainerCart
        tableActive={tableActive}
        handleChangeNoteProduct={handleChangeNoteProduct}
        handleChangeNumberProduct={handleChangeNumberProduct}
        handleMoveKitchen={handleMoveKitchen}
        listKitchen={listKitchen}
        isShowModalConfirmDeleteDish={isShowModalConfirmDeleteDish}
        setIsShowModalConfirmDeleteDish={setIsShowModalConfirmDeleteDish}
        dataCart={dataCart}
        handleChangeNumberProductCart={handleChangeNumberProductCart}
      />
      <div className="col-right-footer">
        {/* <FormPayment
          tableActive={tableActive}
          setIsClickNoteTableFromForm={setIsClickNoteTableFromForm}
          ordersList={ordersList}
          handleDecouplingTable={handleDecouplingTable}
          handleUpdateVat={handleUpdateVat}
        /> */}
        <OrderButtonsCart
          tabActive={tabActive}
          tableActive={tableActive}
          handleNotify={handleNotify}
          handlePayment={handlePayment}
          order_id={order_id}
          shopId={shopId}
          getDraftOrdersSaleState={getDraftOrdersSaleState}
          handleRequestToCashier={handleRequestToCashier}
          getAllTableProductsSaleState={getAllTableProductsSaleState}
          handleUpdateDraftOrder={handleUpdateDraftOrder}
          handleRequestPayment={handleRequestPayment}
        />
      </div>
    </div>
  ),
);
