import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { calcQuantityAndTotal } from "./redux/features/cart/cartSlice";
import Navbar from "./components/navbar/Navbar";
import CartContainer from "./components/cart/CartContainer";
import ProductsContainer from "./components/products/ProductsContainer";
import ProductDetailsContainer from "./components/products/ProductDetailsContainer";
import Footer from "./components/footer/Footer";
import { SnackbarProvider } from "notistack";

const App = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calcQuantityAndTotal());
  }, [items]);

  return (
    <main className="pt-16 grid min-h-screen" style={{ gridTemplateRows: "1fr auto" }}>
      <SnackbarProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductsContainer />} />
            <Route path="/:productId" element={<ProductDetailsContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SnackbarProvider>
    </main>
  );
};

export default App;
