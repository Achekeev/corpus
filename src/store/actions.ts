import {cartActions} from "store/cart"
import {categoriesActions} from "store/categories";

const actions = {
    cart: cartActions,
    category: categoriesActions
}

export type ActionsType = typeof actions;
export default actions;

