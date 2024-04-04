export const getField = (data, item, fieldCompare = '', field) => data.find((i) => {
  if (fieldCompare !== '') {
    return i.id === item[fieldCompare];
  }
  return item.id === item;
})?.[field];
