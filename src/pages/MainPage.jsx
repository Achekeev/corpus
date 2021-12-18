import React, { useContext, useEffect } from "react";
import stylesBr from "./styles/breadcrumbs.module.css";
import Mebel from "../assets/img/Mebel.jpeg";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { mainContext } from "../context/MainContext";

import styles from "../components/Cards/Card.module.css";
import ItemCard from "../components/Cards/ItemCard";
import Button from "@mui/material/Button";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import stylesMain from "./styles/MainPage.module.css";

const MainPage = () => {
    const { getAllItems, allItems, next, prev } = useContext(mainContext);

    useEffect(() => {
        getAllItems("http://212.42.103.101:8920/products/");
    }, []);

    return (
        <>
            <div className={stylesBr.breadcrumbs_container}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                </Breadcrumbs>
            </div>
            <div>
                <img width="100%" src={Mebel} alt="hero_image" />
            </div>
            <div className={styles.card_container}>
                {allItems ? (
                    allItems.map((item) => (
                        <ItemCard key={item.id} item={item} />
                    ))
                ) : (
                    <h1>loading</h1>
                )}
            </div>
            <div className={stylesMain.pagination_container}>
                <Button
                    disabled={prev === null ? true : false}
                    variant="outlined"
                    startIcon={<ArrowBackIosIcon />}
                    onClick={() => getAllItems(prev)}
                >
                    Предыдущая
                </Button>
                <Button
                    disabled={next === null ? true : false}
                    variant="outlined"
                    endIcon={<NavigateNextIcon />}
                    onClick={() => getAllItems(next)}
                >
                    Следующая
                </Button>
            </div>
        </>
    );
};

export default MainPage;
