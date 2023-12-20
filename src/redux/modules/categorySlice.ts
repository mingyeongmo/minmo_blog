import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cate: "",
  postLength: 0,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCate: (state, action) => {
      state.cate = action.payload;
    },
    setPostLength: (state, action) => {
      state.postLength = action.payload;
    },
  },
});

export const { setCate, setPostLength } = categorySlice.actions;
export default categorySlice.reducer;
