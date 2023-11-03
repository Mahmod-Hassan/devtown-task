import React from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import { ProductsContainer } from '../styles/Container.styles';
import SingleProduct from './SingleProduct';

const AllProducts = ({category, price, currentPage}) => {
  // useFetchProducts is a hook that fetch products and return the data
    const {isLoading, products} = useFetchProducts();

    // filter product by category
    const filterByCategory = (product) => {
        if (category === 'all' || product.category === category) {
            return true;
          }
          return false;
    }

    // sort product by price
    const sortByPrice = (a, b) => {
       if(parseInt(price) === 1) {
         return parseInt(a.price) - parseInt(b.price)
       }
       if(parseInt(price) === -1) {
        return parseInt(b.price) - parseInt(a.price)
       }
       return 0
    }

    // I want to show 4 products per page
    const productsPerPage = 4;

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    // handle products and loading state
    // so that there is no error occured
    let content = null;
    if(isLoading) {
        content = <h1>Loading...</h1>
    }
    else if(!isLoading && products.length > 0) {
        // first time filter and sorted
        const filteredProducts = products
        .filter(filterByCategory)
        .sort(sortByPrice);
        
        // then slice the array based on condition
        // when products will filter by default all category
        // this condition will be execute
        if(filteredProducts.length === products.length) {
          content = filteredProducts
          .slice(startIndex, endIndex)
          .map((product) => (
            <SingleProduct key={product.id} product={product} />
          ));
        }
        // when shop, cloth or other category will filter
        // then else condition will be execute
       else{
        content = filteredProducts
          .slice(0,4)
          .map((product) => (
            <SingleProduct key={product.id} product={product} />
          ));
       }
    }

    return (
      // ProductsContainer is a styled component
        <ProductsContainer>
            {
               content
            }
        </ProductsContainer>
    )
}
export default AllProducts;
