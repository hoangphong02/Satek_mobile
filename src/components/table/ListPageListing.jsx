import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Row } from 'reactstrap';

import { NodataSection } from '../common';
import ImageListView from './ImageListView';
import './ListPageListing.scss';
import PaginationCustom from './PaginationCustom';
import ThumbListView from './ThumbListView';

function collect(props) {
  return { data: props.data };
}

const ListPageListing = ({
  dataList,
  indexPage,
  maxPage,
  handlePaginationNext,
  isLoading,
  customClassName = '',
  onClickRow,
  handleEdit,
  handleDelete,
  type,
  permissionCanEdit,
  permissionCanDelete,
  displayMode = 'thumblist',
}) => (
  <Row className={`list-page-listing--wrapper ${customClassName}`}>
    {displayMode === 'thumblist' ? (
      <>
        {isLoading ? (
          [...new Array(4)].map((item, indexRow) => (
            <div key={indexRow} className="w-100 mb-4">
              <Skeleton
                count={1}
                width="100%"
                height="90px"
                style={{ lineHeight: 'normal' }}
              />
            </div>
          ))
        ) : dataList.length === 0 && maxPage === 1 ? (
          <NodataSection />
        ) : (
          dataList.map((data, index) => (
            <ThumbListView
              key={index}
              data={data}
              collect={collect}
              onClickRow={onClickRow}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              type={type}
              permissionCanEdit={permissionCanEdit}
              permissionCanDelete={permissionCanDelete}
            />
          ))
        )}
      </>
    ) : (
      <>
        {isLoading ? (
          <div className="w-100 d-flex flex-wrap justify-content-between list-page-listing--skeleton">
            { [...new Array(4)].map((item, indexRow) => (
              <div key={indexRow}>
                <Skeleton
                  count={1}
                  width="100%"
                  height="100%"
                  style={{ lineHeight: 'normal' }}
                />
              </div>
            ))}
          </div>
        ) : dataList.length === 0 && maxPage === 1 ? (
          <NodataSection />
        ) : (
          dataList.map((data, index) => (
            <ImageListView
              key={index}
              data={data}
              collect={collect}
              onClickRow={onClickRow}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              type={type}
              permissionCanEdit={permissionCanEdit}
              permissionCanDelete={permissionCanDelete}
            />
          ))
        )}
      </>
    )}
    {dataList.length === 0 && maxPage === 1 ? null : (
      <div className="w-100">
        <PaginationCustom
          indexPage={indexPage}
          maxPage={maxPage}
          isLoading={isLoading}
          handlePaginationNext={handlePaginationNext}
        />
      </div>
    )}
  </Row>
);

export default React.memo(ListPageListing);
