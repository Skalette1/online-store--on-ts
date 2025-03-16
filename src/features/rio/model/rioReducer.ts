import { createSlice } from "@reduxjs/toolkit";

interface Rio {
  visibleCount: number;
  loading: boolean;
}

const initialState: Rio = {
  visibleCount: 4,
  loading: false,
};

const rioReducer = createSlice({
  name: "rio",
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

export const { setVisibleCount, setLoading } = rioReducer.actions;
export default rioReducer.reducer;
