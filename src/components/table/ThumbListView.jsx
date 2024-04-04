import React from 'react';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Button, Card } from 'reactstrap';

import { IntlMessages } from '~/helpers/utils';
import { ColCustom } from '../common';

const unitsList = [
  { value: 'kg', label: 'Kg', id: 1 },
  { value: 'quả', label: <IntlMessages id="table.thumb.qua" />, id: 2 },
  { value: 'gói', label: <IntlMessages id="table.thumb.pack" />, id: 3 },
];

const ThumbListView = ({
  data,
  collect,
  onClickRow,
  handleEdit,
  handleDelete,
  type,
  permissionCanEdit,
  permissionCanDelete,
}) => (
  <ColCustom xxs="12" key={data.id} className="mb-3 thumb-list-view--wrapper">
    <ContextMenuTrigger id="menu_id" data={data.id} collect={collect}>
      <Card onClick={() => onClickRow(data)} className="d-flex flex-row">
        <div className="avt-section">
          <img
            alt={data.id}
            src={data.image || data.logo}
            className="d-block w-100 card-img-left"
          />
        </div>
        {type === 'list-products' ? (
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <div className="w-30 w-sm-100">
                <p className="list-item-heading truncate mb-0">
                  <IntlMessages id="table.thumb.list-products-name" />:{' '}
                  {data.name}
                </p>
              </div>
              <p className="text-muted text-small w-30 w-sm-100 truncate mb-0">
                <IntlMessages id="table.thumb.type" />:{' '}
                {data.type_id === null
                  ? <IntlMessages id="table.thumb.empty" />
                  : data.type.data.name}
              </p>
              <p className="text-muted text-small w-20 w-sm-100 truncate mb-0">
                <IntlMessages id="table.thumb.unit" />
                : {unitsList.find((item) => item.value === data?.unit)?.label}
              </p>
              <div
                className="text-muted text-small w-sm-100 mb-0 d-flex align-items-center"
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
            </div>
          </div>
        ) : type === 'list-product-types' ? (
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <div className="w-30 w-sm-100">
                <p className="list-item-heading truncate mb-0">
                  <IntlMessages id="table.thumb.list-product-types-name" />:{' '}
                  {data.name}
                </p>
              </div>
              <p className="text-muted text-small w-40 w-sm-100 truncate mb-0">
                <IntlMessages id="table.thumb.list-product-types-description" />
                : {data.note}
              </p>
              <div
                className="text-muted text-small w-sm-100 mb-0 d-flex align-items-center"
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
            </div>
          </div>
        ) : (
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <div className="w-30 w-sm-100">
                <p className="list-item-heading truncate mb-0">
                  <IntlMessages id="table.thumb.remaining-name" />:{' '}
                  {data.name}
                </p>
              </div>
              <p className="text-muted text-small w-40 w-sm-100 truncate mb-0">
                <IntlMessages id="table.thumb.remaining-phone" />
                : {data.phone}
              </p>
              <div
                className="text-muted text-small w-sm-100 mb-0 d-flex align-items-center"
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
            </div>
          </div>
        )}
      </Card>
    </ContextMenuTrigger>
  </ColCustom>
);

export default React.memo(ThumbListView);
