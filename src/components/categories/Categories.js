import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { useSelector } from "react-redux";

export default function Categories() {
  const { restaurants, food, drinks } = useSelector((state) => state.food);
  //const categories = [...food,...drinks]
  return (
    <div>
      
      {food.length > 0 &&  
        food.map((item, index) => (  
          <h1 key={index}>{item}</h1>
        ))}  
    
    </div>
  );
}
