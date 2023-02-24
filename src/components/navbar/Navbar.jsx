import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  const { quantity } = useSelector((store) => store.cart);

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollPosition = window.pageYOffset;
      if (window.scrollY > 75) {
        setIsVisible(previousScrollPosition > currentScrollPosition);
        setPreviousScrollPosition(currentScrollPosition);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousScrollPosition]);

  return (
    <nav
      className={`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } py-4 w-full fixed top-0 z-10 bg-purple-500 text-white transform transition-transform duration-300 `}>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
        <Link to="/products" className="text-2xl">
          Redux Store
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/products">Products</Link>
          <Link to="/cart" className="relative">
            <ShoppingCartIcon className="w-8 h-8" />
            <span className="w-4 h-4 absolute -top-1 -right-2 grid place-items-center rounded-full text-xs bg-purple-200 text-purple-500">
              {quantity}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
