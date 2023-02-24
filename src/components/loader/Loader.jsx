import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <TailSpin color="rgb(126 34 206)" />
    </div>
  );
};

export default Loader;
