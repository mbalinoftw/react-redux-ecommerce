import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { add, remove } from "../../redux/features/cart/cartSlice";
import useFetch from "../hooks/useFetch";

const ProductDetails = () => {
  const { productId } = useParams();
  const { items } = useSelector((store) => store.cart);
  const { data: product, isLoading, error } = useFetch(`https://fakestoreapi.com/products/${productId}`);
  const dispatch = useDispatch();

  const isInCart = () => items.some((item) => item.id === product.id);

  return (
    <div className="flex-1 relative max-w-screen-xl mx-auto px-4 py-6 md:flex justify-between gap-6">
      {isLoading ? <div className=''>Loading...</div> : null}

      {product ? (
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="p-4 sm:p-8 md:p-12 md:w-1/2 rounded-lg bg-gray-100">
            <img className="w-[16rem] mx-auto mix-blend-multiply" src={product.image} alt={product.title} />
          </div>
          <div className="md:w-1/2 md:p-8">
            <h2 className="mb-2 text-2xl font-bold leading-none">{product.title}</h2>
            <span className="mb-4 text-3xl block">${product.price}</span>
            <p className="mb-8">{product.description}</p>
            {isInCart() ? (
              <button
                onClick={() => dispatch(remove(product))}
                className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-red-400 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2">
                Remove from cart
              </button>
            ) : (
              <button
                onClick={() => dispatch(add({ ...product, quantity: 1 }))}
                className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-purple-500 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">
                Add to cart
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
