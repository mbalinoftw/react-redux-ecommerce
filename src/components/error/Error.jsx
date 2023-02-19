import React from "react";

const Error = ({ error }) => {
  console.log("🚀 | file: Error.jsx:4 | error:", error)
  return (
    <div className="grid place-items-center">
      <div className="p-6 flex flex-col items-center rounded-md shadow-md bg-red-100">
        <ExclamationCircleIcon className="w-12 h-12 text-red-500" />
        <p className="text-sm text-red-500">Couldn't fetch products from the server.</p>
      </div>
    </div>
  );
};

export default Error;
