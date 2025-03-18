import { padovanMocks } from "../mocks/padovanMocks";
import "../styles/padovan.css";
import { setLoading, setVisibleCount } from "../model/PadovanReducer";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { LoadMore } from "../../../shared/components/LoadMore";
import { RootState } from "../../../app/store/store";
import { useLocation } from "react-router-dom";
import { CartIcon } from "../../cart/components/CartIcon";
import { DetailButton } from "../../../shared/components/DetailButton";

export const Padovan = () => {
  const dispatch = useDispatch();
  const visibleCount = useSelector(
    (state: RootState) => state.padovan.visibleCount,
  );
  const loading = useSelector((state: RootState) => state.padovan.loading);
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery,
  );
  const location = useLocation();
  const showAllCard = location.pathname === "/padovan";
  const filteredProduct = padovanMocks.filter((item) =>
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
          {loading ? <Spin size="large" /> : <LoadMore />}
        </button>
      )}
      <div className={`card-container  ${showAllCard ? "" : ""}`}>
        {(showAllCard
          ? padovanMocks
          : filteredProduct.slice(0, visibleCount)
        ).map((item) => (
          <ul className="card" key={item.id}>
            <img src={item.img} alt="padovan-food" className="card-img" />
            <li>{item.name}</li>
            <span>{item.details}</span>
            <div
              className="price"
              style={{ display: "flex", gap: "1rem", alignItems: "center" }}
            >
              <li>
                {item.price}
                <span style={{ marginLeft: ".3rem" }}>руб</span>
              </li>
            </div>
            {/* {item.gramms.map((gramm) => (
              <ul key={gramm.id} className="gramms">
                <li>{gramm.gramm1}</li>
                <li>{gramm.gramm2}</li>
                <li>{gramm.gramm3}</li>
                <li>{gramm.gramm4}</li>
              </ul>
            ))} */}
            <div className="card-footer">
              <DetailButton />
              <CartIcon item={item} />
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};
