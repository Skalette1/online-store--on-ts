import React, { useState } from "react";
import menu from "/menu (1).png";
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
          <option value="/padovan">Готовые миксы</option>
          <option value="/rio">Отдельные виды кормов</option>
          <option value="/izba">Готовые комплекты</option>
        </select>
        <button>О проекте</button>
        <button>Птицы</button>
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
