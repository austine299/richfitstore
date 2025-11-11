import React, { useContext, useState } from "react";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext"

function Navbar() {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="fixed bg-white pl-6 pr-6 md:pl-20 md:pr-20 pt-6 pb-6 w-full shadow-md z-50">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/images/img21.jpg`} alt="logo" className="w-[120px] h-[60px] object-cover" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-lg font-bold gap-6">
          <li><Link className="hover:bg-red-800 hover:text-white py-3 px-5 rounded-md" to="/">Home</Link></li>
          <li><Link className="hover:bg-red-800 hover:text-white py-3 px-5 rounded-md" to="/product">All Products</Link></li>
          <li><Link className="hover:bg-red-800 hover:text-white py-3 px-5 rounded-md" to="/gallery">Look Book</Link></li>
          <li><Link className="hover:bg-red-800 hover:text-white py-3 px-5 rounded-md" to="/about">About</Link></li>
          <li><Link className="hover:bg-red-800 hover:text-white py-3 px-5 rounded-md" to="/contact">Contact</Link></li>
        </ul>

        {/* Right Icons */}
        <div className="flex gap-4 items-center">
          <FaSearch className="cursor-pointer text-xl" />
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-2xl text-red-700" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-700 text-white text-xs font-bold rounded-full px-1.5">
                {cart.length}
              </span>
            )}
          </Link>
          <FaBars
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col bg-white shadow-md mt-4 p-4 md:hidden gap-3">
          <li><Link className="hover:bg-red-800 hover:text-white py-3 px-5 rounded-md" to="/">Home</Link></li>
          <li><Link className="hover:bg-red-800 hover:text-white py-3 px-5 rounded-md" to="/product">All Products</Link></li>
          <li><Link className="hover:bg-red-800 hover:text-white py-3 px-5 rounded-md" to="/gallery">Look Book</Link></li>
          <li><Link className="hover:bg-red-800 hover:text-white py-3 px-5 rounded-md" to="/about">About</Link></li>
          <li><Link className="hover:bg-red-800 hover:text-white py-3 px-5 rounded-md" to="/contact">Contact</Link></li>
        </ul>
      )}
    </section>
  );
}

export default Navbar;
