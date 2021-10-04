import React from 'react';
import chair from "assets/img/1armch.png";
import buy from "assets/img/Buy.svg";

const Product = () => {
    return (
                    <div className="products-item">
                <a href="/">
                    <img src={chair} alt="" />
                        <div className="discount">
                            <span className="disc"> СКИДКА</span>
                            <span className="big"> 50%</span>
                        </div>
                        <div className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolores adipisci
                            <div className="desc-block">
                                <div className="price">
                                    10000 сом
                                </div>
                                <div className="group-busket">
                                    <a href="/"><img src={buy} alt="" /></a>
                                </div>
                            </div>
                        </div>
                </a>
            </div>

    );
};

export default Product;