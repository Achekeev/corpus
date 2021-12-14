import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import MainContextProvider from "./context/MainContext";

ReactDOM.render(
    <MainContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MainContextProvider>,
    document.getElementById("root")
);
