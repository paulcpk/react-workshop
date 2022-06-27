import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.product.splice(action.payload, 1);
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export const selectProducts = (state) => state.product.product;

export default productSlice.reducer;
