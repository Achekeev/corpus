import { configureStore } from '@reduxjs/toolkit'
import products from "./products"
import cart from "./cart";

const store = configureStore({
  reducer: {
    products,
    cart
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
