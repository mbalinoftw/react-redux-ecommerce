import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { title, price, description, image } = product;
  const { items } = useSelector((store) => store.cart);

  const isInCart = () => items.some((item) => item.id === product.id);

  return (
    <div className="w-full max-w-sm flex flex-col rounded-lg bg-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer">
      <Link to="/">
        <img className="p-8 w-64 h-64 mx-auto mix-blend-multiply" src={image} alt={description} />
      </Link>
      <div className="flex-1 px-5 pb-5 flex flex-col gap-6">
        <Link to="/">
          <h5 className="truncate text-xl font-semibold tracking-tight">{title}</h5>
        </Link>
        <div className="">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">${price}</span>
            {isInCart() ? (
              <button
                onClick={() => dispatch(remove(product))}
                className="px-4 py-2 focus:ring-4 focus:outline-none font-medium rounded-lg bg-purple-600 text-white text-sm text-center">
                Remove from cart
              </button>
            ) : (
              <button
                onClick={() => dispatch(add({ ...product, quantity: 1 }))}
                className="px-4 py-2 focus:ring-4 focus:outline-none font-medium rounded-lg bg-purple-600 text-white text-sm text-center">
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
