import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {productsAPI} from "api";
import {AxiosResponse} from "axios";
import {Product} from "models/products";

interface CounterState {
    products: Product[]
}

const initialState: CounterState = {
    products: [],
}

export const fetchProducts = createAsyncThunk(
    'users/fetchByIdStatus',
    async () => {
        const response: AxiosResponse<Product[]> = await productsAPI.get("")
        return response.data
    }
)

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchProducts.fulfilled, (state: CounterState, action) => {
            // Add user to the state array
            state.products = action.payload
        })
    }
})

export default counterSlice.reducer