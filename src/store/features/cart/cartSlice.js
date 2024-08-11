import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Danh sách các mặt hàng trong giỏ
  totalItems: 0, // Tổng số mặt hàng trong giỏ
  totalPrice: 0, // Giá tổng cộng của giỏ hàng
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id && i.itemName === item.itemName && i.restaurant === item.restaurant && i.type === item.type)

      if (existingItem) {
        
        existingItem.quantity += 1;
      } else {
        
        state.items.push({...item, quantity:1}); 
      }
      
      state.totalItems += 1;
      state.totalPrice += item.price * 1;
      console.log("added");
    },
    removeFromCart(state, action) {
      console.log("removed");
      const itemId = action.payload.id;  
      const existingItemIndex = state.items.findIndex(i => i.id === itemId);  

      if (existingItemIndex !== -1) {  
        const existingItem = state.items[existingItemIndex];  
        state.totalItems -= existingItem.quantity;  
        state.totalPrice -= existingItem.price * existingItem.quantity;  
        state.items.splice(existingItemIndex, 1);  
      }  
      console.log(state.items)
    },
    clearCart(state) {
      // Xóa toàn bộ giỏ
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
