import React from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import { PaginationContainer } from '../styles/Container.styles';

const Pagination = ({setCurrentPage,currentPage, handlePageChange}) => {
  // products comes from useFetchProducts hooks
  const {products} = useFetchProducts();

  // I want to show 4 products per page
  const productsPerPage = 4;
  // calculate the total page
  const totlaPage = Math.ceil(products.length / productsPerPage);
  // convert it into array 
  const pageNumbers = [...Array(totlaPage).keys()];

    return(
      // PaginationContainer is a styled component
        <PaginationContainer>
           <h3>Current Page : {currentPage}</h3>
           <div>
              {
              pageNumbers.map(number => <button
              className={`${currentPage === number + 1 ? 'active' : 'inactive'}`}
              onClick={() => handlePageChange(number + 1)} key={number}>
                  {number + 1}
                </button>)
              } 
           </div>
          
        </PaginationContainer>
    )
}
export default Pagination;
