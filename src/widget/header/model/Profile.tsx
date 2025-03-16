import { useState } from "react";
import user from "../../../../public/85407_red_user_icon.png";
import { Popup } from "antd-mobile";
import { Link } from "react-router-dom";

export const Profile = () => {
  const [visible, setVisible] = useState<boolean>();
  return (
    <div>
      <button onClick={() => setVisible(true)}>
        <img src={user} alt="profile" width={40} height={40} />
        <Popup
          visible={visible}
          onMaskClick={() => setVisible(false)}
          bodyStyle={{ background: "transparent" }}
          position="right"
        >
          <div className="authorization">
            <Link to="/signin">
              <button className="sign-in">Войти в аккаунт</button>
            </Link>
            <Link to="/signup">
              <button className="sign-up">Зарегистрироваться</button>
            </Link>
          </div>
        </Popup>
      </button>
    </div>
  );
};
