import React from 'react';
import {Link} from "react-router-dom";
import logoo from "assets/img/logoo.svg";
import busket from "assets/img/busket.png";
import RouteNames from "router/routeNames";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to={RouteNames.ROOT} >
                    <img src={logoo} alt=""/>
                </Link>
            </div>
            <nav>
                <ul className="nav">
                    <li><Link to={RouteNames.CATEGORIES}>Категории</Link></li>
                    {/*<li><Link to={RouteNames.ROOT}>Каталог товаров</Link></li>*/}
                    <li><Link to="/#contacts">Контакты</Link></li>
                    <li><Link to={RouteNames.ABOUT}>О нас</Link></li>
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