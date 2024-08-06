import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    cats:[],
    currentPage:1,
    status:"start",
    error:""
}


export const fetchCats=createAsyncThunk('cats/fetchCats', async()=>{
    const res=await axios.get("https://foodie-api-vetn.onrender.com/food")
    return res.data
})

const catsSlice=createSlice({
    name: "cats",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCats.pending, state=>{
            state.status="loading"
        })
        .addCase(fetchCats.fulfilled, (state, action)=>{
            state.status="succeeded"
            console.log(action.payload)
            state.cats=action.payload
        })
        .addCase(fetchCats.rejected, (state, action)=>{
            state.status="failed"
            console.log("Hỏng")
            state.error=action.error.message
        })

    }
})
export default catsSlice.reducer;