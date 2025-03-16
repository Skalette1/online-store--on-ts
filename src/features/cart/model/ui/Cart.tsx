import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store/store";
import "../style/cart.css";
import { Counter } from "../../../core/counter/ui/Counter";

export const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  if (cartItems.length === 0) {
    return (
      <>
        <h1 style={{ textAlign: "center" }}> Корзина пуста :(</h1>
      </>
    );
  }
  return (
    <div>
      <div className="cart-container">
        {cartItems.map((item) => {
          if (!item) return null;
          return (
            <ul key={item.id} className="cart-card">
              <img src={item.img} alt="" />
              <div className="cart-mid">
                <li>{item.name}</li>
                <span className="cart-details">{item.details}</span>
                <li>
                  <span style={{ color: "#828282", marginRight: ".5rem" }}>
                    Цена за 1 шт:
                  </span>
                  {item.price}
                  <span>руб</span>
                </li>
              </div>
              <div className="cart-end">
                <Counter />
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
