import React from "react";
import styles from "./styles/AboutPage.module.css";
import stylesBr from "./styles/breadcrumbs.module.css";
import { Link as LinkRouter } from "react-router-dom";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Image from "../assets/img/Depositphotos_32696225_l-2015_result.jpg";

const OfertaPage = () => {
    return (
        <>
            <div className={stylesBr.breadcrumbs_container}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit">
                        <LinkRouter to="/">Главная</LinkRouter>
                    </Link>
                    <Link underline="hover" color="inherit">
                        <LinkRouter to="/cart">Публичная оферта</LinkRouter>
                    </Link>
                </Breadcrumbs>
            </div>

            <h2 className={styles.h2}>Публичная оферта</h2>
            <div className={styles.about_container}>
                <img src={Image} alt="about page" />
                <div className={styles.text}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Fugiat, doloribus!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsam asperiores eveniet nesciunt accusantium
                        adipisci provident voluptates quos possimus minima
                        aspernatur architecto libero fuga eos a expedita,
                        pariatur vero repellendus unde!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Officia nam quia ad mollitia! Labore consequuntur
                        a doloribus mollitia tempore vero commodi nemo libero.
                        Cum, praesentium consequatur dolore quis quas fugiat
                        quod minima ratione voluptate cumque inventore voluptas
                        magni beatae veniam?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam voluptatibus dolorum possimus impedit ab
                        perferendis ipsam, expedita quia consectetur repellat
                        quae soluta minus quas assumenda, et vel molestias.
                        Adipisci, omnis?
                    </p>
                </div>
            </div>
        </>
    );
};

export default OfertaPage;
