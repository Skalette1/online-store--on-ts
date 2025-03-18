import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cart from '../../../../public/shopping-cart.png'
import { Profile } from "../model/Profile";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleChange = (event: any) => {
    const selected = event.target.value;
    if (selected) {
      navigate(selected);
    }
  };
  return (
    <div>
      <div className={`navbar ${isOpen ? "active" : ""}`}>
        <select name="" id="" onChange={handleChange}>
          <option value="/">Каталог</option>
          <option value="/padovan">Игры года</option>
          <option value="/rio">Скидки от 50%</option>
          <option value="/izba">Plastation +</option>
        </select>
        <button>О проекте</button>
        <button>Игры</button>
        <button>Пожертвования</button>
        {isOpen && (
          <>
          <Link to="/cart">
          <img
            src={cart}
            alt="cart"
            style={{ height: "2.4rem", width: "2.3rem",
              transform: 'translateX(4px)'
            }}
          />
        </Link>
        <Profile />
          </>
        )}
      </div>
      <div
        className={`burger-button ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="burger-line one"></div>
        <div className="burger-line two"></div>
        <div className="burger-line three"></div>
      </div>
    </div>
  );
};
