import React from "react";
import { katalog } from "../moks/moks";
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
        <ul key={item.id} className="card">
          <img src={item.img} alt="" className="kat-img" />
          <li>{item.name}</li>
          <li style={{ fontSize: ".9rem" }} className="details">
            {item.details}
          </li>
          <DetailButton />
        </ul>
      ))}
    </div>
  );
};
