import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { Grid } from "antd";
import { search } from "../../store/features/food/foodSlice";
import SearchRes from "./SearchRes";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const { useBreakpoint } = Grid;

const SearchBar = () => {
  const { filteredRestaurants } = useSelector((state) => state.food);
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchRes, setSearchRes] =useState(false)
  const searchBarRef = useRef(null); // tham chiếu khung tìm kiếm cho chức năng nhấn ra ngoài thì tắt search fill
  const inputRef = useRef(null); // Tham chiếu đến ô input
  const Navigate = useNavigate();
  // hiển thị input nhập tìm kiếm
  const handleSearchClick = () => {
    setShowSearch((prevShowSearch) => {
      const newShowSearch = !prevShowSearch;
      if (newShowSearch) {
        // Đảm bảo ô input đã được render trước khi gọi focus
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus(); // Tự động focus vào ô input
          }
        }, 0);
      }
      return newShowSearch; // Trả về giá trị mới để cập nhật state
    });
  };

  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query);
    dispatch(search(query));
    if (query === "") {  
      setSearchRes(false); // No search results if the query is empty  
    } else {  
      setSearchRes(filteredRestaurants.length > 0); // Update based on filtered results  
    } // Cập nhật giá trị tìm kiếm
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(e.target)
      ) {
        setShowSearch(false);
        setSearchQuery("")
        setSearchRes(false)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleKeyDown = (e) => {  
    if (e.key === "Enter") {  
      // Navigate to the results page with the search query as a param  
      Navigate(`/results/${encodeURIComponent(searchQuery)}`);  
    }  
  };  
  return (
    <Space ref={searchBarRef} style={{ display: "flex", alignItems: "center" }}>
      {showSearch && (
        <Input
          ref={inputRef} // Gán ref cho ô input
          type="text"
          style={{
            width: "200px",
            marginLeft: "10px",
          }}
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown} 
          placeholder="Tìm kiếm danh mục..."
        />
      )}
      <SearchOutlined
        onClick={handleSearchClick}
        style={{
          fontSize: screens.md ? "28px" : "24px",
          color: "#08c",
          cursor: "pointer",
        }}
      />
      {searchRes && <SearchRes />}
    </Space>
  );
};

export default SearchBar;
