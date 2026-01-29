import React from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="fade-in">Timeless Elegance</h1>
          <p className="fade-in">Discover the perfect blend of tradition and contemporary style</p>
          <Link to="/collection" className="btn btn-primary btn-large fade-in">
            Explore Collection
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image slide-in">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80" 
                alt="Argenté Fashion" 
              />
            </div>
            <div className="about-content">
              <h2>About Argenté</h2>
              <p>
                Founded on the principles of craftsmanship and elegance, Argenté brings you
                a curated collection of premium clothing that speaks to the modern individual
                who values both heritage and innovation.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed to celebrate the rich
                tapestry of Indian fashion while embracing contemporary aesthetics. From
                classic shirts to traditional kurtas, we offer garments that transcend
                seasons and trends.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>5000+</h3>
                  <p>Happy Customers</p>
                </div>
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Premium Products</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Cities Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="values-section section-sm">
        <div className="container">
          <h2 className="text-center">Our Values</h2>
          <p className="text-center section-subtitle">
            The principles that guide everything we do
          </p>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Quality First</h3>
              <p>
                We believe in creating garments that stand the test of time. Every piece
                is crafted from premium materials with meticulous attention to detail.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>Timeless Design</h3>
              <p>
                Our designs transcend fleeting trends, offering you pieces that remain
                elegant and relevant season after season, year after year.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>Customer Delight</h3>
              <p>
                Your satisfaction is our mission. We go above and beyond to ensure every
                shopping experience with Argenté is exceptional and memorable.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3>Heritage & Craft</h3>
              <p>
                We honor traditional craftsmanship while embracing modern innovation,
                creating pieces that celebrate our rich cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories-section section-sm">
        <div className="container">
          <h2 className="text-center">Explore Our Collections</h2>
          <p className="text-center section-subtitle">
            Discover your perfect style
          </p>
          
          <div className="categories-grid">
            <Link to="/collection?category=shirts" className="category-card">
              <div className="category-image">
                <img 
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80" 
                  alt="Shirts Collection" 
                />
              </div>
              <div className="category-info">
                <h3>Shirts</h3>
                <p>Refined elegance for every occasion</p>
              </div>
            </Link>

            <Link to="/collection?category=t-shirts" className="category-card">
              <div className="category-image">
                <img 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80" 
                  alt="T-Shirts Collection" 
                />
              </div>
              <div className="category-info">
                <h3>T-Shirts</h3>
                <p>Casual comfort meets style</p>
              </div>
            </Link>

            <Link to="/collection?category=kurtas" className="category-card">
              <div className="category-image">
                <img 
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80" 
                  alt="Kurtas Collection" 
                />
              </div>
              <div className="category-info">
                <h3>Kurtas</h3>
                <p>Traditional grace, modern sophistication</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
