import React from "react";
import aboutImg from "../assets/rice1.png"; // replace with your arch or rice image

const AboutUs = () => {
  return (
    <div className="px-6 md:px-16 py-12 bg-[#5A0B0B] text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About Us"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff] mb-6">
            About Us
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#ffffff] mb-6">
            At <span className="font-semibold">Tastic</span>, we believe food is
            more than just nourishment—it is a way to bring families together
            and create memorable experiences. For generations, our rice has been
            trusted for its superior quality, delightful aroma, and consistent
            taste.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#ffffff] mb-6">
            From humble beginnings to becoming a household name, our mission has
            always been simple: to deliver rice that is{" "}
            <span className="font-semibold">Perfect. Every time.</span> Whether
            it’s a daily meal, a health-conscious recipe, or a festive
            celebration, Tastic ensures excellence in every grain.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#ffffff] mb-6">
            We are committed to sustainability, community support, and
            innovation—because for us, it’s not just about rice, it’s about
            creating a healthier and happier tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
