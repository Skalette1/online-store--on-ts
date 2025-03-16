import React from "react";
import cart from "/cart.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../core/cartReducer";

interface CartIconProps {
  item: {
    id: number;
    name: string;
    price: number;
    img: string;
  };
}
export const CartIcon: React.FC<CartIconProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleCard = () => {
    dispatch(addToCart(item));
  };
  return (
    <div>
      <button onClick={handleCard}>
        <img
          src={cart}
          alt="cart"
          style={{
            background: "none",
            width: "50px",
            height: "50px",
          }}
        />
      </button>
    </div>
  );
};
