import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basket: JSON.parse(localStorage.getItem('basket')) || []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,

    reducers: {
        addBasket: (state, action) => {
            const item = state.basket.find(item => item.id === action.payload.id)

            if (item) {
                item.count += 1
            } else {
                state.basket.push(action.payload)
            }
        },

        removeBasket: (state, action) => {
            state.basket = state.basket.filter(item => item.id != action.payload)
        },

        increment: (state, action) => {
            const item = state.basket.find(item => item.id === action.payload)

            if (item) item.count += 1
        },

        decrement: (state, action) => {
            const item = state.basket.find(item => item.id === action.payload)

            if (item && item.count > 1) item.count -= 1
        }
    }
})

export const { addBasket, removeBasket, increment, decrement } = basketSlice.actions
export default basketSlice.reducer