import React from "react";
import { katalog } from "../mocks/moks";
import "../style/katalog.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store/store";
import { DetailButton } from "../../../../shared/components/DetailButton";

export const Katalog: React.FC = () => {
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery,
  );

  const filteredKatalog = katalog.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="katalog-container">
      {filteredKatalog.map((item) => (
        <ul key={item.id} className="card kat-card">
          <img src={item.img} alt="" className="kat-img" />
          <div className="katalog-right">
          <li>{item.name}</li>
          <li style={{ fontSize: ".9rem" }} className="details">
            {item.details}
          </li>
          <DetailButton />
          </div>
        </ul>
      ))}
    </div>
  );
};
