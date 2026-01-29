import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FilterProvider } from './context/FilterContext';
import { WishlistProvider } from './context/WishlistContext';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext';
import { ToastProvider } from './components/Toast';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetails from './pages/ProductDetails';
import Wishlist from './pages/Wishlist';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import OrderSuccess from './pages/OrderSuccess';

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <ToastProvider>
        <CartProvider>
          <WishlistProvider>
            <RecentlyViewedProvider>
              <FilterProvider>
                <div className="App">
                  <Header />
                  <main>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/collection" element={<Collection />} />
                      <Route path="/product/:id" element={<ProductDetails />} />
                      <Route path="/wishlist" element={<Wishlist />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/shipping" element={<Shipping />} />
                      <Route path="/payment" element={<Payment />} />
                      <Route path="/order-success" element={<OrderSuccess />} />
                    </Routes>
                  </main>
                  <Footer />
                  <ScrollToTop />
                </div>
              </FilterProvider>
            </RecentlyViewedProvider>
          </WishlistProvider>
        </CartProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;
