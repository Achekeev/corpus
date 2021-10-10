import React from 'react';
import Header from "components/Header";
import Features from "components/Features";
import CartItem from "pages/Cart/CartItem";
import {useAppSelector} from "hooks";

const Cart = () => {
    const {products} = useAppSelector(state => state.products)
    const orders = useAppSelector(state => state.cart.orders.filter(order => products.find(p => p.id === order.productID)))

    return (
        <div className="container">
            <Header/>
            <Features/>
            <div className="cabinet">
                <h1>
                    Ваша корзина
                </h1>
                <hr className="cab-line"/>

                {orders.map((x, i) => <CartItem productID={x.productID} key={i}/>)}
                <button className="order">
                    Оформить заказ
                </button>

            </div>

        </div>
    );
};

export default Cart;