import React from "react";
import useFetch from "../hooks/useFetch";
import ModalClear from "../modal/ModalRemove";
import Product from "./Product";

const ProductsList = () => {
  const { data: products, isLoading, error } = useFetch("https://fakestoreapi.com/products");

  return (
    <div className="flex-1 max-w-screen-xl mx-auto px-4 py-6 grid gap-6 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {isLoading ? <p>Loading...</p> : null}
      {products ? products.map((product) => <Product key={product.id} product={product} />) : null}
    </div>
  );
};

export default ProductsList;
