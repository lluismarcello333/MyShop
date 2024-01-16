import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../data/products";

interface CartState {
  cart: Products[];
}

const initialState: CartState = {
  cart: [],
};

/* interface CartAction {
  type: string;
  payload: Products;
} */

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProduct: (state, action) => {
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );
      state.cart = cartFiltered;
    },
  },
});

export const {addProduct, removeProduct} = cartSlice.actions;
