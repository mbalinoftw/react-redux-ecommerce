import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllProducts = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios("https://fakestoreapi.com/products");
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto mt-16 px-4 py-6 grid gap-6 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {isLoading ? (<p>Loading...</p>) : null}
      {products?.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
