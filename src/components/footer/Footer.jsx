import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-8">
          {/* About Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are committed to providing exceptional service and high-quality products. Our team of professionals works tirelessly to ensure that you get the best experience possible.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
              <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Email: <a href="mailto:zohaibimtiaz2007@gmail.com" className="hover:text-blue-500">zohaibimtiaz2007@gmail.com</a></p>
            <p className="text-gray-400 mb-2">Phone: <a href="tel:+923706419327" className="hover:text-blue-500">+92 3706419327</a></p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mb-8">
          <Link to="https://www.facebook.com/zohaib.imtiaz.3994" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-3 text-xl">
            <FaFacebook />
          </Link>
          <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-3 text-xl">
            <FaTwitter />
          </Link>
          <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-3 text-xl">
            <FaInstagram />
          </Link>
          <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-3 text-xl">
            <FaLinkedin />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Zohaib Imtiaz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
