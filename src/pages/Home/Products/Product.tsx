import React from 'react';
import hitImage from "assets/img/hit-hit.svg";
import styled from "styled-components"
import {useAppActions, useAppDispatch, useAppSelector} from "hooks";
import CartOutlineIcon from "mdi-react/CartOutlineIcon";
import CartOffIcon from "mdi-react/CartOffIcon";

interface ProductProps {
    id: number,
    image: string,
    sale: boolean,
    color: string,
    price: number,
    hit: boolean,
    description: string
}

const Sale = () => (
    <div className="discount">
        <span className="disc"> СКИДКА</span>
        <span className="big"> 50%</span>
    </div>
)

const SellHit = () => (
    <div className="hit" style={{marginTop: "25px"}}>
        <img src={hitImage} alt=""/>
    </div>
)

const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
`


const Product = (props: ProductProps) => {
    const dispatch = useAppDispatch()
    const {addOrder, removeOrder} = useAppActions(actions => actions.cart)
    const added = useAppSelector(state => state.cart.orders.find(el => el.productID === props.id))

    const toggleOrder = () => {
        const action = added ? removeOrder(props.id) : addOrder(props.id)
        dispatch(action)
    }

    return (
        <div className="products-item">
            <img src={props.image} alt=""/>
            {props.sale && <Sale/>}
            {props.hit && <SellHit/>}
            {props.description}: {props.color}
            <div className="description">
                <div className="desc-block">
                    <div className="price">
                        {props.price} сом
                    </div>
                    <div className="group-busket">
                        <CartButton onClick={toggleOrder}>
                            {added ? <CartOffIcon/> : <CartOutlineIcon/>}
                        </CartButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;