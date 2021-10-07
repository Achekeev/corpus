import React from 'react';
import buy from "assets/img/Buy.svg";
import hitImage from "assets/img/hit-hit.svg";

interface ProductProps {
    image: string,
    sale: boolean,
    color: string,
    price: number,
    hit: boolean
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


const Product = ({image, sale, color, price, hit}: ProductProps) => {
    return (
        <div className="products-item">
            <img src={image} alt=""/>
            {sale && <Sale/>}
            {hit && <SellHit />}
            {color}
            <div className="description">
                <div className="desc-block">
                    <div className="price">
                        {price} сом
                    </div>
                    <div className="group-busket">
                        <a href="/"><img src={buy} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;