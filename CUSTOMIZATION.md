# Customization Guide for Djellaba E-Commerce

This guide will help you customize the Djellaba application to match your specific needs.

## 🎨 Customizing Colors

All colors are defined in `tailwind.config.js`. To change the color scheme:

### Update Tailwind Configuration

Edit `tailwind.config.js`:

```javascript
// Change the primary color (Emerald)
emerald: {
  700: '#15803d', // Change this hex code
  // ... other shades
}

// Change accent color (Gold)
gold: {
  600: '#f59e0b', // Change this hex code
  // ... other shades
}

// Change background color (Sand)
sand: {
  50: '#faf9f6', // Change this hex code
  // ... other shades
}
```

**Common Color Palettes:**

- **Modern Purple**: `#6B21A8`, `#D946EF`, `#F3E8FF`
- **Ocean Blue**: `#0369A1`, `#06B6D4`, `#E0F2FE`
- **Sunset Orange**: `#EA580C`, `#F97316`, `#FED7AA`

## 📝 Adding More Products

Edit the `products` array in `src/App.js`:

```javascript
const products = [
  {
    id: 7,
    name: "New Product Name",
    price: 179.99,
    image: "https://your-image-url.com/image.jpg",
    description: "Product description here",
  },
  // ... add more products
];
```

## 🏷️ Changing Product Details

To modify existing products, update their properties:

- `id`: Unique identifier (must be unique)
- `name`: Product name
- `price`: Numeric price
- `image`: Full image URL (using Unsplash or your own CDN)
- `description`: Short product description

## 🔤 Customizing Typography

Update the font family in `tailwind.config.js`:

```javascript
fontFamily: {
  serif: ['Your Serif Font', 'Georgia', 'serif'],
  sans: ['Your Sans Font', 'Helvetica', 'sans-serif'],
}
```

**Popular Font Combinations:**

1. **Elegant**: Playfair Display + Lato
2. **Modern**: Montserrat + Open Sans
3. **Classic**: Cinzel + Roboto
4. **Luxury**: Cormorant Garamond + Poppins

## 🔗 Updating Navigation Links

Edit the Navbar links in `src/components/Navbar.js`:

```javascript
<a href="#your-section-id" className="...">
  Your Link Text
</a>
```

## 🔧 Adding New Sections

### Example: Add a Testimonials Section

1. Create `src/components/Testimonials.js`:

```javascript
import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-sand-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold font-serif text-center mb-12">
          Customer Reviews
        </h2>
        {/* Add testimonial cards here */}
      </div>
    </section>
  );
};

export default Testimonials;
```

2. Import and add to `src/App.js`:

```javascript
import Testimonials from './components/Testimonials';

// In the JSX:
<main className="flex-1">
  <HeroSection onShopNow={() => { ... }} />
  <ProductGrid products={products} onAddToCart={addToCart} />
  <Testimonials /> {/* Add here */}
</main>
```

## 💳 Implementing Checkout

Update the Checkout button in `src/components/CartSidebar.js`:

```javascript
<button
  onClick={() => {
    // Implement checkout logic
    console.log("Checkout items:", items);
    // Redirect to payment page
    // window.location.href = '/checkout';
  }}
  className="w-full py-3 font-bold rounded-lg..."
>
  Proceed to Checkout
</button>
```

## 📱 Adjusting Responsive Breakpoints

Modify grid layouts in component files. For example, in `src/components/ProductGrid.js`:

```javascript
// Change from 3-column to 4-column on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* ... */}
</div>
```

**Tailwind Breakpoints:**

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎯 Customizing the Hero Section

Edit `src/components/HeroSection.js` to change:

- Background gradient colors
- Headline text
- Call-to-action button text
- Hero image or placeholder

```javascript
<section className="relative bg-gradient-to-br from-[#YOUR_COLOR] via-[#YOUR_COLOR] to-[#YOUR_COLOR]">
  {/* ... */}
</section>
```

## 🏪 Renaming the Brand

1. Update logo in `src/components/Navbar.js`
2. Update title in `public/index.html`
3. Update footer branding in `src/components/Footer.js`
4. Update README.md

```html
<title>Your Brand | Premium Moroccan Clothing</title>
```

## 🌐 Connecting to a Backend API

Create a new file `src/services/api.js`:

```javascript
const API_URL = process.env.REACT_APP_API_URL;

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return await response.json();
};

export const submitOrder = async (orderData) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });
  return await response.json();
};
```

Then use in `App.js`:

```javascript
import { fetchProducts } from "./services/api";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  // ... rest of component
};
```

## 📊 Analytics Integration

Add Google Analytics or your preferred service to `public/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_ID");
</script>
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
REACT_APP_API_URL=https://api.djellaba.com
REACT_APP_STRIPE_KEY=your_stripe_public_key
REACT_APP_SHOP_NAME=Djellaba Premium
```

Access in components:

```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

## 🚀 Deployment

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel

```bash
npm install -g vercel
vercel
```

### GitHub Pages

Add to `package.json`:

```json
"homepage": "https://yourusername.github.io/djellaba"
```

## 📱 PWA (Progressive Web App) Setup

Install dependencies:

```bash
npm install workbox-cli --save-dev
```

This enables offline functionality and app-like experience.

## 🧪 Testing

Add testing with Jest:

```bash
npm test
```

Example test file `src/components/__tests__/ProductCard.test.js`:

```javascript
import { render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";

test("renders product name", () => {
  const product = { id: 1, name: "Test Product", price: 99 };
  render(<ProductCard product={product} onAddToCart={() => {}} />);
  expect(screen.getByText("Test Product")).toBeInTheDocument();
});
```

## 🎯 Performance Optimization

1. **Code Splitting**: Use React.lazy for components
2. **Image Optimization**: Use image CDN with responsive sizes
3. **Caching**: Implement service workers
4. **Minification**: Automatic with `npm run build`

## 📖 Useful Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Unsplash Images](https://unsplash.com) - Free product images
- [Google Fonts](https://fonts.google.com) - Free typography

---

For more help, visit the main README.md or contact support@djellaba.com
