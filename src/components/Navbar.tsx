import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="navbar-brand">
          <img
            src="/src/assets/images/logo.png"
            alt="IT Services Logo"
            className="w-36"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#home"
              className="text-gray-800 font-medium hover:text-primary transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-800 font-medium hover:text-primary transition-colors"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-gray-800 font-medium hover:text-primary transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-800 font-medium hover:text-primary transition-colors"
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li>
              <a
                href="#home"
                className="block text-gray-800 font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-gray-800 font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-gray-800 font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-gray-800 font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
