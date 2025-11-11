import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../products.json";
import { CartContext } from "./CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const allProducts = products; // because your JSON is already an array
  const product = allProducts.find((item) => item.id.toString() === id);

  const [mainImage, setMainImage] = useState(product?.image);

  if (!product) return <p className="text-center mt-32">Product not found</p>;

  const handleAddClick = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };
  return (
    <div className="flex items-center pt-28 p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex flex-col gap-2 w-full">
          <img
            src={`${process.env.PUBLIC_URL}/${mainImage}`}
            alt={product.name}
            className="w-full object-cover rounded-lg mb-4"
          />
          <div className="w-full flex gap-4 justify-center">
            {[product.image, product.image1, product.image2].map(
              (img, index) => (
                <img
                  key={index}
                  src={`${process.env.PUBLIC_URL}/${img}`}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)}
                  className={`w-[20%] rounded-lg ${
                    mainImage !== img
                      ? "cursor-pointer opacity-60 hover:opacity-100 transition"
                      : "border border-green-500 border-b-8 shadow-lg transition duration-300"
                  }`}
                />
              )
            )}
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <div>
            <span className="text-2xl font-extrabold">Description</span>
            <p className="text-xl text-gray-600 mb-4">{product.description}</p>
          </div>
          <div>
            <span className="text-2xl font-extrabold">Availability</span>
            <div className="flex gap-7">
              <div className="flex flex-col gap-3">
                <span className="text-xl font-semibold">Colors</span>
                <div className="flex flex-col gap-1 mb-3">
                  <span className="text-xs hover:text-red-800 font-semibold cursor-pointer text-gray-600">
                    {product.color.color1}
                  </span>
                  <span className="text-xs hover:text-red-800 font-semibold  cursor-pointer text-gray-600">
                    {product.color.color2}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xl font-semibold">Sizes</span>
                <div className="flex gap-5 mb-3">
                  <span className="text-xs hover:text-red-800 font-semibold cursor-pointer text-gray-600">
                    {product.sizes.s}
                  </span>
                  <span className="text-xs hover:text-red-800 font-semibold  cursor-pointer text-gray-600">
                    {product.sizes.m}
                  </span>
                  <span className="text-xs hover:text-red-800 font-semibold cursor-pointer text-gray-600">
                    {product.sizes.l}
                  </span>
                  <span className="text-xs hover:text-red-800 font-semibold cursor-pointer text-gray-600">
                    {product.sizes.xl}
                  </span>
                  <span className="text-xs hover:text-red-800 font-semibold  cursor-pointer text-gray-600">
                    {product.sizes.xxl}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-2xl font-extrabold">Price</span>
            <p className="text-xl text-gray-600 mb-4">₦{product.price}</p>
          </div>

          <button
            onClick={() => {
              addToCart(product);
              handleAddClick();
            }}
            className={`h-[40px] border border-red-800 rounded-md cursor-pointer font-bold text-white transition-all px-5 ${
              added ? "bg-green-600" : "bg-red-800 hover:bg-red-500"
            }`}
          >
            {added ? "ADDED ✅" : "ADD TO CART"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
