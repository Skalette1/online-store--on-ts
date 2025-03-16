import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store/store";
import { decrement, increment } from "../model/counterReducer";
import "../style/counter.css";
export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);
  const disabled = count <= 1;
  return (
    <div className="counter-container">
      <button className="counter" onClick={() => dispatch(increment())}>
        +
      </button>
      <p>{count}</p>
      <button
        className="counter"
        onClick={() => dispatch(decrement())}
        disabled={disabled}
      >
        -
      </button>
    </div>
  );
};
