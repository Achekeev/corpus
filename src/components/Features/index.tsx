import React, {useEffect, useState} from 'react';
import burger from "assets/img/burger.svg"
import ArrowLeftDropCircleOutlineIcon from "mdi-react/ArrowLeftDropCircleOutlineIcon";
import ArrowRightDropCircleOutlineIcon from "mdi-react/ArrowRightDropCircleOutlineIcon";
import {useAppDispatch, useAppSelector} from "hooks";
import Feature from "components/Features/Feature";
import {fetchCategories} from "store/categories";

const Features = () => {
    const {categories} = useAppSelector(state => state.categories);
    const dispatch = useAppDispatch();

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    return (
        <div className="features">
            <div className="burger" onClick={() => setShowMenu(!showMenu)}>
                <img src={burger} alt=""/>
            </div>
            <div id="menu" className="menu" style={{display: showMenu ? "block" : "none"}}>
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

                {categories.map((category, index) => <Feature image={category.image} description={category.name}
                                                    key={index}/>)}

                <button className="btn" style={{color: "black"}}>
                    <ArrowRightDropCircleOutlineIcon/>
                </button>
            </ul>
        </div>
    );
};

export default Features;