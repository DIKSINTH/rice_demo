import React from "react";
import rice1 from "../../assets/rice1.png";
import rice2 from "../../assets/rice2.png";
import rice3 from "../../assets/rice3.png";
import rice4 from "../../assets/rice4.png";
import rice5 from "../../assets/rice1.png";
import rice6 from "../../assets/rice2.png";
import rice7 from "../../assets/rice1.png";
import rice8 from "../../assets/rice2.png";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";

const Gallery = () => {
  const galleryImages = [
    rice1,
    rice2,
    rice3,
    rice4,
    rice5,
    rice6,
    rice7,
    rice8,
  ];

  return (
    <>
      <Header />
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5A0B0B] mb-12">
            Our Rice Collection
          </h2>

          {/* Grid of Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
              >
                <img
                  src={img}
                  alt={`Rice Bag ${index + 1}`}
                  className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
