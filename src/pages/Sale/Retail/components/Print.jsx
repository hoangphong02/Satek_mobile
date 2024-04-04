import JsBarcode from 'jsbarcode';
import moment from 'moment';
import React, { useEffect, useRef } from 'react';
import { formattedPhoneNumber, numberToVietnameseCurrency, parseCurrency } from '~/helpers/utils';
import { handleCalculateDiscountPercent, handleCalculateTotalDiscount } from '../functions';

export const Print = React.forwardRef((props, ref) => {
  const {
    dataOrder,
    dataCustomer,
    image,
    isTmp,
    dataPaid,
  } = props;
  const { data: { shop_info: { config } } } = dataCustomer;
  return (
    <div className="" ref={ref}>
      <div
        id="content"
        style={{
          background: 'white',
          width: '120mm',
        }}
      >
        <div
          className=""
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '0 30px',
          }}
        >
          <h3
            style={{
              margin: '0',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            {
              config?.bill?.name
            }
          </h3>
          <p
            style={{
              margin: '0',
              textAlign: 'center',
            }}
          >
            {
              config?.bill?.address
            }
          </p>
          <p
            style={{
              margin: '0',
              textAlign: 'center',
            }}
          >DT: {formattedPhoneNumber(config?.bill?.phone)} - {formattedPhoneNumber(config?.bill?.phone)}
          </p>
        </div>
        {
          !isTmp && (
            <RenderBarcode
              data={dataOrder?.data?.code}
            />
          )
        }
        <div
          className=""

        >
          <div
            className="title"
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >Hóa đơn bán hàng
          </div>
          <div
            className=""
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>Số hd: {isTmp ? 'Đơn tạm' : dataOrder?.data?.code}</div>
          </div>
          <div
            className=""
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>Ngày in: {moment(dataOrder?.data?.created_at).format('DD.MM.YYYY')}</div>
            <div className="">Giờ in: {moment(dataOrder?.data?.created_at).format('HH:mm')}</div>
          </div>
          <div
            className=""
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>Thu ngân: {dataOrder?.data?.staff?.data?.username || dataCustomer?.data?.name}</div>
            <div className="">Khách hàng: {dataOrder?.data?.name}</div>
          </div>

          <table
            style={{
              width: '100%',
              marginTop: '10px',
              borderSpacing: 0,
              borderCollapse: 'collapse',
              pageBreakInside: 'avoid',
            }}
          >
            <thead
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textAlign: 'left',
                border: 0,
              }}
            >
              <tr
                style={{
                  background: '#ccc',
                  width: '100%',
                }}
              >
                <th
                  style={{
                    width: '5%',
                  }}
                />
                <th
                  style={{
                    width: '40%',
                  }}
                >Tên hàng
                </th>
                <th
                  style={{
                    width: '10%',
                  }}
                >SL
                </th>
                <th
                  style={{
                    width: '20%',
                  }}
                >Đơn giá
                </th>
                <th
                  style={{
                    width: '25%',
                    textAlign: 'right',
                  }}
                >T.Tiền
                </th>
              </tr>
            </thead>
            <tbody>
              {
                dataOrder?.data?.items?.data.map((item, index) => (
                  <>
                    <tr
                      style={{
                        borderBottom: '1px solid #ccc',
                      }}
                      key={index}
                    >
                      <td>{index + 1}</td>
                      <td
                        style={{
                          textAlign: 'left',
                        }}
                      >
                        <div className="">
                          {item?.product?.name || item?.name}
                        </div>
                      </td>
                      <td>{item?.number}</td>
                      <td>{parseCurrency(item?.price, '')}</td>
                      <td
                        style={{
                          textAlign: 'right',
                        }}
                      >
                        <div
                          className=""
                          style={item?.discount ? {
                            textDecoration: 'line-through',
                          } : {}}
                        >
                          {
                            parseCurrency(
                              item?.total,
                            )
                          }
                        </div>
                      </td>
                    </tr>
                    {item?.discount?.id
                      && (
                        <tr
                          style={{
                            borderBottom: '1px solid #ccc',
                          }}
                          key={index}
                        >
                          <td />
                          <td
                            style={{
                              textAlign: 'left',
                            }}
                          >
                            Giảm còn:
                          </td>
                          <td />
                          <td />
                          <td
                            style={{
                              textAlign: 'right',
                            }}
                          >
                            <div className="">{parseCurrency(isTmp ? item?.priceDiscount : item?.total, '')}</div>
                          </td>
                        </tr>
                      )}
                  </>

                ))
              }
              {
                dataOrder?.data?.discount && (
                  <tr
                    style={{
                      fontSize: '14px',
                    }}
                  >
                    <td />
                    <td>Giảm tổng đơn</td>
                    <td />
                    <td />
                    <td
                      style={{
                        textAlign: 'right',
                      }}
                    >
                      <div className="">
                        {
                          parseCurrency(
                            isTmp
                              ? handleCalculateDiscountPercent(dataOrder?.data?.items?.data, dataOrder?.data?.discount)
                              : handleCalculateTotalDiscount(dataOrder?.data?.items?.data, dataOrder?.data?.decrease), '',
                          )
                        }
                      </div>
                    </td>
                  </tr>
                )
              }
              <tr
                style={{
                  fontSize: '14px',
                }}
              >
                <td>TC
                </td>
                <td />
                <td>
                  {
                    dataOrder?.data?.items?.data?.reduce((acc, item) => acc + item.number, 0)
                  }
                </td>
                <td />
                <td
                  style={{
                    textAlign: 'right',
                  }}
                >
                  <div className="">
                    {
                      parseCurrency(
                        isTmp
                          ? dataOrder?.data?.discount?.discount
                            ? dataOrder?.data?.total2
                            : dataOrder?.data?.total
                          : dataOrder?.data?.total, '',
                      )
                    }
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            className=""
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            <div
              className=""
              style={{
                textTransform: 'uppercase',
              }}
            >
              {
                dataOrder?.data?.payment === 'cash' ? 'Tiền mặt' : 'Chuyển khoản'
              }
            </div>
            <div className="">
              {
                parseCurrency(
                  isTmp
                    ? dataOrder?.data?.discount?.discount
                      ? dataOrder?.data?.total2
                      : dataOrder?.data?.total
                    : dataOrder?.data?.total, '',
                )
              }
            </div>
          </div>

          {
            !isTmp && (
              <>

                <div
                  className=""
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '14px',
                  }}
                >
                  <div>Khách trả:
                  </div>
                  <div className="">{parseCurrency(dataPaid?.customer, '')}</div>
                </div>
                <div
                  className=""
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '14px',
                  }}
                >
                  <div>Tiền thừa:
                  </div>
                  <div className="">{parseCurrency(dataPaid?.return, '')}</div>
                </div>
              </>
            )
          }
          <i
            style={{
              textTransform: 'capitalize',
              fontSize: '11px',
            }}
          >{ dataOrder?.data?.discount?.type ? numberToVietnameseCurrency(dataOrder?.data?.total2) : numberToVietnameseCurrency(dataOrder?.data?.total)}
          </i>
          <hr />
          <div
            className=""
            style={{
              textAlign: 'center',
            }}
          >
            {config?.bank?.name} - {config?.bank?.account} - {config?.bank?.number}
          </div>
          <RenderQrCode
            image={image}
          />
          <div
            className=""
            style={{
              textAlign: 'center',
              paddingTop: '20px',
            }}
          >
            <p
              style={{ whiteSpace: 'pre-line' }}
              className="mk-fz-16 mk-fw-500 mk-text-left"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: config?.bill?.footer,
              }}
            />
          </div>
          <p
            style={{
              textAlign: 'center',
            }}
          >Satek đồng hàng cùng {config?.bill?.name}
          </p>
        </div>

      </div>

    </div>
  );
});

export const RenderQrCode = ({ image }) => (
  <div className="">
    <img src={image} alt="QR" />
  </div>
);

export const RenderBarcode = ({ data }) => {
  const barcodeRef = useRef();
  useEffect(() => {
    if (data) {
      JsBarcode(barcodeRef.current, data);
    }
  }, [data]);
  return (
    <div>
      <svg ref={barcodeRef} />
    </div>
  );
};
