import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { calcQuantityAndTotal } from "./redux/features/cart/cartSlice";

import Navbar from "./components/navbar/Navbar";
import CartContainer from "./components/cart/CartContainer";
import ProductsContainer from "./components/products/ProductsContainer";
import ProductDetailsContainer from "./components/products/ProductDetailsContainer";
import Footer from "./components/footer/Footer";
import NotFoundPage from "./components/error/NotFoundPage";

const App = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calcQuantityAndTotal());
  }, [items]);

  return (
    <main className="pt-16 grid min-h-screen" style={{ gridTemplateRows: "1fr auto" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/products" element={<ProductsContainer />} />
          <Route path="/products/:productId" element={<ProductDetailsContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" exact={true} element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
