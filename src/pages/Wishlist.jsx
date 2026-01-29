import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, product.sizes[2] || product.sizes[0]);
  };

  const handleMoveAllToCart = () => {
    wishlist.forEach(product => {
      addToCart(product, product.sizes[2] || product.sizes[0]);
    });
    clearWishlist();
  };

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="container">
          <div className="empty-wishlist">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <h2>Your Wishlist is Empty</h2>
            <p>Save your favorite items to your wishlist and shop them later!</p>
            <Link to="/collection" className="btn btn-primary">
              Browse Collection
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="container">
        <div className="wishlist-header">
          <div>
            <h1>My Wishlist</h1>
            <p>{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}</p>
          </div>
          <div className="wishlist-actions">
            <button onClick={handleMoveAllToCart} className="btn btn-secondary">
              Move All to Cart
            </button>
            <button onClick={clearWishlist} className="btn btn-outline">
              Clear Wishlist
            </button>
          </div>
        </div>

        <div className="wishlist-grid">
          {wishlist.map(product => (
            <div key={product.id} className="wishlist-card">
              <button
                className="remove-btn"
                onClick={() => removeFromWishlist(product.id)}
                aria-label="Remove from wishlist"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>

              <Link to={`/product/${product.id}`} className="wishlist-image">
                <img src={product.image} alt={product.name} />
                {product.stock < 10 && (
                  <span className="stock-badge">Only {product.stock} left</span>
                )}
              </Link>

              <div className="wishlist-info">
                <Link to={`/product/${product.id}`}>
                  <h3>{product.name}</h3>
                </Link>

                {product.rating && (
                  <div className="product-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? 'filled' : ''}>★</span>
                      ))}
                    </div>
                    <span className="rating-text">{product.rating} ({product.reviewCount})</span>
                  </div>
                )}

                <p className="description">{product.description}</p>

                <div className="price-section">
                  <div className="prices">
                    <span className="price">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice && (
                      <>
                        <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                        <span className="discount">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="wishlist-card-actions">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn btn-primary btn-block"
                  >
                    Add to Cart
                  </button>
                  <Link to={`/product/${product.id}`} className="btn btn-outline btn-block">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
