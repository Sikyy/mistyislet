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
      <section className="collaboration-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">
              {t('contact.heroTitle')}
              <br />
              {t('contact.heroTitleLine2')}
            </h1>
            <p className="page-description">
              {t('contact.heroDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        {/* Contact Form */}
        <div id="contact-form" className="contact-form-container">
            <h3 className="contact-form-title">{t('contact.form.title')}</h3>
            <p className="contact-form-description">
              {t('contact.form.description')}
            </p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="firstName"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.namePlaceholder')}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">{t('contact.form.company')}</label>
                  <input
                    type="text"
                    id="lastName"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.companyPlaceholder')}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                />
              </div>

              <div className="form-submit">
                <button type="submit" className="btn-submit">
                  {t('contact.form.submit')}
                </button>
              </div>
            </form>

          </div>
      </section>
    </div>
  );
};

export default CollaborationPage; 