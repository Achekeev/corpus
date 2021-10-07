import React from 'react';
import Header from "components/Header";
import Features from "components/Features";
import Contacts from "pages/Home/Contacts";
import Filter from "pages/Home/Filter";
import Category from "pages/Categories/Category";
import Pages from "pages/Home/Pages";
import Footer from "components/Footer";

const Categories = () => {
    return (
        <>
            <div className="container">
                <Header/>
                <Features/>
                <Contacts/>
                <Filter/>
                <section className="categories">
                    <Category/>
                </section>
                <Pages/>
            </div>
            <Footer/>
        </>
    );
};

export default Categories;