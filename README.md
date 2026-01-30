<div align="center">

# 🌟 Argenté E-Commerce

**Timeless Elegance Meets Contemporary Style**

A premium React.js e-commerce platform for sophisticated fashion retail

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog** - 12 premium fashion products across multiple categories
- **Smart Filtering** - Filter by category (Shirts, T-Shirts, Kurtas, Jeans, Jackets)
- **Price Range Filter** - Adjustable slider to find products within budget
- **Sort Options** - Sort by newest, price (low to high, high to low), or name (A-Z, Z-A)
- **Product Details** - Comprehensive product pages with image galleries, size guide, ratings & reviews
- **Size Selection** - Multiple size options (S, M, L, XL, XXL) with size guide modal
- **Wishlist** - Save favorite items with persistent storage
- **Recently Viewed** - Automatic tracking of browsing history
- **Product Search** - Real-time search across all products

### 🛒 Cart & Checkout
- **Shopping Cart** - Add, remove, and update item quantities
- **Cart Persistence** - Cart data saved in localStorage across sessions
- **Real-time Cart Badge** - Live item counter in navigation header
- **Multi-step Checkout Flow**:
  1. **Cart Review** - View and modify cart items
  2. **Shipping Details** - Enter delivery information with validation
  3. **Payment Selection** - Choose from multiple payment methods
  4. **Order Confirmation** - Success page with order details
- **Payment Methods** - Credit/Debit Card, UPI, Cash on Delivery
- **Form Validation** - Real-time input validation with error messages

### 🎨 Design & User Experience
- **Fully Responsive** - Optimized layouts for mobile, tablet, and desktop
- **Premium Brown/Beige Theme** - Sophisticated color palette with CSS variables
- **Smooth Animations** - Professional transitions, hover effects, and micro-interactions
- **Enhanced Visual Effects**:
  - Shimmer animations on cards
  - Gradient borders and accents
  - Floating animations
  - Slide and fade transitions
- **Accessibility** - Semantic HTML and ARIA labels
- **Performance Optimized** - Code splitting and lazy loading

### 📝 Additional Features
- **Contact Page** - Contact form with FAQ section and Google Maps integration
- **Newsletter Subscription** - Email collection with validation
- **Toast Notifications** - User feedback for all actions (add to cart, wishlist, etc.)
- **Scroll to Top** - Smooth scroll button for easy navigation
- **Trust Badges** - Security indicators (secure payment, SSL encrypted)
- **Social Media Integration** - Footer links with brand-colored icons

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/AnanyaVig29/Argente.git

# Navigate to project directory
cd Argente

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Application will open at http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
Argente/
├── public/
│   └── favicon.svg                 # Site favicon
│
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── Footer.jsx             # Site footer with social links
│   │   ├── Header.jsx             # Navigation header with cart badge
│   │   ├── Newsletter.jsx         # Email subscription component
│   │   ├── ProductCard.jsx        # Product display card
│   │   ├── ScrollToTop.jsx        # Scroll to top button
│   │   ├── SearchBar.jsx          # Product search component
│   │   └── Toast.jsx              # Toast notification system
│   │
│   ├── pages/                      # Page components with styles
│   │   ├── Home.jsx               # Landing page with hero & categories
│   │   ├── Home.css
│   │   ├── Collection.jsx         # Product listing with filters
│   │   ├── Collection.css
│   │   ├── ProductDetails.jsx     # Product detail page with gallery
│   │   ├── ProductDetails.css
│   │   ├── Wishlist.jsx           # Saved products page
│   │   ├── Wishlist.css
│   │   ├── Contact.jsx            # Contact form with FAQ & map
│   │   ├── Contact.css
│   │   ├── Checkout.jsx           # Shopping cart page
│   │   ├── Checkout.css
│   │   ├── Shipping.jsx           # Shipping details form
│   │   ├── Shipping.css
│   │   ├── Payment.jsx            # Payment method selection
│   │   ├── Payment.css
│   │   ├── OrderSuccess.jsx       # Order confirmation page
│   │   └── OrderSuccess.css
│   │
│   ├── context/                    # React Context for state management
│   │   ├── CartContext.jsx        # Shopping cart state & actions
│   │   ├── FilterContext.jsx      # Product filtering state
│   │   ├── WishlistContext.jsx    # Wishlist state & actions
│   │   └── RecentlyViewedContext.jsx  # Recently viewed products
│   │
│   ├── data/
│   │   └── products.js            # Product catalog data (12 products)
│   │
│   ├── styles/
│   │   └── index.css              # Global CSS with variables & utilities
│   │
│   ├── App.jsx                     # Main app component with routing
│   └── main.jsx                    # Application entry point
│
├── .gitignore                      # Git ignore rules
├── index.html                      # HTML template
├── LICENSE                         # MIT License
├── package.json                    # Dependencies & scripts
├── README.md                       # Project documentation
└── vite.config.js                  # Vite build configuration
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern UI library with hooks and functional components
- **React Router DOM 6.20.0** - Client-side routing and navigation
- **Context API** - Built-in state management solution

### Build Tools & Configuration
- **Vite 5.0.8** - Next-generation frontend build tool
  - Lightning-fast HMR (Hot Module Replacement)
  - Optimized production builds with Terser minification
  - Code splitting with manual chunks for vendor libraries
  - Dev server on port 3000

### Styling
- **CSS3** - Custom stylesheets with modern features
- **CSS Variables** - Theme customization and consistent design tokens
- **CSS Grid & Flexbox** - Advanced responsive layouts
- **CSS Animations** - Keyframe animations for smooth transitions
- **Media Queries** - Mobile-first responsive design

### State Management
- **CartContext** - Shopping cart operations and persistence
- **WishlistContext** - Wishlist management with localStorage
- **FilterContext** - Product filtering and sorting logic
- **RecentlyViewedContext** - Product browsing history

### Performance Optimizations
- Code splitting with dynamic imports
- Vendor chunk separation (React, React DOM, React Router)
- Optimized image loading
- localStorage for data persistence
- Minified production builds

---

## 🎨 Color Palette

```css
/* Primary Colors */
--primary-brown: #6B4423       /* Rich brown for primary elements */
--secondary-brown: #8B5A3C     /* Medium brown for accents */
--dark-text: #3D2817           /* Deep brown for headings & text */

/* Neutral & Background Colors */
--beige: #D4C4B0               /* Warm beige for borders & dividers */
--light-beige: #E8DCC8         /* Soft beige for backgrounds */
--white: #FFFFFF               /* Pure white */

/* Text Colors */
--medium-text: #6B5A47         /* Medium brown for body text */
--light-text: #8B7355          /* Light brown for secondary text */
```

**Design Philosophy**: Sophisticated brown and beige tones create a premium, elegant aesthetic perfect for timeless fashion retail.

---

## 📦 Dependencies

### Production
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0"
}
```

### Development
```json
{
  "@types/react": "^18.2.43",
  "@types/react-dom": "^18.2.17",
  "@vitejs/plugin-react": "^4.2.1",
  "vite": "^5.0.8"
}
```

---

## 🌐 Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero section, brand values, featured categories, and newsletter |
| **Collection** | `/collection` | Product grid with advanced filters and sorting options |
| **Product Details** | `/product/:id` | Comprehensive product info, image gallery, size guide, reviews |
| **Wishlist** | `/wishlist` | Saved favorite products with quick add-to-cart |
| **Contact** | `/contact` | Contact form, FAQ section, Google Maps integration |
| **Checkout (Cart)** | `/checkout` | Shopping cart review and modification |
| **Shipping** | `/shipping` | Delivery address and shipping method selection |
| **Payment** | `/payment` | Payment method selection (Card/UPI/COD) |
| **Order Success** | `/order-success` | Order confirmation with details |

---

## 🎯 Key Highlights

### User Experience
- **Seamless Navigation** - Intuitive routing with React Router
- **Persistent Data** - Cart and wishlist saved across sessions
- **Real-time Feedback** - Toast notifications for all user actions
- **Form Validation** - Comprehensive validation with helpful error messages
- **Mobile Optimized** - Touch-friendly interfaces and responsive grids

### Technical Excellence
- **Clean Architecture** - Component-based structure with separation of concerns
- **Performance First** - Optimized builds with code splitting
- **Maintainable Code** - Consistent styling with CSS variables
- **Production Ready** - Minified and optimized for deployment

### Enhanced Features
- **Size Guide Modal** - Gender-specific measurements for shirts, t-shirts, and kurtas
- **Payment Flow** - Animated checkout progress indicator
- **Contact Page** - Enhanced with FAQ accordion and embedded map
- **Visual Polish** - Shimmer effects, gradient borders, smooth animations

---

## 🤝 Contributing

This is a personal project. Feel free to fork and customize for your own use!

---

## 🚀 Future Enhancements

- Backend integration with REST API
- User authentication and profiles
- Order history and tracking
- Product reviews and ratings submission
- Email notifications
- Payment gateway integration (Stripe/Razorpay)
- Admin dashboard for inventory management
- Advanced search with autocomplete
- Internationalization (i18n)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

© 2026 Argenté. All rights reserved.

Crafted with ❤️ for premium fashion retail

---

<div align="center">

**[⬆ Back to Top](#-argenté-e-commerce)**

Made by [Ananya Vig](https://github.com/AnanyaVig29)

</div>
 
 