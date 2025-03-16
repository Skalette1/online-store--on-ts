import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store/store";
import { setVisibleCount, setLoading } from "../model/izbaReducer";
import { izbaMocks } from "../mocks/izbaMocks";
import { Spin } from "antd";
import { LoadMore } from "../../../shared/components/LoadMore";
import { useLocation } from "react-router-dom";
import { DetailButton } from "../../../shared/components/DetailButton";
import { CartIcon } from "../../cart/components/CartIcon";

export const Izba = () => {
  const dispatch = useDispatch();
  const visibleCount = useSelector(
    (state: RootState) => state.izba.visibleCount,
  );
  const loading = useSelector((state: RootState) => state.izba.loading);
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery,
  );
  const location = useLocation();
  const showAllCard = location.pathname === "/izba";
  const filteredProduct = izbaMocks.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleLoadMore = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setVisibleCount());
      dispatch(setLoading(false));
    }, 1100);
  };
  return (
    <div>
      {!showAllCard && visibleCount < filteredProduct.length && (
        <button onClick={handleLoadMore} disabled={loading}>
          {loading ? <Spin /> : <LoadMore />}
        </button>
      )}
      <div className="card-container">
        {(showAllCard ? izbaMocks : filteredProduct.slice(0, visibleCount)).map(
          (item) => (
            <ul key={item.id} className="card">
              <img src={item.img} alt="izba" className="card-img" />
              <li>{item.name}</li>
              <span>{item.details}</span>
              <li>
                {item.price}
                <span>руб</span>
              </li>
              <div className="card-footer">
                <DetailButton />
                <CartIcon item={item} />
              </div>
            </ul>
          ),
        )}
      </div>
    </div>
  );
};
