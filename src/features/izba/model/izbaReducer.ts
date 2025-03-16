import { createSlice } from "@reduxjs/toolkit";

interface Izba {
  visibleCount: number;
  loading: boolean;
}

const initialState: Izba = {
  visibleCount: 4,
  loading: false,
};

const izbaReducer = createSlice({
  name: "izba",
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

export const { setVisibleCount, setLoading } = izbaReducer.actions;
export default izbaReducer.reducer;
