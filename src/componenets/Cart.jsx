import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartPage() {
  const {
    cart,
    removeFromCart,
    decreaseQuantity,
    addToCart,
    totalPrice,
    getItemTotal,
  } = useContext(CartContext);

  return (
    <div className="py-40 px-6 md:px-40">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="italic text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="flex flex-col gap-5  divide-y divide-gray-200 bg-white p-4 shadow-md rounded-md">
            {cart.map((item, index) => {
              const itemTotal = getItemTotal(item);
              return (
                <li
                  key={index}
                  className="flex md:flex-row flex-col justify-between gap-3 items-center  py-4"
                >
                  <div className="flex items-center gap-3 w-[50%]">
                    <img
                      src={`${item.image}`}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-red-500">
                        ₦{Number(item.price).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-4 w-[50%] ">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                      <button
                        onClick={() => decreaseQuantity(index)}
                        className="px-2 text-3xl font-bold text-gray-600 hover:text-red-600"
                      >
                        −
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-2 text-3xl font-bold text-gray-600 hover:text-green-600"
                      >
                        +
                      </button>
                    </div>

                    {/* ✅ Corrected line */}
                    <div className="w-[30%] font-bold text-red-600">
                      <span>₦{itemTotal.toLocaleString()}</span>
                    </div>
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-700 hover:text-red-900 transition"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 text-right flex flex-col gap-5 items-end">
            <h3 className="text-xl font-bold">
              Total:{" "}
              <span className="text-red-600">
                ₦{totalPrice.toLocaleString()}
              </span>
            </h3>
            <Link to="/paystack" className=" bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-500 font-semibold">
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
