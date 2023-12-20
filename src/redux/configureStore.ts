import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchSlice from "./modules/searchSlice";
import categorySlice from "./modules/categorySlice";

const ReducerRoot = combineReducers({
  search: searchSlice,
  category: categorySlice,
});

const store = configureStore({
  reducer: ReducerRoot,
});

export default store;
export type RootState = ReturnType<typeof ReducerRoot>;
