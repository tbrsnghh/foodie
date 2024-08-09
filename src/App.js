import React, { useEffect } from "react";
import { BrowserRouter, HashRouter, Route, Router, Routes } from "react-router-dom";
import Restaurants from "./components/restaurants/Restaurants";
import Home from "./pages/home/Home";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "./store/features/food/foodSlice";
import Aos from "aos";
import CategoryRestaurants from "./pages/categoriesRestaurants/CategoriesRestaurants";

export default function App() {
  const f = useSelector((state) => state.food);
  // // useSelector phaair owr truoec cái load fetch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurants());
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <HashRouter>
    <Routes>
      <Route index element={<Home foodie={f}/>}></Route>
      <Route path="/res/:index" element={<Restaurants foodie={f} />} />
      <Route path="/food/:index" element={<CategoryRestaurants foodie={f} />} />
    </Routes>
  </HashRouter>
  )
}
