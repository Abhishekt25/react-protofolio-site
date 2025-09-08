import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="https://www.allitgoods.com/"
            rel="noopener noreferrer"
          >
            <img
              src="/images/allitimagess.jpg"
              alt="IT Services Logo"
              className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </a>
        </div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10">
          <li>
            <a
              href="#home"
              className="text-gray-700 font-semibold hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 font-semibold hover:text-blue-600 transition-colors duration-200"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-gray-700 font-semibold hover:text-blue-600 transition-colors duration-200"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 font-semibold hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {["Home", "About Us", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="block text-gray-700 font-semibold hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
