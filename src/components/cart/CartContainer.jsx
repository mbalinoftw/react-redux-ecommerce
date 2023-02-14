import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { open } from "../../redux/features/cart/modalSlice";
import ModalRemoveItem from "../modal/ModalRemove";
import CartItems from "./CartItems";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { items, quantity, total } = useSelector((store) => store.cart);

  return (
    <>
      <ModalRemoveItem />
      <div className="flex-1 mt-4">
        {items.length === 0 ? (
          <div className="h-[80vh] grid place-items-center">
            <div className="text-center">
              <h5 className="mb-4 text-3xl text-gray-900 font-bold">Your cart is empty</h5>
              <Link to="/" className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-purple-500 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">
                Go shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="relative max-w-screen-xl mx-auto px-4 py-6 flex flex-col justify-between md:flex-row md:items-start gap-6">
            <div className="md:w-2/3 space-y-8">
              <h2 className="mb-2 text-xl font-bold text-gray-900">Shopping Cart</h2>
              <CartItems items={items} />
              <div className="flex justify-end">
                <button
                  onClick={() => dispatch(open())}
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">
                  Clear cart
                </button>
              </div>
            </div>
            <div className="p-4 md:p-8 py-8 md:w-1/3 sticky top-20 rounded-lg bg-gray-100">
              <h2 className="mb-2 text-xl font-bold text-gray-900">Order summary</h2>
              <div className="mb-4">
                <p className="text-gray-700">
                  Total items: <span className="font-bold">{quantity}</span>
                </p>
                <p className="text-gray-700">
                  Total: <span className="font-bold">${total.toFixed(2)}</span>
                </p>
              </div>
              <button className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-purple-500 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartContainer;
