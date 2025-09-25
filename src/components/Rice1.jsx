import React, { useEffect } from "react";
import rice1 from "../assets/rice1.png";
import rice2 from "../assets/rice2.png";
import rice3 from "../assets/rice3.png";
import products from "../assets/rice1.png"; // Rice1 product main image
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Products from "./Products.jsx";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import FAQ from "./Faq.jsx";

const Rice1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="min-h-screen py-12 bg-[#5A0B0B] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center gap-8 text-center">
          {/* Heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            data-aos="fade-down"
          >
            Welcome to Tastic – Rice 1
          </h1>

          {/* Main Image */}
          <div className="flex items-center justify-center" data-aos="fade-up">
            <div className="bg-[#3D0707] rounded-full p-4 md:p-6 lg:p-10 shadow-xl">
              <img
                src={products}
                alt="Rice1 Product"
                className="max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[450px] h-auto rounded-xl"
              />
            </div>
          </div>

          {/* Buttons */}
          <div
            className="flex items-center justify-center gap-4 pt-4 flex-wrap"
            data-aos="zoom-in"
          >
            <button onClick={() => navigate("/rice1")}>
              <img
                src={rice1}
                alt="Rice1"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
              />
            </button>
            <button onClick={() => navigate("/rice2")}>
              <img
                src={rice2}
                alt="Rice2"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
              />
            </button>
            <button onClick={() => navigate("/rice3")}>
              <img
                src={rice3}
                alt="Rice3"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
              />
            </button>
          </div>

          {/* Paragraphs */}
          <div
            className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-200 max-w-2xl"
            data-aos="fade-up"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ipsum consectetur voluptatum labore, aspernatur ratione omnis
              doloremque quod hic dolorem eum, eveniet, ab tempore velit harum
              debitis assumenda in deleniti magni sapiente provident quisquam.
            </p>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <AboutUs />
      <Products />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default Rice1;
