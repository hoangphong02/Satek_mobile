import { defaultListen } from '~/constants/defaultValues';

export const checkLoud = () => {
  const current = localStorage.getItem('isListen') || defaultListen;
  return JSON.parse(current);
};
