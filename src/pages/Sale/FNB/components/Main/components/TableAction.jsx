import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { translate } from '~/helpers/utils';

export const TableAction = memo(
  ({
    tableGroupActive, filterTable, setFilterTable, ordersList,
  }) => {
    const { getAllTableGroupsSaleState } = useSelector((store) => store.sale);

    const [tabAllLength, setTabAllLength] = useState(0);
    const [tabUsedLength, setTabUsedLength] = useState(0);
    const [tabEmptyLength, setTabEmptyLength] = useState(0);

    useEffect(() => {
      const tablesList = tableGroupActive === 'all'
        ? getAllTableGroupsSaleState?.data
          ?.map((item) => item.tables.data)
          ?.flat()
        : getAllTableGroupsSaleState?.data?.find(
          (item) => item.id === tableGroupActive,
        )?.tables?.data || [];
      const tablesUsedList = tableGroupActive === 'all' ? (Object.keys(ordersList).filter((item) => item !== 'bring-back') || []) : (Object.values(ordersList).filter((item) => item.group === tableGroupActive) || []);
      const tabAllLength = tablesList?.length || 0;
      const tabUsedLength = tablesUsedList?.length || 0;
      const tabEmptyLength = (tablesList?.length - tablesUsedList?.length) || 0;
      setTabAllLength(tabAllLength);
      setTabUsedLength(tabUsedLength);
      setTabEmptyLength(tabEmptyLength);
    }, [getAllTableGroupsSaleState, tableGroupActive, ordersList]);

    return (
      <div className="table-action-wrapper">
        <ul>
          <li
            className={filterTable === 'all' ? 'active' : ''}
            onClick={() => setFilterTable('all')}
          >
            <span /> {translate('sale.fnb.all')} ({tabAllLength})
          </li>
          <li
            className={filterTable === 'used' ? 'active' : ''}
            onClick={() => setFilterTable('used')}
          >
            <span /> {translate('sale.fnb.used')} ({tabUsedLength})
          </li>
          <li
            className={filterTable === 'empty' ? 'active' : ''}
            onClick={() => setFilterTable('empty')}
          >
            <span /> {translate('sale.fnb.empty')} ({tabEmptyLength})
          </li>
        </ul>
      </div>
    );
  },
);
