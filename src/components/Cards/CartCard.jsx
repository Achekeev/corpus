import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import styles from "../../pages/styles/CartPage.module.css";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import { remove, quantity } from "cart-localstorage";

export default function CartCard({ item, handleDelete }) {
    const theme = useTheme();
    const [itemQuantity, setItemQuantity] = React.useState(item.quantity);

    // React.useEffect(() => {}, [itemQuantity]);

    const handleDeleteFromCart = (id) => {
        remove(id);
        handleDelete();
    };

    const handleAddQuantity = (id) => {
        setItemQuantity(itemQuantity + 1);
        quantity(id, +1);
        handleDelete();
    };

    const handleRemoveQuantity = (id) => {
        setItemQuantity(itemQuantity - 1);
        quantity(id, -1);
        handleDelete();
    };

    return (
        <div className={styles.cart_card}>
            <Card
                sx={{ display: "flex", maxWidth: "1100px" }}
                className={styles.column}
            >
                <CardMedia
                    component="img"
                    sx={{ maxWidth: 151 }}
                    image={item.image}
                    alt="Live from space album cover"
                />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        minWidth: "100%",
                    }}
                    className={styles.typografy}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Typography>Наименование: {item.name}</Typography>
                        <Typography>Цена: {item.price}</Typography>
                    </div>
                    <div>
                        <div>Количество: {itemQuantity}</div>
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleRemoveQuantity(item.id)}
                        >
                            -
                        </Button>{" "}
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleAddQuantity(item.id)}
                        >
                            +
                        </Button>
                    </div>
                    <div>
                        <Button
                            onClick={() => handleDeleteFromCart(item.id)}
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
