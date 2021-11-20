import {cartActions} from "store/cart"
import {categoriesActions} from "store/categories";
import {discountActions} from "./discounts";

const actions = {
    cart: cartActions,
    category: categoriesActions,
    discount: discountActions,
}

export type ActionsType = typeof actions;
export default actions;

