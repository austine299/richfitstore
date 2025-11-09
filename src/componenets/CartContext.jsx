// src/context/CartContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
    const [added, setAdded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // Save to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ Add item or increase quantity
   const addToCart = (item) => {
    console.log("Adding item:", item.name);
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((p) => p.name === item.name);
      if (existingIndex >= 0) {
        // If item exists → increase quantity
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        // If new → add with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // ➖ Decrease quantity or remove if 0
  const decreaseQuantity = (index) => {
    setCart((prevCart) => {
      const updated = [...prevCart];
      if (updated[index].quantity > 0) {
        updated[index].quantity -= 1;
      } else {
        updated.splice(index, 1);
      }
      return updated;
    });
  };

  // Remove item by index
  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const getItemTotal = (item) => {
  const numericPrice = parseFloat(String(item.price).replace(/[^\d.]/g, "")) || 0;
  return numericPrice * (item.quantity || 1);
};

  // Calculate total price safely
const totalPrice = cart.reduce((acc, item) => {
  const numeric = parseInt(String(item.price).replace(/[^\d]/g, ""));
  return acc + (isNaN(numeric) ? 0 : numeric * item.quantity);
}, 0);



  return (
    <CartContext.Provider value={{added, setAdded, getItemTotal, cart, addToCart, decreaseQuantity, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
