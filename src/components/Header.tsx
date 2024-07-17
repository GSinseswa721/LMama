import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-white to-pink-500 shadow-md py-4 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
          <Link to="/" className="hover:text-gray-700">LMama</Link>
        </div>
        <nav className="flex flex-col md:flex-row md:flex-1 justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
          <Link to="/" className="text-gray-900 font-bold hover:text-gray-700">Home</Link>
          <Link to="/testimonials" className="text-gray-900 font-bold hover:text-gray-700">Testimonials</Link>
          <Link to="/contact" className="text-gray-900 font-bold hover:text-gray-700">Contact</Link>
          <Link to="/about" className="text-gray-900 font-bold hover:text-gray-700">About</Link>
        </nav>
        <div className="self-center md:self-end">
          <Link to="/login" className="bg-white text-pink-600 hover:bg-pink-300 hover:text-white py-2 px-4 rounded transition duration-300">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
