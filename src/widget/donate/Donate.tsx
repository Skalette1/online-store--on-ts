import phone from "../../public/Object.png";
import "./style/donate.css";

export const Donate = () => {
  return (
    <div className="donate">
      <div className="donate-left">
        <h1>Пожертвуйте на благо проекта</h1>
        <div className="">
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Единоразовая выплата
          </label>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Ежемесячные выплаты
          </label>
        </div>
        <div className="donate-mid">
          <input type="text" placeholder="Введите сумму" />
          <button>Пожертвовать</button>
        </div>
      </div>
      <div className="right">
        <img src={phone} alt="phone" />
      </div>
    </div>
  );
};
