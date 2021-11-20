import React from 'react';

import "assets/css/style.css"
import "assets/css/normalize.css"
import "assets/fonts/Roboto/roboto.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BrowserRouter as Router,} from "react-router-dom";
import Routes from "router";

function App() {
    return (
        <>
            <Router>
                <Routes/>
            </Router>
        </>
    );
}

export default App;
