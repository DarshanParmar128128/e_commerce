import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const cached = localStorage.getItem("products");

    if (cached) {
      setProducts(JSON.parse(cached));
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          localStorage.setItem("products", JSON.stringify(data));
        });
    }
  }, []);

  const handleAddToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);

    navigate("/cart", { state: { cart: updatedCart } });
  };

  return (
    <div className="products-container">
      <div className="products-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} className="product-image" />

            <div className="product-title">{item.title.slice(0, 20)}...</div>

            <div className="product-price">₹ {item.price}</div>

            <button className="add-btn" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
