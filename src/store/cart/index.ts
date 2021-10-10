import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Order {
    productID: number,
    amount: number
}

interface IState {
    orders: Order[]
}

const initialState: IState = {
    orders: [
        {
            productID: 1,
            amount: 1,
        }
    ],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addOrder(state, action: PayloadAction<number>) {
            state.orders.push({productID: action.payload, amount: 1})
        },

        increaseAmount(state, action: PayloadAction<number>) {
            const product = state.orders.find(el => el.productID === action.payload)
            if (product) product.amount += 1
        },

        decreaseAmount(state, action: PayloadAction<number>) {
            const product = state.orders.find(el => el.productID === action.payload)
            if (product && product.amount > 1) product.amount -= 1
        },

        removeOrder(state, action: PayloadAction<number>) {
            state.orders = state.orders.filter(order => order.productID !== action.payload)
        }
    },
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer