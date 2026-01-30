import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useFilters } from '../context/FilterContext';
import { products, categories } from '../data/products';
import './Collection.css';

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { filters, updateFilter } = useFilters();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      updateFilter('category', categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }

    // Filter by price range
    if (filters.priceRange !== 'all') {
      switch (filters.priceRange) {
        case 'under1000':
          result = result.filter(product => product.price < 1000);
          break;
        case '1000-2000':
          result = result.filter(product => product.price >= 1000 && product.price <= 2000);
          break;
        case '2000-4000':
          result = result.filter(product => product.price > 2000 && product.price <= 4000);
          break;
        case 'above4000':
          result = result.filter(product => product.price > 4000);
          break;
      }
    }

    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // newest
        result.reverse();
    }

    setFilteredProducts(result);
  }, [filters]);

  const handleCategoryChange = (categoryId) => {
    updateFilter('category', categoryId);
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="collection-page">
      <div className="collection-header">
        <div className="container">
          <h1>Our Collection</h1>
          <p>Discover timeless pieces that define your style</p>
        </div>
      </div>

      <div className="collection-layout">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <div className="filter-section">
            <h3>Categories</h3>
            <div className="category-filters">
              {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-btn ${filters.category === category.id ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.name}
                    <span className="count">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="divider"></div>

            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-filters">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.priceRange === 'all'}
                    onChange={() => updateFilter('priceRange', 'all')}
                  />
                  <span>All Prices</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.priceRange === 'under1000'}
                    onChange={() => updateFilter('priceRange', 'under1000')}
                  />
                  <span>Under ₹1,000</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.priceRange === '1000-2000'}
                    onChange={() => updateFilter('priceRange', '1000-2000')}
                  />
                  <span>₹1,000 - ₹2,000</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.priceRange === '2000-4000'}
                    onChange={() => updateFilter('priceRange', '2000-4000')}
                  />
                  <span>₹2,000 - ₹4,000</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.priceRange === 'above4000'}
                    onChange={() => updateFilter('priceRange', 'above4000')}
                  />
                  <span>Above ₹4,000</span>
                </label>
              </div>
            </div>

            <div className="divider"></div>

            <div className="filter-section">
              <h3>Sort By</h3>
              <select
                value={filters.sortBy}
                onChange={(e) => updateFilter('sortBy', e.target.value)}
                className="sort-select"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="products-main">
            <div className="products-header">
              <p className="results-count">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Found
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                <h3>No products found</h3>
                <p>Try adjusting your filters to see more results</p>
              </div>
            )}
          </main>
        </div>
    </div>
  );
};

export default Collection;
