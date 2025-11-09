import Navbar from "./componenets/Navbar";
import Home from "./componenets/Home";
import Footer from "./componenets/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./componenets/Gallery";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Products from "./componenets/Products";
import { CartProvider } from "./componenets/CartContext";
import Cart from "./componenets/Cart";
import PaystackIntegration from "./componenets/PaystackIntegration";
import ProductDetails from "./componenets/ProductDetails";

function App() {
  return (
    <Router basename="/richfitstore">
      <CartProvider>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/paystack" element={<PaystackIntegration />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
