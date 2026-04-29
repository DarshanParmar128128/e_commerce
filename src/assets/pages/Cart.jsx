import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styless/carts.css";

const TrashIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
);

function Cart() {
  const location = useLocation();
  const [cart, setCart] = useState(location.state?.cart || []);

  const removeItem = (id) => {
    const el = document.getElementById(`cart-item-${id}`);
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateX(12px)";
      setTimeout(() => {
        setCart((prev) => prev.filter((item) => item.id !== id));
      }, 150);
    } else {
      setCart((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
 
      <div className="cart-header">
        <p className="cart-title">Your Cart</p>
        <span className="cart-badge">
          {cart.length} {cart.length === 1 ? "item" : "items"}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">🛒</span>
          <p className="empty-text">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div
                key={item.id}
                id={`cart-item-${item.id}`}
                className="cart-item"
              >
                <div className="item-details">
                  <div className="item-img-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="item-image"
                    />
                  </div>

                  <div className="item-info">
                    <h3>{item.title}</h3>
                    <p>₹ {item.price.toLocaleString("en-IN")}</p>
                  </div>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.title}`}
                >
                  <TrashIcon />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <span className="total-label">Total</span>
            <span className="total-price">
              ₹ {total.toLocaleString("en-IN")}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
