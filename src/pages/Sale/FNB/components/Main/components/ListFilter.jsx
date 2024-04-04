import { memo } from 'react';
import { useSelector } from 'react-redux';

import { translate } from '~/helpers/utils';

// List filter tất cả, hoàn thành, đang làm
export const ListFilter = memo(
  ({
    tabActive,
    tableGroupActive,
    setTableGroupActive,
    filterMenu,
    setFilterMenu,
  }) => {
    const {
      getAllCategoriesState,
      getAllTableGroupsSaleState,
    } = useSelector((store) => store.sale);

    return (
      <div className="list-filter-wrapper">
        <ul>
          {tabActive === 'table' ? (
            <li
              className={tableGroupActive === 'all' ? 'active' : ''}
              onClick={() => setTableGroupActive('all')}
            >
              {translate('sale.fnb.all')}
            </li>
          ) : (
            <li
              className={filterMenu === 'all' ? 'active' : ''}
              onClick={() => setFilterMenu('all')}
            >
              {translate('sale.fnb.all')}
            </li>
          )}
          {/* đã làm món xong */}
          {/* {tabActive === 'table' ? (
            <li
              className={tableGroupActive === 'done' ? 'active' : ''}
              onClick={() => setTableGroupActive('done')}
            >
              {translate('sale.fnb.done')}
            </li>
          ) : (
            <li
              className={filterMenu === 'done' ? 'active' : ''}
              onClick={() => setFilterMenu('done')}
            >
              {translate('sale.fnb.done')}
            </li>
          )} */}
          {/* đã làm món chưa xong */}
          {/* {tabActive === 'table' ? (
            <li
              className={tableGroupActive === 'doing' ? 'active' : ''}
              onClick={() => setTableGroupActive('doing')}
            >
              {translate('sale.fnb.doing')}
            </li>
          ) : (
            <li
              className={filterMenu === 'doing' ? 'active' : ''}
              onClick={() => setFilterMenu('doing')}
            >
              {translate('sale.fnb.doing')}
            </li>
          )} */}
          {tabActive === 'table'
            ? getAllTableGroupsSaleState?.data?.map((item, index) => (
              <li
                key={index}
                className={tableGroupActive === item.id ? 'active' : ''}
                onClick={() => setTableGroupActive(item.id)}
              >
                {item.name}
              </li>
            ))
            : getAllCategoriesState?.data?.map((item, index) => (
              <li
                key={index}
                className={filterMenu === item.id ? 'active' : ''}
                onClick={() => setFilterMenu(item.id)}
              >
                {item.name}
              </li>
            ))}
        </ul>
      </div>
    );
  },
);
