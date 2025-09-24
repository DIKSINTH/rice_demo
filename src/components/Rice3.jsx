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
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 bg-[#5A0B0B]">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Welcome to Tastic
          </h1>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
          <div
            className="bg-[#3D0707] rounded-full p-4 md:p-6 shadow-xl"
            data-aos="fade-down-left"
          >
            <img
              src={products}
              alt="Rice3 Product"
              className="max-w-full h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Small rice images as buttons */}
        <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
          <button onClick={() => navigate("/rice1")}>
            <img
              src={rice1}
              alt="Rice1"
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform"
            />
          </button>
          <button onClick={() => navigate("/rice2")}>
            <img
              src={rice2}
              alt="Rice2"
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform"
            />
          </button>
          <button onClick={() => navigate("/rice3")}>
            <img
              src={rice3}
              alt="Rice3"
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform"
            />
          </button>
        </div>

        {/* Paragraphs grouped in one div */}
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed text-gray-200">
            At Tastic, we believe that every meal should be a moment of
            perfection. For generations, we have been bringing families together
            with rice that is not only delicious but also wholesome and
            reliable.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-gray-200">
            Our promise is simple – Perfect. Every time. Whether you’re cooking
            a quick family dinner, a nourishing health-conscious dish, or a
            special feast, Tastic rice delivers consistent quality, great taste,
            and the perfect texture that makes every plate memorable.
          </p>
        </div>
      </div>

      <AboutUs />
      <Products />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default Rice3;
