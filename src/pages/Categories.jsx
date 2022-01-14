import React, { useContext, useEffect } from "react";
import { mainContext } from "../context/MainContext";

import CategoryCard from "../components/Cards/CategoryCard";

import styles from "../components/Cards/Card.module.css";
import stylesBr from "./styles/breadcrumbs.module.css";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Link as LinkRouter } from "react-router-dom";

const Categories = () => {
    const { getCategories, categories } = useContext(mainContext);

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <div className={stylesBr.breadcrumbs_container}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit">
                        <LinkRouter to="/">Главная</LinkRouter>
                    </Link>
                    <Link underline="hover" color="inherit">
                        <LinkRouter to="/categories">Каталог</LinkRouter>
                    </Link>
                </Breadcrumbs>
            </div>
            <div className={styles.card_container}>
                {categories ? (
                    categories.map((item) => (
                        <CategoryCard key={item.id} item={item} />
                    ))
                ) : (
                    <h1>loading</h1>
                )}
            </div>
        </>
    );
};

export default Categories;
