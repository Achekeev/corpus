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
            {products.map(({image, color, sale, price, hit}, i) =>
                <Product key={i} image={image} color={color} sale={sale} price={price} hit={hit}/>
            )}
        </section>
    );
};

export default Products;