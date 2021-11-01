import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {categoriesAPI} from "api";
import {AxiosResponse} from "axios";
import {Product} from "models/products";

interface CounterState {
    categories: Product[]
}

const initialState: CounterState = {
    categories: [],
}

export const fetchCategories = createAsyncThunk(
    'categories/all',
    async () => {
        const response: AxiosResponse<Product[]> = await categoriesAPI.get("")
        console.log(response.data)
        return response.data
    }
)

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state: CounterState, action) => {
            state.categories = action.payload
        })
    }
})

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice.reducer