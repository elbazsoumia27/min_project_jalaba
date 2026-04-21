import React from 'react';

const Navbar = ({ cartItemCount, onCartClick }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-emerald-700">
              <span className="text-gold-600">D</span>jellaba
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-sand-800 hover:text-emerald-700 transition duration-200 font-medium">
              Home
            </a>
            <a href="#products" className="text-sand-800 hover:text-emerald-700 transition duration-200 font-medium">
              Shop
            </a>
            <a href="#about" className="text-sand-800 hover:text-emerald-700 transition duration-200 font-medium">
              About
            </a>
            <a href="#contact" className="text-sand-800 hover:text-emerald-700 transition duration-200 font-medium">
              Contact
            </a>
          </div>

          {/* Cart Icon */}
          <button
            onClick={onCartClick}
            className="relative p-2 text-emerald-700 hover:text-gold-600 transition duration-200"
            aria-label="Shopping Cart"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-gold-600 rounded-full">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
