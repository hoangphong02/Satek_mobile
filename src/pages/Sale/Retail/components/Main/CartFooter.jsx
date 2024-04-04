import { memo, useEffect, useState } from 'react';

import { useDebounce } from '~/helpers/hooks';
import { parseCurrency, translate } from '~/helpers/utils';
import { handleCalculateProductPriceWithDiscount } from '../../functions';

export const CartFooter = memo(
  ({
    sellType, noteOrderData, productsList, handleChangeNoteOrder,
  }) => {
    const [note, setNote] = useState(noteOrderData || '');

    const noteDebounce = useDebounce(note, 500);

    useEffect(() => {
      if (noteDebounce !== noteOrderData) {
        handleChangeNoteOrder(noteDebounce);
      }
    }, [noteDebounce]);

    return (
      <div className="cart-footer">
        <div className="cart-footer-left">
          <textarea
            placeholder={translate('sale.container.footer.note-placeholder')}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        {
          sellType === 'sellCasual' && (
          <div className="cart-footer-right">
            <div className="total-price-tmp">
              {translate('sale.container.footer.total-price-tmp')}:{' '}
              {/* <span>
                {parseCurrency(productsList.reduce((total, item) => total + item.price, 0))}
              </span> */}
            </div>
            <div className="total-price">
              {parseCurrency(
                productsList.reduce((total, item) => total + handleCalculateProductPriceWithDiscount(item.price * item.quantity, item.discount), 0),
              )}
            </div>
          </div>
          )
        }
      </div>
    );
  },
);
