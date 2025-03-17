import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../../../widget/header/Header";
import "../../../auth/style/auth.css";
export const Success = () => {
  return (
    <>
      <Header />
      <div className="success">
        <h1>Заказ успешно оформлен</h1>
        <Link to="/condition">
          <button
            className="sucBtn"
            style={{
              borderRadius: "1rem",
            }}
          >
            Спасибо!
          </button>
        </Link>
      </div>
    </>
  );
};
