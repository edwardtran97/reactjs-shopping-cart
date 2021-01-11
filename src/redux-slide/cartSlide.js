import { createSlice } from "@reduxjs/toolkit";

const cartSlide = createSlice({
  name: "cart",
  initialState: {
    cartList: [],

    cartTotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const newList = [...state.cartList];
      if (!newList.find((x) => x.id === item.id)) {
        newList.push(item);
      } else {
        const ItemIndex = newList.findIndex((x) => x.id === item.id);

        newList[ItemIndex] = {
          ...newList[ItemIndex],
          quantity: newList[ItemIndex].quantity + 1,
        };
      }

      const newCartTotal = newList.reduce(
        (a, b) => a + b.quantity * b.price,
        0
      );
      return {
        ...state,
        cartList: newList,
        cartTotal: newCartTotal,
      };
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      const newList = [...state.cartList].filter((item) => item.id !== itemId);

      const newCartTotal = newList.reduce(
        (a, b) => a + b.quantity * b.price,
        0
      );
      return {
        ...state,
        cartList: newList,
        cartTotal: newCartTotal,
      };
    },

    changeItemQuantity: (state, action) => {
      // Update quantity
      const itemId = action.payload.itemId;
      const itemQuantity = action.payload.itemQuantity;
      const cartList = state.cartList;
      const ItemIndex = cartList.findIndex((item) => item.id === itemId);
      cartList[ItemIndex].quantity = itemQuantity;

      // Update total
      state.cartTotal = cartList.reduce((a, b) => a + b.quantity * b.price, 0);
    },
  },
});

export const { addToCart, removeItem, changeItemQuantity } = cartSlide.actions;
export default cartSlide;
