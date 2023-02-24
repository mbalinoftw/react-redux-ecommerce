import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { add, remove } from "../../redux/features/cart/cartSlice";

const ProductDetails = ({ product }) => {
  const { id, image, title, price, description, category } = product;
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const isInCart = () => items.some((item) => item.id === id);

  return (
    <section className="relative flex flex-col gap-8 md:flex-row">
      <Link onClick={goBack} className="absolute top-2 left-2 flex items-center gap-1 text-sm md:text-lg">
        <ChevronLeftIcon className="w-4 h-4 md:w-8 md:h-8" />
        Back
      </Link>
      <div className="p-12 md:w-1/2 bg-gray-100 rounded-lg md:rounded-none grid place-items-center">
        <img className="w-[16rem] mx-auto mix-blend-multiply" src={image} alt={title} />
      </div>
      <div className="p-4 md:w-1/2 grid place-items-center">
        <div>
          <span className="inline-block mb-2 bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-1 rounded-full">
            {category}
          </span>
          <h2 className="mb-2 text-2xl font-bold text-gray-800 leading-none">{title}</h2>
          <span className="mb-4 text-3xl text-gray-700 block">${price}</span>
          <p className="mb-8 text-gray-600">{description}</p>
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
    </section>
  );
};

export default ProductDetails;
