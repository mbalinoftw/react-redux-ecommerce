import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFoundPagePage = () => {
  const url = useLocation();

  // display conditionally "product" or "page" if the resource isn't found
  const result = url.pathname.includes("products") ? "product" : "page";

  return (
    <section className="grid place-items-center">
      <div className="flex flex-col justify-center items-center">
        <QuestionMarkCircleIcon className="w-24 h-24 text-gray-300" />
        <h5 className="mb-4 text-3xl text-gray-800 font-bold">Oops! The {result} you're looking for doesn't exist.</h5>
        <Link
          to="/products"
          className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-purple-400 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2">
          Go shopping
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPagePage;
