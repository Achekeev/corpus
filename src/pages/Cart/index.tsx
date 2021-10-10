import React from 'react';
import Header from "components/Header";
import Features from "components/Features";
import CartItem from "pages/Cart/CartItem";

const Cart = () => {
    return (
        <div className="container">
            <Header/>
            <Features/>
            <div className="cabinet">
                <h1>
                    Ваша корзина
                </h1>
                <hr className="cab-line"/>

                {[...Array(10)].map((x, i) => <CartItem key={i}/>)}
                <button className="order">
                    Оформить заказ
                </button>

            </div>

        </div>
    );
};

export default Cart;