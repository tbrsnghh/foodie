import React from "react";
import { useSelector } from "react-redux";

export default function Categories() {
  const { restaurants, food, drinks} = useSelector((state) => state.food);

  return (
    <div>
      {food.length > 0
        ? food.map((item, index) => <h1 key={index}>{item}</h1>)
        : "HI"}
      {drinks.length > 0
        ? drinks.map((item, index) => <h1 key={index}>{item}</h1>)
        : "HI"}
    </div>
  );
}
