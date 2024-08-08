import React from 'react';  
import { useSelector } from 'react-redux';  

const SearchRes = () => {  
    const {filteredRestaurants} = useSelector((state) => state.food);  

    return (  
        <div>  
            {filteredRestaurants.map((restaurant, index) => (  
                <div key={index}>  
                    <h2>{restaurant.name}</h2>  
                    <p>{restaurant.cuisine}</p>  
                    {/* Hiển thị thêm thông tin nếu cần */}  
                </div>  
            ))}  
        </div>  
    );  
};  

export default SearchRes;