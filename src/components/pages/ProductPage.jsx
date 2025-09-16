import React from "react";
import rice1 from "../../assets/rice1.png";
import rice2 from "../../assets/rice2.png";
import rice3 from "../../assets/rice3.png";
import rice4 from "../../assets/rice4.png";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Rice 1",
      price: 120,
      discount: "10%",
      quantity: 25,
      image: rice1,
    },
    {
      id: 2,
      name: "Rice 2",
      price: 750,
      discount: "15%",
      quantity: 10,
      image: rice2,
    },
    {
      id: 3,
      name: "Rice 3",
      price: 1050,
      discount: "5%",
      quantity: 5,
      image: rice3,
    },
    {
      id: 4,
      name: "Rice 4",
      price: 199,
      discount: "20%",
      quantity: 18,
      image: rice4,
    },
    {
      id: 5,
      name: "Rice 5",
      price: 89,
      discount: "12%",
      quantity: 30,
      image: rice1,
    },
  ];

  return (
    <>
      <Header />
      <div className="py-12 px-6 bg-[#5A0B0B]">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#ffffff]">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">Price: ${product.price}</p>
                <p className="text-gray-600">Quantity: {product.quantity}</p>
                <p className="text-green-600 font-semibold">
                  Discount: {product.discount}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
