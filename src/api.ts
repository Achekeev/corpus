import axios from "axios"

const baseURL = process.env.REACT_APP_API_HOST

export const productsAPI = axios.create({
    baseURL: `${baseURL}/products`
})

export const categoriesAPI = axios.create({
    baseURL: `${baseURL}/categories`
})

export const discountsAPI = axios.create({
    baseURL: `${baseURL}/discounts`
})
