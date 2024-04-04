import { memo } from 'react';
// import {
//   Dropdown,
// } from 'react-bootstrap';
import { translate } from '~/helpers/utils';
import { SearchProductSection } from '~/pages/Sale/components';

export const Header = memo(
  ({
    tabsList, tabActive, setTabActive, tableActive, tableGroupActive, handleAddProductToOrder, getAllTablesSaleState,
  }) => (
    <header className="sale-fnb--header">
      <div className="header-left">
        <ul className="header-tabs">
          {tabsList.map((item, index) => (
            <li
              key={index}
              className={`${item.key === tabActive ? 'active' : ''} ${item.mobile ? 'mobile' : ''}`}
              onClick={() => setTabActive(item.key)}
            >
              {item.icon ? <i className={item.icon} /> : null}
              {translate(item.label)}
            </li>
          ))}
        </ul>
        <SearchProductSection type="fnb" handleAddProductToOrder={handleAddProductToOrder} />
      </div>
      <div className="header-right">
        <div className="header-orders">
          <ul className="header-tabs">
            <li className="active">
              {tableActive.key === 'bring-back'
                ? translate('sale.fnb.order-bring-back')
                : `${translate('sale.fnb.order-table')} ${
                  getAllTablesSaleState?.data?.find((table) => Number(table?.id) === Number(tableActive?.key))?.name
                }${
                  tableGroupActive === 'all'
                    ? ` - ${
                      getAllTablesSaleState?.data?.find((table) => Number(table?.id) === Number(tableActive?.key))?.group_id
                    }`
                    : ''
                }`}
              {/* <span>Xoá</span> */}
            </li>
            {/* <li>Phòng bàn <span>Xoá</span></li> */}
          </ul>
          {/* <span>Thêm</span> */}
        </div>
        <ul className="header-right-actions">
          {/* <li>
              <i className="simple-icon-printer" />
            </li> */}
          {/* <li>Admin</li> */}
          {/* <li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <i className="simple-icon-menu" />
                </Dropdown.Toggle>
              </Dropdown>
            </li> */}
        </ul>
      </div>
    </header>
  ),
);
