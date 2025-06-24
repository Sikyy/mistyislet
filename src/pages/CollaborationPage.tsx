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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
                  <label htmlFor="firstName">{t('contactpage.form.name')}</label>
                  <input
                    type="text"
                    id="firstName"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contactpage.form.namePlaceholder')}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">{t('contactpage.form.company')}</label>
                  <input
                    type="text"
                    id="lastName"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={t('contactpage.form.companyPlaceholder')}
                    required
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
                />
              </div>

              <div className="form-submit">
                <button type="submit" className="btn-submit">
                  {t('contactpage.form.submit')}
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