import React from "react";
import arrow from "../../../public/arrow (1).png";
export const LoadMore = () => {
  return (
    <div className="loadMore-cont">
      <button>More</button>
      <img src={arrow} alt="" id="loadMore" />
    </div>
  );
};
