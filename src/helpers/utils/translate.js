import usLang from '~/lang/entries/en-US';
import vnLang from '~/lang/entries/en-VN';
import { getCurrentLanguage } from './general';

export const translate = (id) => {
  const currentLang = getCurrentLanguage();
  let translateLang = '';
  if (currentLang === 'vn') {
    if (id) {
      translateLang = vnLang.messages[id];
    }
  } else if (currentLang === 'en') {
    if (id) {
      translateLang = usLang.messages[id];
    }
  }

  return translateLang;
};
