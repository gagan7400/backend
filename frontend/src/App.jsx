import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Signup from './component/EcommerceUI/Signup.jsx';
import Login from './component/EcommerceUI/Login.jsx';
import Home from './component/EcommerceUI/Home.jsx';
import About from './component/EcommerceUI/About.jsx';
import Contact from './component/EcommerceUI/Contact.jsx';
import Navbar from './component/EcommerceUI/Navbar.jsx';
import Footer from './component/EcommerceUI/Footer.jsx';

import DashboardComp from './component/Dashboard/DashboardComp.jsx';
import Users from './component/Dashboard/Users.jsx';
import Products from './component/Dashboard/Products.jsx';
import UpdateProduct from './component/Dashboard/UpdateProduct.jsx';
import Orders from './component/Dashboard/Orders.jsx';
import Sidebar from './component/Sidebar.jsx';
import ProtectedRoute from './component/Dashboard/ProtectedRoute.jsx';

import AdminLogin from './component/admin/AdminLogin.jsx';
import Dashboard from './component/Dashboard/Dashboard.jsx';
import AddProduct from './component/Products/AddProduct.jsx';
import ProductPage from './component/EcommerceUI/productPage.jsx';
import CategoryPage from './component/EcommerceUI/CategoryPage.jsx';
import Cart from './component/EcommerceUI/Cart.jsx';
import OTP from './component/OTP.jsx';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<OTP />} />

        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path='/addproduct' element={<AddProduct />}></Route>
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/cart" element={<Cart />} />



        <Route path="/update-product/:id" element={<UpdateProduct />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>}>
          <Route index element={<DashboardComp />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer />


    </>
  );
}

export default App;
