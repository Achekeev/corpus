import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {categoriesAPI} from "api";
import {AxiosResponse} from "axios";
import { AllCategory } from "models/category";

import chair from '../../assets/img/1armch.png'

interface CounterState {
    categories: AllCategory;
}

const initialState: CounterState = {
    categories: {
      count: 0,
      next: 0,
      previous: 0,
      results: [
          {image: chair, name: 'Офисные стулья'},
          {image: chair, name: 'Шкафы'},
          {image: chair, name: 'Диваны'},
          {image: chair, name: 'Кровати'},
          {image: chair, name: 'Стулья'},
          {image: chair, name: 'Стол'},
          {image: chair, name: 'Кровати'},
          {image: chair, name: 'Стенки'},
          {image: chair, name: 'Кровати'},
        ],
    }

}

export const fetchCategories = createAsyncThunk(
    'categories/all',
    async () => {
        const response: AxiosResponse<AllCategory> = await categoriesAPI.get("")
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
