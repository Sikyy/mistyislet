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
import './Footer.css';

const Footer: React.FC = () => {
  const quickLinks = [
    { path: '/', label: '首页' },
    { path: '/products', label: '产品列表' },
    { path: '/brand-story', label: '关于我们' },
    { path: '/partners', label: '合作伙伴' },
    { path: '/collaboration', label: '联系我们' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: '邮箱',
      value: 'info@mistyislet.com',
      href: 'mailto:info@mistyislet.com'
    },
    {
      icon: Phone,
      label: '电话',
      value: '+86 198-1689-1233',
      href: 'tel:+8619816891233'
    },
    {
      icon: MapPin,
      label: '地址',
      value: '中国浙江省杭州市滨江区',
      href: null
    },
    {
      icon: Globe,
      label: '网站',
      value: 'www.mistyislet.com',
      href: 'https://www.mistyislet.com'
    }
  ];

  const businessInfo = [
    '高端外设供应链服务',
    '跨境物流解决方案',
    '品牌代理与分销',
    '技术支持与售后'
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
              专注于为俄罗斯商家提供高端外设设备供应链服务，
              致力于打造最专业、最可靠的跨境贸易桥梁。
            </p>
            
            <div className="company-info">
              <h4 className="company-name">杭州烟渚科技有限公司</h4>
              <p className="company-name-en">Hangzhou Yanzhu Technology Co., Ltd.</p>
            </div>
            
            <div className="footer-highlight glass">
              <div className="highlight-content">
                <h4>连接中俄，智造未来</h4>
                <p>专业的供应链解决方案</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">快速导航</h3>
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
            <h3 className="footer-title">服务范围</h3>
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
            <h3 className="footer-title">联系我们</h3>
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
              <p>&copy; 2024 杭州烟渚科技有限公司. 保留所有权利。</p>
              <p className="footer-subtitle">Hangzhou Yanzhu Technology Co., Ltd.</p>
            </div>
            
            {/* <div className="footer-actions">
              <Link to="/collaboration" className="btn btn-glass btn-small">
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