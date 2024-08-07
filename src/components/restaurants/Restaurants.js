import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { Layout } from "antd";
import './restaurants.css'
import Swiper from '../swiper/Swiper'
export default function Restaurants(props) {
  const index = useParams().index;
  console.log(index);
  // Thay đổi thành ID của nhà hàng bạn muốn lấy
  const food = useSelector((state) => state.food)
  const restaurant = food.restaurants.find(
    (res) => res.id === index
  );
  

  return (
    <>
      <Header />
      <Layout.Content>
        <section className="sectionContainer">
          <div className="header">
          {restaurant ? (
            <div>
              <h1>{restaurant.name}</h1>
              <p>{restaurant.cuisine}</p>
              <p>Địa chỉ: {restaurant.address}</p>
              
              <p><span><i class="fas fa-star" style={{color:'#F9D949'}}></i> </span>{restaurant.rating}</p>
              <img src={restaurant.img} alt={restaurant.name} />
            </div>
          ) : (
            <p>Restaurant not found.</p>
          )}
          </div>
        </section>
        <Swiper food={food.food} />
      </Layout.Content>
    </>
  );
}
