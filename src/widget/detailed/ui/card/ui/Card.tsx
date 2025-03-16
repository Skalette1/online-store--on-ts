import React from "react";
import { speciesMoks } from "../../../../../features/birdSpecies/moks/speciesMoks";
import "../../../style/detail.css";

export const Card = () => {
  return (
    <div>
      {speciesMoks.slice(0, 1).map((item) => (
        <ul key={item.id} className="detail-card">
          <img src={item.img} alt="bird" />
          <div className="card-right">
            <h1>{item.name}</h1>
            <span>{item.details2}</span>
          </div>
        </ul>
      ))}
    </div>
  );
};
