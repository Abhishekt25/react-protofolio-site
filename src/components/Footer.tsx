import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="footer-logo">
            <img 
              src="/src/assets/images/logo.png" 
              alt="IT Services Logo" 
              className="w-32 mb-4"
            />
            <p className="text-gray-400">
              Providing innovative IT solutions since 2010.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">info@itservices.com</p>
            <p className="text-gray-400 mb-2">(123) 456-7890</p>
            <p className="text-gray-400">123 Tech Street, Silicon Valley, CA 94000</p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IT Services Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
