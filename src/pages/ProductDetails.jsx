import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';
import { products, reviews } from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToRecentlyViewed, recentlyViewed } = useRecentlyViewed();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [showNotification, setShowNotification] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[2] || product.sizes[0]);
      addToRecentlyViewed(product);
      window.scrollTo(0, 0);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/collection" className="btn btn-primary">Browse Collection</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const productReviews = reviews[product.id] || [];
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <div className="product-details-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/collection">Collection</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="product-details-grid">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className={`main-image ${isZoomed ? 'zoomed' : ''}`}>
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              {discount > 0 && (
                <span className="discount-badge">-{discount}%</span>
              )}
              {product.stock < 10 && (
                <span className="stock-badge">Only {product.stock} left!</span>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div className="thumbnail-images">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-info-section">
            <h1>{product.name}</h1>

            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? 'filled' : ''}>★</span>
                ))}
              </div>
              <span className="rating-text">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="product-pricing">
              <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  <span className="save-amount">Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}</span>
                </>
              )}
            </div>

            <p className="product-short-desc">{product.description}</p>

            {/* Size Selection */}
            <div className="size-selection">
              <div className="selection-header">
                <label>Select Size</label>
                <button className="size-guide-btn" onClick={() => setShowSizeGuide(true)}>Size Guide</button>
              </div>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div className="color-selection">
              <label>Available Colors</label>
              <div className="color-chips">
                {product.colors.map((color, index) => (
                  <div key={index} className="color-chip" title={color}>
                    {color}
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="quantity-selection">
              <label>Quantity</label>
              <div className="quantity-controls">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} />
                <button onClick={() => setQuantity(Math.min(10, quantity + 1))}>+</button>
              </div>
              <span className="stock-info">
                {product.stock > 50 ? 'In Stock' : `Only ${product.stock} left in stock`}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="product-actions">
              <button onClick={handleAddToCart} className="btn btn-primary btn-large">
                Add to Cart
              </button>
              <button onClick={handleBuyNow} className="btn btn-secondary btn-large">
                Buy Now
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`btn-wishlist ${isInWishlist(product.id) ? 'active' : ''}`}
                aria-label="Add to wishlist"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="product-tabs">
          <div className="tab-headers">
            <button
              className={`tab-header ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`tab-header ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
            <button
              className={`tab-header ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({productReviews.length})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="tab-pane">
                <h3>Product Description</h3>
                <p>{product.longDescription}</p>
                <h4>Care Instructions</h4>
                <p>{product.care}</p>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="tab-pane">
                <h3>Product Features</h3>
                <ul className="features-list">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="tab-pane">
                <h3>Customer Reviews</h3>
                {productReviews.length > 0 ? (
                  <div className="reviews-list">
                    {productReviews.map(review => (
                      <div key={review.id} className="review-card">
                        <div className="review-header">
                          <div>
                            <strong>{review.name}</strong>
                            <div className="review-rating">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < review.rating ? 'filled' : ''}>★</span>
                              ))}
                            </div>
                          </div>
                          <span className="review-date">{review.date}</span>
                        </div>
                        <p>{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="no-reviews">No reviews yet. Be the first to review this product!</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2>You May Also Like</h2>
            <div className="products-grid">
              {relatedProducts.map(prod => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        )}

        {/* Recently Viewed */}
        {recentlyViewed.length > 1 && (
          <div className="recently-viewed">
            <h2>Recently Viewed</h2>
            <div className="products-grid">
              {recentlyViewed.filter(p => p.id !== product.id).slice(0, 4).map(prod => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        )}
      </div>

      {showNotification && (
        <div className="add-notification-fixed">
          ✓ Added to cart successfully
        </div>
      )}

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="size-guide-modal" onClick={() => setShowSizeGuide(false)}>
          <div className="size-guide-content" onClick={(e) => e.stopPropagation()}>
            <div className="size-guide-header">
              <h2>Size Guide</h2>
              <button className="close-btn" onClick={() => setShowSizeGuide(false)}>×</button>
            </div>
            <div className="size-guide-body">
              <p className="size-guide-note">
                {product.category === 'kurtas' && !product.name.includes('Embroidered') ? 'Women: Bust, Waist, Hip, Length' : 'Men: Chest, Waist, Shoulder, Length'}
              </p>
              <div className="size-table-wrapper">
                <table className="size-table">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>{product.category === 'kurtas' && !product.name.includes('Embroidered') ? 'Bust' : 'Chest'}</th>
                      <th>Waist</th>
                      <th>{product.category === 'kurtas' && !product.name.includes('Embroidered') ? 'Hip' : 'Shoulder'}</th>
                      <th>Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>S</strong></td>
                      <td>36-38</td>
                      <td>30-32</td>
                      <td>17-17.5</td>
                      <td>27-28</td>
                    </tr>
                    <tr>
                      <td><strong>M</strong></td>
                      <td>38-40</td>
                      <td>32-34</td>
                      <td>17.5-18</td>
                      <td>28-29</td>
                    </tr>
                    <tr>
                      <td><strong>L</strong></td>
                      <td>40-42</td>
                      <td>34-36</td>
                      <td>18-18.5</td>
                      <td>29-30</td>
                    </tr>
                    <tr>
                      <td><strong>XL</strong></td>
                      <td>42-44</td>
                      <td>36-38</td>
                      <td>18.5-19</td>
                      <td>30-31</td>
                    </tr>
                    <tr>
                      <td><strong>XXL</strong></td>
                      <td>44-46</td>
                      <td>38-40</td>
                      <td>19-19.5</td>
                      <td>31-32</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
