import React from 'react';
import busket from "assets/img/busket.png";
import {useAppSelector} from "hooks";
import {useHistory} from "react-router-dom";

const Cart = () => {
    // const dispatch = useAppDispatch()
    const history = useHistory()
    const {orders} = useAppSelector(state => state.cart)
    // const {addOrder} = useAppActions(actions => actions.cart)

    return (
        <div className="cart" onClick={() => history.push("/cart")} style={{cursor: "pointer"}}>
            <img src={busket} alt=""/>
            <div className="counter">{orders.length}</div>
        </div>
    );
};

export default Cart;