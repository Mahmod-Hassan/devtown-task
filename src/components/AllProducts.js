import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const AllProducts = ({category}) => {
    // crate a state for storing products item
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // fetchin products from db_products.json
    useEffect(() => {
       async function fetchProducts() {
            setIsLoading(true)
            const res = await fetch('db_products.json');
            const data = await res.json();
            setIsLoading(false)
            setProducts(data);
        }
        fetchProducts();
    },[])
    
    const filterByCategory = (product) => {
        if(category === 'all') {
            return true
        }
        else {
          return  product?.category === category
        }
    }

    let content = null;
    if(isLoading) {
        content = <h1>Loading...</h1>
    }
    if(!isLoading && products.length > 0) {
        content = products
        ?.filter(filterByCategory)
        ?.map( product => <SingleProduct key={product?.id} product={product} />)
    }
    return(
        <div className='products-container'>
            {
               content
            }
        </div>
    )
}
export default AllProducts;