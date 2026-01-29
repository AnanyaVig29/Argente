import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Shipping.css';

const Shipping = () => {
  const navigate = useNavigate();
  const { getCartTotal } = useCart();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India'
  });

  const [errors, setErrors] = useState({});
  const [shippingMethod, setShippingMethod] = useState('standard');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter your full name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.address.trim() || formData.address.trim().length < 10) {
      newErrors.address = 'Please enter a complete address';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    const pincodeRegex = /^[0-9]{6}$/;
    if (!pincodeRegex.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Store shipping info in sessionStorage
    sessionStorage.setItem('shippingInfo', JSON.stringify({ ...formData, shippingMethod }));
    navigate('/payment');
  };

  const getShippingCost = () => {
    switch (shippingMethod) {
      case 'express':
        return 299;
      case 'overnight':
        return 599;
      default:
        return 0; // Free standard shipping
    }
  };

  const getEstimatedDelivery = () => {
    switch (shippingMethod) {
      case 'express':
        return '2-3 business days';
      case 'overnight':
        return '1 business day';
      default:
        return '5-7 business days';
    }
  };

  return (
    <div className="shipping-page">
      <div className="shipping-header">
        <div className="container">
          <h1>Shipping Information</h1>
          <div className="checkout-progress">
            <div className="progress-step completed">
              <span>1</span>
              <p>Cart</p>
            </div>
            <div className="progress-step active">
              <span>2</span>
              <p>Shipping</p>
            </div>
            <div className="progress-step">
              <span>3</span>
              <p>Payment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="shipping-layout">
          <form onSubmit={handleSubmit} className="shipping-form">
            <div className="form-section">
              <h2>Contact Information</h2>
              
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? 'error' : ''}
                />
                {errors.fullName && <p className="form-error">{errors.fullName}</p>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <p className="form-error">{errors.phone}</p>}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Shipping Address</h2>
              
              <div className="form-group">
                <label htmlFor="address">Street Address *</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className={errors.address ? 'error' : ''}
                ></textarea>
                {errors.address && <p className="form-error">{errors.address}</p>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={errors.city ? 'error' : ''}
                  />
                  {errors.city && <p className="form-error">{errors.city}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={errors.state ? 'error' : ''}
                  />
                  {errors.state && <p className="form-error">{errors.state}</p>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pincode">Pincode *</label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="6-digit pincode"
                    className={errors.pincode ? 'error' : ''}
                  />
                  {errors.pincode && <p className="form-error">{errors.pincode}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country *</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    readOnly
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Shipping Method</h2>
              
              <div className="shipping-options">
                <label className={`shipping-option ${shippingMethod === 'standard' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="standard"
                    checked={shippingMethod === 'standard'}
                    onChange={(e) => setShippingMethod(e.target.value)}
                  />
                  <div className="option-content">
                    <div className="option-header">
                      <span className="option-name">Standard Shipping</span>
                      <span className="option-price">FREE</span>
                    </div>
                    <p className="option-delivery">Estimated delivery: 5-7 business days</p>
                  </div>
                </label>

                <label className={`shipping-option ${shippingMethod === 'express' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="express"
                    checked={shippingMethod === 'express'}
                    onChange={(e) => setShippingMethod(e.target.value)}
                  />
                  <div className="option-content">
                    <div className="option-header">
                      <span className="option-name">Express Shipping</span>
                      <span className="option-price">₹299</span>
                    </div>
                    <p className="option-delivery">Estimated delivery: 2-3 business days</p>
                  </div>
                </label>

                <label className={`shipping-option ${shippingMethod === 'overnight' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="overnight"
                    checked={shippingMethod === 'overnight'}
                    onChange={(e) => setShippingMethod(e.target.value)}
                  />
                  <div className="option-content">
                    <div className="option-header">
                      <span className="option-name">Overnight Shipping</span>
                      <span className="option-price">₹599</span>
                    </div>
                    <p className="option-delivery">Estimated delivery: 1 business day</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" onClick={() => navigate('/checkout')} className="btn btn-outline">
                Back to Cart
              </button>
              <button type="submit" className="btn btn-primary btn-large">
                Continue to Payment
              </button>
            </div>
          </form>

          <aside className="order-summary">
            <div className="summary-card">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{getCartTotal().toLocaleString('en-IN')}</span>
              </div>

              <div className="summary-row">
                <span>Shipping ({shippingMethod})</span>
                <span>{getShippingCost() === 0 ? 'FREE' : `₹${getShippingCost()}`}</span>
              </div>

              <div className="summary-row">
                <span>Tax (18% GST)</span>
                <span>₹{Math.round((getCartTotal() + getShippingCost()) * 0.18).toLocaleString('en-IN')}</span>
              </div>

              <div className="divider"></div>

              <div className="summary-row summary-total">
                <span>Total</span>
                <span>₹{(getCartTotal() + getShippingCost() + Math.round((getCartTotal() + getShippingCost()) * 0.18)).toLocaleString('en-IN')}</span>
              </div>

              <div className="delivery-info">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                <div>
                  <strong>Estimated Delivery</strong>
                  <p>{getEstimatedDelivery()}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
