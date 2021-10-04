import React from 'react';
import logoo from "assets/img/logoo.svg";
import busket from "assets/img/busket.png";

const Header = () => {
    return (
                    <div className="header">
                <div className="logo">
                    <a href="/">
                        <img src={logoo} alt=""/>
                    </a>
                </div>
                <nav>
                    <ul className="nav">
                        <li><a href="/">Категории</a></li>
                        <li><a href="/">Каталог товаров</a></li>
                        <li><a href="/#contacts">Контакты</a></li>
                        <li><a href="/">О нас</a></li>
                    </ul>
                </nav>
                <div className="cart">
                    <a href="/">
                        <img src={busket} alt=""/>
                        <div className="counter">0</div>
                    </a>
                </div>
            </div>
    );
};

export default Header;