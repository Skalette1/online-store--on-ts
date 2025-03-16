import { Link } from "react-router-dom";
import { Header } from "../../../widget/header/Header";
import "../style/auth.css";

export const SignIn = () => {
  return (
    <>
      <Header />
      <div className="auth-card-container">
        <h3>Вход в аккаунт</h3>
        <input type="tel" required placeholder="Телефон" />
        <input type="password" required placeholder="Пароль" />
        <div className="auth-footer">
          <Link to="/signup">
            <button className="signup-button">Зарегистрироваться</button>
          </Link>
          <Link to="/orderpage">
            <button className="signin-button">Войти в аккаунт</button>
          </Link>
        </div>
      </div>
    </>
  );
};
