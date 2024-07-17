import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-white to-pink-500 shadow-md py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-900 mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} LMama. All rights reserved.</p>
        </div>
        <nav className="flex flex-col md:flex-row md:space-x-4">
          <Link to="/privacy" className="text-gray-700 hover:text-gray-900">Privacy Policy</Link>
          <Link to="/terms" className="text-gray-700 hover:text-gray-900">Terms of Service</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
