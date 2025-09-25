import React, { useEffect } from "react";
import rice1 from "../assets/rice1.png";
import rice2 from "../assets/rice2.png";
import rice3 from "../assets/rice3.png";
import products from "../assets/rice3.png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Products from "./Products.jsx";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import FAQ from "./Faq.jsx";

const Rice3 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="min-h-screen py-12 bg-[#5A0B0B] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center lg:flex-row lg:flex-wrap lg:items-start lg:justify-between lg:gap-x-10">
          {/* 1. Heading */}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Welcome to Tastic
            </h1>
          </div>

          {/* 2. Main Image */}
          <div className="mt-10 lg:mt-0 w-full lg:w-[50%] flex justify-center lg:justify-end lg:order-2">
            <div
              className="bg-[#3D0707] rounded-full p-4 md:p-6 lg:p-10 shadow-xl"
              data-aos="fade-down-left"
            >
              <img
                src={products}
                alt="Rice3 Product"
                className="max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] h-auto rounded-xl"
              />
            </div>
          </div>

          {/* 3. Buttons */}
          <div className="pt-8 lg:pt-0 flex items-center justify-center lg:justify-start flex-wrap lg:order-4 w-full lg:w-[45%]">
            <button onClick={() => navigate("/rice1")}>
              <img
                src={rice1}
                alt="Rice1"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform"
              />
            </button>
            <button onClick={() => navigate("/rice2")}>
              <img
                src={rice2}
                alt="Rice2"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform"
              />
            </button>
            <button onClick={() => navigate("/rice3")}>
              <img
                src={rice3}
                alt="Rice3"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform"
              />
            </button>
          </div>

          {/* 4. Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-200 max-w-2xl lg:max-w-none pt-8 lg:pt-0 lg:order-3 w-full lg:w-[45%]">
            <p>
              At Tastic, we believe that every meal should be a moment of
              perfection. For generations, we have been bringing families
              together with rice that is not only delicious but also wholesome
              and reliable.
            </p>
            <p>
              Our promise is simple – Perfect. Every time. Whether you’re
              cooking a quick family dinner, a nourishing health-conscious dish,
              or a special feast, Tastic rice delivers consistent quality, great
              taste, and the perfect texture that makes every plate memorable.
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

export default Rice3;
