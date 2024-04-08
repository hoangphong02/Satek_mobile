import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import NoImageUrl from '~/assets/no-image.png';
import { parseCurrency, translate } from '~/helpers/utils';
import { Badge } from 'reactstrap';
import { ColRight } from './ColRight';
import { ListFilter } from './ListFilter';
import { TableAction } from './TableAction';
import { TableList } from './TableList';
import { ColRightCart } from './ColRightCart';
import { OrderButtonsLeftMenu } from './OrderButtonsLeftMenu';

export const ColLeft = memo(
  ({
    tabActive,
    tableActive,
    handleSelectTable,
    ordersList,
    handleChangeNote,
    isOpenMenuWhenSelectTable,
    setIsOpenMenuWhenSelectTable,
    handleAddProductToOrder,
    isClickNoteTableFromForm,
    setIsClickNoteTableFromForm,
    tableGroupActive,
    setTableGroupActive,
    handleChangeNoteProduct,
    handleChangeNumberProduct,
    handleNotify,
    handleDecouplingTable,
    handlePayment,
    getAllTableProductsSaleState,
    dataCart,
    handleChangeNumberProductCart,
    handleRequestToCashier,
    handleUpdateDraftOrder,
    handleSeeCart,
    handleRequestPayment,
  }) => {
    const [filterTable, setFilterTable] = useState('all');
    const [filterMenu, setFilterMenu] = useState('all');
    // const [valueProductAddCart, setValueProductAddCart]= useState(1);

    return (
      <div className="col-left">
        {
          ['table', 'menu'].includes(tabActive) ? (
            <ListFilter
              tabActive={tabActive}
              tableGroupActive={tableGroupActive}
              setTableGroupActive={setTableGroupActive}
              filterMenu={filterMenu}
              setFilterMenu={setFilterMenu}
            />
          ) : null
        }
        {tabActive === 'table' ? (
          <TabTable
            tableActive={tableActive}
            handleSelectTable={handleSelectTable}
            tableGroupActive={tableGroupActive}
            filterTable={filterTable}
            setFilterTable={setFilterTable}
            ordersList={ordersList}
            handleChangeNote={handleChangeNote}
            isOpenMenuWhenSelectTable={isOpenMenuWhenSelectTable}
            setIsOpenMenuWhenSelectTable={setIsOpenMenuWhenSelectTable}
            isClickNoteTableFromForm={isClickNoteTableFromForm}
            setIsClickNoteTableFromForm={setIsClickNoteTableFromForm}
          />
        ) : tabActive === 'menu' ? (
          <TabMenu
            filterMenu={filterMenu}
            handleAddProductToOrder={handleAddProductToOrder}
            getAllTableProductsSaleState={getAllTableProductsSaleState}
            handleSeeCart={handleSeeCart}
            dataCart={dataCart}
          />
        ) : tabActive === 'order' ? (
          <ColRight
            tabActive={tabActive}
            tableActive={tableActive}
            handleChangeNoteProduct={handleChangeNoteProduct}
            handleChangeNumberProduct={handleChangeNumberProduct}
            handleNotify={handleNotify}
            setIsClickNoteTableFromForm={setIsClickNoteTableFromForm}
            ordersList={ordersList}
            handleDecouplingTable={handleDecouplingTable}
            handlePayment={handlePayment}
          />
        ) : tabActive === 'cart' ? (
          <ColRightCart
            tabActive={tabActive}
            tableActive={tableActive}
            handleChangeNoteProduct={handleChangeNoteProduct}
            handleChangeNumberProduct={handleChangeNumberProduct}
            handleNotify={handleNotify}
            setIsClickNoteTableFromForm={setIsClickNoteTableFromForm}
            ordersList={ordersList}
            handleDecouplingTable={handleDecouplingTable}
            handlePayment={handlePayment}
            dataCart={dataCart}
            handleChangeNumberProductCart={handleChangeNumberProductCart}
            handleRequestToCashier={handleRequestToCashier}
            handleUpdateDraftOrder={handleUpdateDraftOrder}
            handleRequestPayment={handleRequestPayment}
          />
        ) : null}
      </div>
    );
  },
);

const TabTable = memo(
  ({
    tableActive,
    handleSelectTable,
    tableGroupActive,
    filterTable,
    setFilterTable,
    ordersList,
    handleChangeNote,
    isOpenMenuWhenSelectTable,
    setIsOpenMenuWhenSelectTable,
    isClickNoteTableFromForm,
    setIsClickNoteTableFromForm,
  }) => (
    <>
      <TableAction
        tableGroupActive={tableGroupActive}
        filterTable={filterTable}
        setFilterTable={setFilterTable}
        ordersList={ordersList}
      />
      <TableList
        tableGroupActive={tableGroupActive}
        tableActive={tableActive}
        handleSelectTable={handleSelectTable}
        ordersList={ordersList}
        filterTable={filterTable}
        handleChangeNote={handleChangeNote}
        isOpenMenuWhenSelectTable={isOpenMenuWhenSelectTable}
        setIsOpenMenuWhenSelectTable={setIsOpenMenuWhenSelectTable}
        isClickNoteTableFromForm={isClickNoteTableFromForm}
        setIsClickNoteTableFromForm={setIsClickNoteTableFromForm}
      />
    </>
  ),
);

const TabMenu = memo(({
  filterMenu, handleAddProductToOrder, getAllTableProductsSaleState, handleSeeCart, dataCart,
}) => (
  <div className="menu-wrapper">
    <div className="menu-inner">
      {getAllTableProductsSaleState?.data
        ?.filter((item) => filterMenu === 'all' ? true : item.categoryIds.includes(filterMenu))
        ?.map((item, index) => (
          <ProductItem
            key={index}
            data={item}
            handleAddProductToOrder={handleAddProductToOrder}
          />
        ))}
    </div>
    <OrderButtonsLeftMenu handleSeeCart={handleSeeCart} dataCart={dataCart} />
  </div>
));

const ProductItem = memo(({
  data,
  handleAddProductToOrder,
}) => {
  const { profileUser } = useSelector((store) => store.user);
  const [valueCount, setValueCount] = useState(1);
  const onChange = (e) => {
    setValueCount(e.target.value);
  };
  const handleIncrease = () => {
    setValueCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (valueCount > 1) {
      setValueCount((prev) => prev - 1);
    } else {
      setValueCount(1);
    }
  };

  return (
    <div
      className="product-item-wrapper"
    >
      <div className="inner">
        <figure className="image">
          <img src={data.image || NoImageUrl} alt="" />
          <span className="price">{parseCurrency(data.price)}</span>
        </figure>
        <div className="info">
          <p className="name">{data.name}</p>
          {
            data.quantity ? (
              <>
                {profileUser?.data?.type === 'shop' ? (
                  <>
                    <p className="mb-0">
                      {translate('sale.quantity')}:{' '}
                      {data?.warehouses?.data?.length === 0
                        ? translate('sale.inventory-empty')
                        : null}
                    </p>
                    {data?.warehouses?.data?.map((item, index) => (
                      <p key={index} className="mb-0">
                        <span style={index > 0 ? { color: 'transparent' } : {}}>
                          -
                        </span>{' '}
                        {item?.warehouse_name}: {item?.number}
                      </p>
                    ))}
                  </>
                ) : (
                  <p className="mb-0">
                    {translate('sale.quantity')}:{' '}
                    {data?.warehouses?.data?.find(
                      (item) => item?.warehouse_id === profileUser?.data?.warehouse?.id,
                    )?.number || translate('sale.inventory-empty')}
                  </p>
                )}
              </>
            ) : null
          }
          <div className="add-cart">
            <span onClick={handleDecrease}>- </span>
            <input value={valueCount} type="number" onChange={(e) => onChange(e)} />
            <span onClick={handleIncrease}> +</span>
          </div>
          <div style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleAddProductToOrder(data, valueCount)}>
            <Badge>
              Thêm vào giỏ hàng
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
});
