import { getCurrentLanguage } from './general';

export const getSessionOfDay = () => {
  const date = new Date();
  const hh = date.getHours();

  let session = '';

  if (hh >= 5 && hh <= 11) {
    session = getCurrentLanguage() === 'vn' ? 'sáng' : 'morning';
  } else if (hh >= 12 && hh <= 17) {
    session = getCurrentLanguage() === 'vn' ? 'chiều' : 'afternoon';
  } else {
    session = getCurrentLanguage() === 'vn' ? 'tối' : 'evening';
  }

  return session;
};
