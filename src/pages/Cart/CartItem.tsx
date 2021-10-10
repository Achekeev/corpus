import React from 'react';
import cartImage2 from "assets/img/cab-img-2.svg";
import {useAppActions, useAppDispatch, useAppSelector} from "hooks";

interface CartItemProps {
    productID: number
}

const CartItem = ({productID}: CartItemProps) => {
    const dispatch = useAppDispatch()

    const order = useAppSelector(state => state.cart.orders.find(el => el.productID === productID))
    const product = useAppSelector(state => state.products.products.filter(el => el.id === productID)[0])
    const {increaseAmount, decreaseAmount, removeOrder} = useAppActions(actions => actions.cart)

    return (
        <div className="cab-item">
            <div>
                <img src={product.image} alt="" width="300px"/>
            </div>
            <div className="cab-info">
                <div className="info">
                    <div>
                        <p className="pro-name">
                            {product.description}
                        </p>
                        <p className="prod-num">
                            {product.vendor_code}
                        </p>
                    </div>
                    <div>
                        <p className="price">
                            {product.price}
                        </p>
                    </div>
                </div>
                <div className="info">
                    <div className="prod-count">
                        <button className="counter-btn" onClick={() => dispatch(decreaseAmount(productID))}>
                            -
                        </button>

                        <em className="value">
                            {order?.amount}
                        </em>

                        <button className="counter-btn" onClick={() => dispatch(increaseAmount(productID))}>
                            +
                        </button>
                    </div>
                    <div className="cab-values">
                        <button className="delete-btn" onClick={() => dispatch(removeOrder(productID))}>
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;