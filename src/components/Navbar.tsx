import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../App';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/products', label: 'Features' },
    { path: '/brand-story', label: 'Team' },
    { path: '/partners', label: 'Roadmap' },
    { path: '/collaboration', label: 'Contact' },
  ];

  return (
    <nav className={`navbar glass ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">
              <div className="logo-shape"></div>
            </div>
            <span className="logo-text">MistyIslet</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu desktop-only">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="navbar-actions">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="theme-toggle-btn glass"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* CTA Button */}
            <Link to="/collaboration" className="btn btn-primary desktop-only">
              Book a call
              <span className="arrow-icon">↗</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle mobile-only"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content glass">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/collaboration" 
              className="btn btn-primary mobile-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              开始合作
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 