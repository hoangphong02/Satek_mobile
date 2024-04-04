import moment from 'moment';
import {
  memo,
  useState,
} from 'react';
import { useSelector } from 'react-redux';

import { parseCurrency, translate } from '~/helpers/utils';
import { RenderQrCode } from '~/pages/Sale/Retail/components';

export const SellQuickly = memo(
  ({ tableActive, handlePayment, handleBack }) => {
    const { profileUser } = useSelector((store) => store.user);
    const { getAllProductsSaleState, getAllTableGroupsSaleState } = useSelector(
      (store) => store.sale,
    );

    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [customerPay, setCustomerPay] = useState(
      tableActive.products.reduce(
        (total, item) => total
          + item.number
          + (getAllProductsSaleState?.data?.find(
            (item2) => item2.id === item.id && item2.code === item.code,
          )?.price || 0),
        0,
      ),
    );

    const img = `https://img.vietqr.io/image/${
      profileUser?.data?.shop_info?.config?.bank?.name
    }-${
      profileUser?.data?.shop_info?.config?.bank?.number
    }-qr_only.jpg?amount=${tableActive.products.reduce(
      (total, item) => total
        + item.number
        + (getAllProductsSaleState?.data?.find(
          (item2) => item2.id === item.id && item2.code === item.code,
        )?.price || 0),
      0,
    )}&addInfo=${encodeURIComponent(
      tableActive.key === 'bring-back'
        ? translate('sale.fnb.bring-back')
        : `${
          getAllTableGroupsSaleState?.data
            ?.find((item) => item.id === tableActive.group)
            ?.tables?.data?.find((item) => item.id === tableActive.key)?.name
        } ${
          getAllTableGroupsSaleState?.data?.find(
            (item) => item.id === tableActive.group,
          )?.name
        }`,
    )}&accountName=${encodeURIComponent(
      profileUser?.data?.shop_info?.config?.bank?.account,
    )}`;

    return (
      <>
        <div className="sell-quickly-container">
          <div className="payment-header">
            <div className="cart-header-control">
              <p className="name">
                {profileUser?.data?.name
                  || profileUser?.data?.email
                  || profileUser?.data?.username}
              </p>
              <p className="order-time">
                {moment(tableActive?.created_at).format('DD/MM/YYYY HH:mm')}
              </p>
            </div>
          </div>
          <div className="payment-content">
            <div className="section-title section-1">
              <div>
                <p>{translate('sale.sell-casual-tab.title-1')}</p>
              </div>
              <p>
                {parseCurrency(
                  tableActive.products.reduce(
                    (total, item) => total
                      + item.number
                      + (getAllProductsSaleState?.data?.find(
                        (item2) => item2.id === item.id && item2.code === item.code,
                      )?.price || 0),
                    0,
                  ),
                )}
              </p>
            </div>
            <div className="section-title section-3">
              <p>{translate('sale.sell-casual-tab.title-3')}</p>
              <p>
                {parseCurrency(
                  tableActive.products.reduce(
                    (total, item) => total
                      + item.number
                      + (getAllProductsSaleState?.data?.find(
                        (item2) => item2.id === item.id && item2.code === item.code,
                      )?.price || 0),
                    0,
                  ),
                )}
              </p>
            </div>
            <div className="section-title section-4">
              <p>{translate('sale.sell-casual-tab.title-4')}</p>
              <input
                type="number"
                value={customerPay}
                onChange={(e) => setCustomerPay(e.target.value)}
              />
            </div>
            <div className="section-payment">
              <p
                className={paymentMethod === 'cash' ? 'active' : ''}
                onClick={() => setPaymentMethod('cash')}
              >
                <span />
                {translate('sale.sell-casual-tab.payment-type.cash')}
              </p>
              <p
                className={paymentMethod === 'bank' ? 'active' : ''}
                onClick={() => setPaymentMethod('bank')}
              >
                <span />
                {translate('sale.sell-casual-tab.payment-type.bank')}
              </p>
            </div>
            {paymentMethod === 'bank' ? (
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
                    {profileUser?.data?.shop_info?.config?.bank?.name} -{' '}
                    {profileUser?.data?.shop_info?.config?.bank?.account} -{' '}
                    {profileUser?.data?.shop_info?.config?.bank?.number}
                  </div>
                  <RenderQrCode image={img} />
                </div>
              </>
            ) : null}
            {parseInt(customerPay)
            !== tableActive.products.reduce(
              (total, item) => total
                + item.number
                + (getAllProductsSaleState?.data?.find(
                  (item2) => item2.id === item.id && item2.code === item.code,
                )?.price || 0),
              0,
            ) ? (
              <div className="section-title section-5">
                <p>{translate('sale.sell-casual-tab.title-5')}</p>
                <p>
                  {parseCurrency(
                    parseInt(customerPay)
                      - tableActive.products.reduce(
                        (total, item) => total
                          + item.number
                          + (getAllProductsSaleState?.data?.find(
                            (item2) => item2.id === item.id && item2.code === item.code,
                          )?.price || 0),
                        0,
                      ),
                  )}
                </p>
              </div>
              ) : null}
          </div>
          <div className="payment-footer">
            <button type="button" onClick={() => handlePayment(paymentMethod)}>
              {translate('sale.sell-casual-tab.btn-payment')}
            </button>
            <button type="button" onClick={handleBack}>
              {translate('user.user-profile.back')}
            </button>
          </div>
        </div>
      </>
    );
  },
);
