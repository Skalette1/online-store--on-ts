import { createSlice } from "@reduxjs/toolkit";

interface Species {
  visibleCount: number;
  loading: boolean;
}
const initialState: Species = {
  visibleCount: 4,
  loading: false,
};
const speciesReducer = createSlice({
  name: "species",
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

export const { setVisibleCount, setLoading } = speciesReducer.actions;
export default speciesReducer.reducer;
