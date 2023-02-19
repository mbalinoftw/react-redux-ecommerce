import React from "react";
import useFetch from "../hooks/useFetch";
import Error from "../error/Error";
import Loader from "../loader/Loader";
import Product from "./Product";

const ProductsContainer = () => {
  const { data: products, isLoading, error } = useFetch("https://fakestoreapi.com/products");
  return (
    <>
      {error ? (
        <Error error={error} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-screen-xl mx-auto px-4 py-6 grid gap-6 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsContainer;
