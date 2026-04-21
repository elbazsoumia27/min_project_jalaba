import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-sand-100 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold font-serif text-gold-400">
              <span className="text-gold-300">D</span>jellaba
            </h3>
            <p className="text-sand-300 text-sm leading-relaxed">
              Premium traditional Moroccan Djellabas crafted with heritage and modern elegance.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#home"
                className="w-10 h-10 rounded-full bg-emerald-800 hover:bg-gold-500 flex items-center justify-center transition duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#home"
                className="w-10 h-10 rounded-full bg-emerald-800 hover:bg-gold-500 flex items-center justify-center transition duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5z" />
                </svg>
              </a>
              <a
                href="#home"
                className="w-10 h-10 rounded-full bg-emerald-800 hover:bg-gold-500 flex items-center justify-center transition duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                </svg>
              </a>
              <a
                href="#home"
                className="w-10 h-10 rounded-full bg-emerald-800 hover:bg-gold-500 flex items-center justify-center transition duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 6.5a1 1 0 011.53-.848l5 3.5a1 1 0 010 1.696l-5 3.5A1 1 0 0111 15.5v-7z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-serif text-gold-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#products"
                  className="text-sand-300 hover:text-gold-300 transition duration-200"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sand-300 hover:text-gold-300 transition duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-sand-300 hover:text-gold-300 transition duration-200"
                >
                  New Collection
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-sand-300 hover:text-gold-300 transition duration-200"
                >
                  Sizing Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold font-serif text-gold-400 mb-4">
              Customer Service
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#contact"
                  className="text-sand-300 hover:text-gold-300 transition duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="text-sand-300 hover:text-gold-300 transition duration-200"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="text-sand-300 hover:text-gold-300 transition duration-200"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="text-sand-300 hover:text-gold-300 transition duration-200"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold font-serif text-gold-400 mb-4">
              Newsletter
            </h4>
            <p className="text-sand-300 text-sm mb-4">
              Subscribe to get special offers and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-emerald-800 text-white placeholder-sand-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gold-500 hover:bg-gold-600 text-emerald-900 font-bold rounded-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-emerald-800 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sand-400 text-sm">
          <p>&copy; 2026 Djellaba. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#home" className="hover:text-gold-300 transition duration-200">
              Privacy Policy
            </a>
            <a href="#home" className="hover:text-gold-300 transition duration-200">
              Terms of Service
            </a>
            <a href="#home" className="hover:text-gold-300 transition duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
