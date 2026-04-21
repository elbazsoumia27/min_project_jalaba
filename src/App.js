import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Djellaba Mlifa Kanza',
      price: 129.99,
      image: '/products/djellaba-1.webp',
      description: 'Traditional Moroccan Djellaba with intricate embroidery and hood',
    },
    {
      id: 2,
      name: 'Randa Dorée Luxury',
      price: 149.99,
      image: '/products/djellaba-2.jpg',
      description: 'Elegant golden embroidered Djellaba with silk details',
    },
    {
      id: 3,
      name: 'Djellaba Émeraude Royal',
      price: 139.99,
      image: '/products/djellaba-3.jpg',
      description: 'Luxurious emerald green traditional Djellaba with classic design',
    },
    {
      id: 4,
      name: 'Djellaba Or Premium',
      price: 169.99,
      image: '/products/djellaba-4.jpg',
      description: 'Premium gold-embroidered Djellaba with handstitched details',
    },
    {
      id: 5,
      name: 'Djellaba Sable Classique',
      price: 119.99,
      image: '/products/djellaba-5.jpg',
      description: 'Soft sand-colored traditional Djellaba, perfect for everyday wear',
    },
    {
      id: 6,
      name: 'Djellaba Bleu Marine Prestige',
      price: 159.99,
      image: '/products/djellaba-6.jpg',
      description: 'Deep navy Djellaba with golden embroidery and traditional hood',
    },
  ];

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-sand-50 flex flex-col">
      <Navbar 
        cartItemCount={totalItems} 
        onCartClick={() => setIsCartOpen(!isCartOpen)} 
      />
      
      <main className="flex-1">
        <HeroSection onShopNow={() => {
          document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }} />
        
        <ProductGrid 
          products={products} 
          onAddToCart={addToCart}
        />
      </main>

      <CartSidebar
        isOpen={isCartOpen}
        items={cartItems}
        totalPrice={totalPrice}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onClose={() => setIsCartOpen(false)}
      />

      <Footer />
    </div>
  );
}

export default App;
