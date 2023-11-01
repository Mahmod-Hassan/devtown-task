import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const AllProducts = () => {
    // crate a state for storing products item
    const [products, setProducts] = useState([]);

    // fetchin products from db_products.json
    useEffect(() => {
       async function fetchProducts() {
            const res = await fetch('db_products.json');
            const data = await res.json();
            setProducts(data);
        }
        fetchProducts();
    },[])

    return(
        <div>
            {
                products.length && products.map(product => (
                    <SingleProduct key={product?.id} product={product} />
                ))
            }
        </div>
    )
}
export default AllProducts;