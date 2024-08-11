import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./CartSlider.css"; // Giả sử bạn đã tạo file CSS này
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export default function CartSlider({isVisible}) {
  const { items } = useSelector((state) => state.cart);
  const navigate = useNavigate()
  const handleCheckout = () => {  
    console.log("click")
    navigate(`/cart`); // Chuyển đến trang giỏ hàng  
  };  
  
  return (
    <div
      className={`cart-slider ${isVisible ? "fade-in" : "fade-out"}`}
      data-aos="fade-right"
      data-aos-duration="300"
      
    >
      <h2>Giỏ Hàng</h2>
      <Button onClick={handleCheckout}>Thanh toán</Button>
      {items.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        items.map((item) => (
          <div className="cart-item" key={item.id}>
            <h3 className="item-name">{item.itemName}</h3>
            <p className="item-restaurant">Nhà hàng: {item.restaurant}</p>
            <p className="item-quantity">Số lượng: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}
