import { Card, CardBody } from 'reactstrap';

import './GradientCard.scss';

const GradientCard = ({ children }) => (
  <Card className="dashboard-sq-banner justify-content-end">
    <CardBody className="justify-content-end d-flex flex-column">
      {children}
    </CardBody>
  </Card>
);

export default GradientCard;
