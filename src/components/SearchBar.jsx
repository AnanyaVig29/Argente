import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const SearchBar = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (productId) => {
    navigate(`/product/${productId}`);
    setQuery('');
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      navigate(`/collection?search=${query}`);
      setQuery('');
      setIsOpen(false);
      if (onClose) onClose();
    }
  };

  return (
    <div className="search-bar" ref={searchRef}>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
      </form>

      {isOpen && results.length > 0 && (
        <div className="search-results">
          <div className="results-header">
            <span>{results.length} {results.length === 1 ? 'result' : 'results'} found</span>
          </div>
          <div className="results-list">
            {results.slice(0, 6).map(product => (
              <div
                key={product.id}
                className="result-item"
                onClick={() => handleResultClick(product.id)}
              >
                <img src={product.image} alt={product.name} />
                <div className="result-info">
                  <h4>{product.name}</h4>
                  <p className="result-category">{product.category}</p>
                  <div className="result-price">
                    <span className="price">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice && (
                      <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {results.length > 6 && (
            <div className="results-footer">
              <Link to={`/collection?search=${query}`} onClick={() => {
                setQuery('');
                setIsOpen(false);
                if (onClose) onClose();
              }}>
                View all {results.length} results
              </Link>
            </div>
          )}
        </div>
      )}

      {isOpen && query.trim().length > 0 && results.length === 0 && (
        <div className="search-results">
          <div className="no-results">
            <p>No products found for "{query}"</p>
            <span>Try different keywords</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
