import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { speciesMoks } from "../mocks/speciesMoks";
import { RootState } from "../../../app/store/store";
import { Spin } from "antd";
import { LoadMore } from "../../../shared/components/LoadMore";
import { setLoading, setVisibleCount } from "../model/birdSpeciesReducer";
import { DetailButton } from "../../../shared/components/DetailButton";

interface Species {
  visibleCount: number;
  loading: boolean;
  searchQuery: string;
}

export const BirdSpecies = () => {
  const dispatch = useDispatch();
  const visibleCount = useSelector(
    (state: Species) => state.species.visibleCount,
  );
  const loading = useSelector((state: Species) => state.species.loading);
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery,
  );
  const filteredProduct = speciesMoks.filter((item) =>
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
    <div className="">
      {visibleCount < filteredProduct.length && (
        <button onClick={handleLoadMore} disabled={loading}>
          {loading ? <Spin size="large" /> : <LoadMore />}
        </button>
      )}
      <div className="card-container">
        {filteredProduct.slice(0, visibleCount).map((item) => (
          <ul key={item.id} className="card">
            <img src={item.img} alt="gta" className="card-img" />
            <li>{item.name}</li>
            <span>{item.details}</span>
            <DetailButton />
          </ul>
        ))}
      </div>
    </div>
  );
};
