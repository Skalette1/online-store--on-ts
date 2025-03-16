import React from "react";
import "../styles/buy.css";
import { Link } from "react-router-dom";
import { Header } from "../../../../../widget/header/Header";
import { NextBuy } from "../../../../../shared/components/NextBuyButton";
export const BuyFirst = () => {
  return (
    <>
      <Header />
      <div className="buy-container">
        <h2>Оплата и доставка</h2>
        <p className="fond">10% от стоимости Вашего заказа идут в фонд</p>
        <input type="text" placeholder="ФИО" />
        <input type="tel" placeholder="Телефон" />
        <input type="email" placeholder="E-mail" />
        <div className="buy-footer">
          <p>
            <span>Итого:</span>228 руб.
          </p>
          <Link to="/buy2">
            <NextBuy />
          </Link>
        </div>
      </div>
    </>
  );
};
