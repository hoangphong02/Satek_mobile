import { Field, Form, Formik } from 'formik';
import moment from 'moment';
import {
  memo, useEffect, useRef, useState,
} from 'react';
import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
  Button,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import * as Yup from 'yup';

import { useDebounce, useOnClickOutside } from '~/helpers/hooks';
import { parseCurrency, translate } from '~/helpers/utils';
import {
  handleCalculateDiscountPercent,
  handleCalculateTotal,
  handleCalculateTotalWithoutDiscount,
} from '../../functions';
import { CustomerSearchInput } from './CustomerSearchInput';
import { RenderQrCode } from '../Print';

export const SellQuickly = memo(
  ({
    isShowCustomerSearch = true,
    handleChangeCustomerFromOrder,
    paymentOrder,
    productsList,
    handleChangeDiscountFromOrder,
    handleChangePaymentTypeFromOrder,
    handlePaymentOrder,
    handleChangeCustomerPayment,
    handleChangeWorkPlacePayment,
    handleChangeStaffPayment,
    handleChangeBillFromOrder,
    handleBack,
  }) => {
    const { profileUser } = useSelector((store) => store.user);
    const {
      isGetAllDiscountsSaleRequest,
      isGetAllDiscountsSaleSuccess,
      getAllDiscountsSaleState,
      isGetSellStaffCurrentWorkTimeSaleRequest,
      isGetSellStaffCurrentWorkTimeSaleSuccess,
      getSellStaffCurrentWorkTimeSaleState,
      isGetAllWorkPlacesSaleRequest,
      isGetAllWorkPlacesSaleSuccess,
      getAllWorkPlacesSaleState,
    } = useSelector((store) => store.sale);

    const content = `${paymentOrder?.orderCode}`;
    const img = `https://img.vietqr.io/image/${profileUser?.data?.shop_info?.config?.bank?.name}-${profileUser?.data?.shop_info?.config?.bank?.number}-qr_only.jpg?amount=${handleCalculateTotal(productsList, paymentOrder)}&addInfo=${encodeURIComponent(content)}&accountName=${encodeURIComponent(profileUser?.data?.shop_info?.config?.bank?.account)}`;

    const dropdownStaffRef = useRef(null);
    const dropdownWorkPlaceRef = useRef(null);
    const dropdownDiscountRef = useRef(null);

    const [isShowDropdownStaff, setIsShowDropdownStaff] = useState(false);
    const [isShowDropdownWorkPlace, setIsShowDropdownWorkPlace] = useState(false);
    const [discountInput, setDiscountInput] = useState('');
    const [isShowDropdownDiscount, setIsShowDropdownDiscount] = useState(false);
    const [customerPaymentInput, setCustomerPaymentInput] = useState(
      paymentOrder?.paidTmp || 0,
    );
    const [isShowModalActionsBill, setIsShowModalActionsBill] = useState(false);

    const customerPaymentInputDebounce = useDebounce(customerPaymentInput, 500);

    useOnClickOutside(dropdownDiscountRef, () => {
      setDiscountInput('');
      setIsShowDropdownDiscount(false);
    });
    useOnClickOutside(dropdownStaffRef, () => {
      setIsShowDropdownStaff(false);
    });
    useOnClickOutside(dropdownWorkPlaceRef, () => {
      setIsShowDropdownWorkPlace(false);
    });

    useEffect(() => {
      setCustomerPaymentInput(paymentOrder?.paidTmp || 0);
    }, [paymentOrder]);

    useEffect(() => {
      if (parseInt(customerPaymentInputDebounce) !== paymentOrder?.paidTmp) {
        handleChangeCustomerPayment(customerPaymentInputDebounce);
      }
    }, [customerPaymentInputDebounce]);

    const handleShowModalActionsBill = () => {
      setIsShowModalActionsBill(true);
    };
    const handleCloseModalActionsBill = () => {
      setIsShowModalActionsBill(false);
    };

    return (
      <>
        <div className="sell-quickly-container">
          <div className="payment-header">
            <div className="cart-header-control">
              {profileUser?.data?.permissions?.data?.find(
                (item) => item?.name === 'list-sell',
              ) ? (
                <>
                  <p
                    className={`name have-dropdown ${
                      paymentOrder?.staff !== null ? 'have-dropdown' : ''
                    }`}
                  >
                    <span onClick={() => setIsShowDropdownStaff(true)}>
                      {paymentOrder?.staff !== null
                        ? paymentOrder?.staff?.name
                          || paymentOrder?.staff?.email
                          || paymentOrder?.staff?.username
                        : profileUser?.data?.name
                          || profileUser?.data?.email
                          || profileUser?.data?.username}
                    </span>
                    <i className="simple-icon-arrow-down" />
                    {paymentOrder?.staff !== null ? (
                      <OverlayTrigger
                        placement="bottom"
                        overlay={(
                          <Tooltip id="tooltip-bottom">
                            {translate('sale.staff.btn-remove')}
                          </Tooltip>
                        )}
                      >
                        <i
                          className="simple-icon-close"
                          onClick={() => handleChangeStaffPayment(null, 'delete')}
                        />
                      </OverlayTrigger>
                    ) : null}
                  </p>
                  <Dropdown show={isShowDropdownStaff} ref={dropdownStaffRef}>
                    <Dropdown.Menu>
                      {isGetSellStaffCurrentWorkTimeSaleRequest ? (
                        <p className="loading-title">
                          {translate('sale.staff-loading-title')}
                        </p>
                      ) : (
                        getSellStaffCurrentWorkTimeSaleState?.data
                          ?.filter((item) => item.id !== profileUser?.data?.id)
                          ?.map((item, index) => (
                            <div
                              className="dropdown-item"
                              key={index}
                              onClick={() => {
                                handleChangeStaffPayment(item);
                                setIsShowDropdownStaff(false);
                              }}
                            >
                              <p
                                className="mb-0"
                                style={{
                                  wordBreak: 'break-all',
                                  whiteSpace: 'normal',
                                }}
                              >
                                - {translate('sale.dropdown.item.name')}:{' '}
                                {item?.name}
                              </p>
                              {item?.phone ? (
                                <p
                                  className="mb-0"
                                  style={{
                                    wordBreak: 'break-all',
                                    whiteSpace: 'normal',
                                  }}
                                >
                                  <span style={{ color: 'transparent' }}>
                                    -
                                  </span>{' '}
                                  {translate('sale.dropdown.item.phone')}:{' '}
                                  {item.phone}
                                </p>
                              ) : null}
                              {item?.email ? (
                                <p
                                  className="mb-0"
                                  style={{
                                    wordBreak: 'break-all',
                                    whiteSpace: 'normal',
                                  }}
                                >
                                  <span style={{ color: 'transparent' }}>
                                    -
                                  </span>{' '}
                                  {translate('sale.dropdown.item.email')}:{' '}
                                  {item.email}
                                </p>
                              ) : null}
                            </div>
                          ))
                      )}
                      {isGetSellStaffCurrentWorkTimeSaleSuccess
                        && getSellStaffCurrentWorkTimeSaleState?.data?.filter(
                          (item) => item.id !== profileUser?.data?.id,
                        )?.length === 0 && (
                          <p className="loading-title">
                            {translate('sale.staff-empty-title')}
                          </p>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </>
                ) : (
                  <p className="name">
                    {profileUser?.data?.name
                    || profileUser?.data?.email
                    || profileUser?.data?.username}
                  </p>
                )}
              {profileUser?.data?.type === 'shop' ? (
                <>
                  <p
                    className={`name have-dropdown ${
                      paymentOrder?.staff !== null ? 'have-dropdown' : ''
                    }`}
                  >
                    <span onClick={() => setIsShowDropdownWorkPlace(true)}>
                      {getAllWorkPlacesSaleState?.data?.find((item) => item.id === paymentOrder?.place_id)?.name}
                    </span>
                    <i className="simple-icon-arrow-down" />
                  </p>
                  <Dropdown show={isShowDropdownWorkPlace} ref={dropdownWorkPlaceRef}>
                    <Dropdown.Menu>
                      {isGetAllWorkPlacesSaleRequest ? (
                        <p className="loading-title">
                          {translate('sale.staff-loading-title')}
                        </p>
                      ) : (
                        getAllWorkPlacesSaleState?.data
                          ?.filter((item) => item.id !== paymentOrder?.place_id)
                          ?.map((item, index) => (
                            <div
                              className="dropdown-item"
                              key={index}
                              onClick={() => {
                                handleChangeWorkPlacePayment(item);
                                setIsShowDropdownWorkPlace(false);
                              }}
                            >
                              <p
                                className="mb-0"
                                style={{
                                  wordBreak: 'break-all',
                                  whiteSpace: 'normal',
                                }}
                              >
                                {item?.name}
                              </p>
                            </div>
                          ))
                      )}
                      {isGetAllWorkPlacesSaleSuccess
                        && getAllWorkPlacesSaleState?.data?.filter(
                          (item) => item.id !== paymentOrder?.place_id,
                        )?.length === 0 && (
                          <p className="loading-title">
                            {translate('sale.staff-empty-title')}
                          </p>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : null}
              <p className="order-time">
                {moment(paymentOrder?.created_at).format('DD/MM/YYYY HH:mm')}
              </p>
            </div>
            {isShowCustomerSearch && (
              <CustomerSearchInput
                paymentOrder={paymentOrder}
                handleChangeCustomerFromOrder={handleChangeCustomerFromOrder}
              />
            )}
          </div>
          <div className="payment-content">
            {profileUser?.data?.shop_info?.type === 'pharmacy' ? (
              <div className="section-bill-info">
                <p
                  className={paymentOrder?.billInfo !== null ? 'active' : ''}
                  onClick={
                    paymentOrder?.billInfo === null
                      ? () => handleChangeBillFromOrder(
                        paymentOrder?.billInfo === null,
                      )
                      : () => handleShowModalActionsBill()
                  }
                >
                  <span
                    onClick={
                      paymentOrder?.billInfo !== null
                        ? () => handleChangeBillFromOrder(
                          paymentOrder?.billInfo === null,
                        )
                        : null
                    }
                  />
                  {translate('sale.btn.bill')}
                </p>
              </div>
            ) : null}
            <div className="section-title section-1">
              <div>
                <p>{translate('sale.sell-casual-tab.title-1')}</p>
              </div>
              <p>
                {parseCurrency(
                  handleCalculateTotalWithoutDiscount(productsList),
                )}
              </p>
            </div>
            <div className="section-title section-2">
              <div>
                <p>{translate('sale.sell-casual-tab.title-2')}</p>
              </div>
              <div>
                <div className="search-group">
                  {paymentOrder?.discount ? (
                    <>
                      {paymentOrder.discount?.type === 'gift' ? (
                        <i className="simple-icon-present" />
                      ) : (
                        <i className="iconsminds-coins" />
                      )}
                      <OverlayTrigger
                        placement="bottom"
                        overlay={(
                          <Tooltip id="tooltip-bottom">
                            {translate('sale.code')}:{' '}
                            {paymentOrder.discount?.code} -{' '}
                            {translate('sale.name')}:{' '}
                            {paymentOrder.discount?.name}
                          </Tooltip>
                        )}
                      >
                        <p className="discount-selected">
                          {translate('sale.code')}:{' '}
                          {paymentOrder.discount?.code} -{' '}
                          {translate('sale.name')}:{' '}
                          {paymentOrder.discount?.name}
                        </p>
                      </OverlayTrigger>
                      <input readOnly />
                      <OverlayTrigger
                        placement="bottom"
                        overlay={(
                          <Tooltip id="tooltip-bottom">
                            {translate('sale.btn-unselect-discount')}
                          </Tooltip>
                        )}
                      >
                        <i
                          className="simple-icon-close"
                          onClick={() => handleChangeDiscountFromOrder(null, 'delete')}
                        />
                      </OverlayTrigger>
                    </>
                  ) : (
                    <>
                      <i className="simple-icon-magnifier" />
                      <input
                        type="text"
                        id="search-header"
                        name="search-header"
                        value={discountInput}
                        onChange={(e) => setDiscountInput(e.target.value)}
                        onClick={() => setIsShowDropdownDiscount(true)}
                        placeholder={translate('sale.discount-placeholder')}
                        autoComplete="off"
                      />
                    </>
                  )}
                </div>
                <Dropdown
                  show={isShowDropdownDiscount}
                  ref={dropdownDiscountRef}
                >
                  <Dropdown.Menu>
                    {isGetAllDiscountsSaleRequest ? (
                      <p className="loading-title">
                        {translate('sale.loading-customer-title')}
                      </p>
                    ) : (
                      getAllDiscountsSaleState?.data
                        ?.filter(
                          (item) => handleCalculateTotalWithoutDiscount(productsList)
                            >= parseInt(item.condition) || item.condition === null,
                        )
                        ?.filter((item) => discountInput?.trim()?.length === 0
                          ? true
                          : item?.name
                            ?.toLowerCase()
                            ?.includes(
                              discountInput?.toLocaleLowerCase(),
                            )
                              || item?.code
                                ?.toLowerCase()
                                ?.includes(discountInput?.toLocaleLowerCase()))
                        ?.map((item, index) => (
                          <div
                            className="dropdown-item"
                            key={index}
                            onClick={() => {
                              handleChangeDiscountFromOrder(item);
                              setDiscountInput('');
                              setIsShowDropdownDiscount(false);
                            }}
                          >
                            - {translate('sale.code')}: {item.code}
                            <br />
                            <i style={{ color: 'transparent' }}>-</i>{' '}
                            {translate('sale.name')}: {item.name}
                            {item.type === 'gift' && (
                              <>
                                <br />
                                <i style={{ color: 'transparent' }}>-</i>{' '}
                                {translate('sale.gift')}: {item.gìt}
                              </>
                            )}
                            {item.type !== 'gift' && (
                              <>
                                <br />
                                <i style={{ color: 'transparent' }}>-</i>{' '}
                                {translate('sale.number')}:{' '}
                                {item.type === 'money' ? (
                                  parseCurrency(item.number)
                                ) : (
                                  <>{item.number}%</>
                                )}
                              </>
                            )}
                            {item.type === 'percent' && (
                              <>
                                <br />
                                <i style={{ color: 'transparent' }}>-</i>{' '}
                                {translate('sale.maximum')}:{' '}
                                {parseCurrency(item.maximum)}
                              </>
                            )}
                            {item.description && (
                              <>
                                <br />
                                <i style={{ color: 'transparent' }}>-</i>{' '}
                                {translate('sale.description')}:{' '}
                                {item.description}
                              </>
                            )}
                          </div>
                        ))
                    )}
                    {isGetAllDiscountsSaleSuccess
                      && getAllDiscountsSaleState?.data
                        ?.filter(
                          (item) => handleCalculateTotalWithoutDiscount(productsList)
                            >= parseInt(item.condition) || item.condition === null,
                        )
                        ?.filter((item) => discountInput?.trim()?.length === 0
                          ? true
                          : item?.name
                            ?.toLowerCase()
                            ?.includes(
                              discountInput?.toLocaleLowerCase(),
                            )
                              || item?.code
                                ?.toLowerCase()
                                ?.includes(discountInput?.toLocaleLowerCase()))?.length === 0 && (
                                <p className="loading-title">
                                  {translate('sale.empty-bill-info')}
                                </p>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            {paymentOrder?.discount ? (
              <div className="section-title section-discount-detail">
                <div>
                  <p>
                    -{' '}
                    {translate(
                      paymentOrder.discount?.type === 'gift'
                        ? 'sale.gift'
                        : 'sale.cash',
                    )}
                  </p>
                </div>
                <div>
                  {paymentOrder.discount?.type === 'gift' ? (
                    <>
                      <p>
                        - {translate('sale.name')}:{' '}
                        {paymentOrder.discount?.gift}
                      </p>
                      {paymentOrder.discount?.description && (
                        <p>
                          - {translate('sale.description')}:{' '}
                          {paymentOrder.discount?.description}
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <p>
                        - {translate('sale.number')}:{' '}
                        {paymentOrder.discount?.type === 'money' ? (
                          parseCurrency(paymentOrder.discount?.number)
                        ) : (
                          <>{paymentOrder.discount?.number}%</>
                        )}
                      </p>
                      {paymentOrder.discount?.type === 'percent' && (
                        <>
                          <p>
                            - {translate('sale.percent')} (VND):{' '}
                            {parseCurrency(
                              handleCalculateDiscountPercent(
                                productsList,
                                paymentOrder,
                                true,
                              ),
                            )}
                          </p>
                          <p>
                            - {translate('sale.maximum')}:{' '}
                            <strong>
                              {parseCurrency(paymentOrder.discount?.maximum)}
                            </strong>
                          </p>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            ) : null}
            <div className="section-title section-3">
              <p>{translate('sale.sell-casual-tab.title-3')}</p>
              <p>
                {parseCurrency(
                  handleCalculateTotal(productsList, paymentOrder),
                )}
              </p>
            </div>
            <div className="section-title section-4">
              <p>{translate('sale.sell-casual-tab.title-4')}</p>
              <input
                type="number"
                value={customerPaymentInput}
                onChange={(e) => setCustomerPaymentInput(e.target.value)}
              />
            </div>
            <div className="section-payment">
              <p
                className={paymentOrder?.type === 'cash' ? 'active' : ''}
                onClick={() => handleChangePaymentTypeFromOrder('cash')}
              >
                <span />
                {translate('sale.sell-casual-tab.payment-type.cash')}
              </p>
              <p
                className={paymentOrder?.type === 'bank' ? 'active' : ''}
                onClick={() => handleChangePaymentTypeFromOrder('bank')}
              >
                <span />
                {translate('sale.sell-casual-tab.payment-type.bank')}
              </p>
            </div>
            {
              paymentOrder?.type === 'bank' ? (
                <>
                  <div className="section-title section-3">
                    <p>{translate('sale.render-qr-code.title')}</p>
                  </div>
                  <div className="section-render-qr-code">
                    <div
                      className=""
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      {profileUser?.data?.shop_info?.config?.bank?.name} - {profileUser?.data?.shop_info?.config?.bank?.account} - {profileUser?.data?.shop_info?.config?.bank?.number}
                    </div>
                    <RenderQrCode
                      image={img}
                    />
                  </div>
                </>
              ) : null
            }
            {/* <div className="section-add-payment">
            <button type="button">
              <span>+</span> {translate('sale.sell-casual-tab.add-account-bank-title')}
            </button>
          </div> */}
            {paymentOrder?.paidTmp
            !== handleCalculateTotal(productsList, paymentOrder) ? (
              <div className="section-title section-5">
                <p>{translate('sale.sell-casual-tab.title-5')}</p>
                <p>
                  {parseCurrency(
                    paymentOrder?.paidTmp
                      - handleCalculateTotal(productsList, paymentOrder),
                  )}
                </p>
              </div>
              ) : null}
          </div>
          <div className="payment-footer">
            <button type="button" onClick={handlePaymentOrder}>
              {translate('sale.sell-casual-tab.btn-payment')}
            </button>
            <button type="button" onClick={handleBack}>
              {translate('user.user-profile.back')}
            </button>
          </div>
        </div>

        {isShowModalActionsBill && paymentOrder?.billInfo !== null ? (
          <ModalActionsBill
            isOpen
            handleClose={handleCloseModalActionsBill}
            data={paymentOrder?.billInfo}
            handleChangeBillFromOrder={handleChangeBillFromOrder}
          />
        ) : null}
      </>
    );
  },
);

const ModalActionsBill = memo(
  ({
    isOpen, handleClose, data, handleChangeBillFromOrder,
  }) => {
    const FormikSchema = Yup.object().shape({
      billCode: Yup.string().required(
        translate('sale.modal.billCode.error-required'),
      ),
    });

    const onSubmit = (values) => {
      handleChangeBillFromOrder(values, 'change');
      handleClose();
    };

    return (
      <Modal
        isOpen={isOpen}
        size="lg"
        className="sale modal-actions-customer-sale"
      >
        <ModalHeader>{translate('sale.modal.bill.title')}</ModalHeader>
        <Formik
          initialValues={{
            billCode: data?.billCode || '',
            doctor: data?.doctor || '',
            hospital: data?.hospital || '',
            name: data?.name || '',
            age: data?.age || '',
            gender: data?.gender || '',
            weight: data?.weight || '',
            id_card: data?.id_card || '',
            id_bhyt: data?.id_bhyt || '',
            address: data?.address || '',
            phone: data?.phone || '',
            note: data?.note || '',
          }}
          validationSchema={FormikSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>
                <div className="d-flex" style={{ gap: '16px' }}>
                  <div className="w-100">
                    <FormGroup className="w-100 error-l-125">
                      <Label>
                        {translate('sale.modal.billCode.label')}:{' '}
                        <span style={{ color: 'red' }}>*</span>
                      </Label>
                      <Field className="form-control" name="billCode" />
                      {errors.billCode && touched.billCode ? (
                        <div className="invalid-feedback d-block">
                          {errors.billCode}
                        </div>
                      ) : null}
                    </FormGroup>
                    <FormGroup className="w-100">
                      <Label>{translate('sale.modal.doctor.label')}:</Label>
                      <Field className="form-control" name="doctor" />
                    </FormGroup>
                    <FormGroup className="w-100">
                      <Label>{translate('sale.modal.hospital.label')}:</Label>
                      <Field className="form-control" name="hospital" />
                    </FormGroup>
                    <FormGroup className="w-100">
                      <Label>{translate('sale.modal.name.label')}:</Label>
                      <Field className="form-control" name="name" />
                    </FormGroup>
                    <FormGroup className="w-100">
                      <Label>{translate('sale.modal.age.label')}:</Label>
                      <Field className="form-control" name="age" />
                    </FormGroup>
                    <FormGroup className="w-100">
                      <Label>{translate('sale.modal.gender.label')}:</Label>
                      <Field className="form-control" name="gender" />
                    </FormGroup>
                  </div>
                  <div className="w-100">
                    <FormGroup className="w-100">
                      <Label>{translate('sale.modal.weight.label')}:</Label>
                      <Field className="form-control" name="weight" />
                    </FormGroup>
                    <FormGroup className="w-100">
                      <Label>{translate('sale.modal.id_card.label')}:</Label>
                      <Field className="form-control" name="id_card" />
                    </FormGroup>
                    <FormGroup className="w-100">
                      <Label>{translate('sale.modal.id_bhyt.label')}:</Label>
                      <Field className="form-control" name="id_bhyt" />
                    </FormGroup>
                    <FormGroup className="w-100">
                      <Label>{translate('sale.modal.address.label')}:</Label>
                      <Field className="form-control" name="address" />
                    </FormGroup>
                    <FormGroup className="w-100">
                      <Label>{translate('sale.modal.phone.label')}:</Label>
                      <Field className="form-control" name="phone" />
                    </FormGroup>
                    <FormGroup className="w-100">
                      <Label>{translate('sale.modal.note.label')}:</Label>
                      <Field className="form-control" name="note" />
                    </FormGroup>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  outline
                  className="btn-multiple-state"
                  onClick={handleClose}
                >
                  {translate('sale.modal.bill.btn.back')}
                </Button>
                <Button
                  color="primary"
                  className="btn-multiple-state"
                  type="submit"
                >
                  {translate('sale.modal.bill.btn.save')}
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    );
  },
);
