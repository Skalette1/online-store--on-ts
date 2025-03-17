import React from "react";
import "../../processes/auth/style/auth.css";
export const NextBuy = () => {
  return (
    <div>
      <button
        className="nextBuy"
        style={{
          background: "red",
          color: "#000",
          padding: ".9rem 2.4rem",
          fontSize: "1.1rem",
          fontWeight: "600",
          borderRadius: ".9rem",
          transition: ".5s all ease-in-out",
        }}
      >
        Дальше
      </button>
    </div>
  );
};
