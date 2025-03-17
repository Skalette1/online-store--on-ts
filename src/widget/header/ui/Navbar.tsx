import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
