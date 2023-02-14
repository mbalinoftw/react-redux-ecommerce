import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import ProductDetails from "./components/products/ProductDetails";
import ProductsList from "./components/products/ProductsList";
import CartContainer from "./components/cart/CartContainer";
import { calcQuantityAndTotal } from "./redux/features/cart/cartSlice";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calcQuantityAndTotal());
  }, [items]);

  return (
    <main className='pt-16 min-h-screen flex flex-col'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
