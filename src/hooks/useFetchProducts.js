
import { useEffect, useState } from "react";

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  // Initially, set loading to true
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('db_products.json');
        const data = await res.json();
        setProducts(data);
        // Set loading to false once data is loaded
        setIsLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    }

    fetchData();
  }, []);

  return { products, isLoading };
}

export default useFetchProducts;