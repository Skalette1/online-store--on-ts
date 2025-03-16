import { Link } from "react-router-dom";
import { Header } from "../../../widget/header/Header";
import "../style/auth.css";

export const SignUp = () => {
  return (
    <>
      <Header />
      <div className="auth-card-container">
        <h3>Регистрация</h3>
        <input type="tel" required placeholder="Телефон" />
        <input type="password" required placeholder="Пароль" />
        <div className="auth-footer">
          <Link to="/signin">
            <button className="signup-button">Войти в аккаунт</button>
          </Link>
          <Link to="/orderpage">
            <button className="signin-button">Зарегистрироваться</button>
          </Link>
        </div>
      </div>
    </>
  );
};
