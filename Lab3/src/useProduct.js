// UseProducts.js
import { useEffect, useState } from 'react';

const useProducts = () => {
  const [originProducts, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => setProducts(json.products))
      .catch(err => {
        setError(err);
        console.error(err);
      });
  }, []);

  return { originProducts, error };
};

export default useProducts;
