import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showCart: false,
    showCustomerForm: false,
    showOrderSuccess: false,
  },
  reducers: {
    showCart(state, action) {
      state.showCart = action.payload;
    },
    showCustomerForm(state, action) {
      state.showCustomerForm = action.payload;
    },
    showOrderSuccess(state, action) {
      state.showOrderSuccess = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
