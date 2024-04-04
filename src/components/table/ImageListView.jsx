import React from 'react';
import { ContextMenuTrigger } from 'react-contextmenu';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  Row,
} from 'reactstrap';

import { IntlMessages } from '~/helpers/utils';
import { ColCustom } from '../common';

const unitsList = [
  { value: 'kg', label: 'Kg', id: 1 },
  { value: 'quả', label: <IntlMessages id="table.image.qua" />, id: 2 },
  { value: 'gói', label: <IntlMessages id="table.image.pack" />, id: 3 },
];

const ImageListView = ({
  data,
  collect,
  onClickRow,
  handleEdit,
  handleDelete,
  type,
  permissionCanEdit,
  permissionCanDelete,
}) => (
  <ColCustom
    sm="6"
    lg="4"
    xl="3"
    className="mb-3 image-list-view--wrapper"
    key={data.id}
  >
    <ContextMenuTrigger id="menu_id" data={data.id} collect={collect}>
      <Card onClick={() => onClickRow(data)}>
        <div className="position-relative avt-section">
          <CardImg top alt={data.id} src={data.image || data.logo} />
        </div>
        <CardBody>
          <Row>
            {type === 'list-products' ? (
              <ColCustom xxs="12" className="mb-3">
                <CardSubtitle className="truncate mb-1">
                  <IntlMessages id="table.image.list-products-name" />
                  {data.name}
                </CardSubtitle>
                <CardText className="text-muted text-small mb-1 font-weight-light truncate">
                  <IntlMessages id="table.image.list-products-type" />
                  {data.type_id === null
                    ? <IntlMessages id="table.image.list-products-empty" />
                    : data.type.data.name}
                </CardText>
                <CardText className="text-muted text-small mb-0 font-weight-light truncate">
                  <IntlMessages id="table.image.list-products-unit" />
                  : {unitsList.find((item) => item.value === data?.unit)?.label}
                </CardText>
                <div
                  className="text-muted text-small w-sm-100 mb-0 d-flex align-items-center mt-3"
                  style={{ gap: '10px' }}
                >
                  {permissionCanEdit && (
                    <Button
                      outline
                      color="primary"
                      className="icon-button"
                      onClick={handleEdit}
                    >
                      <i className="simple-icon-pencil" />
                    </Button>
                  )}
                  {permissionCanDelete && (
                    <Button
                      outline
                      color="danger"
                      className="icon-button"
                      onClick={handleDelete}
                    >
                      <i className="simple-icon-trash" />
                    </Button>
                  )}
                </div>
              </ColCustom>
            ) : type === 'list-product-types' ? (
              <ColCustom xxs="12" className="mb-3">
                <CardSubtitle className="truncate mb-1">
                  <IntlMessages id="table.image.list-product-types-name" />
                  {data.name}
                </CardSubtitle>
                <CardText className="text-muted text-small mb-0 font-weight-light truncate">
                  <IntlMessages id="table.image.list-product-types-description" />
                  : {data.note}
                </CardText>
                <div
                  className="text-muted text-small w-sm-100 mb-0 d-flex align-items-center mt-3"
                  style={{ gap: '10px' }}
                >
                  {permissionCanEdit && (
                    <Button
                      outline
                      color="primary"
                      className="icon-button"
                      onClick={handleEdit}
                    >
                      <i className="simple-icon-pencil" />
                    </Button>
                  )}
                  {permissionCanDelete && (
                    <Button
                      outline
                      color="danger"
                      className="icon-button"
                      onClick={handleDelete}
                    >
                      <i className="simple-icon-trash" />
                    </Button>
                  )}
                </div>
              </ColCustom>
            ) : (
              <ColCustom xxs="12" className="mb-3">
                <CardSubtitle className="truncate mb-1">
                  <IntlMessages id="table.image.remaining-name" />
                  {data.name}
                </CardSubtitle>
                <CardText className="text-muted text-small mb-0 font-weight-light truncate">
                  <IntlMessages id="table.image.remaining-phone" />
                  : {data.phone}
                </CardText>
                <div
                  className="text-muted text-small w-sm-100 mb-0 d-flex align-items-center mt-3"
                  style={{ gap: '10px' }}
                >
                  {permissionCanEdit && (
                    <Button
                      outline
                      color="primary"
                      className="icon-button"
                      onClick={handleEdit}
                    >
                      <i className="simple-icon-pencil" />
                    </Button>
                  )}
                  {permissionCanDelete && (
                    <Button
                      outline
                      color="danger"
                      className="icon-button"
                      onClick={handleDelete}
                    >
                      <i className="simple-icon-trash" />
                    </Button>
                  )}
                </div>
              </ColCustom>
            )}
          </Row>
        </CardBody>
      </Card>
    </ContextMenuTrigger>
  </ColCustom>
);

export default React.memo(ImageListView);
