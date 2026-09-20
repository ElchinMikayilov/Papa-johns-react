import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "./basket/basketSlice"

export const store = configureStore({
  reducer: {
    basket: basketReducer
  },
})

store.subscribe(() => {
  const basket = store.getState().basket.basket

  localStorage.setItem('basket', JSON.stringify(basket))
})