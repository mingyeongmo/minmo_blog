import { combineReducers, configureStore } from "@reduxjs/toolkit";
import search from "./modules/searchSlice";
import searchSlice from "./modules/searchSlice";

const ReducerRoot = combineReducers({
  search,
});

const store = configureStore({
  reducer: searchSlice,
});

export default store;
export type RootState = ReturnType<typeof ReducerRoot>;
