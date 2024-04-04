import { Col } from 'reactstrap';

const ColCustom = (props) => (
  <Col {...props} widths={['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']} />
);

export default ColCustom;
