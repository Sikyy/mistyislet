import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CollaborationPage.css';

const CollaborationPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setStatus('sending');
      
      // 发送数据到 Cloudflare Workers
      const response = await fetch('https://mistyislet-email.siky.workers.dev/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // 清空表单
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setStatus('success');
      
      // 5秒后重置状态
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Error sending form:', error);
      setStatus('error');
      
      // 5秒后重置错误状态
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  // 根据状态返回按钮文本
  const getButtonText = () => {
    switch (status) {
      case 'sending':
        return t('contactpage.form.sending');
      case 'success':
        return t('contactpage.form.success');
      case 'error':
        return t('contactpage.form.error');
      default:
        return t('contactpage.form.submit');
    }
  };

  // 根据状态返回按钮类名
  const getButtonClassName = () => {
    let className = 'btn-submit';
    if (status === 'success') className += ' btn-success';
    if (status === 'error') className += ' btn-error';
    return className;
  };

  return (
    <div className="collaboration-page">
      {/* Hero Section */}
      <section className="collaboration-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-subtitle">
                {t('contactpage.heroSubtitle')}
              </p>
              
              <h1 className="hero-title">
                {t('contactpage.heroTitle')}
                <br />
                {t('contactpage.heroTitleLine2')}
              </h1>
              
              <div className="hero-description">
                <p>
                  {t('contactpage.heroDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">{t('contactpage.form.subtitle')}</p>
            <h2 className="section-title">
              {t('contactpage.form.title')}
              <br />
              {t('contactpage.form.titleLine2')}
            </h2>
            <div className="section-description">
              <p>
                {t('contactpage.form.description')}
              </p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('contactpage.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contactpage.form.namePlaceholder')}
                    required
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">{t('contactpage.form.company')}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={t('contactpage.form.companyPlaceholder')}
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">{t('contactpage.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contactpage.form.emailPlaceholder')}
                    required
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t('contactpage.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('contactpage.form.phonePlaceholder')}
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contactpage.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contactpage.form.messagePlaceholder')}
                  required
                  disabled={status === 'sending'}
                />
              </div>

              <div className="form-submit">
                <button 
                  type="submit" 
                  className={getButtonClassName()}
                  disabled={status === 'sending' || status === 'success'}
                >
                  {getButtonText()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollaborationPage; 