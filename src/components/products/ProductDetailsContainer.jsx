import React from "react";
import useFetch from "../hooks/useFetch";
import Error from "../error/Error";
import Loader from "../loader/Loader";
import ProductDetails from "./ProductDetails";
import { useParams } from "react-router-dom";
import NotFoundPage from "../error/NotFoundPage";

const ProductDetailsContainer = () => {
  const { productId } = useParams();
  const productIdIsValid = productId < 21;

  const { data: product, isLoading, error } = useFetch(`https://fakestoreapi.com/products/${productId}`);

  if (productIdIsValid) {
    return <>{error ? <Error /> : isLoading ? <Loader /> : <ProductDetails product={product} />}</>;
  }

  return <NotFoundPage />;
};

export default ProductDetailsContainer;
