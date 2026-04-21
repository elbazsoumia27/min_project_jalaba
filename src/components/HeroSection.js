import React from 'react';

const HeroSection = ({ onShopNow }) => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-gold-600 text-white py-24 sm:py-32 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-sand-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl font-bold font-serif leading-tight">
              Timeless Elegance,
              <br />
              <span className="text-gold-300">Modern Style</span>
            </h2>
            <p className="text-xl text-emerald-100 font-light leading-relaxed">
              Discover our collection of premium traditional Moroccan Djellabas. Each piece is
              crafted with care, combining centuries of heritage with contemporary luxury.
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={onShopNow}
                className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-emerald-900 font-bold rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                Shop Now
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-bold rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-400 to-gold-400 opacity-30 blur-2xl absolute inset-0"></div>
            <div className="relative aspect-square rounded-2xl bg-emerald-600 bg-opacity-30 backdrop-blur-sm border-2 border-white border-opacity-20 flex items-center justify-center overflow-hidden">
              <img
                src="/hero/hero.jpg"
                alt="Premium Djellaba"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent"></div>
              <p className="absolute bottom-6 left-0 right-0 z-10 text-center text-gold-200 font-serif text-lg">
                Premium Djellaba
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
