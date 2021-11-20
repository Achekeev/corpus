import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {discountsAPI} from "api";
import {AxiosResponse} from "axios";
import {Discount} from "models/category";

import chair from '../../assets/img/1armch.png'

interface DiscountState {
  items: Discount[]
}

const initialState: DiscountState = {
  items: [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],
}

export const fetchDiscount = createAsyncThunk(
  'discount/all',
  async () => {
    const response: AxiosResponse<Discount[]> = await discountsAPI.get("")
    console.log(response.data)
    return response.data
  }
)

export const discountSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDiscount.fulfilled, (state: DiscountState, action) => {
      state.items = action.payload
    })
  }
})

export const discountActions = discountSlice.actions;

export default discountSlice.reducer
