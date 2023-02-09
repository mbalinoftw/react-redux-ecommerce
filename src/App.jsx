import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { calcQuantityAndTotal } from "./redux/features/cart/cartSlice";

const App = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calcQuantityAndTotal());
  }, [items]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
