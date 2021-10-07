import React from 'react';
import Header from "components/Header";
import Features from "components/Features";
import cat from "assets/img/cat-img.jpg"
import Footer from "components/Footer";

const Product = () => {
    return (
        <>
            <div className="container">
                <Header/>
                <Features/>
                <hr/>
                <section className="prod-card">

                    <div className="prod-item">
                        <img src={cat} alt=""/>

                        <div className="prod-img">
                            <button className="prod-btn">
                                left
                            </button>

                            <img src={cat} alt=""/>
                            <img src={cat} alt=""/>
                            <img src={cat} alt=""/>

                            <button className="prod-btn">
                                right
                            </button>
                        </div>
                    </div>

                    <div className="prod-item">
                        <div className="prod-caption">
                            <div className="prod-name">
                                Диван из кожи #12415
                            </div>
                            <div className="prod-brand">
                                Molestie
                                Molestie
                                Molestie
                                Molestie
                            </div>
                            <div className="prod-price">
                                10000
                            </div>
                            <div className="prod-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Elementum eu adipiscing suspendisse sit morbi hac.
                                Velit natoque ullamcorper consectetur eget massa aliquam.
                                In massa id porta malesuada sodales. Quis scelerisque eu massa dui.
                                Vitae, non mattis quisque ligula at amet a. A in egestas erat pretium.
                                Est tortor.
                            </div>
                        </div>
                    </div>
                </section>
                <hr/>
            </div>
            <Footer/>
        </>
    );
};

export default Product;