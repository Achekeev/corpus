import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import CartCard from "../components/Cards/CartCard";

import stylesBr from "./styles/breadcrumbs.module.css";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import { list, destroy, total } from "cart-localstorage";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import { mainContext } from "../context/MainContext";

import styles from "./styles/CartPage.module.css";

const CartPage = () => {
    const { postOrder } = useContext(mainContext);
    const [arr, setArr] = useState(list());
    const [i, seti] = useState(0);
    // const [totalPrice, setTotalPrice] = total([]);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleInputUser = (e) => {
        console.log(e.target.value);
        setUser(e.target.value);
    };

    const handleInputEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };

    const handleInputPhone = (e) => {
        console.log(e.target.value);
        setPhone(e.target.value);
    };

    const handleOrder = (user, email, phone) => {
        let date = new Date().toLocaleDateString();
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        console.log(date);
        date = date + " " + hours + ":" + minutes;

        let bool = true;
        postOrder(user, email, phone, date, bool);
        clearCart();
    };

    // async function postOrder(user, email, phone, date, ordered, array) {
    //     axios.post("http://212.42.103.101:8920/cart/", {
    //         user: user,
    //         email: email,
    //         phone: phone,
    //         ordered_date: date,
    //         ordered: ordered,
    //         products: array,
    //     });
    // }

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
    };

    useEffect(() => {
        setArr(list());
    }, [i]);

    const handleDelete = () => {
        seti(i + 1);
    };

    const clearCart = () => {
        destroy();
        setArr(list());
    };

    const totalPr = total();

    console.log(arr);

    return (
        <>
            <Header />
            <div className={stylesBr.breadcrumbs_container}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="/cart">
                        Корзина
                    </Link>
                </Breadcrumbs>
            </div>

            <div className={styles.cart_container}>
                {arr ? (
                    arr.map((item) => (
                        <CartCard
                            key={item.id}
                            handleDelete={handleDelete}
                            item={item}
                        />
                    ))
                ) : (
                    <h2>Пусто</h2>
                )}
            </div>

            <div className={styles.cart_container}>
                <Button
                    onClick={() => clearCart()}
                    variant="outlined"
                    color="error"
                >
                    Очистить всю корзину
                </Button>

                <div>Сумма: {totalPr}</div>

                <Button
                    onClick={handleOpen}
                    variant="contained"
                    color="success"
                >
                    Оформить заказ
                </Button>
            </div>

            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Ваше ФИО
                        </Typography>
                        <Input
                            type="text"
                            onChange={(e) => handleInputUser(e)}
                        />
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Введите ваш email
                        </Typography>
                        <Input
                            type="text"
                            onChange={(e) => handleInputEmail(e)}
                        />
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Введите ваш номер телефона
                        </Typography>
                        <Input
                            type="text"
                            onChange={(e) => handleInputPhone(e)}
                        />
                        <Button
                            onClick={() => handleOrder(user, email, phone)}
                            variant="contained"
                            color="success"
                        >
                            Оформить заказ
                        </Button>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default CartPage;
