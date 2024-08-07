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
//const url="http://localhost:3000/"
const url = "https://api.jsonbin.io/v3/qs/66b33e3ead19ca34f892a160";  
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
        
        state.restaurants = action.payload.record.restaurants;  
         
      })  
      .addCase(fetchRestaurants.rejected, (state, action) => {  
        state.status = "failed";  
        state.error = action.error.message;  
      });  
  },  
});  

export const {} = foodSlice.actions;  
export default foodSlice.reducer;