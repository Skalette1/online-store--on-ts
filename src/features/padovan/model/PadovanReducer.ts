import { createSlice } from "@reduxjs/toolkit";

interface State {
  visibleCount: number;
  loading: boolean;
}

const initialState: State = {
  visibleCount: 4,
  loading: false,
};

const padovanReducer = createSlice({
  name: "padovan",
  initialState,
  reducers: {
    setVisibleCount: (state) => {
      state.visibleCount += 4;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setVisibleCount, setLoading } = padovanReducer.actions;
export default padovanReducer.reducer;
