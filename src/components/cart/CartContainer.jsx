import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";

const CartContainer = () => {
  const { items, quantity, total } = useSelector((store) => store.cart);

  return (
    <div className="">
      {items.length === 0 ? (
        <div className="min-h-screen grid place-items-center">
          <div className="">
            <h5 className="mb-4 text-3xl font-bold">Your cart is empty</h5>
            <Link to="/">
              <button className="w-full">Start shopping</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="relative max-w-screen-xl mx-auto mt-16 px-4 py-6 md:flex justify-between gap-6">
          <div className="p-4 md:w-2/3 space-y-8">
            <div className="text-xl font-bold flex items-baseline justify-between">
              <h2 className="">Shopping Cart</h2>
              <span className="">
                {quantity} {quantity === 1 ? "Item" : "Items"}
              </span>
            </div>
            <CartItems items={items} />
          </div>
          <div className="p-4 sticky top-10 md:w-1/3 bg-gray-100">
            <div className="text-xl font-bold flex items-baseline justify-between">
              <h2 className="">Order summary</h2>
            </div>
            <p className="">Total: ${total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
