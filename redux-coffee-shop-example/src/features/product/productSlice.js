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
  },
});

export const { addProduct } = productSlice.actions;

export const selectProducts = (state) => state.product.product;

export default productSlice.reducer;
