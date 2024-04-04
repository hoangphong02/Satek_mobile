import { Form, Formik } from 'formik';
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

import { useDebounce, useOnClickOutside } from '~/helpers/hooks';
import { parseCurrency, translate } from '~/helpers/utils';
import {
  handleCalculateDiscountPrice,
  handleCalculateProductPriceWithDiscount,
} from '../../functions';

export const CartItem = memo(
  ({
    data,
    lengthIndex,
    index,
    handleChangeQuantityProductFromOrder,
    handleRemoveProductFromOrder,
    handleChangeNoteProductFromOrder,
    handleChangeDiscountFromProductItem,
  }) => {
    const {
      profileUser,
    } = useSelector((store) => store.user);
    const {
      isGetAllDiscountsSaleRequest,
      isGetAllDiscountsSaleSuccess,
      getAllDiscountsSaleState,
    } = useSelector((store) => store.sale);

    const dropdownDiscountRef = useRef(null);

    const [isShowNoteInput, setIsShowNoteInput] = useState(false);
    const [quantity, setQuantity] = useState(data.quantity || 1);
    const [note, setNote] = useState(data.note || '');
    const [discountInput, setDiscountInput] = useState('');
    const [isShowDropdownDiscount, setIsShowDropdownDiscount] = useState(false);
    const [dataActive, setDataActive] = useState(null);

    const quantityDebounce = useDebounce(quantity, 500);
    const noteDebounce = useDebounce(note, 500);

    useOnClickOutside(dropdownDiscountRef, () => {
      setDiscountInput('');
      setIsShowDropdownDiscount(false);
    });

    useEffect(() => {
      if (quantityDebounce !== data.quantity) {
        if (parseInt(quantityDebounce) < 1) {
          handleRemoveProductFromOrder(data);
        } else if (profileUser?.data?.type === 'shop') {
          if (quantityDebounce > data?.warehouses?.data?.find((item) => item?.warehouse_id === profileUser?.data?.warehouse?.id)?.number) {
            setQuantity(data.warehouses.data.find((item) => item.warehouse_id === profileUser.data.warehouse.id).number);
          } else {
            handleChangeQuantityProductFromOrder(data, quantityDebounce);
          }
        } else {
          handleChangeQuantityProductFromOrder(data, quantityDebounce);
        }
      }
    }, [quantityDebounce]);

    useEffect(() => {
      if (noteDebounce !== data.note) {
        handleChangeNoteProductFromOrder(data, noteDebounce);
      }
    }, [noteDebounce]);

    useEffect(() => {
      if (data) {
        if (quantity !== data.quantity) {
          setQuantity(data.quantity);
        }
      }
    }, [data]);

    return (
      <>
        <div className="cart-item">
          <div className="cart-item-left">
            <span>{index}</span>
            <i
              className="simple-icon-trash"
              onClick={() => handleRemoveProductFromOrder(data)}
            />
            <img src={data.image} alt="" />
          </div>
          <div className="cart-item-content">
            <div className="cart-item-primary">
              <div className="cart-content-info">
                <div className="top">
                  <p className="code">{data.code}</p>
                  <p className="name">
                    {data?.name}
                    {data?.source ? ' - '.concat(data.source) : ''} -{' '}
                    {data?.unit}
                  </p>
                  {profileUser?.data?.type !== 'shop' ? (
                    <p className="mb-0">
                      {'('}{translate('sale.quantity')}: {data?.warehouses?.data?.find((item) => item?.warehouse_id === profileUser?.data?.warehouse?.id)?.number || translate('sale.inventory-empty')}{')'}
                    </p>
                  ) : null}
                </div>
                <div className="bottom">
                  <div className="quantity mr-2">
                    <button
                      type="button"
                      className="desc"
                      onClick={() => setQuantity(
                        parseInt(quantity) === 0 ? 0 : parseInt(quantity) - 1,
                      )}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={0}
                      step={1}
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button
                      type="button"
                      className="asc"
                      onClick={() => setQuantity(parseInt(quantity) + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-discount">
                    <div className="search-group">
                      {data?.discount ? (
                        <>
                          {data.discount?.type === 'gift' ? (
                            <i className="simple-icon-present" />
                          ) : (
                            <i className="iconsminds-coins" />
                          )}
                          <OverlayTrigger
                            placement="bottom"
                            overlay={(
                              <Tooltip id="tooltip-bottom">
                                {translate('sale.code')}: {data.discount?.code}{' '}
                                - {translate('sale.name')}:{' '}
                                {data.discount?.name}
                              </Tooltip>
                            )}
                          >
                            <p className="discount-selected">
                              {translate('sale.code')}: {data.discount?.code} -{' '}
                              {translate('sale.name')}: {data.discount?.name}
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
                              onClick={() => handleChangeDiscountFromProductItem(
                                null,
                                lengthIndex,
                              )}
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
                              (item) => data.price * data.quantity
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
                                    ?.includes(
                                      discountInput?.toLocaleLowerCase(),
                                    ))
                            ?.map((item, index) => (
                              <div
                                className="dropdown-item"
                                key={index}
                                onClick={() => {
                                  handleChangeDiscountFromProductItem(
                                    item,
                                    lengthIndex,
                                  );
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
                                    <i style={{ color: 'transparent' }}>
                                      -
                                    </i>{' '}
                                    {translate('sale.gift')}: {item.gìt}
                                  </>
                                )}
                                {item.type !== 'gift' && (
                                  <>
                                    <br />
                                    <i style={{ color: 'transparent' }}>
                                      -
                                    </i>{' '}
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
                                    <i style={{ color: 'transparent' }}>
                                      -
                                    </i>{' '}
                                    {translate('sale.maximum')}:{' '}
                                    {parseCurrency(item.maximum)}
                                  </>
                                )}
                                {item.description && (
                                  <>
                                    <br />
                                    <i style={{ color: 'transparent' }}>
                                      -
                                    </i>{' '}
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
                              (item) => data.price * data.quantity
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
                                    ?.includes(
                                      discountInput?.toLocaleLowerCase(),
                                    ))?.length === 0 && (
                                    <p className="loading-title">
                                      {translate('sale.empty-bill-info')}
                                    </p>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  {/* <div className="auto" /> */}
                  <div className="change-price">
                    <input
                      type="text"
                      value={parseCurrency(data.price) || ''}
                      readOnly
                    />
                  </div>
                  <div className="total-price">
                    <p
                      style={
                        data.discount !== null
                          ? { textDecoration: 'line-through', color: '#b1b1b1' }
                          : {}
                      }
                    >
                      <span style={{ color: '#2f2f2e' }}>
                        {translate('sale.cart-item-total')}:{' '}
                      </span>
                      {parseCurrency(data.price * data.quantity)}
                    </p>
                    {data.discount !== null ? (
                      <p>
                        {parseCurrency(
                          handleCalculateProductPriceWithDiscount(
                            data.price * data.quantity,
                            data.discount,
                          ),
                        )}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-item-secondary">
              {data?.discount ? (
                <div
                  className="section-title section-discount-detail"
                  style={{ marginTop: '10px' }}
                >
                  <div>
                    <p className="mb-0">
                      -{' '}
                      {translate(
                        data.discount?.type === 'gift'
                          ? 'sale.gift'
                          : 'sale.cash',
                      )}
                    </p>
                  </div>
                  <div>
                    {data.discount?.type === 'gift' ? (
                      <>
                        <p className="mb-0">
                          - {translate('sale.name')}: {data.discount?.gift}
                        </p>
                        {data.discount?.description && (
                          <p className="mb-0">
                            - {translate('sale.description')}:{' '}
                            {data.discount?.description}
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <p className="mb-0">
                          - {translate('sale.number')}:{' '}
                          {data.discount?.type === 'money' ? (
                            parseCurrency(data.discount?.number)
                          ) : (
                            <>{data.discount?.number}%</>
                          )}
                        </p>
                        {data.discount?.type === 'percent' && (
                          <>
                            <p className="mb-0">
                              - {translate('sale.percent')} (VND):{' '}
                              {parseCurrency(
                                handleCalculateDiscountPrice(
                                  data.price * data.quantity,
                                  data.discount,
                                  true,
                                ),
                              )}
                            </p>
                            <p className="mb-0">
                              - {translate('sale.maximum')}:{' '}
                              <strong>
                                {parseCurrency(data.discount?.maximum)}
                              </strong>
                            </p>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ) : null}
              {isShowNoteInput || data.note ? (
                <div className="note">
                  <textarea
                    placeholder={translate('sale.item.note.placeholder')}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className="cart-item-actions">
            <div className="more-option">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <i className="simple-icon-options-vertical" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => setIsShowNoteInput(!isShowNoteInput)}
                  >
                    <i className="simple-icon-pencil" />{' '}
                    {translate('sale.item.more-action.note')}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDataActive(data)}>
                    <i className="simple-icon-info" />{' '}
                    {translate('sale.item.more-action.detail')}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>

        {dataActive ? (
          <ModalProductDetail
            isOpen
            handleClose={() => setDataActive(null)}
            data={dataActive}
          />
        ) : null}
      </>
    );
  },
);

const ModalProductDetail = memo(({ isOpen, handleClose, data }) => (
  <Modal isOpen={isOpen} size="lg" className="sale modal-actions-customer-sale">
    <ModalHeader>{translate('sale.modal.detail-product')}</ModalHeader>
    <Formik>
      <Form className="av-tooltip tooltip-label-right">
        <ModalBody>
          <div className="d-flex" style={{ gap: '16px' }}>
            <FormGroup className="w-100">
              <Label>
                <strong>{translate('sale.modal.detail-product.code.label')}:</strong>
              </Label>&nbsp;{data?.code}
            </FormGroup>
            <FormGroup className="w-100">
              <Label>
                <strong>{translate('sale.modal.detail-product.barcode.label')}:</strong>
              </Label>&nbsp;{data?.barcode}
            </FormGroup>
          </div>
          <div className="d-flex" style={{ gap: '16px' }}>
            <FormGroup className="w-100">
              <Label>
                <strong>{translate('sale.modal.detail-product.name.label')}:</strong>
              </Label>&nbsp;{data?.name}
            </FormGroup>
            <FormGroup className="w-100">
              <Label>
                <strong>{translate('sale.modal.detail-product.source.label')}:</strong>
              </Label>&nbsp;{data?.source}
            </FormGroup>
          </div>
          <div className="d-flex" style={{ gap: '16px' }}>
            <FormGroup className="w-100">
              <Label>
                <strong>{translate('sale.modal.detail-product.unit.label')}:</strong>
              </Label>&nbsp;{data?.unit}
            </FormGroup>
            <FormGroup className="w-100">
              <Label>
                <strong>{translate('sale.modal.detail-product.price.label')}:</strong>
              </Label>&nbsp;{parseCurrency(data?.price)}
            </FormGroup>
          </div>
          <FormGroup className="w-100">
            <Label>
              <strong>{translate('sale.modal.detail-product.desc.label')}:</strong>
            </Label>&nbsp;{data?.desc || '-'}
          </FormGroup>
          <FormGroup className="w-100">
            <Label>
              <strong>{translate('sale.modal.detail-product.image.label')}:</strong>
            </Label>
            <img
              src={data?.image}
              alt=""
              style={{
                width: '50px', height: '50px', borderRadius: '8px', objectFit: 'contain', border: '1px solid #dddddd', marginLeft: '15px',
              }}
            />
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
        </ModalFooter>
      </Form>
    </Formik>
  </Modal>
));
