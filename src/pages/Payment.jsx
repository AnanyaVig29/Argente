import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const { getCartTotal, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  // Get shipping info from sessionStorage
  const shippingInfo = JSON.parse(sessionStorage.getItem('shippingInfo') || '{}');
  const shippingCost = shippingInfo.shippingMethod === 'express' ? 299 : shippingInfo.shippingMethod === 'overnight' ? 599 : 0;
  const subtotal = getCartTotal();
  const tax = Math.round((subtotal + shippingCost) * 0.18);
  const total = subtotal + shippingCost + tax;

  const validateCardForm = () => {
    const newErrors = {};

    const cardNumberRegex = /^[0-9]{16}$/;
    if (!cardNumberRegex.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }

    if (!formData.cardName.trim() || formData.cardName.trim().length < 3) {
      newErrors.cardName = 'Please enter the name on card';
    }

    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!expiryRegex.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Please enter valid expiry (MM/YY)';
    }

    const cvvRegex = /^[0-9]{3,4}$/;
    if (!cvvRegex.test(formData.cvv)) {
      newErrors.cvv = 'Please enter a valid CVV';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateUPIForm = () => {
    const newErrors = {};

    const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/;
    if (!upiRegex.test(formData.upiId)) {
      newErrors.upiId = 'Please enter a valid UPI ID';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Format card number with spaces
    if (name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
    }

    // Format expiry date
    if (name === 'expiryDate') {
      value = value.replace(/\D/g, '').replace(/^(\d{2})/, '$1/').substr(0, 5);
    }

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

    let isValid = false;
    if (paymentMethod === 'card') {
      isValid = validateCardForm();
    } else if (paymentMethod === 'upi') {
      isValid = validateUPIForm();
    } else {
      isValid = true; // COD doesn't need validation
    }

    if (!isValid) {
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      sessionStorage.removeItem('shippingInfo');
      navigate('/order-success', {
        state: {
          orderDetails: {
            orderId: 'ARG' + Date.now(),
            total,
            paymentMethod,
            shippingInfo
          }
        }
      });
    }, 2000);
  };

  return (
    <div className="payment-page">
      <div className="payment-header">
        <div className="container">
          <h1>Payment Details</h1>
          <p>Complete your secure checkout</p>
          <div className="checkout-progress">
            <div className="progress-step completed">
              <span>1</span>
              <p>Cart</p>
            </div>
            <div className="progress-step completed">
              <span>2</span>
              <p>Shipping</p>
            </div>
            <div className="progress-step active">
              <span>3</span>
              <p>Payment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="payment-layout">
          <form onSubmit={handleSubmit} className="payment-form">
            <div className="form-section">
              <h2>Select Payment Method</h2>

              <div className="payment-methods">
                <label className={`payment-method ${paymentMethod === 'card' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div className="method-content">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="2" y1="10" x2="22" y2="10"></line>
                      <line x1="6" y1="15" x2="10" y2="15"></line>
                    </svg>
                    <span>Credit / Debit Card</span>
                  </div>
                </label>

                <label className={`payment-method ${paymentMethod === 'upi' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div className="method-content">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="8 12 12 16 16 12"></polyline>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                    </svg>
                    <span>UPI Payment</span>
                  </div>
                </label>

                <label className={`payment-method ${paymentMethod === 'cod' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div className="method-content">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect>
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M18.5 7.5l.5-1.5"></path>
                      <path d="M5.5 7.5L5 6"></path>
                    </svg>
                    <span>Cash on Delivery</span>
                  </div>
                </label>
              </div>
            </div>

            {paymentMethod === 'card' && (
              <div className="form-section">
                <h2>Card Information</h2>

                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number *</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    className={errors.cardNumber ? 'error' : ''}
                  />
                  {errors.cardNumber && <p className="form-error">{errors.cardNumber}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="cardName">Cardholder Name *</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    placeholder="Name as on card"
                    className={errors.cardName ? 'error' : ''}
                  />
                  {errors.cardName && <p className="form-error">{errors.cardName}</p>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date *</label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      maxLength="5"
                      className={errors.expiryDate ? 'error' : ''}
                    />
                    {errors.expiryDate && <p className="form-error">{errors.expiryDate}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="cvv">CVV *</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      maxLength="4"
                      className={errors.cvv ? 'error' : ''}
                    />
                    {errors.cvv && <p className="form-error">{errors.cvv}</p>}
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="form-section">
                <h2>UPI Information</h2>

                <div className="form-group">
                  <label htmlFor="upiId">UPI ID *</label>
                  <input
                    type="text"
                    id="upiId"
                    name="upiId"
                    value={formData.upiId}
                    onChange={handleChange}
                    placeholder="yourname@upi"
                    className={errors.upiId ? 'error' : ''}
                  />
                  {errors.upiId && <p className="form-error">{errors.upiId}</p>}
                  <p className="form-help">Enter your UPI ID to complete the payment</p>
                </div>
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="form-section">
                <div className="cod-info">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  <h3>Cash on Delivery</h3>
                  <p>Pay with cash when your order is delivered to your doorstep.</p>
                  <ul>
                    <li>No advance payment required</li>
                    <li>Pay only when you receive the product</li>
                    <li>Exact change appreciated</li>
                  </ul>
                </div>
              </div>
            )}

            <div className="form-actions">
              <button type="button" onClick={() => navigate('/shipping')} className="btn btn-outline">
                Back to Shipping
              </button>
              <button type="submit" className="btn btn-primary btn-large" disabled={isProcessing}>
                {isProcessing ? 'Processing...' : `Pay ₹${total.toLocaleString('en-IN')}`}
              </button>
            </div>
          </form>

          <aside className="order-summary">
            <div className="summary-card">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
              </div>

              <div className="summary-row">
                <span>Tax (18% GST)</span>
                <span>₹{tax.toLocaleString('en-IN')}</span>
              </div>

              <div className="divider"></div>

              <div className="summary-row summary-total">
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>

              <div className="security-badges">
                <div className="security-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span>Secure Payment</span>
                </div>
                <div className="security-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span>SSL Encrypted</span>
                </div>
              </div>
            </div>

            {shippingInfo.fullName && (
              <div className="shipping-summary">
                <h3>Shipping To:</h3>
                <p><strong>{shippingInfo.fullName}</strong></p>
                <p>{shippingInfo.address}</p>
                <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.pincode}</p>
                <p>{shippingInfo.phone}</p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Payment;
