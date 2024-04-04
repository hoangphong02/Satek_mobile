import {
  memo, useEffect, useRef, useState,
} from 'react';
import {
  Dropdown, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { useDebounce, useOnClickOutside } from '~/helpers/hooks';
import { convertToSlug, parseCurrency, translate } from '~/helpers/utils';
import { getAllBillsSaleRequest } from '~/redux/sale/actions';

export const SearchProductSection = memo(({
  handleSelectBillInfo, handleAddProductToOrder,
}) => {
  const {
    profileUser,
  } = useSelector((store) => store.user);
  const {
    getAllProductsSaleState,
    isGetAllBillsSaleRequest,
    getAllBillsSaleState,
  } = useSelector((store) => store.sale);
  const dispatch = useDispatch();

  const searchProductInputRef = useRef(null);

  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('productId');
  const [barcodeScannerData, setBarcodeScannerData] = useState('');
  const [isShowModalBarcodeScanner, setIsShowModalBarcodeScanner] = useState(false);

  const searchInputDebounce = useDebounce(searchInput, 500);

  const handleCloseModalBarcodeScanner = () => {
    setIsShowModalBarcodeScanner(false);
    setBarcodeScannerData('');
  };

  useOnClickOutside(searchProductInputRef, () => {
    setSearchInput('');
  });

  useEffect(() => {
    if (searchType === 'orderId') {
      dispatch(
        getAllBillsSaleRequest(
          `data->billCode=${encodeURI(searchInputDebounce)}`,
        ),
      );
    }
  }, [searchInputDebounce]);

  useEffect(() => {
    if (barcodeScannerData) {
      setSearchType('productId');
      setSearchInput(barcodeScannerData);
      handleCloseModalBarcodeScanner();
    }
  }, [barcodeScannerData]);

  return (
    <>
      <div className={profileUser?.data?.shop_info?.type !== 'pharmacy' ? 'hidden-search-bill' : ''}>
        <i className="simple-icon-magnifier btn-icon-search" />
        <input
          type="text"
          id="search-header"
          name="search-header"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder={
            searchType === 'productId'
              ? translate('sale.header.search-input.placeholder-1')
              : translate('sale.header.search-input.placeholder-2')
          }
        />
        {profileUser?.data?.shop_info?.type === 'pharmacy' ? (
          <>
            {searchType === 'productId' ? (
              <i
                className="iconsminds-letter-open btn-icon-change-search-type"
                onClick={profileUser?.data?.shop_info?.type === 'pharmacy' ? () => setSearchType('orderId') : () => {}}
              />
            ) : (
              <i
                className="iconsminds-medicine-3 btn-icon-change-search-type"
                onClick={() => setSearchType('productId')}
              />
            )}
          </>
        ) : null}
        <OverlayTrigger
          placement="right"
          overlay={(
            <Tooltip id="tooltip-right">
              {translate('sale.barcode-scanner')}
            </Tooltip>
          )}
        >
          <i
            className="iconsminds-remote-controll-2 btn-barcode-scanner"
            onClick={() => setIsShowModalBarcodeScanner(true)}
          />
        </OverlayTrigger>
      </div>

      <Dropdown
        show={searchInput.trim().length > 0}
        className="dropdown-product-header"
        ref={searchProductInputRef}
      >
        <Dropdown.Menu>
          {searchType === 'orderId' ? (
            isGetAllBillsSaleRequest ? (
              <p className="title-empty" style={{ width: '100%', justifyContent: 'center' }}>{translate('sale.loading-customer-title')}</p>
            ) : getAllBillsSaleState?.data?.length > 0 ? (
              getAllBillsSaleState.data.map((item, index) => (
                <div
                  className="dropdown-item"
                  key={index}
                  onClick={() => {
                    handleSelectBillInfo(item);
                    setSearchInput('');
                  }}
                >
                  <div>
                    <p className="mb-0">
                      -{' '}
                      <strong>
                        {translate('sale.dropdown.bill-code')}
                      </strong>
                      : {item?.data?.billCode}
                    </p>
                    <p className="mb-0">
                      <span style={{ color: 'transparent' }}>-</span>{' '}
                      <strong>
                        {translate('sale.dropdown.order-code')}
                      </strong>
                      : {item?.order?.data?.code}
                    </p>
                    <p className="mb-0">
                      <span style={{ color: 'transparent' }}>-</span>{' '}
                      <strong>
                        {translate('sale.dropdown.username-name')}
                      </strong>
                      : {item?.order?.data?.name}
                      {item?.order?.data?.phone
                        ? ' - '.concat(item?.order?.data?.phone)
                        : ''}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="title-empty" style={{ width: '100%', justifyContent: 'center' }}>{translate('sale.empty-bill-info')}</p>
            )
          ) : (
            getAllProductsSaleState?.data
              ?.filter(
                (item) => convertToSlug(item?.name)
                  ?.includes(convertToSlug(searchInput.trim()))
                  || convertToSlug(item?.barcode)
                    ?.includes(convertToSlug(searchInput.trim()))
                  || convertToSlug(item?.code)
                    ?.includes(convertToSlug(searchInput.trim()))
                  || convertToSlug(item?.source)
                    ?.includes(convertToSlug(searchInput.trim()))
                  || convertToSlug(item?.unit)
                    ?.includes(convertToSlug(searchInput.trim())),
              )
              ?.length > 0 ? getAllProductsSaleState?.data
                ?.filter(
                  (item) => convertToSlug(item?.name)
                    ?.includes(convertToSlug(searchInput.trim()))
                  || convertToSlug(item?.barcode)
                    ?.includes(convertToSlug(searchInput.trim()))
                  || convertToSlug(item?.code)
                    ?.includes(convertToSlug(searchInput.trim()))
                  || convertToSlug(item?.source)
                    ?.includes(convertToSlug(searchInput.trim()))
                  || convertToSlug(item?.unit)
                    ?.includes(convertToSlug(searchInput.trim())),
                )
                ?.map((item, index) => (
                  <div
                    className="dropdown-item"
                    key={index}
                    onClick={() => {
                      handleAddProductToOrder(item);
                      setSearchInput('');
                    }}
                  >
                    <img src={item?.image} alt="" />
                    <div>
                      <div>
                        <p>
                          {item?.name}
                          {item?.source
                            ? ' - '.concat(item.source)
                            : ''} - {item?.unit}
                        </p>
                        <span>{parseCurrency(item?.price)}</span>
                      </div>
                      <p>{item?.code}</p>
                      {
        profileUser?.data?.type === 'shop' ? (
          <>
            <p className="mb-0">
              {translate('sale.quantity')}: {item?.warehouses?.data?.length === 0 ? translate('sale.inventory-empty') : null}
            </p>
            {item?.warehouses?.data?.map((item2, index) => (
              <p key={index} className="mb-0">
                <span style={index > 0 ? { color: 'transparent' } : {}}>-</span> {item2?.warehouse_name}: {item2?.number}
              </p>
            ))}
          </>
        ) : (
          <p className="mb-0">{translate('sale.inventory')}: {item?.warehouses?.data?.find((item2) => item2.warehouse_id === profileUser?.data?.warehouse?.id)?.number || <strong>{translate('sale.inventory-empty')}</strong>}</p>
        )
}
                    </div>
                  </div>
                )) : <p className="title-empty" style={{ width: '100%', justifyContent: 'center' }}>{translate('sale.empty-bill-info')}</p>
          )}
        </Dropdown.Menu>
      </Dropdown>

      {isShowModalBarcodeScanner ? (
        <ModalBarcodeScanner
          isOpen={isShowModalBarcodeScanner}
          handleClose={handleCloseModalBarcodeScanner}
          setBarcodeScannerData={setBarcodeScannerData}
        />
      ) : null}
    </>
  );
});

const ModalBarcodeScanner = memo(({ handleClose, setBarcodeScannerData }) => (
  <Modal
    isOpen
    size="sm"
    className="sale modal-confirm-actions-customer-sale modal-barcode-scanner"
  >
    <ModalHeader toggle={handleClose}>{translate('sale.barcode-scanner')}</ModalHeader>
    <ModalBody>
      <BarcodeScannerComponent
        onUpdate={(_, result) => {
          if (result) setBarcodeScannerData(result.text);
          else setBarcodeScannerData('');
        }}
      />
    </ModalBody>
  </Modal>
));
