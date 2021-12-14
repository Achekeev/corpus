import React, { useEffect, useContext } from "react";
import { mainContext } from "../context/MainContext";
import { useParams } from "react-router";
import SubcategoryCard from "../components/Cards/SubcategoryCard";
import Header from "../components/Header";

import styles from "../components/Cards/Card.module.css";
import stylesBr from "./styles/breadcrumbs.module.css";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const SubcategoriesPage = (props) => {
    const params = useParams();
    const { getSubCategories, subcategories } = useContext(mainContext);

    useEffect(() => {
        getSubCategories(params.id);
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
                    <Link
                        underline="hover"
                        color="inherit"
                        href={`/categories/sub/${params.id}`}
                    >
                        Подкатегории
                    </Link>
                </Breadcrumbs>
            </div>
            <div className={styles.card_container}>
                {subcategories ? (
                    subcategories.map((item) => (
                        <SubcategoryCard key={item.id} item={item} />
                    ))
                ) : (
                    <h1>loading</h1>
                )}
            </div>
        </>
    );
};

export default SubcategoriesPage;
