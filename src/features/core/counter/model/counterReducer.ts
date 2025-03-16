import { createSlice } from "@reduxjs/toolkit";

interface Counter {
  count: number;
}

const initialState: Counter = {
  count: 1,
};

const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterReducer.actions;
export default counterReducer.reducer;
