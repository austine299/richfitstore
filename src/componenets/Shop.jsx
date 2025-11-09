import { useState, useEffect } from "react";

import products from "../products.json";
import ItemsCard from "./ItemsCard";

function Shop() {
  const [cart, setCart] = useState([]);

  // 🧠 Load cart from localStorage on page load
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // 💾 Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  return (
    <div>
      <div className="flex flex-wrap md:flex-row   gap-5 w-full justify-center md:justify-start">
        {products.map((product) => (
          <ItemsCard
          id={product.id}
            image={`${process.env.PUBLIC_URL}/${product.image}`}
            image1={`${process.env.PUBLIC_URL}/${product.image1}`}
            name={product.name}
            price={product.price}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
