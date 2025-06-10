import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Man from "./pages/Man";
import Women from "./pages/Women";
import Jewelry from "./pages/Jewerly";
import Electric from "./pages/Electric";
import Notfound from "./pages/Notfound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/man" element={<Man />} />
        <Route path="/women" element={<Women />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/electric" element={<Electric />} />
        <Route path="/*" element={<Notfound />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
