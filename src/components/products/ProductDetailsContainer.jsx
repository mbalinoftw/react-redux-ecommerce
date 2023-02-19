import React from "react";
import useFetch from "../hooks/useFetch";
import Error from "../error/Error";
import Loader from "../loader/Loader";
import ProductDetails from "./ProductDetails";
import { useParams } from "react-router-dom";

const ProductDetailsContainer = () => {
  const { productId } = useParams();
  const { data: product, isLoading, error } = useFetch(`https://fakestoreapi.com/products/${productId}`);

  return <>{error ? <Error /> : isLoading ? <Loader /> : <ProductDetails product={product} />}</>;
};

export default ProductDetailsContainer;
