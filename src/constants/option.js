import { IntlMessages } from '~/helpers/utils';

export const optionCancelOrder = [
  {
    id: 1,
    value: 'Khách bom hàng',
    label: 'Khách bom hàng',
  },
];

export const optionStatusKitchen = [
  {
    value: 'printed',
    label: <IntlMessages id="kitchen.order.printed" />,
    color: 'primary',
  },
  {
    value: 'waiting',
    label: <IntlMessages id="kitchen.order.waiting" />,
    color: 'warning',
  },
];

export const optionStatusDishCancel = [
  {
    value: 'waiting',
    label: <IntlMessages id="kitchen.order.dish-cancel.waiting" />,
    color: 'warning',
  },
  {
    value: 'approve',
    label: <IntlMessages id="kitchen.order.dish-cancel.approve" />,
    color: 'primary',
  },
  {
    value: 'reject',
    label: <IntlMessages id="kitchen.order.dish-cancel.reject" />,
    color: 'danger',
  },
];
