import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { postOrder } from './checkoutAPI'

const initialState = {
  products: [],
  status: 'idle',
}

export const checkoutPostOrder = createAsyncThunk(
  'checkout/postOrder',
  async (products) => {
    const response = await postOrder(products)
    return response.data
  }
)

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log('action', action)
      state.products.push(action.payload)
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (products, index) => index !== action.payload
      )
    },
    reset: (state, action) => {
      state = initialState
    },
    log: (state, action) => {
      console.log('action', action)
      console.log('state', state)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkoutPostOrder.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(checkoutPostOrder.fulfilled, (state, action) => {
        state.status = 'idle'
        state.products = []
      })
  },
})

export const { addProduct, removeProduct, reset, log } = checkoutSlice.actions

export const selectProducts = (state) => state.checkout.products
export const selectStatus = (state) => state.checkout.status

export default checkoutSlice.reducer
