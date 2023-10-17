import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cate: "",
  cateNum: 0,
  catePost: [],
  viewPost: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCate: (state, action) => {
      state.cate = action.payload;
    },
    setCateNum: (state, action) => {
      state.cateNum = action.payload;
    },
    setCatePost: (state, action) => {
      state.catePost = action.payload;
    },
    setViewPost: (state, action) => {
      state.viewPost = action.payload;
      console.log("action.payload", action.payload);
    },
  },
});

export const { setCate, setCateNum, setCatePost, setViewPost } =
  categorySlice.actions;
export default categorySlice.reducer;
