import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./assets/Headers";
import About from "./assets/pages/About";
import Cart from "./assets/pages/Cart";
import Contect from "./assets/pages/Contect";
import Home from "./assets/pages/Home";
import Footer from "./assets/pages/Footer";
import Product from "./assets/pages/Product";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contect />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* remove footer from the cart page */}
             {location.pathname !== "/cart" && <Footer />}
      </Router>
    </>
  );
}

export default App;
