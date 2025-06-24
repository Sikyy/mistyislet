import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'zh', label: t('languages.chinese') },
    { code: 'en', label: t('languages.english') },
    { code: 'ru', label: t('languages.russian') }
  ];

  // 获取当前语言的显示文本
  const getCurrentLanguageLabel = () => {
    const currentLang = languages.find(lang => lang.code === i18n.language);
    return currentLang ? currentLang.label : t('languages.chinese');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 添加点击外部区域关闭语言菜单的功能
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.language-switcher')) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  const handleLanguageChange = (language: { code: string; label: string }) => {
    i18n.changeLanguage(language.code);
    setIsLanguageMenuOpen(false);
    console.log('Language changed to:', language.code);
  };

  const navItems = [
    { path: '/brands', label: t('navbar.brands') },
    { path: '/about', label: t('navbar.about') },
    { path: '/partners', label: t('navbar.partners') },
    { path: '/contact', label: t('navbar.contact') },
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
            <Link to="/contact#contact-form" className="btn btn-primary desktop-only">
              {t('navbar.startCollaboration')}
              <span className="arrow-icon">↗</span>
            </Link>

            {/* Language Switcher */}
            <div className="language-switcher desktop-only">
              <button
                className="language-toggle-btn"
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                aria-label={t('navbar.language')}
              >
                <Globe size={18} />
                <span className="language-text">{getCurrentLanguageLabel()}</span>
                <span className="dropdown-arrow">▼</span>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="language-dropdown">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
                      onClick={() => handleLanguageChange(lang)}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

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
              to="/contact#contact-form" 
              className="btn btn-primary mobile-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.startCollaboration')}
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="mobile-language-switcher">
              <div className="mobile-language-title">
                <Globe size={16} />
                {t('navbar.language')}
              </div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`mobile-language-option ${i18n.language === lang.code ? 'active' : ''}`}
                  onClick={() => {
                    handleLanguageChange(lang);
                    setIsMenuOpen(false);
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 