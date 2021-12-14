import React from "react";

import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Margin } from "@mui/icons-material";

const CategoryCard = (props) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`items/${id}/`);
    };

    if (props.item) {
        return (
            <Card
                onClick={() => handleClick(props.item.id)}
                sx={{ width: 250, m: 1, p: 0 }}
            >
                <CardMedia
                    component="img"
                    height="200"
                    image={props.item.image}
                    alt="categories"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.item.name}
                    </Typography>
                </CardContent>
            </Card>
        );
    } else {
        return <h2>Loading</h2>;
    }
};

export default CategoryCard;
