import React from 'react';
import useFetchProducts from '../hooks/useFetchProducts';

const Pagination = ({setCurrentPage,currentPage}) => {
  // products comes from useFetchProducts hooks
  const {products} = useFetchProducts();

  // I want to show 4 products per page
  const productsPerPage = 4;
  // calculate the total page
  const totlaPage = Math.ceil(products.length / productsPerPage);
  // convert it into array 
  const pageNumbers = [...Array(totlaPage).keys()];

  // set the current page number by this handler
  const handlePageChange = (page) => {
     setCurrentPage(page);
  };

    return(
        <div className='pagination-container'>
           <h3>Current Page : {currentPage}</h3>
           <div className='pagination-buttons'>
              {
              pageNumbers.map(number => <button onClick={() => handlePageChange(number + 1)} key={number}>
                  {number + 1}
                </button>)
              } 
           </div>
          
        </div>
    )
}
export default Pagination;
