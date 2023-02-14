import React from "react";
import CartItem from "./CartItem";

const CartItems = ({ items }) => {
  return (
    <div className="px-4 space-y-4">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartItems;
