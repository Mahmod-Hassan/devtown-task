import React from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import SingleProduct from './SingleProduct';

const AllProducts = ({category, price, currentPage}) => {
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
    console.log(startIndex,endIndex)

    // handle products and loading state
    // so that there is no error occured
    let content = null;
    if(isLoading) {
        content = <h1>Loading...</h1>
    }
    else if(!isLoading && products.length > 0) {
        const filteredProducts = products
        .filter(filterByCategory)
        .sort(sortByPrice);
        if(filteredProducts.length === products.length) {
          content = filteredProducts
          .slice(startIndex, endIndex)
          .map((product) => (
            <SingleProduct key={product.id} product={product} />
          ));
        }
       else{
        content = filteredProducts
          .slice(0,4)
          .map((product) => (
            <SingleProduct key={product.id} product={product} />
          ));
       }
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

  // {
  //   "id": 9,
  //   "image": "https://i.ibb.co/ZBH17v7/levis501-2.webp",
  //   "category": "cloth",
  //   "title": "levis model 1",
  //   "description": "Nike Air Jordan, or Air Jordan for short, is a renowned collection of athletic footwear designed in partnership with basketball icon Michael Jordan.",
  //   "price": 35
  // },
  // {
  //   "id": 10,
  //   "image": "https://i.ibb.co/nBWVd8x/levis501-3.jpg",
  //   "category": "cloth",
  //   "title": "levis model 2",
  //   "description": "Nike Air Jordan, or Air Jordan for short, is a renowned collection of athletic footwear designed in partnership with basketball icon Michael Jordan.",
  //   "price": 45
  // },
  // {
  //   "id": 11,
  //   "image": "https://i.ibb.co/nBWVd8x/levis501-3.jpg",
  //   "category": "cloth",
  //   "title": "levis model 2",
  //   "description": "Nike Air Jordan, or Air Jordan for short, is a renowned collection of athletic footwear designed in partnership with basketball icon Michael Jordan.",
  //   "price": 45
  // }