import React from "react";
import styles from "./styles/breadcrumbs.module.css";
import Mebel from "../assets/img/Mebel.jpeg";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Header from "../components/Header";

const MainPage = () => {
    return (
        <>
            <Header />
            <div className={styles.breadcrumbs_container}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                </Breadcrumbs>
            </div>
            <div>
                <img width="100%" src={Mebel} alt="hero_image" />
            </div>
        </>
    );
};

export default MainPage;
