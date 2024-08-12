import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { Layout } from "antd";
import "./restaurants.css";
import Swiper from "../swiper/Swiper";
import Items from "../items/Items";
export default function Restaurants(props) {
  const index = useParams().index;
  console.log(index);
  // Thay đổi thành ID của nhà hàng bạn muốn lấy
  const { restaurants } = props.foodie;

  const restaurant = restaurants.find((res) => res.id === index);
  return (
    <>
      <Header />
      <Layout>
        <div className="sectionContainer">
          <div className="sectionContent header">
            {restaurant ? (
              <div>
                <h1>{restaurant.name}</h1>
                <p>{restaurant.cuisine}</p>
                <p>Địa chỉ: {restaurant.address}</p>

                <p>
                  <span>
                    <i class="fas fa-star" style={{ color: "#F9D949" }}></i>{" "}
                  </span>
                  {restaurant.rating}
                </p>
                <img src={restaurant.img} alt={restaurant.name} />
              </div>
            ) : (
              <p>Restaurant not found.</p>
            )}
          </div>
        </div>

        <div className="sectionContainer">
          <div className="sectionContent">
            {restaurant ? (  
              <>
              {
                restaurant.foodmenu.map((menu, idx) => {  
                  return ( // Thêm `return` ở đây để trả về JSX  
                    <Items  
                      restaurant={restaurant}  
                      type="food"  
                      items={menu.items}  
                      key={idx} // Thêm `key` để React nhận diện  
                    />  
                  );  
                })  
              }
              {
                restaurant.drinksmenu.map((menu, idx) => {  
                  return ( // Thêm `return` ở đây để trả về JSX  
                    <Swiper  
                      restaurant={restaurant}  
                      type="drinks"  
                      items={menu.items}  
                      key={idx} // Thêm `key` để React nhận diện  
                    />  
                  );  
                })  
              }
              </>
            ) : (  
              <p>Restaurant items not found.</p>  
            )}  
          </div>
        </div>
      </Layout>
    </>
  );
}
