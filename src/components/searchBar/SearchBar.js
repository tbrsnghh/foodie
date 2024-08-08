import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../store/features/food/foodSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const food = useSelector((state) => state.food);
    const { restaurants, filteredRestaurants} = food
  const handleSearchChange = (e) => {
    const query = e.target.value;
    dispatch(search({ type: "SET_SEARCH_QUERY", payload: query }));
    dispatch(
      search({ type: "FILTER_RESTAURANTS", payload: restaurants })
    );
  };

  return (
    <>
      <input
        type="text"
        onChange={handleSearchChange}
        placeholder="Tìm kiếm danh mục..."
      />
      
    </>
  );
};

export default SearchBar;
