import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (productId, size, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, size, newQuantity);
  };

  const handleRemove = (productId, size) => {
    if (window.confirm('Are you sure you want to remove this item from your cart?')) {
      removeFromCart(productId, size);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    navigate('/shipping');
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="empty-cart">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 2L7 6H21L19 2H9Z"/>
              <path d="M7 6L5 20H19L17 6"/>
              <circle cx="9" cy="21" r="1"/>
              <circle cx="15" cy="21" r="1"/>
            </svg>
            <h2>Your cart is empty</h2>
            <p>Add some items to your cart to get started</p>
            <Link to="/collection" className="btn btn-primary btn-large">
              Browse Collection
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="container">
          <h1>Shopping Cart</h1>
          <p>{getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} in your cart</p>
        </div>
      </div>

      <div className="container">
        <div className="checkout-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  <div className="item-meta">
                    <span className="item-size">Size: {item.size}</span>
                    <span className="item-category">{item.category}</span>
                  </div>
                </div>

                <div className="item-quantity">
                  <label>Quantity</label>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, item.size, parseInt(e.target.value) || 1)}
                      min="1"
                      max="10"
                    />
                    <button
                      onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="item-price">
                  <div className="price-label">Price</div>
                  <div className="price-value">₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                  <div className="price-unit">₹{item.price.toLocaleString('en-IN')} each</div>
                </div>

                <button
                  className="item-remove"
                  onClick={() => handleRemove(item.id, item.size)}
                  aria-label="Remove item"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <div className="summary-card">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{getCartTotal().toLocaleString('en-IN')}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="summary-row">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="divider"></div>

              <div className="summary-row summary-total">
                <span>Total</span>
                <span>₹{getCartTotal().toLocaleString('en-IN')}</span>
              </div>

              <button
                className="btn btn-primary btn-large"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>

              <Link to="/collection" className="btn btn-outline">
                Continue Shopping
              </Link>

              <div className="trust-badges">
                <div className="trust-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span>Secure Checkout</span>
                </div>
                <div className="trust-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Free Shipping</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
