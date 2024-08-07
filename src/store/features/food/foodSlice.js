import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";  
import axios from "axios";  

const initialState = {  
  food: [],  
  drinks: [],  
  restaurants: [],  
  status: "idle", // Changed status to 'idle' for clarity  
  error: null,  
};  

// Get restaurants from API  
//Glitch
const url="https://receptive-tested-cowl.glitch.me/restaurants"   
// Render
// const url = "https://food-api-skwh.onrender.com/restaurants";  
export const fetchRestaurants = createAsyncThunk(  
  'food/fetchRestaurants',  
  async () => {  
    const res = await axios.get(url);  
    return res.data;  
  }  
);  

const foodSlice = createSlice({  
  name: "food",  
  initialState,  
  reducers: {},  
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

export const {} = foodSlice.actions;  
export default foodSlice.reducer;