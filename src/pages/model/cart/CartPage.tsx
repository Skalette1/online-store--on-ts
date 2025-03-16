import React from "react";
import { Header } from "../../../widget/header/Header";
import { Cart } from "../../../features/cart/model/ui/Cart";
import { BackOnMAin } from "../../../shared/components/BackOnMain";
export const CartPage = () => {
  return (
    <div>
      <Header />
      <BackOnMAin />
      <Cart />
    </div>
  );
};

//   if (cartItems.length === 0) {
//     return <>
//     <BackOnMAin />
//     <h1 style={{ textAlign: "center" }}> Корзина пуста :(</h1>;
//     </>
//   }
