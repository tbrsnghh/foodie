import { configureStore } from "@reduxjs/toolkit";
import food from "./food/foodSlice";
import catsSlice from "./food/catsSlice";

const store = configureStore({
  reducer: {
    food: food,
    cats: catsSlice
  },
});
export default store;
