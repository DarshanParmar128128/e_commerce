import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/styless/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import "./styless/head.css";

function Headers() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="cart-icon">
         <FaShoppingCart size={22}/>
        </Link>
      </nav>
    </header>
  );
}

export default Headers;
