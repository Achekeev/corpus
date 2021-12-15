import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import MainContextProvider from "./context/MainContext";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
    <MainContextProvider>
        <BrowserRouter>
            <Header />
            <App />
            <Footer />
        </BrowserRouter>
    </MainContextProvider>,
    document.getElementById("root")
);
