import React, {useEffect} from 'react';
import burger from "assets/img/burger.svg"
import ArrowLeftDropCircleOutlineIcon from "mdi-react/ArrowLeftDropCircleOutlineIcon";
import ArrowRightDropCircleOutlineIcon from "mdi-react/ArrowRightDropCircleOutlineIcon";
import {useAppDispatch, useAppSelector} from "hooks";
import {fetchProducts} from "store/products";
import Feature from "components/Features/Feature";

const Features = () => {
    const {products} = useAppSelector(state => state.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    return (
        <div className="features">
            <div className="burger">
                <img src={burger} alt=""/>
            </div>
            <div id="menu" className="menu">
                <ul>
                    <li><a href="/">Категории</a></li>
                    <hr/>
                    <li><a href="/">Каталог товаров</a></li>
                    <hr/>
                    <li><a href="/">Контакты</a></li>
                    <hr/>
                    <li><a href="/">О нас</a></li>
                    <hr/>
                </ul>
            </div>

            <ul className="slide">
                <button className="btn" style={{color: "black"}}>
                    <ArrowLeftDropCircleOutlineIcon/>
                </button>

                {products.map((product) => <Feature image={product.image} description={product.description} key={product.id}/>)}

                <button className="btn" style={{color: "black"}}>
                    <ArrowRightDropCircleOutlineIcon/>
                </button>
            </ul>
        </div>
    );
};

export default Features;