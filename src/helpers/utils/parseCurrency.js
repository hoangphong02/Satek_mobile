export const parseCurrency = (value, currency = 'VND', type = 'it-IT') => {
  const test = currency.length === 0;
  if (!test) {
    return parseFloat(value || 0).toLocaleString(type, {
      style: 'currency',
      currency,
    });
  } else {
    return parseFloat(value || 0).toLocaleString(type);
  }
};
