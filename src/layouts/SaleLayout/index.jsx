import { Route } from 'react-router-dom';

const SaleLayout = (props) => {
  // const {
  //   isFirstGetAllDiscountsSale,
  //   isFirstGetAllCategoriesSale,
  // } = useSelector((store) => store.sale);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!isFirstGetAllDiscountsSale) {
  //     dispatch(getAllDiscountsSaleRequest());
  //   }
  //   if (!isFirstGetAllCategoriesSale) {
  //     dispatch(getAllCategoriesSaleRequest({ limit: 1000 }));
  //   }
  // }, []);

  const render = () => (
    <div id="sale-layout">
      <div className="sale-layout-scroll-wrapper">
        <Route {...props} />
      </div>
    </div>
  );
  return render();
};

export default SaleLayout;
