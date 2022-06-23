import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  status: 'idle',
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log('action', action);
      state.products = [...state.products, action.payload];
    },
    log: (state, action) => {
      console.log('action', action);
      console.log('state', state);
    }
  },
});

export const { addProduct, log } = checkoutSlice.actions;

export const selectProducts = (state) => state.checkout.products;

export default checkoutSlice.reducer;
