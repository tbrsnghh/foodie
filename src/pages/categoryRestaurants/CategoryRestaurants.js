import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { search } from "../../store/features/food/foodSlice";
import Header from "../../components/header/Header";
import Swiper from "../../components/swiper/Swiper";
import { Layout } from "antd";
export default function CategoryRestaurants() {
  const item = useParams().index;

  const dispatch = useDispatch();
  //console.log(item);

  useEffect(() => {
    dispatch(search(item));
  }, [item]);
  const { filteredRestaurants } = useSelector((state) => state.food);
  //const restaurant = f.restaurants.find((restaurant) => restaurant.fod === item);
  console.log(filteredRestaurants);
  return (
    <>
      <Header />
      <Layout>
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant, index) => (
            <div className="sectionContainer">
              <div className="sectionContent header">
                <h1 key={index}>{restaurant.name}</h1>
              </div>
              <div className="sectionContent">
                <h1>
                  <span style={{ color: "#06D001" }}>{item}</span> ở{" "}
                  <span style={{ color: "#ED2B2A" }}>{restaurant.name}</span>
                </h1>
                {restaurant.foodmenu.find((menu) => menu.categories == item) ? (
                  (console.log(restaurant),
                  (<Swiper food={restaurant.foodmenu.find((menu) => menu.categories == item).items} />))
                ) : (
                  <p>No food.</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <h1>No restaurants</h1>
        )}
      </Layout>
    </>
  );
}
