import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/AdminDashboard";
import Billing from "./pages/Billing";
import Category from "./pages/Category";
import Customer from "./pages/Customer";
import Product from "./pages/Product";
import Stock from "./pages/Stock";
import User from "./pages/User";
import Vendor from "./pages/Vendor";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/category" element={<Category />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/product" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/user" element={<User />} />
        <Route path="/vendor" element={<Vendor />} />
      </Routes>
    </Router>
  );
};

export default App;
