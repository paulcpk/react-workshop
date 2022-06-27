import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import productReducer from '../features/product/productSlice'

// Logger middleware
export const logger = ({ getState }) => {
  return (next) => (action) => {
    console.log('will dispatch:', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch:', getState())

    // send data to GAnalytics

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
  middleware: [logger]
})
