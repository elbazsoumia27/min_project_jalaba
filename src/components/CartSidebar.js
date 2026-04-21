import React from 'react';

const CartSidebar = ({ isOpen, items, totalPrice, onRemoveItem, onUpdateQuantity, onClose }) => {
  const fallbackImage =
    'data:image/svg+xml;charset=utf-8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 800 800">
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
      </svg>
    `);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition duration-300"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transition duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-sand-200">
          <h2 className="text-2xl font-bold font-serif text-emerald-900">
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="text-sand-600 hover:text-sand-900 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 h-96">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <svg
                className="w-16 h-16 text-sand-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="text-sand-600 text-center">
                Your cart is empty. Start shopping!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-sand-50 rounded-lg border border-sand-200"
                >
                  {/* Item Image */}
                  <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-emerald-100 to-sand-100 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = fallbackImage;
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Item Info */}
                  <div className="flex-1">
                    <h4 className="font-bold text-emerald-900 text-sm">
                      {item.name}
                    </h4>
                    <p className="text-gold-600 font-bold text-sm mt-1">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-sand-600 hover:text-emerald-700 transition"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <span className="text-sand-900 font-bold text-sm w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-sand-600 hover:text-emerald-700 transition"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-sand-200 p-6 space-y-4">
          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-sand-800">Total:</span>
            <span className="text-2xl font-bold font-serif text-gold-600">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          {/* Checkout Button */}
          <button
            disabled={items.length === 0}
            className={`w-full py-3 font-bold rounded-lg transition duration-300 ${
              items.length === 0
                ? 'bg-sand-300 text-sand-600 cursor-not-allowed'
                : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            Proceed to Checkout
          </button>

          {/* Continue Shopping */}
          <button
            onClick={onClose}
            className="w-full py-3 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 font-bold rounded-lg transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
