import React from "react";
import { Header } from "../../../../widget/header/Header";
import { User } from "./ui/User";
import { Cart } from "../../../../features/cart/model/ui/Cart";
import { Link } from "react-router-dom";

import "./style/orderPage.css";
import { useSelector } from "react-redux";
export const OrderPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <div>
      <Header />
      <div className="acc-mid">
        <div className="user">
          <User />
        </div>
        <div className="cart-acc">
          <p style={{ color: "#BDBDBD", fontSize: "1.1rem" }}>Все заказы:</p>
          <Cart />
          {cartItems.length > 0 ? (
            <Link to="/buy1">
              <button className="buy">Оплатить</button>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
