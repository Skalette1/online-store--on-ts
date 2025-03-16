import { createSlice } from "@reduxjs/toolkit";

interface Search {
  searchQuery: string;
}
const initialState: Search = {
  searchQuery: "",
};
const searchReducer = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearch } = searchReducer.actions;
export default searchReducer.reducer;
