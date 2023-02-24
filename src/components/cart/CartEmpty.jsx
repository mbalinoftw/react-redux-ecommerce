import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <section className="grid place-items-center">
      <div className="text-center">
        <h5 className="mb-4 text-3xl text-gray-800 font-bold">Your cart is empty</h5>
        <Link
          to="/products"
          className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-purple-400 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2">
          Go shopping
        </Link>
      </div>
    </section>
  );
};

export default CartEmpty;
