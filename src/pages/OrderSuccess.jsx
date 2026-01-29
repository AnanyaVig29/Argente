import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails || {};

  return (
    <div className="order-success-page">
      <div className="container">
        <div className="success-content">
          <div className="success-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>

          <h1>Order Placed Successfully!</h1>
          <p className="success-message">
            Thank you for your purchase. Your order has been confirmed and will be shipped soon.
          </p>

          {orderDetails.orderId && (
            <div className="order-info">
              <div className="info-row">
                <span className="label">Order ID:</span>
                <span className="value">{orderDetails.orderId}</span>
              </div>
              <div className="info-row">
                <span className="label">Total Amount:</span>
                <span className="value">₹{orderDetails.total?.toLocaleString('en-IN')}</span>
              </div>
              <div className="info-row">
                <span className="label">Payment Method:</span>
                <span className="value">
                  {orderDetails.paymentMethod === 'card' ? 'Credit/Debit Card' : 
                   orderDetails.paymentMethod === 'upi' ? 'UPI Payment' : 
                   'Cash on Delivery'}
                </span>
              </div>
            </div>
          )}

          <div className="next-steps">
            <h2>What's Next?</h2>
            <div className="steps-grid">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Order Confirmation</h3>
                <p>You'll receive a confirmation email shortly</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Processing</h3>
                <p>We'll prepare your order for shipping</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Delivery</h3>
                <p>Your order will be delivered to your address</p>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <Link to="/" className="btn btn-primary btn-large">
              Back to Home
            </Link>
            <Link to="/collection" className="btn btn-outline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
