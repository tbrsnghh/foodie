import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { search } from '../../store/features/food/foodSlice';

export default function CategoryRestaurants(props) {
    const item = useParams().index;
    const f = props.foodie;
    console.log(item)

    const dispatch = useDispatch();
    dispatch(search({ type: "SET_SEARCH_QUERY", payload: item }));
    const {filteredRestaurants} = useSelector((state) => state.food);  
  //const restaurant = f.restaurants.find((restaurant) => restaurant.fod === item);
  return (
    <div>
        {filteredRestaurants.length > 0 ? ((item, index)=>(
            <h1>{item.name}</h1>
        )):<h1>No restaurants</h1>} HI
    </div>
  )
}
