import { configureStore } from '@reduxjs/toolkit'
import products from "./products"
import cart from "./cart";
import categories from "./categories"
import discount from './discounts'

const store = configureStore({
  reducer: {
    products,
    cart,
    categories,
    discount
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
