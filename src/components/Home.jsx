import { useNavigate } from "react-router-dom";
import rice1 from "../assets/rice1.png";
import rice2 from "../assets/rice2.png";
import rice3 from "../assets/rice3.png";
import products from "../assets/rice1.png";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Products from "./Products.jsx";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import FAQ from "./Faq.jsx";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 bg-[#5A0B0B] gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Welcome to Tastic
          </h1>

          {/* Small rice images as buttons */}
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4 flex-wrap">
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
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="bg-[#3D0707] rounded-full p-4 md:p-6 lg:p-10 shadow-xl">
            <img
              src={products}
              alt="Tastic Products"
              className="max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[450px] h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Two paragraphs grouped */}
        <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
          <p>
            At Tastic, we believe that every meal should be a moment of
            perfection. For generations, we have been bringing families together
            with rice that is not only delicious but also wholesome and
            reliable.
          </p>
          <p>
            Our promise is simple – Perfect. Every time. Whether you’re cooking
            a quick family dinner, a nourishing health-conscious dish, or a
            special feast, Tastic rice delivers consistent quality, great taste,
            and the perfect texture that makes every plate memorable.
          </p>
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

export default Home;
