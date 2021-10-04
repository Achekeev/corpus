import React from 'react';
import Header from "components/Header";
import Features from "pages/Home/Features";
import Contacts from "pages/Home/Contacts";
import AppSlider from "pages/Home/AppSlider";
import Products from "pages/Home/Products";
import Cards from "pages/Home/Cards";
import Filter from "pages/Home/Filter";
import Pages from "pages/Home/Pages"
import Footer from "pages/Home/Footer";

const Home = () => {
    return (
        <div className="container">
            <Header />
            <Features />
            <Contacts />
            <AppSlider />
            <Cards />
            <Filter />
            <Products />
            <Pages />
            <Footer />
        </div>
    );
};

export default Home;