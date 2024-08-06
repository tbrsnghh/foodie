import { configureStore } from "@reduxjs/toolkit";
import food from "./food/foodSlice";

const store = configureStore({
  reducer: {
    food: food,
  },
});
export default store;
