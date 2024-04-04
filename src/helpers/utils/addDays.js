export const addDays = (date = new Date(), days) => {
  date.setDate(date.getDate() + days);
  return date;
};
