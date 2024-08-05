import { configureStore } from "@reduxjs/toolkit";
import foodie from "./food/foodSlice";

const store = configureStore({
  reducer: {
    food: foodie
  },
});
export default store;
