import React from "react";
import logo from "../assets/navLogo.jpg";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-700">
      <div className="px-4 pt-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo + Description */}
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10" src={logo} alt="Logo" />
              <span className="text-2xl font-semibold text-gray-700">
                EchoJournal
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-600 max-w-sm">
              "A blog exploring tech, productivity, and creative thinking to
              help you grow every day."
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-semibold mb-3 text-gray-700">Category</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/"
                    className="hover:text-[#d72050] transition-colors duration-300"
                  >
                    Tech
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-[#d72050] transition-colors duration-300"
                  >
                    Travel
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-[#d72050] transition-colors duration-300"
                  >
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-[#d72050] transition-colors duration-300"
                  >
                    Food
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-[#d72050] transition-colors duration-300"
                  >
                    Sports
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3 text-gray-700">Legal & Policy</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/"
                    className="hover:text-[#d72050] transition-colors duration-300"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-[#d72050] transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-[#d72050] transition-colors duration-300"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 pb-10 border-t border-gray-300 mt-10 gap-4 text-sm text-gray-600">
          <p>© 2025 EchoJournal. All rights reserved.</p>
          <div className="flex space-x-5">
            {/* Twitter */}
            <a
              href="https://www.x.com/"
              className="hover:text-[#d72050] text-gray-700 transition-colors duration-300"
            >
              <FaSquareXTwitter size={24} />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              className="hover:text-[#d72050] text-gray-700 transition-colors duration-300"
            >
              <FaSquareInstagram size={24} />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              className="hover:text-[#d72050] text-gray-700 transition-colors duration-300"
            >
              <FaFacebookSquare size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
