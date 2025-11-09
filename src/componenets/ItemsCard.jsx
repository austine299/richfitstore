import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { FaArrowLeft, FaArrowRight, FaCircleDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ItemsCard({ image, image1, name, price, id }) {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);
  const [productImg, setProductImg] = useState(false);

  const handleProductImg = () => {
    setProductImg(!productImg);
  };

  const handleAddClick = () => {
    addToCart({ image, name, price, id });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="md:w-[31%] w-full bg-slate-50 hover:bg-slate-200 shadow-md p-5 rounded-md flex flex-col transition-all">
      <div className="flex items-center justify-center">
        <FaArrowLeft onClick={handleProductImg} className="hover:text-red-900 text-xl" />
        
        <Link
          to={`/product/${id}`}
          className="flex flex-col items-center justify-center px-4 flex-grow"
        >
          <div className="pb-3 cursor-pointer">
            <img
              src={`${productImg ? image1 : image}`}
              alt={name}
              className="rounded-md h-[200px] w-full object-cover"
            />
            <div className="flex gap-2 justify-center mt-2">
              <FaCircleDot className={`${!productImg ? "text-slate-700" : "text-slate-400"} text-[10px]`} />
              <FaCircleDot className={`${productImg ? "text-slate-700" : "text-slate-400"} text-[10px]`} />
            </div>
          </div>
        </Link>

        <FaArrowRight onClick={handleProductImg} className="hover:text-red-900 text-xl" />
      </div>

      <div className="flex flex-col gap-3 justify-around">
        <h6 className="text-[15px] font-bold">{name}</h6>
        <p className="text-[15px] italic font-bold text-red-500">₦{price}</p>
        <button
          onClick={handleAddClick}
          className={`h-[40px] border border-red-800 rounded-md cursor-pointer font-bold text-white transition-all ${
            added ? "bg-green-600" : "bg-red-800 hover:bg-red-500"
          }`}
        >
          {added ? "ADDED ✅" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
}

export default ItemsCard;
