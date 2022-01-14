import React, { useContext, useEffect } from "react";
import { mainContext } from "../context/MainContext";
import { useParams } from "react-router";

import { Link as LinkRouter } from "react-router-dom";

import styles from "../components/Cards/Card.module.css";
import ItemCard from "../components/Cards/ItemCard";

import stylesBr from "./styles/breadcrumbs.module.css";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const ItemsPage = () => {
    const { getItemsBySubCategories, items } = useContext(mainContext);

    const params = useParams();

    useEffect(() => {
        getItemsBySubCategories(params.id);
    }, []);

    console.log("items page");
    console.log(params);

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

                    <Link underline="hover" color="inherit">
                        <LinkRouter to={`/${params.subcat}/${params.subcatId}`}>
                            {params.subcat}
                        </LinkRouter>
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        {params.sub}
                    </Link>
                </Breadcrumbs>
            </div>
            <div className={styles.card_container}>
                {items.results ? (
                    items.results.map((item) => (
                        <ItemCard key={item.id} item={item} />
                    ))
                ) : (
                    <h1>loading</h1>
                )}
            </div>
        </>
    );
};

export default ItemsPage;
