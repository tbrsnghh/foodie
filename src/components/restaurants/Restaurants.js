import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

export default function Restaurants(props) {
    const index = useParams().index;   
    console.log(index)
    // Thay đổi thành ID của nhà hàng bạn muốn lấy  
    const restaurant = useSelector((state) => state.food.restaurants).find((res)=>res.id==index);

    return (  
        <>  
            {restaurant ? (  
                <div>  
                    <h1>{restaurant.name}</h1>  
                    <p>Address: {restaurant.address}</p>  
                    <p>Cuisine: {restaurant.cuisine}</p>  
                    <p>Rating: {restaurant.rating}</p>  
                    <img src={restaurant.img} alt={restaurant.name} />  
                </div>  
            ) : (  
                <p>Restaurant not found.</p>  
            )}  
        </>  
  )
}
