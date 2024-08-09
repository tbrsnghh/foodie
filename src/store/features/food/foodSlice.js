import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// hàm dưới tìm object.values theo searchQuery
const matchesSearchQuery = (restaurant, query) => {
  console.log(Object.values(restaurant));
  const lowerCaseQuery = query.toLowerCase();
  return Object.values(restaurant).some(
    (value) =>
      typeof value === "string" && value.toLowerCase().includes(lowerCaseQuery)
  );
};
const initialState = {
  restaurants: [],
  food: [],
  drinks: [],
  status: "idle", // Changed status to 'idle' for clarity
  error: null,
  searchQuery: "",
  filteredRestaurants: [],
};

// Get restaurants from API
//Glitch
const url = "https://receptive-tested-cowl.glitch.me/restaurants";
// Render
// const url = "https://food-api-skwh.onrender.com/restaurants";
export const fetchRestaurants = createAsyncThunk(
  "food/fetchRestaurants",
  async () => {
    const res = await axios.get(url);
    return res.data;
  }
);

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    search(state, action) {
      console.log(action.payload);
      return {
        ...state,
        searchQuery: action.payload,
        // Tìm bằng tên nhà hàng
        // filteredRestaurants: state.restaurants.filter((restaurant) =>
        //   matchesSearchQuery(restaurant, state.searchQuery)
        // tìm bằng tên món
        filteredRestaurants: state.restaurants.filter(
          (restaurant) =>
            // Kiểm tra trong foodmenu
            restaurant.foodmenu.some((menu) =>
              menu.items.some((item) =>
                item.name
                  .toLowerCase()
                  .includes(state.searchQuery.toLowerCase())
              )
            ) ||
            // Kiểm tra trong drinksmenu
            restaurant.drinksmenu.some((drinkMenu) =>
              drinkMenu.items.some((drinkItem) =>
                drinkItem.name
                  .toLowerCase()
                  .includes(state.searchQuery.toLowerCase())
              )
            )
        ),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.restaurants = action.payload;
        // load danh mục
        const foodCategories = [];
        const drinksCategories = [];
        state.restaurants.forEach((restaurant) => {
          restaurant.foodmenu.forEach((categoryGroup) => {
            foodCategories.push(categoryGroup.categories);
          });
          restaurant.drinksmenu.forEach((categoryGroup) => {
            drinksCategories.push(categoryGroup.categories);
          });
        });
        state.food = [...new Set(foodCategories)];
        state.drinks = [...new Set(drinksCategories)];
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { search } = foodSlice.actions;
export default foodSlice.reducer;
