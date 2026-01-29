import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }, 1000);
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Join Our Community</h2>
            <p>
              Subscribe to our newsletter for exclusive offers, style tips, and
              early access to new collections.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-wrapper">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className={status === 'error' ? 'error' : ''}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {message && (
              <p className={`message ${status}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
