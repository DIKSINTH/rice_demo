import React from "react";
import { useNavigate } from "react-router-dom";

// Import your product images
import rice1 from "../assets/rice1.png";
import rice2 from "../assets/rice2.png";
import rice3 from "../assets/rice3.png";
import rice4 from "../assets/rice4.png"; // replace with correct image

const Products = () => {
  const navigate = useNavigate();

  const productList = [
    { id: 1, name: "Premium Rice 1", image: rice1 },
    { id: 2, name: "Premium Rice 2", image: rice2 },
    { id: 3, name: "Premium Rice 3", image: rice3 },
    { id: 4, name: "Premium Rice 4", image: rice4 },
  ];

  return (
    <div className="px-6 md:px-16 py-12 bg-[#5A0B0B] text-center">
      <h2 className="text-3xl font-bold mb-8 text-[#fefefe]">Our Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {productList.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h3>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-8">
        <button
          onClick={() => navigate("/productspage")}
          className="px-6 py-2 bg-[#280404] text-white rounded-lg shadow-md hover:bg-[#3D0707] transition"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Products;
