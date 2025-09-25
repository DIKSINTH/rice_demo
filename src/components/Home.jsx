import { useNavigate } from "react-router-dom";
import rice1 from "../assets/rice1.png";
import rice2 from "../assets/rice2.png";
import rice3 from "../assets/rice3.png";
import products from "../assets/rice1.png"; // Your main product image

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
      <Header /> {/* Hero Section */}{" "}
      <div className="min-h-screen py-12 bg-[#5A0B0B] text-white">
        {" "}
        {/* Main Content Container: Single Flex Row for Large Screens (lg:flex-row) */}{" "}
        {/* All four items are direct children of this container to preserve code order */}{" "}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center lg:flex-row lg:flex-wrap lg:items-start lg:justify-between lg:gap-x-10">
          {/* 1. Heading (Code Order: 1) */}{" "}
          {/* VISUAL POSITION (lg): Top-Left (order-1), Width 50% */}{" "}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left lg:order-1">
            {" "}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">
              Welcome to Tastic{" "}
            </h1>{" "}
          </div>
          {/* 2. Main Image (Code Order: 2) */}{" "}
          {/* VISUAL POSITION (lg): Top-Right (order-2), Width 50% */}{" "}
          <div className="mt-10 lg:mt-0 w-full lg:w-[50%] flex justify-center lg:justify-end lg:order-2">
            {" "}
            <img
              src={products}
              alt="Tastic Products"
              className="max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] h-auto rounded-xl shadow-2xl"
            />{" "}
          </div>
          {/* 3. Buttons (Code Order: 3) */}{" "}
          {/* VISUAL POSITION (lg): Bottom-Left (order-4), Width 50% */}{" "}
          <div className="pt-8 lg:pt-0 flex items-center justify-center lg:justify-start flex-wrap lg:order-4 w-full lg:w-[45%]">
            {" "}
            <button onClick={() => navigate("/rice1")}>
              {" "}
              <img
                src={rice1}
                alt="Rice1"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
              />{" "}
            </button>{" "}
            <button onClick={() => navigate("/rice2")}>
              {" "}
              <img
                src={rice2}
                alt="Rice2"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
              />{" "}
            </button>{" "}
            <button onClick={() => navigate("/rice3")}>
              {" "}
              <img
                src={rice3}
                alt="Rice3"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
              />{" "}
            </button>{" "}
          </div>
          {/* 4. Paragraphs (Code Order: 4) */}{" "}
          {/* VISUAL POSITION (lg): Middle-Left (order-3), Width 50% */}{" "}
          <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-200 max-w-2xl lg:pb-3.5 lg:max-w-none lg:order-3 w-full lg:w-[45%] ">
            {" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ipsum consectetur voluptatum labore, aspernatur ratione omnis
              doloremque quod hic dolorem eum, eveniet, ab tempore velit harum
              debitis assumenda in deleniti magni sapiente provident quisquam.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* Other Sections */}
      <AboutUs />
      <Products />
      <FAQ />
      <Contact />
      <Footer />{" "}
    </>
  );
};

export default Home;
