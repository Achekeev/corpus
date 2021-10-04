import React from 'react';
import cat from "assets/img/cat-img.svg"
import hit from "assets/img/hit-hit.svg"
import buy from "assets/img/Buy.svg"


const Category = () => {
    return (
        <div className="cat-item">
            <a href="/">
                <img src={cat} alt=""/>
                <div className="hit">
                    <img src={hit} alt=""/>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolores adipisci
                    <div className="desc-block">
                        <div className="price">10000 сом</div>
                        <div className="group-busket">
                            <a href="/"><img src={buy} alt=""/></a>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Category;