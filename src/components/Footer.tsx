import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  ArrowRight,
  ExternalLink 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const quickLinks = [
    { path: '/', label: t('home.heroTitle') },
    { path: '/brands', label: t('navbar.brands') },
    { path: '/about', label: t('navbar.about') },
    { path: '/partners', label: t('navbar.partners') },
    { path: '/contact', label: t('navbar.contact') },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: t('footer.contact.email'),
      value: 'info@mistyislet.com',
      href: 'mailto:info@mistyislet.com'
    },
    {
      icon: Phone,
      label: t('footer.contact.phone'),
      value: '+86 198-1689-1233',
      href: 'tel:+8619816891233'
    },
    {
      icon: MapPin,
      label: t('footer.contact.address'),
      value: t('footer.contact.addressValue'),
      href: null
    },
    {
      icon: Globe,
      label: t('footer.contact.website'),
      value: 'www.mistyislet.com',
      href: 'https://www.mistyislet.com'
    }
  ];

  const businessInfo = [
    t('footer.services.highEnd'),
    t('footer.services.logistics'),
    t('footer.services.agency'),
    t('footer.services.support')
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-overlay" />
      </div>
      
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="logo-icon">
                <div className="logo-shape"></div>
              </div>
              <span className="logo-text">MistyIslet</span>
            </Link>
            
            <p className="footer-description">
              {t('footer.description')}
            </p>
            
            <div className="company-info">
              <h4 className="company-name">{t('footer.companyName')}</h4>
              <p className="company-name-en">{t('footer.companyNameEn')}</p>
            </div>
            
            <div className="footer-highlight glass">
              <div className="highlight-content">
                <h4>{t('footer.slogan')}</h4>
                <p>{t('footer.sloganSub')}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.quickLinks')}</h3>
            <nav className="footer-nav">
              {quickLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="footer-link"
                >
                  {link.label}
                  <ArrowRight size={14} className="link-arrow" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Business Info */}
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.servicesTitle')}</h3>
            <ul className="footer-list">
              {businessInfo.map((item, index) => (
                <li key={index} className="footer-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.contactUs')}</h3>
            <div className="contact-info">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                const content = (
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Icon size={18} />
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">{contact.label}</span>
                      <span className="contact-value">{contact.value}</span>
                    </div>
                    {contact.href && <ExternalLink size={14} className="external-icon" />}
                  </div>
                );

                return contact.href ? (
                  <a 
                    key={index} 
                    href={contact.href} 
                    className="contact-link"
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index} className="contact-link">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; 2024 {t('footer.companyName')}. {t('footer.allRightsReserved')}。</p>
              <p className="footer-subtitle">{t('footer.companyNameEn')}</p>
            </div>
            
            {/* <div className="footer-actions">
              <Link to="/contact" className="btn btn-glass btn-small">
                开始合作
                <ArrowRight size={16} />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 