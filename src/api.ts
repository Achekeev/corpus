import axios from "axios"

export const productsAPI = axios.create({
    baseURL: "http://localhost:8000/products/"
})
