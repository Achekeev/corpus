import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

import { add, list, exists } from "cart-localstorage";

const ItemCard = ({ item }) => {
    const [listOfCart, setListOfCart] = useState(list());
    const [inCart, setInCart] = useState(exists(item.id));
    const navigate = useNavigate();

    console.log(listOfCart);

    const handleClick = (id) => {
        navigate(`/item/${id}/`);
    };

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

    return (
        <Card sx={{ width: 250, m: 1, p: 0 }}>
            <CardMedia
                onClick={() => handleClick(item.id)}
                component="img"
                height="200"
                image={item.image}
                alt="categories"
            />
            <CardContent>
                <Typography
                    onClick={() => handleClick(item.id)}
                    gutterBottom
                    variant="h5"
                    component="div"
                >
                    {item.name}
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
                <Button onClick={() => handleClick(item.id)} size="small">
                    Подробнее
                </Button>
                {!inCart ? (
                    <AddShoppingCartOutlinedIcon
                        onClick={(e) => handleAdToCart(e, item)}
                    />
                ) : (
                    <RemoveShoppingCartOutlinedIcon
                        color="error"
                        onClick={(e) => handleRemoveFromCart(e, item)}
                    />
                )}
            </CardActions>
        </Card>
    );
};

export default ItemCard;
