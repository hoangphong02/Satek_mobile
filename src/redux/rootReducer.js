import { combineReducers } from 'redux';

import employee from './employee/reducer';
import menu from './menu/reducer';
import permissions from './permissions/reducer';
import roles from './roles/reducer';
import user from './user/reducer';
import regionGroup from './regionGroup/reducer';
import common from './common/reducer';
import work from './work/reducer';
import workTracking from './workTracking/reducer';
import region from './region/reducer';
import config from './config/reducer';
import shop from './shop/reducer';
import staff from './staff/reducer';
import workTime from './workTime/reducer';
import workOff from './workOff/reducer';
import workConfig from './workConfig/reducer';
import salary from './salary/reducer';
import unit from './unit/reducer';
import category from './category/reducer';
import saler from './saler/reducer';
import contract from './contract/reducer';
import customer from './customer/reducer';
import product from './product/reducer';
import sale from './sale/reducer';
import supplier from './supplier/reducer';
import warehouse from './warehouse/reducer';
import discount from './discount/reducer';
import order from './order/reducer';
import chart from './chart/reducer';
import tableGroup from './tableGroup/reducer';
import table from './table/reducer';
import packageRdx from './package/reducer';
import feature from './feature/reducer';
import kitchen from './kitchen/reducer';
import report from './report/reducer';
import transaction from './transaction/reducer';
import payment from './payment/reducer';

const rootReducer = combineReducers({
  employee,
  menu,
  roles,
  user,
  permissions,
  regionGroup,
  common,
  work,
  workTracking,
  region,
  config,
  shop,
  staff,
  workConfig,
  workTime,
  workOff,
  salary,
  saler,
  unit,
  category,
  sale,
  product,
  customer,
  contract,
  supplier,
  warehouse,
  discount,
  order,
  chart,
  tableGroup,
  table,
  packageRdx,
  feature,
  kitchen,
  report,
  transaction,
  payment,
});

export default rootReducer;
