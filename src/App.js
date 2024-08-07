import React from "react";
import { BrowserRouter, HashRouter, Route, Router, Routes } from "react-router-dom";
import Restaurants from "./components/restaurants/Restaurants";
import Home from "./pages/home/Home";
const App = () => (
  <HashRouter>
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/res/:index" element={<Restaurants />} />
    </Routes>
  </HashRouter>
);

export default App;
