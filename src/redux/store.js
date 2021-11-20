import { configureStore } from "@reduxjs/toolkit";
import mealsSlice from "./meals-slice";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    meals: mealsSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
