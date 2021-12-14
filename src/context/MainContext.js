import React, { useReducer, useState } from "react";
import axios from "axios";
import { API } from "../helpers/constants";

export const mainContext = React.createContext();

const INIT_STATE = {
    categories: [],
    subcategories: [],
    items: [],
    oneItem: [],
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
            return {
                ...state,
                categories: action.payload.data,
            };
        case "GET_SUBCATEGORIES":
            return {
                ...state,
                subcategories: action.payload.data,
            };
        case "GET_ONE_ITEM":
            return {
                ...state,
                oneItem: action.payload.data,
            };
        case "GET_ITEMS_BY_SUBCATEGORIES":
            return {
                ...state,
                items: action.payload.data,
            };
        case "ADD_AND_DELETE_PRODUCT_IN_CART":
            return {
                ...state,
                cartData: action.payload,
            };
        case "GET_CART":
            return {
                ...state,
                cart: action.payload,
            };
        default:
            return state;
    }
};

const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function getCategories() {
        let res = await axios.get(`${API}/categories`);
        dispatch({
            type: "GET_CATEGORIES",
            payload: res,
        });
    }

    async function getSubCategories(id) {
        let res = await axios.get(`${API}/subcategory/?category=${id}`);
        dispatch({
            type: "GET_SUBCATEGORIES",
            payload: res,
        });
    }

    async function getOneItem(id) {
        let res = await axios.get(`${API}/product/${id}`);
        dispatch({
            type: "GET_ONE_ITEM",
            payload: res,
        });
    }

    async function getItemsBySubCategories(id) {
        let res = await axios.get(
            `${API}/products/?subcategory=${id}&prod_set=&price=&fabric=`
        );
        console.log(res);
        dispatch({
            type: "GET_ITEMS_BY_SUBCATEGORIES",
            payload: res,
        });
    }

    async function postOrder(user, email, phone, date, bool) {
        axios.post("http://212.42.103.101:8920/cart/", {
            user: user,
            email: email,
            phone: phone,
            ordered_date: date,
            ordered: bool,
            // products: array,
        });
        console.log(user, email, phone, date, bool);
    }

    return (
        <mainContext.Provider
            value={{
                categories: state.categories,
                subcategories: state.subcategories,
                oneItem: state.oneItem,
                items: state.items,
                getItemsBySubCategories,
                getCategories,
                getSubCategories,
                getOneItem,
                postOrder,
            }}
        >
            {children}
        </mainContext.Provider>
    );
};

export default MainContextProvider;
