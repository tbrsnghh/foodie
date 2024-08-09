import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../store/features/food/foodSlice";

const SearchBar = () => {
  const dispatch = useDispatch();   
  const handleSearchChange = (e) => {
    const query = e.target.value;
    dispatch(search(query));
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
