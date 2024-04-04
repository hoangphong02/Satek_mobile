import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Button, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';

import OrderEmptyIcon from '~/assets/icons/sateklogo_grayfinal.png';
import { parseCurrency, translate } from '~/helpers/utils';

export const OrderContainer = memo(
  ({
    tableActive, handleChangeNoteProduct, handleChangeNumberProduct,
  }) => {
    const { getAllProductsSaleState } = useSelector((store) => store.sale);

    const [ordersList, setOrdersList] = useState([]);
    useEffect(() => {
      if (tableActive?.products?.length > 0) {
        setOrdersList(
          tableActive.products.map((item) => {
            let result = { ...item };
            if (
              getAllProductsSaleState?.data?.find(
                (item2) => item2.id === item.id && item2.code === item.code,
              )
            ) {
              result = {
                ...result,
                ...getAllProductsSaleState.data.find(
                  (item2) => item2.id === item.id && item2.code === item.code,
                ),
              };
            }
            return result;
          }),
        );
      } else {
        setOrdersList([]);
      }
    }, [getAllProductsSaleState, tableActive]);

    return (
      <div className="order-container-wrapper">
        {ordersList.length > 0 ? (
          <>
            <div className="order-container-inner">
              {ordersList.map((item, index) => (
                <OrderItem
                  key={index}
                  index={index + 1}
                  data={item}
                  handleChangeNoteProduct={handleChangeNoteProduct}
                  handleChangeNumberProduct={handleChangeNumberProduct}
                />
              ))}
            </div>
            {/* {tableActive.notify ? (
              <div className="order-container-notice">
                <p
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: translate('sale.fnb.notify-content'),
                  }}
                />
              </div>
            ) : null} */}
          </>
        ) : (
          <OrderEmpty />
        )}
      </div>
    );
  },
);

// sản phẩm trong đơn hàng
const OrderItem = memo(
  ({
    index,
    data,
    handleChangeNoteProduct,
    //  handleChangeNumberProduct,
  }) => {
    const [isShowModalNoteTable, setIsShowModalNoteTable] = useState(false);

    const handleSaveNote = (note) => {
      handleChangeNoteProduct(data, note);
      handleCloseModalNote();
    };

    const handleCloseModalNote = () => {
      setIsShowModalNoteTable(false);
    };

    return (
      <>
        <div className="order-item-wrapper">
          <div className="order-item-inner">
            <div className="top">
              <p className="order-item-name">
                {index}. {data?.name}
              </p>
              <div className="order-item-btn-quantity">
                <input value={data?.number || 1} type="number" readOnly />
              </div>
              <div className="order-item-base-price">
                <input
                  value={parseCurrency(data?.price || 0).replace('VND', '')}
                  type="text"
                  readOnly
                />
              </div>
              <div className="order-item-total-price">
                <p>{parseCurrency(data?.price * data?.number || 0)}</p>
              </div>
            </div>
            {/* <div className="bottom">
              <div
                className="order-item-note"
                onClick={() => setIsShowModalNoteTable(true)}
              >
                <i className="simple-icon-doc" />{' '}
                {data?.note || translate('sale.fnb.order-item-note')}
              </div>
            </div> */}
          </div>
        </div>

        {isShowModalNoteTable ? (
          <ModalNoteTable
            data={data?.note}
            handleClose={handleCloseModalNote}
            handleSave={handleSaveNote}
          />
        ) : null}
      </>
    );
  },
);

const OrderEmpty = memo(() => (
  <div className="order-empty-wrapper">
    <img src={OrderEmptyIcon} className="custom--icon" alt="logo" />
    <h3>Chưa có món nào</h3>
    <p>Vui lòng chọn món trong thực đơn</p>
  </div>
));

// Modal Nhập ghi chú/ Món thêm
const ModalNoteTable = memo(({ data, handleClose, handleSave }) => {
  const [note, setNote] = useState(data || '');

  return (
    <Modal isOpen size="lg" className="modal-note-table">
      <ModalHeader>
        {translate('sale.fnb.modal-note-table.title-2')}
      </ModalHeader>
      <ModalBody>
        <textarea
          placeholder={translate('sale.fnb.modal-note-table.title-3')}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          className="btn-multiple-state"
          onClick={() => handleSave(note)}
        >
          {translate('sale.fnb.modal-note-table.btn.done')}
        </Button>
        <Button
          color="primary"
          outline
          className="btn-multiple-state"
          onClick={handleClose}
        >
          {translate('sale.fnb.modal-note-table.btn.cancel')}
        </Button>
      </ModalFooter>
    </Modal>
  );
});
