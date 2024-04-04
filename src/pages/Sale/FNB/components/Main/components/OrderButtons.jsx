import { memo, useEffect, useState } from 'react';
import {
  Button, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { translate } from '~/helpers/utils';
import { Col, Container, Row } from 'react-bootstrap';
import moment from 'moment';
import { createRequestPayment } from '~/redux/order/actions';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export const OrderButtons = memo(
  ({
    tableActive, handlePayment,
  }) => {
    const [isShowBill, setIsShowBill] = useState(false);
    return (
      <>
        <div className="order-buttons-wrapper">
          <div className="order-buttons-inner">
            <Button onClick={() => setIsShowBill(true)}>
              <i className="iconsminds-coins-2" />
              {translate('sale.fnb.btn-payment')}
            </Button>
            {/* <Button onClick={() => setIsShowPaymentScreen(true)}>
            <i className="iconsminds-coins-2" />
            {translate('sale.fnb.btn-payment')}
          </Button> */}
          </div>
        </div>

        {isShowBill ? (
          <ModalBill
            handleClose={() => setIsShowBill(false)}
            tableActive={tableActive}
            isShowBill
            handlePayment={handlePayment}
          />
        ) : null}
      </>
    );
  },
);

// Modal Bill
const ModalBill = memo(({
  handleClose, tableActive, isShowBill,
}) => {
  const [nameTableActive, setNameTableActive] = useState('');
  const [orderId, setOrderId] = useState('');
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const shop = urlParams.get('shop');
  const { getAllTablesSaleState, getDraftOrdersSaleState } = useSelector((store) => store.sale);
  const { profileUser } = useSelector((store) => store.user);
  const [priceProduct, setPriceProduct] = useState(0);
  const today = new Date();
  const [isShowBilled, setIsShowBilled] = useState(isShowBill);
  const dispatch = useDispatch();

  useEffect(() => {
    let name = '';
    if (getAllTablesSaleState?.data) {
      name = getAllTablesSaleState?.data?.find(
        (table) => Number(table?.id) === Number(tableActive?.key),
      )?.name;
    }
    setNameTableActive(name);
  }, [getAllTablesSaleState, tableActive]);

  useEffect(() => {
    let order = 0;
    if (nameTableActive && getDraftOrdersSaleState) {
      order = getDraftOrdersSaleState?.data?.find(
        (order) => order?.name === nameTableActive,
      )?.id;
    }
    setOrderId(Number(order));
  }, [getDraftOrdersSaleState, nameTableActive]);

  useEffect(() => {
    const arrPrice = [];
    tableActive?.products?.map((item) => {
      arrPrice.push(item?.total);
    });
    const total = arrPrice?.length > 0 ? arrPrice.reduce((acc, cur) => acc + cur) : 0;
    setPriceProduct(total);
  }, [tableActive]);
  const handleSendRequirePayment = () => {
    const payload = {
      order_id: orderId,
      note: 'Yêu cầu thanh toán',
      shop_id: shop,
    };
    dispatch(createRequestPayment(payload));
    setIsShowBilled(false);
  };
  return (
    <>
      <Modal isOpen={isShowBilled} size="lg" className="modal-note-table">
        <ModalHeader>
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ fontSize: '15px' }}>SATEK FOOD</span>
            <span style={{ fontSize: '13px' }}>
              Add: B9-5, Đường số 3, KDC Nam Long II, p. Hưng Thạnh, Q.Cái Răng,
              Tp. Cần Thơ.
            </span>
            <span style={{ fontSize: '13px' }}>Web: https://satek.vn</span>
            <span style={{ fontSize: '13px' }}>Tel: 0988434937</span>
            <span style={{ fontSize: '20px', fontFamily: 'none' }}>
              PHIẾU THANH TOÁN
            </span>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Bàn số: {tableActive?.key}</span>
              <span>Số order: Satek</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Ngày: {moment(today).format('DD/MM/YYYY')}</span>
              <span>Số check: 542347</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Giờ mở: {moment(today).format('HH.mm')}</span>
              <span>Số khách: 10</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Phục vụ: {profileUser?.data?.name}</span>
              <span>Lần in: 1</span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '1px dashed',
                margin: '5px 0',
                padding: '4px 0',
              }}
            >
              <Container>
                <Row>
                  <Col xs={6}>Tên món</Col>
                  <Col
                    xs={3}
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    S/L
                  </Col>
                  <Col xs={3} style={{ display: 'flex', justifyContent: 'end' }}>
                    Tổng
                  </Col>
                </Row>
              </Container>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '1px dashed',
                margin: '5px 0',
                padding: '4px 0',
              }}
            >
              <Container>
                {tableActive?.products?.map((item, index) => (
                  <Row key={index}>
                    <Col xs={6}>
                      {
                      item.name
                    }
                    </Col>
                    <Col
                      xs={3}
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      {item?.number}
                    </Col>
                    <Col
                      xs={3}
                      style={{ display: 'flex', justifyContent: 'end' }}
                    >
                      {(
                        item?.total || 0
                      )?.toLocaleString()}
                    </Col>
                  </Row>
                ))}
              </Container>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '1px dashed',
                margin: '5px 0',
                padding: '4px 0',
              }}
            >
              <Container>
                <Row>
                  <Col xs={3}>Tổng cộng</Col>
                  <Col xs={9} style={{ display: 'flex', justifyContent: 'end' }}>
                    {priceProduct?.toLocaleString() || 0}
                  </Col>
                </Row>
              </Container>
            </div>
            {/* <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '1px dashed',
                margin: '5px 0',
                padding: '4px 0',
              }}
            >
              <Container>
                <Row>
                  <Col xs={3}>VAT</Col>
                  <Col xs={9} style={{ display: 'flex', justifyContent: 'end' }}>
                    {(0.1 * priceProduct)?.toLocaleString()}
                  </Col>
                </Row>
              </Container>
            </div> */}
            {/* <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '1px dashed',
                margin: '5px 0',
                padding: '4px 0',
              }}
            >
              <Container>
                <Row>
                  <Col xs={3}>Tổng</Col>
                  <Col xs={9} style={{ display: 'flex', justifyContent: 'end' }}>
                    {(priceProduct + 0.1 * priceProduct)?.toLocaleString()}
                  </Col>
                </Row>
              </Container>
            </div> */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '1px dashed',
                margin: '5px 0',
                padding: '4px 0',
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '2px dashed',
                margin: '5px 0',
                padding: '4px 0',
              }}
            >
              <Container>
                <Row>
                  <Col xs={5} style={{ fontSize: '1rem' }}>
                    Tổng thanh toán
                  </Col>
                  <Col
                    xs={7}
                    style={{
                      display: 'flex',
                      justifyContent: 'end',
                      fontSize: '1rem',
                    }}
                  >
                    {(priceProduct)?.toLocaleString()}
                  </Col>
                </Row>
              </Container>
            </div>
            <div
              style={{
                borderTop: '2px dashed',
                margin: '5px 0',
                padding: '15px 0',
                textAlign: 'center',
              }}
            >
              <span>Cảm ơn, hẹn gặp lại quý khách</span>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="btn-multiple-state"
            onClick={handleSendRequirePayment}
          >
            {translate('sale.fnb.modal-send-require-payment-table.btn.done')}
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
    </>

  );
});
