import { memo, useState } from 'react';

import { ColLeft, ColRight } from './components';

export const Main = memo(
  ({
    tabActive,
    tableActive,
    handleSelectTable,
    ordersList,
    handleChangeNote,
    isOpenMenuWhenSelectTable,
    setIsOpenMenuWhenSelectTable,
    handleAddProductToOrder,
    handleChangeNoteProduct,
    handleChangeNumberProduct,
    handleNotify,
    tableGroupActive,
    setTableGroupActive,
    handleDecouplingTable,
    handleMoveKitchen,
    listKitchen,
    isShowModalConfirmDeleteDish,
    setIsShowModalConfirmDeleteDish,
    handleUpdateVat,
    getAllTableProductsSaleState,
    order_id,
    shopId,
    getDraftOrdersSaleState,
    handleRequestToCashier,
    dataCart,
    handleChangeNumberProductCart,
    handleUpdateDraftOrder,
    handleSeeCart,
    handleRequestPayment,
  }) => {
    const [isClickNoteTableFromForm, setIsClickNoteTableFromForm] = useState(false);

    return (
      <main className="sale-fnb--main">
        <ColLeft
          tabActive={tabActive}
          tableActive={tableActive}
          handleSelectTable={handleSelectTable}
          ordersList={ordersList}
          handleChangeNote={handleChangeNote}
          isOpenMenuWhenSelectTable={isOpenMenuWhenSelectTable}
          setIsOpenMenuWhenSelectTable={setIsOpenMenuWhenSelectTable}
          handleAddProductToOrder={handleAddProductToOrder}
          isClickNoteTableFromForm={isClickNoteTableFromForm}
          setIsClickNoteTableFromForm={setIsClickNoteTableFromForm}
          tableGroupActive={tableGroupActive}
          setTableGroupActive={setTableGroupActive}
          handleChangeNoteProduct={handleChangeNoteProduct}
          handleChangeNumberProduct={handleChangeNumberProduct}
          handleNotify={handleNotify}
          handleDecouplingTable={handleDecouplingTable}
          listKitchen={listKitchen}
          getAllTableProductsSaleState={getAllTableProductsSaleState}
          dataCart={dataCart}
          handleChangeNumberProductCart={handleChangeNumberProductCart}
          handleRequestToCashier={handleRequestToCashier}
          handleUpdateDraftOrder={handleUpdateDraftOrder}
          handleSeeCart={handleSeeCart}
          handleRequestPayment={handleRequestPayment}
        />
        <ColRight
          tableActive={tableActive}
          handleChangeNoteProduct={handleChangeNoteProduct}
          handleChangeNumberProduct={handleChangeNumberProduct}
          handleNotify={handleNotify}
          setIsClickNoteTableFromForm={setIsClickNoteTableFromForm}
          ordersList={ordersList}
          handleDecouplingTable={handleDecouplingTable}
          handleMoveKitchen={handleMoveKitchen}
          listKitchen={listKitchen}
          isShowModalConfirmDeleteDish={isShowModalConfirmDeleteDish}
          setIsShowModalConfirmDeleteDish={setIsShowModalConfirmDeleteDish}
          handleUpdateVat={handleUpdateVat}
          order_id={order_id}
          shopId={shopId}
          getDraftOrdersSaleState={getDraftOrdersSaleState}
          handleRequestToCashier={handleRequestToCashier}
          getAllTableProductsSaleState={getAllTableProductsSaleState}

        />
      </main>
    );
  },
);
