import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  food: [
    {categories:"chicken", items:[
        {id: 'CH01', name:"Cánh gà chiên", price: 80000, res_id:'RES01', desc: "Cánh gà chiên ngon lắm", img: ""},
        {id: 'CH02', name:"Đùi gà chiên", price: 180000, res_id:'RES02', desc: "Đùi gà chiên cx ngon lắm", img: ""}
    ]},
    {categories:"pizza", items:[]},
    {categories:"breakfast", items:[]},
    {categories:"Cơm", items:[]},
    {categories:"Cháo", items:[]},
    {categories:"Ăn vặt", items:[]},
    {categories:"Rau trộn", items:[]},
    {categories:"Cơm tấm", items:[]},
  ],
  drinks: [],
  restaurants: [],
};

//Get products from API by async() >> async thunk
// const url = "https://66a07b337053166bcabb89f5.mockapi.io/Products";
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const res = await axios.get(url);
//     return res.data;
//   }
// );

const foodSlice = createSlice({
  name: "foodie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
  },
});
export const {} = foodSlice.actions;
export default foodSlice.reducer;
