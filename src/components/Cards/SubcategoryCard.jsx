import React from "react";

import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Margin } from "@mui/icons-material";

const CategoryCard = ({ item }) => {
    const navigate = useNavigate();
    const handleClick = (subcat, subId, subcatId) => {
        navigate(`${subcat}/${subcatId}/items/${subId}/`);
    };

    if (item) {
        return (
            <Card
                onClick={() => handleClick(item.name, item.id, item.category)}
                sx={{ width: 250, m: 1, p: 0 }}
            >
                <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt="categories"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                </CardContent>
            </Card>
        );
    } else {
        return <h2>Loading</h2>;
    }
};

export default CategoryCard;
