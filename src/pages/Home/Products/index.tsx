import React from 'react';
import Product from "pages/Home/Products/Product";

const Products = () => {
    return (
        <section className="products">
            {[...Array(3)].map((x, i) =>
                <Product key={i}/>
            )}
        </section>
    );
};

export default Products;