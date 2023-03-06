import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./src/login/Login";
import Sign from "./src/sign/Sign";
import Product from "./src/product/Product";
import Price from "./src/price/Price";
const App = () => {
  return (
    <div>
      <Link to={"/"}>Login</Link>
      <Link to={"/sign"}>Sign</Link>
      <Link to={"/product"}>Product</Link>
      <Link to={"/price"}>Price</Link>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/product" element={<Product />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </div>
  );
};

export default App;
