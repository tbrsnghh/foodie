import React, { useEffect } from "react";  
import { useDispatch, useSelector } from "react-redux";  
import { useParams } from "react-router-dom";  
import { search } from "../../store/features/food/foodSlice";  
import Header from "../../components/header/Header";  
import Swiper from "../../components/swiper/Swiper";  
import { Layout } from "antd";  
import Footerr from "../../components/footer/Footer";


export default function CategoryRestaurants() {  
  const item = useParams().index;  
  const dispatch = useDispatch();  

  useEffect(() => {  
    dispatch(search(item));  
  }, [item]);  

  const { filteredRestaurants } = useSelector((state) => state.food);  
  
  return (  
    <>  
      <Header />  
      <Layout>  
        {filteredRestaurants.length > 0 ? (  
          filteredRestaurants.map((restaurant, index) => {  
            const foodMenu = restaurant.foodmenu.find((menu) => menu.categories.name === item);  
            const drinksMenu = restaurant.drinksmenu.find((menu) => menu.categories.name === item);  
            
            return (  
              <div className="sectionContainer" key={index}>  
                <div className="sectionContent header">  
                  <h1>{restaurant.name}</h1>  
                </div>  
                <div className="sectionContent">  
                  <h1>  
                    <span style={{ color: "#06D001" }}>{item}</span> ở{" "}  
                    <span style={{ color: "#ED2B2A" }}>{restaurant.name}</span>  
                  </h1>  

                  {foodMenu && foodMenu.items.length > 0 ? (  
                    <Swiper restaurant={restaurant} type="food" items={foodMenu.items} />  
                  ) : drinksMenu && drinksMenu.items.length > 0 ? (  
                    <Swiper restaurant={restaurant} type="drinks" items={drinksMenu.items} />  
                  ) : (  
                    <p>No items.</p>  
                  )}  
                </div>  
              </div>  
            );  
          })  
        ) : (  
          <h1>No items</h1>  
        )}  
      </Layout>  
      <Footerr/>
    </>  
  );  
}