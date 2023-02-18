import React from "react";
import { TailSpin } from "react-loader-spinner";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import useFetch from "../hooks/useFetch";
import Product from "./Product";

const ProductsList = () => {
  const { memoizedData: products, isLoading, error } = useFetch("https://fakestoreapi.com/products");
  console.log("🚀 | file: ProductsList.jsx:9 | products", products)

  return (
    <>
      {error ? (
        <div className="grid place-items-center">
          <div className="p-6 flex flex-col items-center rounded-md shadow-md bg-red-100">
            <ExclamationCircleIcon className="w-12 h-12 text-red-500" />
            <p className="text-sm text-red-500">Couldn't fetch products from the server.</p>
          </div>
        </div>
      ) : isLoading ? (
        <div className="absolute inset-0 grid place-items-center">
          <TailSpin color="rgb(126 34 206)" />
        </div>
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

export default ProductsList;
