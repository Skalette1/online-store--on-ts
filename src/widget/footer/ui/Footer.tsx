import social from "../../../public/social.png";
import phone from "../../../public/телефон.png";
import "../style/footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="left" style={{ display: "flex", gap: "1rem" }}>
        <p>Оплата</p>
        <p>Доставка</p>
      </div>
      <div className="mid">
        <img src={social} alt="social" />
      </div>
      <div className="right">
        <img src={phone} alt="phone" />
      </div>
    </div>
  );
};
