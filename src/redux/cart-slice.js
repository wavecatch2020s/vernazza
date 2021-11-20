import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    cartId: 1,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity = state.totalQuantity + Number(newItem.quantity);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          quantity: Number(newItem.quantity),
          name: newItem.name,
          price: Number(newItem.price),
        });
      } else {
        existingItem.quantity =
          existingItem.quantity + Number(newItem.quantity);
      }

      const newTotalPrice = state.totalPrice + newItem.price * newItem.quantity;

      state.totalPrice = newTotalPrice;
    },
    removeOneFromCart(state, action) {
      const idOfItemToBeRemoved = action.payload;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === idOfItemToBeRemoved
      );

      state.items[existingItemIndex].quantity--;

      state.totalQuantity--;
      const newTotalPrice =
        state.totalPrice - state.items[existingItemIndex].price;
      state.totalPrice = Number(newTotalPrice.toFixed(2));
      if (state.items[existingItemIndex].quantity === 0) {
        state.items.splice(existingItemIndex, 1);
      }
    },
    changeCurrentCartId(state) {
      state.cartId++;
    },

    emptyTheCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
