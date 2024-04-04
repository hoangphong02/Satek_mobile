import { getCurrentLanguage } from './general';

export const checkValue = (value, payload) => {
  if (value === null) {
    return getCurrentLanguage() === 'vn'
      ? 'Thông tin chưa được cung cấp'
      : 'Information has not been provided';
  }
  if (payload === null || payload === undefined) {
    return value;
  }
  return payload;
};
