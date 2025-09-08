import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Logo + About */}
          <div className="footer-logo">
            <img
              src="/images/allitimagess.jpg"
              alt="All IT Goods Logo"
              className="w-32 mb-4 rounded-xl"
            />
            <p className="text-gray-400">
              Delivering reliable IT solutions to help businesses grow and stay ahead in the digital era.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">
              <a href="mailto:info@allitgoods.com" className="hover:text-white">
                info@allitgoods.com
              </a>
            </p>
            <p className="text-gray-400 mb-2">
              <a href="tel:+919116150330" className="hover:text-white">
                +91 9116150330
              </a>
            </p>
            <p className="text-gray-400">
             Plot No. C-95 Arg Puram, Nayala Road Kanato, Jaipur, RJ 302012
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} All IT Goods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
