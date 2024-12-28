import React, { useState } from "react";
import { Link } from "react-router-dom";
const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">MyApp</div>
        

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <Link to="#" className="hover:text-gray-300">Home</Link>
          <Link to="#" className="hover:text-gray-300">About</Link>
          <Link to="#" className="hover:text-gray-300">Services</Link>
          <Link to="#" className="hover:text-gray-300">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Services</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;
