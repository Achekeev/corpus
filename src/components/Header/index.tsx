import React from 'react';
import {Link} from "react-router-dom";
import logoo from "assets/img/logoo.svg";
import RouteNames from "router/routeNames";
import Cart from "components/Header/Cart";

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
            <Cart />
        </div>
    );
};

export default Header;