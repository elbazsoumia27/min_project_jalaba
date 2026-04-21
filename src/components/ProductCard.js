import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const fallbackImage =
    'data:image/svg+xml;charset=utf-8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#dcfce7"/>
            <stop offset="1" stop-color="#f5f3f0"/>
          </linearGradient>
          <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#15803d"/>
            <stop offset="1" stop-color="#f59e0b"/>
          </linearGradient>
        </defs>
        <rect width="800" height="800" fill="url(#bg)"/>
        <path d="M400 120c60 0 110 30 145 78l55 76c12 17 7 41-11 53l-52 35v265c0 34-27 61-61 61H324c-34 0-61-27-61-61V382l-52-35c-18-12-23-36-11-53l55-76c35-48 85-78 145-78zm0 70c-38 0-71 19-93 49l-38 52 64 43v293c0 4 3 7 7 7h120c4 0 7-3 7-7V334l64-43-38-52c-22-30-55-49-93-49z" fill="url(#accent)" opacity="0.9"/>
        <text x="400" y="710" font-family="Inter, Arial" font-size="28" text-anchor="middle" fill="#145231">Add your real djellaba photo</text>
      </svg>
    `);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-emerald-100 to-sand-100">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackImage;
          }}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
        <div className="absolute top-0 right-0 bg-gold-500 text-emerald-900 px-4 py-2 m-4 rounded-lg font-bold shadow-md">
          ${product.price.toFixed(2)}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold font-serif text-emerald-900">
          {product.name}
        </h3>
        <p className="text-sand-700 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-gold-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm text-sand-600 ml-2">(24 reviews)</span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="w-full px-4 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
