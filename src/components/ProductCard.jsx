import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

// Color name to hex mapping
const getColorHex = (colorName) => {
  const colorMap = {
    'Beige': '#F5F5DC',
    'White': '#FFFFFF',
    'Brown': '#8B6F47',
    'Tan': '#D2B48C',
    'Cream': '#FFFDD0',
    'Light Brown': '#B5936A',
    'Khaki': '#C3B091',
    'Sand': '#E8D7B5',
    'Taupe': '#B38B6D',
    'Off-White': '#FAF9F6',
    'Golden Beige': '#D4B896',
    'Natural': '#E8D5C4',
    'Ivory': '#FFFFF0',
    'Gold': '#D4AF37'
  };
  return colorMap[colorName] || '#E5E5E5';
};

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || product.sizes[0]);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, selectedSize);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 1500);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="product-image">
          <img src={product.image} alt={product.name} loading="lazy" />
          {discount > 0 && (
            <span className="discount-badge">-{discount}%</span>
          )}
          {product.stock < 10 && (
            <span className="stock-badge">Low Stock</span>
          )}
          <div className="product-overlay">
            <button onClick={handleAddToCart} className="btn btn-primary btn-add-cart">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <button
        className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
        onClick={handleWishlistToggle}
        aria-label="Add to wishlist"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>

      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>

        {product.rating && (
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? 'filled' : ''}>★</span>
              ))}
            </div>
            <span className="rating-text">({product.reviewCount})</span>
          </div>
        )}

        <p className="product-description">{product.description}</p>

        <div className="product-details">
          <div className="product-price-section">
            <div className="product-price">₹{product.price.toLocaleString('en-IN')}</div>
            {product.originalPrice && (
              <div className="product-original-price">₹{product.originalPrice.toLocaleString('en-IN')}</div>
            )}
          </div>

          <div className="size-selector">
            <label htmlFor={`size-${product.id}`}>Size:</label>
            <select
              id={`size-${product.id}`}
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {product.sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="product-colors">
          <span>Colors:</span>
          <div className="color-list">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="color-swatch"
                style={{ backgroundColor: getColorHex(color) }}
                title={color}
              />
            ))}
          </div>
        </div>
      </div>

      {showNotification && (
        <div className="add-notification">
          ✓ Added to cart
        </div>
      )}
    </div>
  );
};

export default ProductCard;
