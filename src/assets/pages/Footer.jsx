import React from "react";
import "../styless/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
     <footer className="footer">

      <div className="footer-container">

       
        <div className="footer-box">
          <h3>My Store</h3>
          <p>Best electronics store for laptops, mobiles and TVs.</p>
        </div>

       
        <div className="footer-box">
          <h3>Quick Links</h3>
         <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/product">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>

      
        <div className="footer-box">
          <h3>Categories</h3>
          <ul>
            <li>Laptop</li>
            <li>Mobile</li>
            <li>TV</li>
            <li>Electronics</li>
          </ul>
        </div>

      
        <div className="footer-box">
          <h3>Help</h3>
          <ul>
            <li>FAQ</li>
            <li>Support</li>
            <li>Shipping</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 My E-Commerce Store. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;