import React, {useEffect} from 'react';
import Product from "pages/Home/Products/Product";
import {useAppDispatch, useAppSelector} from "hooks";
import {fetchProducts} from "store/products";

const Products = () => {
    const {products} = useAppSelector(state => state.products)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <section className="products">
            { !!products.length && products.map((product, i) =>
                <Product key={i} id={product.id} image={product.image} color={product.color} sale={product.sale} price={product.price}
                         hit={product.hit} description={product.description}/>
            )}
        </section>
    );
};

export default Products;
