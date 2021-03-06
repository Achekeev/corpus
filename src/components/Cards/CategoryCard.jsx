import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

const CategoryCard = ({ item }) => {
    const navigate = useNavigate();

    const handleClick = (subcat, subcatId) => {
        navigate(`/${subcat}/${subcatId}`);
    };

    return (
        <Card
            sx={{ width: 250, m: 1, p: 0 }}
            onClick={() => handleClick(item.name, item.id)}
        >
            <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="categories"
            />
            <CardContent>
                <Typography gutterBottom variant="h8" component="div">
                    {item.name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;
