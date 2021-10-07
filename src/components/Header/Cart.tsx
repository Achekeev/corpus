import React, {useEffect} from 'react';
import busket from "assets/img/busket.png";
import {useAppActions, useAppDispatch, useAppSelector} from "hooks";

const Cart = () => {
    const dispatch = useAppDispatch()
    const {orders} = useAppSelector(state => state.cart)
    const {addOrder} = useAppActions(actions => actions.cart)

    useEffect(() => {
        dispatch(addOrder(20))
        dispatch(addOrder(20))
    }, [addOrder, dispatch])

    return (
        <div className="cart" onClick={() => dispatch(addOrder(25))}>
            <img src={busket} alt=""/>
            <div className="counter">{orders.length}</div>
        </div>
    );
};

export default Cart;