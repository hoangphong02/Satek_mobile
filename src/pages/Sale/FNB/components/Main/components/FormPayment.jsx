import { Field, Form, Formik } from 'formik';
import { memo, useRef, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  Button,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

import { useOnClickOutside } from '~/helpers/hooks';
import { parseCurrency, translate } from '~/helpers/utils';
import { phoneRegExp } from '~/constants/common';

// shop1 /ghi chú /tách ghép / tổng tiền
export const FormPayment = memo(
  ({
    tableActive,
    // setIsClickNoteTableFromForm,
    ordersList,
    handleDecouplingTable,
    handleUpdateVat,
  }) => {
    // const { profileUser } = useSelector((store) => store.user);
    // const { getAllProductsSaleState } = useSelector((store) => store.sale);

    const [isShowModalTableDecoupling, setIsShowModalTableDecoupling] = useState(false);
    const [isShowModalVAT, setIsShowModalVAT] = useState(false);

    const handleCloseModalTableDecoupling = () => {
      setIsShowModalTableDecoupling(false);
    };

    const handleCloseModalVAT = () => {
      setIsShowModalVAT(false);
    };
    return (
      <>
        <div className="form-payment-wrapper">
          {/* <div className="form-payment-item-wrapper employee-action">
            {profileUser?.data?.name
              || profileUser?.data?.email
              || profileUser?.data?.username}
          </div> */}
          {/* <div
            className="form-payment-item-wrapper btn-action"
            onClick={() => setIsClickNoteTableFromForm(true)}
          >
            <i className="simple-icon-pencil" />
            <p>{translate('sale.fnb.form-payment.btn.note')}</p>
          </div> */}
          {/* {tableActive.key !== 'bring-back' ? (
            <div
              className="form-payment-item-wrapper btn-action"
              onClick={() => setIsShowModalTableDecoupling(true)}
            >
              <i className="iconsminds-notepad" />
              <p>{translate('sale.fnb.form-payment.btn.decoupling')}</p>
            </div>
          ) : null} */}
          {/* {tableActive.key !== 'bring-back' ? (
            <div
              className="form-payment-item-wrapper btn-action"
              onClick={() => setIsShowModalVAT(true)}
            >
              <i className="iconsminds-notepad" />
              <p>{translate('sale.fnb.form-payment.btn.vat')}</p>
            </div>
          ) : null} */}
          <div className="tmp" />
          <div className="form-payment-item-wrapper action-total">
            <p>
              {translate('sale.fnb.form-payment.btn.total')}{' '}
              <span>
                {tableActive?.products?.reduce(
                  (total, item) => total + item.number,
                  0,
                )}
              </span>{' '}
              <strong>
                {parseCurrency(
                  tableActive?.products?.reduce(
                    (total, item) => total
                      + item.total,
                    0,
                  ),
                )}
              </strong>
            </p>
          </div>
        </div>

        {isShowModalTableDecoupling ? (
          <ModalTableDecoupling
            tableActive={tableActive}
            handleClose={handleCloseModalTableDecoupling}
            ordersList={ordersList}
            handleDecouplingTable={handleDecouplingTable}
          />
        ) : null}

        {isShowModalVAT ? (
          <ModalVAT
            handleClose={handleCloseModalVAT}
            handleUpdateVat={handleUpdateVat}
          />
        ) : null}
      </>
    );
  },
);

// Modal tách ghép
const ModalTableDecoupling = memo(
  ({
    tableActive, handleClose, ordersList, handleDecouplingTable,
  }) => {
    const { getAllProductsSaleState, getAllTableGroupsSaleState } = useSelector(
      (store) => store.sale,
    );

    const [decouplingType, setDecouplingType] = useState('grafted');
    const [isShowDropdown1, setIsShowDropdown1] = useState(false);
    const [isShowDropdown2, setIsShowDropdown2] = useState(false);
    const [isShowDropdown3, setIsShowDropdown3] = useState(false);
    const [tableChanged, setTableChanged] = useState();
    const [tableDetachedType, setTableDetachedType] = useState();
    const [tableDetachedId, setTableDetachedId] = useState();
    const [quantityChangedList, setQuantityChangedList] = useState(
      tableActive.products.map(() => 0),
    );

    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);
    const dropdown3Ref = useRef(null);

    useOnClickOutside(dropdown1Ref, () => {
      setIsShowDropdown1(false);
    });
    useOnClickOutside(dropdown2Ref, () => {
      setIsShowDropdown2(false);
    });
    useOnClickOutside(dropdown3Ref, () => {
      setIsShowDropdown3(false);
    });

    const handleChangeNumberCustom = (type, index) => {
      if (type === 'decrease') {
        setQuantityChangedList(
          quantityChangedList.map((item, index2) => index === index2 ? (item > 0 ? item - 1 : 0) : item),
        );
      } else if (type === 'increase') {
        setQuantityChangedList(
          quantityChangedList.map((item, index2) => index === index2
            ? item < tableActive.products[index].number
              ? item + 1
              : item
            : item),
        );
      }
    };

    return (
      <Modal isOpen size="lg" className="modal-table-decoupling">
        <ModalHeader>
          {
            getAllTableGroupsSaleState?.data
              ?.map((item) => item.tables.data)
              ?.flat()
              ?.find((item) => item.id === tableActive.key)?.name
          }{' '}
          {
            getAllTableGroupsSaleState?.data?.find(
              (item) => item.id === tableActive.group,
            )?.name
          }
        </ModalHeader>
        <ModalBody>
          <ul className="decoupling-type-section">
            <li
              className={decouplingType === 'grafted' ? 'active' : ''}
              onClick={() => setDecouplingType('grafted')}
            >
              <span /> {translate('sale.fnb.modal-decoupling.title-1')}
            </li>
            <li
              className={decouplingType === 'detached' ? 'active' : ''}
              onClick={() => setDecouplingType('detached')}
            >
              <span /> {translate('sale.fnb.modal-decoupling.title-2')}
            </li>
          </ul>
          <div className="form-control-wrapper">
            <p>{translate('sale.fnb.modal-decoupling.title-3')}</p>
            {decouplingType === 'grafted' ? (
              <div className="section-select-table">
                <p>
                  <span onClick={() => setIsShowDropdown1(true)}>
                    {tableChanged
                      ? `${
                        getAllTableGroupsSaleState?.data
                          ?.map((item) => item.tables.data)
                          ?.flat()
                          ?.find((item) => item.id === tableChanged)?.name
                      } ${
                        getAllTableGroupsSaleState?.data?.find(
                          (item) => item.id === ordersList[tableChanged].group,
                        )?.name
                      }`
                      : translate('sale.fnb.modal-decoupling.title-4')}
                  </span>
                  <i className="simple-icon-arrow-down" />
                </p>
                <Dropdown show={isShowDropdown1} ref={dropdown1Ref}>
                  <Dropdown.Menu>
                    <div
                      className="dropdown-item"
                      onClick={() => {
                        setTableChanged();
                        setIsShowDropdown1(false);
                      }}
                    >
                      <p
                        className="mb-0"
                        style={{
                          wordBreak: 'break-all',
                          whiteSpace: 'normal',
                        }}
                      >
                        {translate('sale.fnb.modal-decoupling.title-4')}
                      </p>
                    </div>
                    {Object.keys(ordersList)
                      ?.filter((key) => tableChanged
                        ? key !== String(tableActive.key)
                            && key !== String(tableChanged)
                        : key !== String(tableActive.key))
                      ?.map((key, index) => (
                        <div
                          className="dropdown-item"
                          key={index}
                          onClick={() => {
                            setTableChanged(parseInt(key));
                            setIsShowDropdown1(false);
                          }}
                        >
                          <p
                            className="mb-0"
                            style={{
                              wordBreak: 'break-all',
                              whiteSpace: 'normal',
                            }}
                          >
                            {
                              getAllTableGroupsSaleState?.data
                                ?.map((item) => item.tables.data)
                                ?.flat()
                                ?.find((item) => String(item.id) === key)?.name
                            }{' '}
                            {
                              getAllTableGroupsSaleState?.data?.find(
                                (item) => item.id === ordersList[key].group,
                              )?.name
                            }
                          </p>
                        </div>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <>
                <div className="section-select-table">
                  <p>
                    <span onClick={() => setIsShowDropdown2(true)}>
                      {tableDetachedType
                        ? `${
                          getAllTableGroupsSaleState?.data
                            ?.map((item) => item.tables.data)
                            ?.flat()
                            ?.find((item) => item.id === tableDetachedType)
                            ?.name
                        } ${
                          getAllTableGroupsSaleState?.data?.find(
                            (item) => item.id === ordersList[tableDetachedType].group,
                          )?.name
                        }`
                        : translate('sale.fnb.modal-decoupling.title-10')}
                    </span>
                    <i className="simple-icon-arrow-down" />
                  </p>
                  <Dropdown show={isShowDropdown2} ref={dropdown2Ref}>
                    <Dropdown.Menu>
                      <div
                        className="dropdown-item"
                        onClick={() => {
                          setTableDetachedType();
                          setIsShowDropdown2(false);
                        }}
                      >
                        <p
                          className="mb-0"
                          style={{
                            wordBreak: 'break-all',
                            whiteSpace: 'normal',
                          }}
                        >
                          {translate('sale.fnb.modal-decoupling.title-10')}
                        </p>
                      </div>
                      {Object.keys(ordersList)
                        ?.filter((key) => tableDetachedType
                          ? key !== String(tableActive.key)
                              && key !== String(tableDetachedType)
                          : key !== String(tableActive.key))
                        ?.map((key, index) => (
                          <div
                            className="dropdown-item"
                            key={index}
                            onClick={() => {
                              setTableDetachedType(parseInt(key));
                              setIsShowDropdown2(false);
                            }}
                          >
                            <p
                              className="mb-0"
                              style={{
                                wordBreak: 'break-all',
                                whiteSpace: 'normal',
                              }}
                            >
                              {
                                getAllTableGroupsSaleState?.data
                                  ?.map((item) => item.tables.data)
                                  ?.flat()
                                  ?.find((item) => String(item.id) === key)
                                  ?.name
                              }{' '}
                              {
                                getAllTableGroupsSaleState?.data?.find(
                                  (item) => item.id === ordersList[key].group,
                                )?.name
                              }
                            </p>
                          </div>
                        ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                {!tableDetachedType ? (
                  <div className="section-select-table">
                    <p>
                      <span onClick={() => setIsShowDropdown3(true)}>
                        {tableDetachedId
                          ? `${
                            getAllTableGroupsSaleState?.data
                              ?.map((item) => item.tables.data)
                              ?.flat()
                              ?.find((item) => item.id === tableDetachedId)
                              ?.name
                          } ${
                            getAllTableGroupsSaleState?.data?.find(
                              (item) => item.id
                                  === getAllTableGroupsSaleState?.data
                                    ?.map((item2) => item2.tables.data)
                                    ?.flat()
                                    ?.find(
                                      (item2) => item2.id === tableDetachedId,
                                    )?.group_id,
                            )?.name
                          }`
                          : translate('sale.fnb.modal-decoupling.title-4')}
                      </span>
                      <i className="simple-icon-arrow-down" />
                    </p>
                    <Dropdown show={isShowDropdown3} ref={dropdown3Ref}>
                      <Dropdown.Menu>
                        <div
                          className="dropdown-item"
                          onClick={() => {
                            setTableDetachedId();
                            setIsShowDropdown3(false);
                          }}
                        >
                          <p
                            className="mb-0"
                            style={{
                              wordBreak: 'break-all',
                              whiteSpace: 'normal',
                            }}
                          >
                            {translate('sale.fnb.modal-decoupling.title-4')}
                          </p>
                        </div>
                        {getAllTableGroupsSaleState?.data
                          ?.map((item) => item.tables.data)
                          ?.flat()
                          ?.filter((item) => tableDetachedId
                            ? item.id !== tableDetachedId
                                && !Object.keys(ordersList).includes(
                                  String(item.id),
                                )
                            : !Object.keys(ordersList).includes(
                              String(item.id),
                            ))
                          ?.map((item, index) => (
                            <div
                              className="dropdown-item"
                              key={index}
                              onClick={() => {
                                setTableDetachedId(parseInt(item.id));
                                setIsShowDropdown3(false);
                              }}
                            >
                              <p
                                className="mb-0"
                                style={{
                                  wordBreak: 'break-all',
                                  whiteSpace: 'normal',
                                }}
                              >
                                {item?.name}{' '}
                                {
                                  getAllTableGroupsSaleState?.data?.find(
                                    (item2) => item2.id === item.group_id,
                                  )?.name
                                }
                              </p>
                            </div>
                          ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                ) : null}
              </>
            )}
          </div>
          {decouplingType === 'grafted' ? (
            <div className="grafted-section-table">
              <div className="header">
                <p>{translate('sale.fnb.modal-decoupling.title-6')}</p>
                <p>{translate('sale.fnb.modal-decoupling.title-7')}</p>
                <p>{translate('sale.fnb.modal-decoupling.title-8')}</p>
              </div>
              <div className="body">
                {tableChanged ? (
                  <div>
                    <p>{translate('sale.fnb.modal-decoupling.title-9')}</p>
                    <p>
                      {ordersList[tableChanged].products.reduce(
                        (total, item) => total + item.number,
                        0,
                      )}
                    </p>
                    <p>
                      {parseCurrency(
                        ordersList[tableChanged].products.reduce(
                          (total, item) => total
                            + item.number
                              * (getAllProductsSaleState?.data?.find(
                                (item2) => item2.id === item.id
                                  && item2.code === item.code,
                              )?.price || 0),
                          0,
                        ),
                      )}
                    </p>
                  </div>
                ) : (
                  <p className="empty-title">
                    {translate('sale.fnb.modal-decoupling.title-5')}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="detached-section-table">
              <div className="header">
                <p>#</p>
                <p>{translate('sale.fnb.modal-decoupling.title-11')}</p>
                <p>{translate('sale.fnb.modal-decoupling.title-12')}</p>
              </div>
              <div className="body">
                {tableActive.products.map((item, index) => (
                  <div key={index}>
                    <div>{index + 1}</div>
                    <div>
                      {
                        getAllProductsSaleState?.data?.find(
                          (item2) => item2.id === item.id && item2.code === item.code,
                        )?.name
                      }
                    </div>
                    <div>{item.number}</div>
                    <div className="order-item-btn-quantity">
                      <span
                        onClick={() => handleChangeNumberCustom('decrease', index)}
                      >
                        -
                      </span>
                      <input
                        value={quantityChangedList[index]}
                        type="number"
                        readOnly
                      />
                      <span
                        onClick={() => handleChangeNumberCustom('increase', index)}
                      >
                        +
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          {(decouplingType === 'grafted' && tableChanged)
          || (decouplingType === 'detached'
            && (tableDetachedType
              || (tableDetachedId
                && quantityChangedList.filter((item) => item > 0).length > 0))) ? (
                  <Button
                    color="primary"
                    className="btn-multiple-state submit"
                    onClick={() => {
                      handleDecouplingTable(
                        decouplingType,
                        tableChanged,
                        tableDetachedType,
                        tableDetachedId,
                        quantityChangedList,
                      );
                      handleClose();
                    }}
                  >
                    {translate('sale.fnb.modal-decoupling.btn-1')}
                  </Button>
            ) : null}
          <Button
            color="primary"
            outline
            className="btn-multiple-state cancel"
            onClick={handleClose}
          >
            {translate('sale.fnb.modal-decoupling.btn-2')}
          </Button>
        </ModalFooter>
      </Modal>
    );
  },
);

const ModalVAT = memo(({ handleClose, handleUpdateVat }) => {
  const validateSchema = Yup.object().shape({
    taxcode: Yup.string().required(
      translate('sale.fnb.modal-vat.taxcode.required'),
    ),
    name: Yup.string().required(translate('sale.fnb.modal-vat.name.required')),
    phone: Yup.string().matches(
      phoneRegExp,
      translate('sale.fnb.modal-vat.phone.invalid'),
    ),
    email: Yup.string().email(translate('sale.fnb.modal-vat.email.invalid')),
    address: Yup.string().required(
      translate('sale.fnb.modal-vat.address.required'),
    ),
  });
  return (
    <Modal isOpen size="lg" className="modal-vat">
      <ModalHeader>{translate('sale.fnb.modal-vat.title')}</ModalHeader>
      <Formik
        initialValues={{
          name: '',
          email: '',
          address: '',
          phone: '',
          taxcode: '',
          percent: 10,
        }}
        validationSchema={validateSchema}
        onSubmit={handleUpdateVat}
      >
        {({
          values, errors, touched, handleSubmit,
        }) => (
          <Form className="av-tooltip tooltip-label-right">
            <ModalBody>
              <FormGroup>
                <Label>{translate('sale.fnb.modal-vat.name')}</Label>
                <Field className="form-control" name="name" />
                {errors.name && touched.name ? (
                  <div className="invalid-feedback d-block">
                    {errors.name}
                  </div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>{translate('sale.fnb.modal-vat.email')}</Label>
                <Field className="form-control" name="email" />
                {errors.email && touched.email ? (
                  <div className="invalid-feedback d-block">
                    {errors.email}
                  </div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>{translate('sale.fnb.modal-vat.phone')}</Label>
                <Field className="form-control" name="phone" />
                {errors.phone && touched.phone ? (
                  <div className="invalid-feedback d-block">
                    {errors.phone}
                  </div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>{translate('sale.fnb.modal-vat.taxcode')}</Label>
                <Field className="form-control" name="taxcode" />
                {errors.taxcode && touched.taxcode ? (
                  <div className="invalid-feedback d-block">
                    {errors.taxcode}
                  </div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>{translate('sale.fnb.modal-vat.percent')}</Label>
                <Field className="form-control" name="percent" />
                {errors.percent && touched.percent ? (
                  <div className="invalid-feedback d-block">
                    {errors.percent}
                  </div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>{translate('sale.fnb.modal-vat.address')}</Label>
                <Field
                  className="form-control"
                  name="address"
                  as="textarea"
                />
                {errors.address && touched.address ? (
                  <div className="invalid-feedback d-block">
                    {errors.address}
                  </div>
                ) : null}
              </FormGroup>
              <div className="badge">{values.percent}%</div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                className="btn-multiple-state submit"
                type="submit"
                onClick={() => {
                  handleSubmit();
                  handleClose();
                }}
              >
                {translate('sale.fnb.modal-vat.btn-1')}
              </Button>
              <Button
                color="primary"
                outline
                className="btn-multiple-state cancel"
                onClick={handleClose}
              >
                {translate('sale.fnb.modal-decoupling.btn-2')}
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
});
