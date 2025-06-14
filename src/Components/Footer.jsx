import React from "react";
import logo from "../assets/navLogo.jpg";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300">
      <div className="px-4 pt-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo + Description */}
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10" src={logo} alt="Logo" />
              <span className="text-2xl font-semibold">EchoJournal</span>
            </div>
            <p className="mt-4 text-sm text-gray-400 max-w-sm">
              "A blog exploring tech, productivity, and creative thinking to
              help you grow every day."
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-semibold mb-3">Category</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-white">
                    Tech
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white">
                    Travel
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white">
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white">
                    Food
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white">
                    Sports
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3">Legal & Policy</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-white">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 pb-10 border-t border-gray-800 mt-10 gap-4 text-sm text-gray-400">
          <p>© 2025 EchoJournal. All rights reserved.</p>
          <div className="flex space-x-5">
            {/* Twitter */}
            <a href="/" className="hover:text-white">
              <svg className="h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8...z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="/" className="hover:text-white">
              <svg className="h-5" fill="currentColor" viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,...z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="/" className="hover:text-white">
              <svg className="h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22,0H2C0.895,0,...z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
