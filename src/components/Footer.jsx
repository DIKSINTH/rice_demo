import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#5A0B0B] text-white py-8 px-6 md:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Quick Links:</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Contact Us:</h3>
            <address className="not-italic">
              <p>S.F. No. 6/218M Title Nagar, Acchampathu,</p>
              <p>Opp. to Bharath Petroleum, Madurai - 625019.</p>
              <p className="mt-2">+91-8667409781</p>
              <p>info@centroidengineers.in</p>
            </address>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p>
            © Copyright <strong>Tastic</strong> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
