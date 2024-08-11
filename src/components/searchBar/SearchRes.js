import React from "react";
import { useSelector } from "react-redux";

const SearchRes = () => {
  const { filteredRestaurants } = useSelector((state) => state.food);

  return (
    <div
      style={{
        display: "block",
        right: "0",
        top: "101%",
        position: "absolute",
        zIndex: "5",
        background: "white",
        width: "500px",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          marginLeft: "30px",
          transition: "background 0.3s",
        }}
      >
        <p>Nhà hàng liên quan...</p>
        {filteredRestaurants.map((restaurant, index) => (
          <div key={index}>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.cuisine}</p>
            {/* Hiển thị thêm thông tin nếu cần */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRes;
