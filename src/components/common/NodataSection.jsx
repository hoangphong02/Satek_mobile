import { ReactComponent as NoData } from '~/assets/common/no_data.svg';
import { IntlMessages } from '~/helpers/utils';

const NodataSection = () => (
  <div
    className="no-data-section d-flex flex-column align-items-center w-100 mt-4"
    style={{ overflow: 'hidden' }}
  >
    <NoData style={{ height: '22vh', width: '100%' }} />
    <h3 className="mt-4">
      <IntlMessages id="common.list.empty" />
    </h3>
  </div>
);

export default NodataSection;
