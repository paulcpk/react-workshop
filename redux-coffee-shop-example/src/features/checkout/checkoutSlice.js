import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { postOrder } from './checkoutAPI'

// initial Redux state
const initialState = {
  products: [],
  status: 'idle',
}

// async Redux action (Thunk)
export const checkoutPostOrder = createAsyncThunk(
  'checkout/postOrder',
  async (products) => {
    const response = await postOrder(products)
    return response.data
  }
)

// utility function provided by RTK to save on boilerplate
export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload)
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (products, index) => index !== action.payload
      )
    },
    reset: (state) => {
      state = initialState
    },
    log: (state, action) => {
      console.log('action', action)
      console.log('state', state)
    },
  },
  // extraReducers for handling side effects and async action
  extraReducers: (builder) => {
    builder
      .addCase(checkoutPostOrder.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(checkoutPostOrder.fulfilled, (state) => {
        state.status = 'idle'
        state.products = []
      })
  },
})

export const { addProduct, removeProduct, reset, log } = checkoutSlice.actions

export const selectProducts = (state) => state.checkout.products
export const selectStatus = (state) => state.checkout.status

export default checkoutSlice.reducer
