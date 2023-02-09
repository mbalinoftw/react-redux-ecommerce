import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const { quantity } = useSelector((store) => store.cart);

  return (
    <nav className="py-4 fixed left-0 top-0 right-0 z-10 bg-purple-700 text-white transition-transform duration-300">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl">
          Redux Store
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/">Products</Link>
          <Link to="/cart">
            <CartIcon quantity={quantity} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
