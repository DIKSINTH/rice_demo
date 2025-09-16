import React from "react";
import aboutImage from "../../assets/rice1.png"; // Replace with your image
import ourStoryImage from "../../assets/rice2.png"; // Replace with your our story image
import team1 from "../../assets/rice2.png"; // Replace with team photos if available
import team2 from "../../assets/rice3.png";
import team3 from "../../assets/rice4.png";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="relative text-4xl md:text-6xl font-bold text-white text-center">
            About <span className="text-yellow-400">Tastic</span>
          </h1>
        </div>

        {/* Our Story */}
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-16">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image on left */}
            <div className="md:w-1/2">
              <img
                src={ourStoryImage}
                alt="Our Story"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Text on right */}
            <div className="md:w-1/2 ">
              <h2 className="text-3xl font-bold text-[#5A0B0B] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At <span className="font-semibold">Tastic</span>, food isn't
                just about taste—it's about family, togetherness, and tradition.
                Our journey began decades ago with a simple vision: to bring the
                best rice from our fields to every dining table. Over the years,
                we have grown into a trusted household name, known for superior
                quality, rich aroma, and unmatched consistency.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From humble beginnings to a brand loved nationwide, our focus
                has always been clear: quality, trust, and care. Today, Tastic
                is proud to serve millions of families, ensuring that every
                grain tells a story of tradition and excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className=" py-16 px-6 md:px-16 bg-[#5A0B0B]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-[#ffffff] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is simple: to deliver rice that is{" "}
                <span className="font-semibold">Perfect. Every time.</span>{" "}
                Whether it's a quick family meal, a festive gathering, or a
                health-focused recipe, Tastic ensures excellence in every grain.
                We believe in creating unforgettable dining moments with
                products that uphold quality, sustainability, and care.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#ffffff] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be a global leader in premium rice production while promoting
                sustainability, innovation, and community welfare. Our vision is
                a future where food nourishes not only people, but also the
                planet and generations to come.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto py-16 px-6 md:px-16">
          <h2 className="text-3xl font-bold text-[#5A0B0B] mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 shadow-md rounded-xl hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Quality</h4>
              <p className="text-gray-600">
                Only the finest grains make it to your table, ensuring purity
                and excellence.
              </p>
            </div>
            <div className="p-6 shadow-md rounded-xl hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Sustainability</h4>
              <p className="text-gray-600">
                Farming practices that respect nature and safeguard the future.
              </p>
            </div>
            <div className="p-6 shadow-md rounded-xl hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Innovation</h4>
              <p className="text-gray-600">
                Continuously improving our processes to meet modern needs while
                honoring tradition.
              </p>
            </div>
            <div className="p-6 shadow-md rounded-xl hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Community</h4>
              <p className="text-gray-600">
                Supporting local farmers and empowering communities worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="bg-gray-50 py-16 px-6 md:px-16">
          <h2 className="text-3xl font-bold text-[#5A0B0B] mb-10 text-center">
            Meet Our Team
          </h2>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
            <div className="shadow-md p-6 rounded-xl hover:shadow-lg transition">
              <img
                src={team1}
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold text-lg">John Doe</h4>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="shadow-md p-6 rounded-xl hover:shadow-lg transition">
              <img
                src={team2}
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold text-lg">Jane Smith</h4>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            <div className="shadow-md p-6 rounded-xl hover:shadow-lg transition">
              <img
                src={team3}
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold text-lg">Michael Lee</h4>
              <p className="text-gray-600">Marketing Director</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#5A0B0B] text-white py-16 px-6 md:px-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Journey</h2>
          <p className="text-lg mb-6">
            Join us as we continue to bring families together, one meal at a
            time.
          </p>
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition">
            Contact Us
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
