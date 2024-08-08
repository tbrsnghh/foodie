import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const matchesSearchQuery = (restaurant, query) => {
  const lowerCaseQuery = query.toLowerCase();
  return Object.values(restaurant).some(
    (value) =>
      typeof value === "string" && value.toLowerCase().includes(lowerCaseQuery)
  );
};
const initialState = {
  food: [],
  drinks: [],
  restaurants: [],
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
      switch (action.payload.type) {
        case "SET_RESTAURANTS":
          return {
            ...state,
            restaurants: action.payload.payload,
          };
        case "SET_SEARCH_QUERY":
          return {
            ...state,
            searchQuery: action.payload.payload,
          };
        case "FILTER_RESTAURANTS":
          return {
            ...state,
            filteredRestaurants: state.restaurants.filter(
              (restaurant) => matchesSearchQuery(restaurant, state.searchQuery)
              // restaurant.name
              // .toLowerCase()
              // .includes(state.searchQuery.toLowerCase())
              // ||
              // restaurant.cuisine
              // .toLowerCase()
              // .includes(state.searchQuery.toLowerCase())
            ),
          };
        default:
          return state;
      }
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
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { search } = foodSlice.actions;
export default foodSlice.reducer;
