import { all } from 'redux-saga/effects';
import employee from './employee/saga';
import permissions from './permissions/saga';
import roles from './roles/saga';
import user from './user/saga';
import regionGroup from './regionGroup/saga';
import common from './common/saga';
import work from './work/saga';
import workTracking from './workTracking/saga';
import region from './region/saga';
import config from './config/saga';
import shop from './shop/saga';
import staff from './staff/saga';
import workTime from './workTime/saga';
import workOff from './workOff/saga';
import workConfig from './workConfig/saga';
import salary from './salary/saga';
import unit from './unit/saga';
import category from './category/saga';
import saler from './saler/saga';
import contract from './contract/saga';
import customer from './customer/saga';
import product from './product/saga';
import sale from './sale/saga';
import supplier from './supplier/saga';
import warehouse from './warehouse/saga';
import discount from './discount/saga';
import order from './order/saga';
import chart from './chart/saga';
import tableGroup from './tableGroup/saga';
import table from './table/saga';
import packageRdx from './package/saga';
import feature from './feature/saga';
import kitchen from './kitchen/saga';
import report from './report/saga';
import transaction from './transaction/saga';
import payment from './payment/saga';

export default function* rootSaga() {
  yield all([
    employee(),
    user(),
    roles(),
    permissions(),
    regionGroup(),
    common(),
    work(),
    workTracking(),
    region(),
    config(),
    shop(),
    staff(),
    workConfig(),
    workTime(),
    workOff(),
    salary(),
    saler(),
    unit(),
    category(),
    sale(),
    product(),
    customer(),
    contract(),
    supplier(),
    warehouse(),
    discount(),
    order(),
    chart(),
    tableGroup(),
    table(),
    packageRdx(),
    feature(),
    kitchen(),
    report(),
    transaction(),
    payment(),
  ]);
}
