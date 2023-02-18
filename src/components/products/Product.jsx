import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add, remove } from "../../redux/features/cart/cartSlice";

const Product = ({ product }) => {
  const { id, title, price, description, image } = product;
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const isInCart = () => items.some((item) => item.id === product.id);

  return (
    <div className="w-full max-w-sm flex flex-col rounded-lg bg-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer">
      <Link to={`/${id}`}>
        <img className="p-8 w-64 h-64 mx-auto mix-blend-multiply" src={image} alt={description} />
      </Link>
      <div className="flex-1 px-5 pb-5 flex flex-col gap-6">
        <Link to={`/${id}`}>
          <h5 className="truncate text-gray-800 text-xl font-semibold tracking-tight">{title}</h5>
        </Link>
        <div className="">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-700">${price}</span>
            {isInCart() ? (
              <button
                onClick={() => dispatch(remove(product))}
                className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-red-400 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2">
                Remove from cart
              </button>
            ) : (
              <button
                onClick={() => dispatch(add({ ...product, quantity: 1 }))}
                className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-purple-400 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2">
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
