export const handleCalculateDiscountPercent = (productsList, paymentOrder, withoutMaximum = false) => {
  const result = (handleCalculateTotalWithoutDiscount(productsList)
    / 100)
    * (paymentOrder?.discount?.number);
  return (result > paymentOrder?.discount?.maximum && withoutMaximum === false)
    ? paymentOrder?.discount?.maximum
    : result;
};

export const handleCalculateProductPriceWithDiscount = (price, discountData) => {
  let result = price;
  if (result >= discountData?.condition || discountData?.condition === null) {
    if (discountData?.type === 'money') {
      result -= discountData?.number;
    } else if (discountData?.type === 'percent') {
      const pricePercent = (result / 100) * discountData?.number;
      if (pricePercent > discountData?.maximum) {
        result -= discountData?.maximum;
      } else {
        result -= pricePercent;
      }
    }
  }
  return result;
};

export const handleCalculateDiscountPrice = (price, discountData, withoutMaximum = false) => {
  let result = 0;
  if (price >= discountData?.condition || discountData?.condition === null) {
    if (discountData?.type === 'money') {
      result = discountData?.number;
    } else if (discountData?.type === 'percent') {
      const pricePercent = (price / 100) * discountData?.number;
      if (pricePercent > discountData?.maximum && withoutMaximum === false) {
        result = discountData?.maximum;
      } else {
        result = pricePercent;
      }
    }
  }
  return result;
};

export const handleCalculateTotalWithoutDiscount = (productsList) => {
  const result = productsList.reduce(
    (total, item) => total + handleCalculateProductPriceWithDiscount(item.price * item.quantity, item.discount),
    0,
  );
  return result;
};

export const handleCalculateTotal = (productsList, paymentOrder) => {
  const total = handleCalculateTotalWithoutDiscount(productsList);
  const result = paymentOrder?.discount === null || paymentOrder?.discount?.type === 'gift'
    ? total
    : paymentOrder?.discount?.type === 'money'
      ? total - parseInt(paymentOrder.discount?.number)
      : total - handleCalculateDiscountPercent(productsList, paymentOrder);
  return result;
};

export const handleCalculateTotalDiscount = (productsList, decrease) => {
  let total = decrease;
  // eslint-disable-next-line no-return-assign
  productsList.map((item) => total -= item.decrease);
  return total;
};
