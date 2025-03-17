import React from "react";
import phone from "../../../public/call.png";
import { Link } from "react-router-dom";
import { Profile } from "../model/Profile";
import cart from "../../../public/shopping-cart.png";
import "../styles/headerMedia.css";
export const Actions = () => {
  return (
    <div className="actions">
      <div className="phone">
        <img src={phone} alt="" />
        <h3>8 920 999 43 50</h3>
      </div>
      <Link to="/cart">
        <img
          src={cart}
          alt="cart"
          style={{ height: "2.4rem", width: "2.3rem" }}
        />
      </Link>
      <Profile />
    </div>
  );
};
