import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store/store";
import { setLoading, setVisibleCount } from "../model/rioReducer";
import { Spin } from "antd";
import { LoadMore } from "../../../shared/components/LoadMore";
import { rioMocks } from "../mocks/rioMocks";
import { useLocation } from "react-router-dom";
import { DetailButton } from "../../../shared/components/DetailButton";
import { CartIcon } from "../../cart/components/CartIcon";

export const Rio = () => {
  const dispatch = useDispatch();
  const visibleCount = useSelector(
    (state: RootState) => state.rio.visibleCount,
  );
  const loading = useSelector((state: RootState) => state.rio.loading);
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery,
  );
  const location = useLocation();
  const showAllCard = location.pathname === "/rio";

  const filteredProduct = rioMocks.filter((item) =>
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
        {(showAllCard ? rioMocks : filteredProduct.slice(0, visibleCount)).map(
          (item) => (
            <ul key={item.id} className="card">
              <img src={item.img} alt="rio" className="card-img" />
              <li>{item.name}</li>
              <span>{item.details}</span>
              <li>
                {item.price}
                <span style={{ marginLeft: ".3rem" }}>руб</span>
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
