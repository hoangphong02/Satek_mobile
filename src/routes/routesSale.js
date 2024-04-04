import { v4 as uuidv4 } from 'uuid';

import config from '~/configs';
import { SaleFNBPage, SalePage, SaleRetailPage } from '~/pages/Sale';

export default [
  {
    id: `sale-user${uuidv4()}`,
    path: config.routesSale.root,
    component: SalePage,
  },
  {
    id: `sale-user${uuidv4()}`,
    path: config.routesSale.retail,
    component: SaleRetailPage,
  },
  {
    id: `sale-user${uuidv4()}`,
    path: config.routesSale.fnb,
    component: SaleFNBPage,
  },
];
