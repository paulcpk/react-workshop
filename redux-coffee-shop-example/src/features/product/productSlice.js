import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postOrder } from "./productAPI";

const initialState = {
  product: [],
  status: 'idle'
};

// async Redux action (Thunk)
export const checkoutPostOrder = createAsyncThunk(
  'product/postOrder',
  async (products) => {
    const response = await postOrder(products)
    return response.data
  }
)


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
  extraReducers: (builder) => {
    builder
      .addCase(checkoutPostOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkoutPostOrder.fulfilled, (state, action) => {
        state.status = 'idle';
        state.product = [];
      });
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export const selectProducts = (state) => state.product.product;
export const selectStatus = (state) => state.product.status;

export default productSlice.reducer;
