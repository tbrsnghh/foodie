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
  uniqueCategories: [],
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
      state.searchQuery = action.payload;
      state.filteredRestaurants = state.restaurants.filter((restaurant) => {
        // food category
        return (
          // restaurant name
          restaurant.name
            .toLowerCase()
            .includes(state.searchQuery.toLowerCase()) ||
          // cuisine
          restaurant.cuisine
            .toLowerCase()
            .includes(state.searchQuery.toLowerCase()) ||
          // food categories
          restaurant.foodmenu.some((menu) => {
            return (
              menu.categories.name // tên loại
                .toLowerCase()
                .includes(state.searchQuery.toLowerCase()) ||
              menu.items.some((item) =>
                item.name // tên món ăn
                  .toLowerCase()
                  .includes(state.searchQuery.toLowerCase())
              )
            );
          }) ||
          // drink categories
          restaurant.drinksmenu.some((menu) =>{
            return (
              menu.categories.name
                .toLowerCase()
                .includes(state.searchQuery.toLowerCase()) ||
              menu.items.some((item) =>
                item.name
                  .toLowerCase()
                  .includes(state.searchQuery.toLowerCase())
              )
            );
          })
        );
      });
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
        const foodCategoriesMap = {};
        const drinksCategoriesMap = {};

        state.restaurants.forEach((restaurant) => {
          restaurant.foodmenu.forEach((category) => {
            if (!foodCategoriesMap[category.categories.name]) {
              foodCategoriesMap[category.categories.name] = category.categories; 
            }
          });

          restaurant.drinksmenu.forEach((category) => {
            if (!drinksCategoriesMap[category.categories.name]) {
              drinksCategoriesMap[category.categories.name] = category.categories; 
            }
          });
        });

        state.food = Object.values(foodCategoriesMap);
        state.drinks = Object.values(drinksCategoriesMap);
        state.uniqueCategories = [...state.food,...state.drinks]
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { search } = foodSlice.actions;
export default foodSlice.reducer;
