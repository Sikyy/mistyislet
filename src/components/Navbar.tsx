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
    { path: '/products', label: '品牌列表' },
    { path: '/brand-story', label: '关于我们' },
    { path: '/partners', label: '合作伙伴' },
    { path: '/collaboration', label: '联系我们' },
  ];

  return (
    <nav className={`navbar kubric-style ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <span className="logo-text">MistyIslet</span>
          </Link>

          {/* Center Navigation with Glass Container */}
          <div className="navbar-center desktop-only">
            <div className="nav-glass-container">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-glass-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="navbar-actions">
            {/* CTA Button */}
            <Link to="/collaboration#contact-form" className="btn btn-primary desktop-only">
              开始合作
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
              to="/collaboration#contact-form" 
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