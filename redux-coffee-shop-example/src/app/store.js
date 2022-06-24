import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import checkoutReducer from '../features/checkout/checkoutSlice'

// Logger middleware
export const logger = ({ getState }) => {
  return (next) => (action) => {
    console.log('will dispatch:', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch:', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    checkout: checkoutReducer,
  },
  // middleware: [logger],
})
