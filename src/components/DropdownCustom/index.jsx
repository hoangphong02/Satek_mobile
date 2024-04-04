// import moment from 'moment';
import React, { memo } from 'react';
import { DateRangePicker } from 'react-date-range';
import vi from 'date-fns/locale/vi';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import './DropdownCustom.scss';
import moment from 'moment';
import { useGetSizeDevice } from '~/helpers/hooks';
import { getCurrentLanguage, translate } from '~/helpers/utils';
import { defaultInputRanges, defaultStaticRanges } from './defaultRange';

const DropdownCustom = memo(({
  isOpen,
  handleClose,
  selectedDateRange,
  setSelectedDateRange,
  setMonth = () => {},
  setIsCallApi,
  isCallApi,
  isSingle = false,
  numMonth = 2,
  className = '',
}) => {
  const handleSelect = (ranges) => {
    setSelectedDateRange(ranges.selection);
    const m = moment(ranges?.selection?.startDate).format('MM');
    setMonth(m);
  };
  const sizeDevice = useGetSizeDevice();
  return (
    <div className={`dropdown-custom ${isSingle ? 'single' : ''} ${isOpen ? 'show' : ''} ${className}`}>
      <div className="d-flex flex-column" onClick={(e) => e.stopPropagation()}>
        <DateRangePicker
          onChange={handleSelect}
          showSelectionPreview
          locale={getCurrentLanguage() === 'vn' ? vi : undefined}
          moveRangeOnFirstSelection
          staticRanges={isSingle ? [] : defaultStaticRanges}
          inputRanges={isSingle ? [] : defaultInputRanges}
          months={numMonth}
          ranges={[selectedDateRange]}
          direction={sizeDevice?.width > 600 ? 'horizontal' : 'vertical'}
          className=""
          showMonthAndYearPickers
        />
        <div className="d-flex justify-content-between align-items-center" style={{ height: '50px' }}>
          {
            selectedDateRange?.startDate && selectedDateRange?.endDate
              ? <span>{moment(selectedDateRange?.startDate).format('DD/MM/YYYY')} - {moment(selectedDateRange?.endDate).format('DD/MM/YYYY')}</span>
              : <span />
          }
          <div
            className="primary buttonCustom btn btn-secondary"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setIsCallApi(isCallApi + 1);
              handleClose();
            }}
          >
            {translate('common.search')}
          </div>
        </div>
      </div>
    </div>
  );
});

export default DropdownCustom;
