import { Field, Form, Formik } from 'formik';
import moment from 'moment';
import {
  memo, useEffect, useRef, useState,
} from 'react';
import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  Alert,
  Button,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import * as Yup from 'yup';

import InputDate from '~/components/Input/InputDate';
import { NotificationManager } from '~/components/notifications';
import { useDebounce, useOnClickOutside } from '~/helpers/hooks';
import { translate } from '~/helpers/utils';
import {
  checkPhoneNumberCustomerSaleRequest,
  createCustomerSaleRequest,
  getAllCustomersSaleRequest,
  resetCheckPhoneNumberCustomerSale,
  resetCreateCustomerSale,
  resetUpdateCustomerSale,
  updateCustomerSaleRequest,
} from '~/redux/sale/actions';

export const CustomerSearchInput = memo(
  ({ paymentOrder, handleChangeCustomerFromOrder }) => {
    const {
      isGetAllCustomersSaleRequest,
      isGetAllCustomersSaleSuccess,
      getAllCustomersSaleState,
      isCreateCustomerSaleSuccess,
      isCreateCustomerSaleFailure,
      createCustomerSaleResponse,
      isUpdateCustomerSaleSuccess,
      isUpdateCustomerSaleFailure,
      updateCustomerSaleResponse,
    } = useSelector((store) => store.sale);
    const dispatch = useDispatch();

    const searchCustomerInputRef = useRef(null);

    const [searchCustomerInput, setSearchCustomerInput] = useState('');
    const [prevSearchCustomerInput, setPrevSearchCustomerInput] = useState('');
    const [isShowModalActionsCustomer, setIsShowModalActionsCustomer] = useState(false);
    const [dataCustomerActive, setDataCustomerActive] = useState();
    const [typeModalActionsCustomer, setTypeModalActionsCustomer] = useState();

    const searchCustomerInputDebounce = useDebounce(searchCustomerInput, 500);

    useOnClickOutside(searchCustomerInputRef, () => {
      if (searchCustomerInput.trim().length > 0) {
        // handleChangeCustomerFromOrder({
        //   name: searchCustomerInput,
        //   type: 'guest',
        // });
        setSearchCustomerInput('');
        setPrevSearchCustomerInput('');
      }
    });

    useEffect(() => {
      if (searchCustomerInputDebounce !== prevSearchCustomerInput) {
        setPrevSearchCustomerInput(searchCustomerInputDebounce);
        dispatch(
          getAllCustomersSaleRequest(
            `limit=0&search=name:${encodeURI(
              searchCustomerInputDebounce,
            )};phone:${encodeURI(
              searchCustomerInputDebounce,
            )};email:${encodeURI(searchCustomerInputDebounce)}`,
          ),
        );
      }
    }, [searchCustomerInputDebounce]);

    const handleShowModalActionsCustomer = (type = 'create') => {
      setIsShowModalActionsCustomer(true);
      setTypeModalActionsCustomer(type);
      if (type !== 'create') {
        setDataCustomerActive(paymentOrder.customer);
      }
    };
    const handleCloseModalActionsCustomer = () => {
      setIsShowModalActionsCustomer(false);
      setDataCustomerActive();
      setTypeModalActionsCustomer();
      if (isCreateCustomerSaleSuccess || isCreateCustomerSaleFailure) {
        dispatch(resetCreateCustomerSale());
      }
      if (isUpdateCustomerSaleSuccess || isUpdateCustomerSaleFailure) {
        dispatch(resetUpdateCustomerSale());
      }
    };

    useEffect(() => {
      if (isCreateCustomerSaleSuccess || isUpdateCustomerSaleSuccess) {
        if (isCreateCustomerSaleSuccess) {
          handleChangeCustomerFromOrder(createCustomerSaleResponse?.data);
          NotificationManager.success(
            translate('sale.modal.note.create-customer.success'),
            translate('common.notice'),
            1500,
            null,
            null,
            '',
          );
        }
        if (isUpdateCustomerSaleSuccess) {
          handleChangeCustomerFromOrder(updateCustomerSaleResponse?.data);
          NotificationManager.success(
            translate('sale.modal.note.update-customer.success'),
            translate('common.notice'),
            1500,
            null,
            null,
            '',
          );
        }
        handleCloseModalActionsCustomer();
      }
    }, [isCreateCustomerSaleSuccess, isUpdateCustomerSaleSuccess]);

    return (
      <>
        <div className="customer-search">
          <div className="search-group">
            {paymentOrder?.customer ? (
              <>
                <i className="simple-icon-user btn-icon-user" />
                <OverlayTrigger
                  placement="bottom"
                  overlay={(
                    <Tooltip id="tooltip-bottom">
                      {paymentOrder.customer?.name}
                      {paymentOrder.customer?.phone
                        ? ' - '.concat(paymentOrder.customer.phone)
                        : ''}
                    </Tooltip>
                  )}
                >
                  <span
                    className="user-selected"
                    onClick={() => handleShowModalActionsCustomer('update')}
                  >
                    {paymentOrder.customer?.name}
                    {paymentOrder.customer?.phone
                      ? ' - '.concat(paymentOrder.customer.phone)
                      : ''}
                  </span>
                </OverlayTrigger>
                <input readOnly />
                <OverlayTrigger
                  placement="bottom"
                  overlay={(
                    <Tooltip id="tooltip-bottom">
                      {translate('sale.btn-unselect-user')}
                    </Tooltip>
                  )}
                >
                  <i
                    className="simple-icon-close btn-unselect-user"
                    onClick={() => handleChangeCustomerFromOrder(null, 'delete')}
                  />
                </OverlayTrigger>
              </>
            ) : (
              <>
                <i className="simple-icon-magnifier btn-icon-search" />
                <input
                  type="text"
                  id="search-header"
                  name="search-header"
                  value={searchCustomerInput}
                  onChange={(e) => setSearchCustomerInput(e.target.value)}
                  placeholder={translate('sale.search-customer-placeholder')}
                />
                <OverlayTrigger
                  placement="bottom"
                  overlay={(
                    <Tooltip id="tooltip-bottom">
                      {translate('sale.btn-add-user')}
                    </Tooltip>
                  )}
                >
                  <i
                    className="simple-icon-plus btn-add-user"
                    onClick={() => handleShowModalActionsCustomer()}
                  />
                </OverlayTrigger>
              </>
            )}
          </div>
          <Dropdown
            show={searchCustomerInput.trim().length > 0}
            ref={searchCustomerInputRef}
          >
            <Dropdown.Menu>
              {isGetAllCustomersSaleRequest ? (
                <p className="loading-title">
                  {translate('sale.loading-customer-title')}
                </p>
              ) : (
                getAllCustomersSaleState?.data?.map((item, index) => (
                  <div
                    className="dropdown-item"
                    key={index}
                    onClick={() => {
                      handleChangeCustomerFromOrder(item);
                      setSearchCustomerInput('');
                      setPrevSearchCustomerInput('');
                    }}
                  >
                    <p>
                      {item?.name}
                      {item?.phone ? ' - '.concat(item.phone) : ''}
                    </p>
                    <p>
                      {translate('sale.code')}: {item?.code}
                    </p>
                  </div>
                ))
              )}
              {isGetAllCustomersSaleSuccess
                && getAllCustomersSaleState?.data?.length === 0 && (
                  <p
                    className="loading-title add-customer"
                    onClick={() => handleShowModalActionsCustomer()}
                  >
                    <span>+</span> {translate('sale.title-add-customer')}
                  </p>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {isShowModalActionsCustomer && (
          <ModalActionsCustomer
            isOpen={isShowModalActionsCustomer}
            handleClose={handleCloseModalActionsCustomer}
            type={typeModalActionsCustomer}
            data={dataCustomerActive}
          />
        )}
      </>
    );
  },
);

const ModalActionsCustomer = memo(
  ({
    isOpen, handleClose, type = 'create', data,
  }) => {
    const {
      isCreateCustomerSaleRequest,
      isCreateCustomerSaleFailure,
      isUpdateCustomerSaleRequest,
      isUpdateCustomerSaleFailure,
      isCheckPhoneNumberCustomerSaleRequest,
      isCheckPhoneNumberCustomerSaleSuccess,
      checkPhoneNumberCustomerSaleState,
    } = useSelector((store) => store.sale);
    const dispatch = useDispatch();

    const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);
    const [dataForm, setDataForm] = useState(null);

    const PHONE_REGEX = /((0)+([1-9]{1})+([0-9]{8})\b)/g;

    const SignupSchema = Yup.object().shape({
      name: Yup.string()
        .required(translate('sale.modal.customer.name.error-required'))
        .max(
          200,
          translate('sale.modal.customer.error-length-max').replace('$x', 200),
        ),
      phone: Yup.string()
        .required(translate('sale.modal.customer.phone.error-required'))
        .matches(
          PHONE_REGEX,
          translate('sale.modal.customer.phone.error-invalid'),
        )
        .max(
          10,
          translate('sale.modal.customer.phone.error-invalid').replace('$x', 10),
        ),
      email: Yup.string().email(
        translate('sale.modal.customer.email.error-invalid'),
      ),
      address: Yup.string().max(
        400,
        translate('sale.modal.customer.error-length-max').replace('$x', 400),
      ),
    });

    const onSubmit = (values) => {
      if (
        type !== 'detail'
        && !(
          isCheckPhoneNumberCustomerSaleSuccess
          && checkPhoneNumberCustomerSaleState?.data?.length > 0
        )
      ) {
        setDataForm(values);
        setIsShowModalConfirm(true);
      }
    };

    const handleSubmit = () => {
      const {
        name, phone, email, address, birthday,
      } = dataForm;
      if (type === 'create') {
        const payload = {
          name,
          phone,
        };

        if (email) payload.email = email;
        if (address) payload.address = address;
        if (
          birthday
          && !birthday.includes('D')
          && !birthday.includes('M')
          && !birthday.includes('Y')
          && !birthday.includes('d')
          && !birthday.includes('m')
          && !birthday.includes('y')
        ) {
          payload.birthday = `${birthday.slice(6)}-${birthday.slice(
            3,
            5,
          )}-${birthday.slice(0, 2)}`;
        }

        dispatch(createCustomerSaleRequest(payload));
      } else if (type === 'update') {
        const payload = {
          name,
        };

        if (phone !== data?.phone) payload.phone = phone;
        if (email !== data?.email) payload.email = email;
        if (address !== data?.address) payload.address = address;
        if (
          birthday !== data?.birthday
          && !birthday.includes('D')
          && !birthday.includes('M')
          && !birthday.includes('Y')
          && !birthday.includes('d')
          && !birthday.includes('m')
          && !birthday.includes('y')
        ) {
          payload.birthday = `${birthday.slice(6)}-${birthday.slice(
            3,
            5,
          )}-${birthday.slice(0, 2)}`;
        }

        dispatch(updateCustomerSaleRequest({ id: data.id, body: payload }));
      }
    };

    useEffect(() => {
      if (isCreateCustomerSaleFailure || isUpdateCustomerSaleFailure) {
        setIsShowModalConfirm(false);
      }
    }, [isCreateCustomerSaleFailure, isUpdateCustomerSaleFailure]);

    return (
      <>
        <Modal
          isOpen={isOpen}
          size="lg"
          className="sale modal-actions-customer-sale"
        >
          <ModalHeader>
            {translate(`sale.modal.customer.${type}.title`)}
          </ModalHeader>
          <Formik
            initialValues={{
              name: type === 'create' ? '' : data?.name || '',
              phone: type === 'create' ? '' : data?.phone || '',
              email: type === 'create' ? '' : data?.email || '',
              address: type === 'create' ? '' : data?.address || '',
              birthday:
                type === 'create'
                  ? ''
                  : data?.birthday
                    ? moment(data.birthday).format('DD/MM/YYYY')
                    : '',
            }}
            validationSchema={SignupSchema}
            onSubmit={onSubmit}
          >
            {({
              values, setFieldValue, errors, touched,
            }) => {
              const phoneCustomerDebounce = useDebounce(values.phone, 800);

              useEffect(() => {
                if (
                  phoneCustomerDebounce.trim().length > 0
                  && !errors.phone
                  && phoneCustomerDebounce !== values.phone
                ) {
                  dispatch(
                    checkPhoneNumberCustomerSaleRequest(phoneCustomerDebounce),
                  );
                } else {
                  dispatch(resetCheckPhoneNumberCustomerSale());
                }
              }, [phoneCustomerDebounce]);

              return (
                <Form className="av-tooltip tooltip-label-right">
                  <ModalBody>
                    {(isCreateCustomerSaleFailure
                      || isUpdateCustomerSaleFailure) && (
                      <Alert color="danger">
                        {translate(`sale.modal.note.${type}-customer.failure`)}
                      </Alert>
                    )}
                    <div className="d-flex" style={{ gap: '16px' }}>
                      <FormGroup className="w-100 error-l-125">
                        <Label>
                          {translate('sale.modal.customer.name.col')}:{' '}
                          <span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Field
                          className="form-control"
                          name="name"
                          placeholder={translate(
                            'sale.modal.customer.name.placeholder',
                          )}
                        />
                        {errors.name && touched.name ? (
                          <div className="invalid-feedback d-block">
                            {errors.name}
                          </div>
                        ) : null}
                      </FormGroup>
                      <FormGroup className="w-100 error-l-100">
                        <Label>
                          {translate('sale.modal.customer.phone.col')}:{' '}
                          <span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Field
                          type="tel"
                          className="form-control"
                          name="phone"
                          placeholder={translate(
                            'sale.modal.customer.phone.placeholder',
                          )}
                        />
                        {(errors.phone && touched.phone)
                        || (isCheckPhoneNumberCustomerSaleSuccess
                          && checkPhoneNumberCustomerSaleState?.data?.length
                            > 0) ? (
                              <div className="invalid-feedback d-block">
                                {errors.phone
                              || translate('sale.modal.customer.phone.is-exist')}
                              </div>
                          ) : null}
                      </FormGroup>
                    </div>
                    <div className="d-flex" style={{ gap: '16px' }}>
                      <FormGroup className="w-100 error-l-100">
                        <Label>
                          {translate('sale.modal.customer.birthday.col')}:
                        </Label>
                        <InputDate
                          name="birthday"
                          value={values.birthday}
                          onChange={(e) => setFieldValue('birthday', e)}
                        />
                        {errors.birthday && touched.birthday ? (
                          <div className="invalid-feedback d-block">
                            {errors.birthday}
                          </div>
                        ) : null}
                      </FormGroup>
                      <FormGroup className="w-100 error-l-100">
                        <Label>
                          {translate('sale.modal.customer.email.col')}:
                        </Label>
                        <Field
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder={translate(
                            'sale.modal.customer.email.placeholder',
                          )}
                        />
                        {errors.email && touched.email ? (
                          <div className="invalid-feedback d-block">
                            {errors.email}
                          </div>
                        ) : null}
                      </FormGroup>
                    </div>
                    <FormGroup className="error-l-100">
                      <Label>
                        {translate('sale.modal.customer.address.col')}:
                      </Label>
                      <Field className="form-control" name="address" />
                      {errors.address && touched.address ? (
                        <div className="invalid-feedback d-block">
                          {errors.address}
                        </div>
                      ) : null}
                    </FormGroup>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="primary"
                      outline
                      className="btn-multiple-state"
                      onClick={handleClose}
                    >
                      {translate('btn.back')}
                    </Button>
                    {type !== 'detail' && (
                      <Button
                        color="primary"
                        className={`btn-multiple-state ${
                          isCreateCustomerSaleRequest
                          || isUpdateCustomerSaleRequest
                          || isCheckPhoneNumberCustomerSaleRequest
                            ? 'show-spinner cursor-none'
                            : ''
                        }`}
                        type="submit"
                      >
                        <span className="spinner d-inline-block">
                          <span className="bounce1" />
                          <span className="bounce2" />
                          <span className="bounce3" />
                        </span>
                        <span className="label">
                          {translate(`sale.modal.btn-${type}`)}
                        </span>
                      </Button>
                    )}
                  </ModalFooter>
                </Form>
              );
            }}
          </Formik>
        </Modal>

        <Modal
          isOpen={isShowModalConfirm}
          size="sm"
          className="sale modal-confirm-actions-customer-sale"
        >
          <ModalHeader>
            {translate(`sale.modal.note.confirm.${type}-customer.title`)}
          </ModalHeader>
          <ModalBody>
            <p
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: translate(
                  `sale.modal.note.confirm.${type}-customer.description`,
                ).replace('$x', `${dataForm?.name} - ${dataForm?.phone}`),
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              outline
              disabled={
                isCreateCustomerSaleRequest || isUpdateCustomerSaleRequest
              }
              className={`btn-multiple-state ${
                isCreateCustomerSaleRequest || isUpdateCustomerSaleRequest
                  ? 'disabled'
                  : ''
              }`}
              style={
                isCreateCustomerSaleRequest || isUpdateCustomerSaleRequest
                  ? { cursor: 'no-drop' }
                  : {}
              }
              onClick={() => setIsShowModalConfirm(false)}
            >
              {translate('btn.cancel')}
            </Button>
            <Button
              color="primary"
              disabled={
                isCreateCustomerSaleRequest || isUpdateCustomerSaleRequest
              }
              className={`btn-multiple-state ${
                isCreateCustomerSaleRequest || isUpdateCustomerSaleRequest
                  ? 'show-spinner disabled'
                  : ''
              }`}
              onClick={handleSubmit}
            >
              <span className="spinner d-inline-block">
                <span className="bounce1" />
                <span className="bounce2" />
                <span className="bounce3" />
              </span>
              <span className="label">{translate('btn.yes')}</span>
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
);
