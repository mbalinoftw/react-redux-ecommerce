import React from "react";
import { useSelector } from "react-redux";

import ModalRemoveItem from "../modal/ModalRemove";
import CartEmpty from "./CartEmpty";
import ShoppingCart from "./ShoppingCart";

const CartContainer = () => {
  const state = useSelector((store) => store.cart);
  return (
    <>
      <ModalRemoveItem />
      {state.items.length === 0 ? <CartEmpty /> : <ShoppingCart {...state} />}
    </>
  );
};

export default CartContainer;
