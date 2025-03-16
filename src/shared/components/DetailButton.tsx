import React from "react";
import "../../features/padovan/styles/padovan.css";
import { Link } from "react-router-dom";

export const DetailButton = () => {
  return (
    <div>
      <Link to="detailed">
        <button
          style={{
            borderRadius: "10px",
            padding: ".8rem 2rem",
            color: "#000",
            fontWeight: "600",
            background: "red",
          }}
          id="detailedButton"
        >
          Подробнее
        </button>
      </Link>
    </div>
  );
};
