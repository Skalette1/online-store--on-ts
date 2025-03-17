import React from "react";
import arrow from "../../public/arrow (2).png";
import "../../widget/donate/style/donate.css";
import { NavLink } from "react-router-dom";
export const BackOnMAin = () => {
  return (
    <div>
      <img src={arrow} alt="" id="arrow" />
      <button
        style={{
          padding: "1rem",
          color: "red",
        }}
      >
        <NavLink to="/" id="backLink">
          Назад
        </NavLink>
      </button>
    </div>
  );
};
