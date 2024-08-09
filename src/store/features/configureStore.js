import { configureStore } from "@reduxjs/toolkit";
import food from "./food/foodSlice";

<<<<<<< HEAD

=======
>>>>>>> 88afternoon
const saveToLocalStorage = (state) => {  
  try {  
    const serializedState = JSON.stringify(state);  
    localStorage.setItem('reduxState', serializedState);  
  } catch (e) {  
    console.error('Could not save state', e);  
  }  
};  

const loadFromLocalStorage = () => {  
  try {  
    const serializedState = localStorage.getItem('reduxState');  
    if (serializedState === null) return undefined;  
    return JSON.parse(serializedState);  
  } catch (e) {  
    console.error('Could not load state', e);  
    return undefined;  
  }  
};  
const persistedState = loadFromLocalStorage();
<<<<<<< HEAD
=======

>>>>>>> 88afternoon
const store = configureStore({
  reducer: {
    food: food,
  },
<<<<<<< HEAD
  preloadedState: persistedState, // Sử dụng persistedState nếu có 
});  
=======
  preloadedState: persistedState,
});
>>>>>>> 88afternoon
store.subscribe(() => {  
  saveToLocalStorage(store.getState());  
}); 
export default store;
