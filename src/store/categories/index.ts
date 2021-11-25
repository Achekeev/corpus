import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {categoriesAPI} from "api";
import {AxiosResponse} from "axios";
import Category from "models/category";

import chair from '../../assets/img/1armch.png'

interface CounterState {
    categories: Category[];
}

const initialState: CounterState = {
    categories: [{image: chair, name: 'Кровати'},]
}

export const fetchCategories = createAsyncThunk(
    'categories/all',
    async () => {
        const response: AxiosResponse<Category[]> = await categoriesAPI.get("")
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
