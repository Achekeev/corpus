import {cartActions} from "store/cart"

const actions = {
    cart: cartActions
}

export type ActionsType = typeof actions;
export default actions;

