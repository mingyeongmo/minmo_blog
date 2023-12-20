import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { search: "" },
  reducers: {
    inputSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { inputSearch } = searchSlice.actions;
export default searchSlice.reducer;
