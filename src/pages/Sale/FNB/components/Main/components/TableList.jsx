import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { ReactComponent as BagItemIcon } from '~/assets/icons/bag.svg';
import { ReactComponent as TableItemIcon } from '~/assets/icons/table.svg';
import { optionStatusKitchen } from '~/constants/option';
import { translate } from '~/helpers/utils';

export const TableList = memo(
  ({
    tableGroupActive,
    tableActive,
    handleSelectTable,
    ordersList,
    filterTable,
    handleChangeNote,
    isOpenMenuWhenSelectTable,
    setIsOpenMenuWhenSelectTable,
    isClickNoteTableFromForm,
    setIsClickNoteTableFromForm,
  }) => {
    const { getAllTableGroupsSaleState } = useSelector((store) => store.sale);

    const [tablesList, setTablesList] = useState([]);
    const location = useLocation();
    const paramId = location.search.split('=')[1];
    useEffect(() => {
      const tablesListTmp = [];

      if (tableGroupActive === 'all') {
        getAllTableGroupsSaleState?.data?.map((groupData) => {
          groupData?.tables?.data?.map((tableData) => {
            if (
              (filterTable === 'used'
                && Object.keys(ordersList).includes(String(tableData.id)))
              || (filterTable === 'empty'
                && !Object.keys(ordersList).includes(String(tableData.id)))
              || filterTable === 'all'
            ) {
              tablesListTmp.push({
                ...tableData,
                groups: {
                  ...groupData,
                },
              });
            }
          });
        });
      } else {
        getAllTableGroupsSaleState?.data
          ?.filter((groupData) => groupData.id === tableGroupActive)
          ?.map((groupData) => {
            groupData?.tables?.data?.map((tableData) => {
              if (
                (filterTable === 'used'
                  && Object.keys(ordersList).includes(String(tableData.id)))
                || (filterTable === 'empty'
                  && !Object.keys(ordersList).includes(String(tableData.id)))
                || filterTable === 'all'
              ) {
                tablesListTmp.push({
                  ...tableData,
                  groups: {
                    ...groupData,
                  },
                });
              }
            });
          });
      }

      setTablesList(tablesListTmp);
    }, [getAllTableGroupsSaleState, tableGroupActive, ordersList, filterTable]);

    return (
      <div className="table-list-wrapper">
        <div className="table-list-inner">
          <BagItem
            tableActive={tableActive}
            ordersList={ordersList}
            handleSelectTable={handleSelectTable}
            handleChangeNote={handleChangeNote}
            isClickNoteTableFromForm={isClickNoteTableFromForm}
            setIsClickNoteTableFromForm={setIsClickNoteTableFromForm}
          />
          {tablesList.map((item, index) => (
            <TableItem
              key={index}
              data={item}
              tableGroupActive={tableGroupActive}
              tableActive={tableActive}
              ordersList={ordersList}
              handleSelectTable={handleSelectTable}
              handleChangeNote={handleChangeNote}
              isClickNoteTableFromForm={isClickNoteTableFromForm}
              setIsClickNoteTableFromForm={setIsClickNoteTableFromForm}
              paramId={paramId}
            />
          ))}
        </div>
        <div className="table-list-footer">
          <div className="form-group">
            <input
              type="checkbox"
              id="isOpenMenu"
              name="isOpenMenu"
              checked={isOpenMenuWhenSelectTable}
              onClick={() => setIsOpenMenuWhenSelectTable(!isOpenMenuWhenSelectTable)}
            />
            <label htmlFor="isOpenMenu">
              {translate('sale.fnb.open-menu-when-select-table')}
            </label>
          </div>
        </div>
      </div>
    );
  },
);

const TableItem = memo(
  ({
    data,
    tableGroupActive,
    tableActive,
    ordersList,
    handleSelectTable,
    handleChangeNote,
    isClickNoteTableFromForm,
    setIsClickNoteTableFromForm,
    paramId,
  }) => (
    <div
      className={`table-item table-item-wrapper ${
        data.id === Number(paramId) || (tableActive.key === data.id && Number(paramId) % 1 !== 0) ? 'active' : ''
      } 
      ${Object.keys(ordersList).includes(String(data.id)) && ordersList[data.id].products.length > 0 ? 'has-guest' : ''}`}
      onClick={() => handleSelectTable(data)}
    >
      <div className="table-item-inner">
        <TableItemIcon />
        <p>
          {data.name}
          {tableGroupActive === 'all' ? ` - ${data?.groups?.name}` : ''}
        </p>
        <p>
          {ordersList[data.id]?.kitchenDishes?.map((product) => (
            <p
              className="d-flex align-items-center justify-content-center"
              style={{ gap: '5px' }}
            >
              <Badge
                key={product.id}
                color={
                  optionStatusKitchen?.find(
                    (item) => item.value === product.status,
                  )?.color
                }
              >
                {product.time}
              </Badge>
            </p>
          ))}
        </p>
        <NoteSection
          id={data.id}
          data={ordersList[data.id]?.note}
          tableData={data}
          handleChangeNote={handleChangeNote}
          isClickNoteTableFromForm={
            isClickNoteTableFromForm && tableActive.key === data.id
          }
          setIsClickNoteTableFromForm={setIsClickNoteTableFromForm}
        />
      </div>
    </div>
  ),
);

const BagItem = memo(
  ({
    tableActive,
    ordersList,
    handleSelectTable,
    handleChangeNote,
    isClickNoteTableFromForm,
    setIsClickNoteTableFromForm,
  }) => (
    <div
      className={`table-item bag-item-wrapper 
      ${tableActive.key === 'bring-back' ? 'active' : ''} ${
        Object.keys(ordersList).includes('bring-back') ? 'has-guest' : ''
      }`}
      onClick={() => handleSelectTable({ id: 'bring-back' })}
    >
      <div className="table-item-inner">
        <BagItemIcon />
        <p>{translate('sale.fnb.bring-back')}</p>
        <NoteSection
          id="bring-back"
          data={ordersList['bring-back']?.note}
          handleChangeNote={handleChangeNote}
          isClickNoteTableFromForm={
            isClickNoteTableFromForm && tableActive.key === 'bring-back'
          }
          setIsClickNoteTableFromForm={setIsClickNoteTableFromForm}
        />
      </div>
    </div>
  ),
);

const NoteSection = memo(
  ({
    id,
    data,
    tableData,
    handleChangeNote,
    isClickNoteTableFromForm,
    setIsClickNoteTableFromForm,
  }) => {
    const [isShowModalNoteTable, setIsShowModalNoteTable] = useState(false);

    const handleSaveNote = (note) => {
      handleChangeNote(id, note, tableData);
      handleCloseModalNote();
    };

    const handleCloseModalNote = () => {
      setIsShowModalNoteTable(false);
      if (isClickNoteTableFromForm) {
        setIsClickNoteTableFromForm(false);
      }
    };

    useEffect(() => {
      if (isClickNoteTableFromForm) {
        setIsShowModalNoteTable(true);
      }
    }, [isClickNoteTableFromForm]);

    return (
      <>
        <div className={`note-section-wrapper ${data ? 'active' : ''}`}>
          {data ? (
            <p
              className="truncate"
              onClick={() => setIsShowModalNoteTable(true)}
            >
              {data}
            </p>
          ) : (
            <p onClick={() => setIsShowModalNoteTable(true)}>
              {translate('sale.fnb.note-section.description')}
            </p>
          )}
        </div>

        {isShowModalNoteTable ? (
          <ModalNoteTable
            data={data}
            handleClose={handleCloseModalNote}
            handleSave={handleSaveNote}
          />
        ) : null}
      </>
    );
  },
);

const ModalNoteTable = memo(({ data, handleClose, handleSave }) => {
  const [note, setNote] = useState(data || '');

  return (
    <Modal isOpen size="lg" className="modal-note-table">
      <ModalHeader>{translate('sale.fnb.modal-note-table.title')}</ModalHeader>
      <ModalBody>
        <textarea
          placeholder={translate('sale.container.footer.note-placeholder')}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          className="btn-multiple-state"
          onClick={() => handleSave(note)}
        >
          {translate('sale.fnb.modal-note-table.btn.done')}
        </Button>
        <Button
          color="primary"
          outline
          className="btn-multiple-state"
          onClick={handleClose}
        >
          {translate('sale.fnb.modal-note-table.btn.cancel')}
        </Button>
      </ModalFooter>
    </Modal>
  );
});
