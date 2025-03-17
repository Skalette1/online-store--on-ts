import React from "react";
import { user } from "../mocks/userMocks";
import edit from "../../../../../public/Edit.png";
export const User = () => {
  return (
    <div>
      <img src={edit} alt="" id="edit" />
      {user.map((item, id) => (
        <ul key={id} className="accaunt">
          <div className="acc-top">
            <img src={item.img} alt="user" />
            <div className="acc-right">
              <li>{item.name}</li>
              <li>{item.email}</li>
            </div>
          </div>
          <li className="address">{item.address}</li>
        </ul>
      ))}
    </div>
  );
};
