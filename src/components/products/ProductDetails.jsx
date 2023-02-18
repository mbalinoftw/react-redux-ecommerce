import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { add, remove } from "../../redux/features/cart/cartSlice";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import useFetch from "../hooks/useFetch";

const ProductDetails = () => {
  const { productId } = useParams();
  const { items } = useSelector((store) => store.cart);
  const { memoizedData: product, isLoading, error } = useFetch(`https://fakestoreapi.com/products/${productId}`);
  const dispatch = useDispatch();

  const isInCart = () => items.some((item) => item.id === id);

  return (
    <>
      {error ? (
        <div className="grid place-items-center">
          <div className="p-6 flex flex-col items-center rounded-md shadow-md bg-red-100">
            <ExclamationCircleIcon className="w-12 h-12 text-red-500" />
            <p className="text-sm text-red-500">Couldn't fetch product from the server.</p>
          </div>
        </div>
      ) : isLoading ? (
        <div className="fixed inset-0 grid place-items-center">
          <TailSpin color="rgb(126 34 206)" />
        </div>
      ) : (
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="p-4 sm:p-8 md:p-12 md:w-1/2 bg-gray-100 rounded-lg md:rounded-none grid place-items-center">
            <img className="w-[16rem] mx-auto mix-blend-multiply" src={product.image} alt={product.title} />
          </div>
          <div className="p-4 md:w-1/2 grid place-items-center">
            <div className="">
              <span class="inline-block mb-2 bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-1 rounded-full">
                {product.category}
              </span>
              <h2 className="mb-2 text-2xl font-bold text-gray-800 leading-none">{product.title}</h2>
              <span className="mb-4 text-3xl text-gray-700 block">${product.price}</span>
              <p className="mb-8 text-gray-600">{product.description}</p>
              {isInCart() ? (
                <button
                  onClick={() => dispatch(remove(product))}
                  className="w-full md:w-auto inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-red-400 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2">
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={() => dispatch(add({ ...product, quantity: 1 }))}
                  className="w-full md:w-auto inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-purple-400 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2">
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
