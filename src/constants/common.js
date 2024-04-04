import { translate } from '~/helpers/utils';

export const statusActive = [
  {
    value: true,
    label: translate('common.active'),
    color: 'success',
  },
  {
    value: false,
    label: translate('common.unactive'),
    color: 'warning',
  },
];

export const statusContract = [
  {
    value: 'new',
    label: translate('contract.new'),
    color: 'secondary',
  },
  {
    value: 'accepted',
    label: translate('contract.accepted'),
    color: 'success',
  },
  {
    value: 'denied',
    label: translate('contract.denied'),
    color: 'danger',
  },
  {
    value: 'expiry',
    label: translate('contract.expiry'),
    color: 'warning',
  },
];

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
