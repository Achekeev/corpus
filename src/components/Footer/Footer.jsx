import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";

const Footer = () => {
    return (
        <>
            <hr style={{ marginTop: "80px" }} />
            <div className={styles.footer_container}>
                <div>
                    <Link to="/">
                        <img height="65px" src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className={styles.left_side}>
                    <Link to="/categories">
                        <p>Категории</p>
                    </Link>
                    <Link to="/about">
                        <p>О нас</p>
                    </Link>
                    <Link to="/cart">
                        <p>Корзина</p>
                    </Link>
                </div>

                <div className={styles.right_side}>
                    <div>
                        Email:
                        <a target="_blank" href="mailto:corpus@gmail.com">
                            corpus@gmail.com
                        </a>
                    </div>
                    <div>Режим работы: 09:00-18:00 (СБ/ВС-выходные)</div>
                    <div>
                        WhatsApp: <a href="tel:+996556052952">+996556052952</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
