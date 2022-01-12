import React from "react";
import Logo from "../../assets/img/logo.svg";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className={styles.nav_container}>
                <Link to="/">
                    <img height="35px" src={Logo} alt="Logo" />
                </Link>
                <Link to="/categories">
                    <p>Каталог</p>
                </Link>
                <Link to="/about">
                    <p>О нас</p>
                </Link>
                <Link to="/cart">
                    <p>Корзина</p>
                </Link>
            </div>
            <hr />
        </>
    );
};

export default Navbar;
