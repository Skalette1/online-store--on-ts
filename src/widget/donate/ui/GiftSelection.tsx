import React, { useState } from "react";

export const GiftSelection = () => {
  const [selectedGift, setSelectedGift] = useState("certificate"); // По умолчанию выбран сертификат

  const handleGiftChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGift(event.target.value);
  };

  return (
    <div className="gift-selection">
      <h4>Выберите подарок:</h4>
      <label>
        <input
          type="checkbox"
          name="gift"
          value=""
          checked={selectedGift === "no-gift"}
          onChange={handleGiftChange}
        />
        Без подарка
      </label>
      <label>
        <input
          type="checkbox"
          name="gift"
          value=""
          checked={selectedGift === "certificate"}
          onChange={handleGiftChange}
        />
        Электронный сертификат
      </label>
      <label>
        <input
          type="checkbox"
          name="gift"
          value=""
          checked={selectedGift === "catalog-item"}
          onChange={handleGiftChange}
        />
        Любой товар из каталога
      </label>
      <p>*Товар стоимостью в половину суммы пожертвования</p>
    </div>
  );
};
