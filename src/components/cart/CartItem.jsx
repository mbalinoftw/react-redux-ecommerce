import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment, remove } from "../../redux/features/cart/cartSlice";
import { open } from "../../redux/features/cart/modalSlice";
import ModalClear from "../modal/ModalRemove";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";
import TrashIcon from "./icons/TrashIcon";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { image, title, price, quantity } = item;

  return (
    <>
      <div className="p-4 rounded-md border flex items-center gap-4">
        <img src={image} alt="" className="p-1 md:p-4 w-16 h-16 md:w-32 md:h-32" />
        <div className="flex-1">
          <div className="">
            <h5 className="font-bold">{title}</h5>
            <span className="text-gray-700">${price}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => dispatch(decrement(item))}>
                <MinusIcon />
              </button>
              <span className="">{quantity}</span>
              <button onClick={() => dispatch(increment(item))}>
                <PlusIcon />
              </button>
            </div>
            <button
              onClick={() => dispatch(open(item))}
              className="p-1 grid place-items-center rounded-full border-2 border-gray-800">
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
