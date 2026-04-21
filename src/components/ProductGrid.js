import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-emerald-900 mb-4">
            Our Collection
          </h2>
          <p className="text-xl text-sand-700 max-w-2xl mx-auto">
            Handpicked traditional Moroccan Djellabas, each one a masterpiece of craftsmanship
            and elegance. Perfect for special occasions or everyday luxury.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-gold-500 rounded-full"></div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 bg-gradient-to-r from-emerald-50 to-gold-50 rounded-2xl p-12 text-center shadow-subtle">
          <h3 className="text-2xl font-bold font-serif text-emerald-900 mb-4">
            Why Choose Our Djellabas?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="space-y-2">
              <svg className="w-12 h-12 text-gold-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 012-2h6a2 2 0 012 2v2h4a1 1 0 010 2h-1v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7H1a1 1 0 010-2h4V3zm3 0v2h4V3H8z" />
              </svg>
              <h4 className="font-bold text-emerald-800">Premium Quality</h4>
              <p className="text-sm text-sand-700">Finest fabrics and traditional craftsmanship</p>
            </div>
            <div className="space-y-2">
              <svg className="w-12 h-12 text-gold-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <h4 className="font-bold text-emerald-800">Authentic Heritage</h4>
              <p className="text-sm text-sand-700">Each piece tells a story of Moroccan tradition</p>
            </div>
            <div className="space-y-2">
              <svg className="w-12 h-12 text-gold-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h4 className="font-bold text-emerald-800">Satisfaction Guaranteed</h4>
              <p className="text-sm text-sand-700">30-day return policy on all purchases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
