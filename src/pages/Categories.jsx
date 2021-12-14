import React, { useContext, useEffect } from "react";
import { mainContext } from "../context/MainContext";

import CategoryCard from "../components/Cards/CategoryCard";
import Header from "../components/Header";

import styles from "../components/Cards/Card.module.css";
import stylesBr from "./styles/breadcrumbs.module.css";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const Categories = () => {
    const { getCategories, categories } = useContext(mainContext);

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <Header />
            <div className={stylesBr.breadcrumbs_container}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="/categories">
                        Категории
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
