import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router";
import { mainContext } from "../context/MainContext";

import styles from "./styles/ItemDetails.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import stylesBr from "./styles/breadcrumbs.module.css";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import Button from "@mui/material/Button";

import { add, exists } from "cart-localstorage";

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

const ItemDetails = () => {
    const { getOneItem, oneItem } = useContext(mainContext);
    const params = useParams();
    const [inCart, setInCart] = useState(exists(params.id));

    useEffect(() => {
        getOneItem(params.id);
        setInCart(exists(params.id));
    }, [params.id]);

    // console.log(inCart);
    // console.log(params.id);

    const handleAdToCart = (e, item) => {
        e.preventDefault();
        add(item);
        setInCart(!inCart);
    };

    const handleRemoveFromCart = (e, item) => {
        e.preventDefault();
        add(item.id);
        setInCart(!inCart);
    };
    console.log(oneItem);
    const arrImages = [
        oneItem.image,
        oneItem.image2,
        oneItem.image3,
        oneItem.image4,
        oneItem.image5,
    ];

    console.log(arrImages);
    const filterArr = arrImages.filter((n) => n);
    console.log(filterArr);

    // console.log(oneItem);

    return (
        <>
            <div className={stylesBr.breadcrumbs_container}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="/categories">
                        Категории
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        Подкатегории
                    </Link>
                </Breadcrumbs>
            </div>
            <div className={styles.container}>
                <Carousel
                    className={styles.carousel_root}
                    infiniteLoop={true}
                    width="70%"
                >
                    {filterArr.map((item) => (
                        <div key={item}>
                            <img src={item} alt="item" />
                        </div>
                    ))}
                </Carousel>

                <div className={styles.item_details}>
                    <h3>{oneItem.name}</h3>
                    <p>{oneItem.price}</p>
                    {oneItem.hit ? <h3>Хит продаж!</h3> : null}
                    {!inCart ? (
                        <Button
                            variant="contained"
                            endIcon={<AddShoppingCartOutlinedIcon />}
                            onClick={(e) => handleAdToCart(e, oneItem)}
                        >
                            В корзину
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            endIcon={<RemoveShoppingCartOutlinedIcon />}
                            color="error"
                            onClick={(e) => handleRemoveFromCart(e, oneItem)}
                        >
                            Удалить
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
};

export default ItemDetails;
