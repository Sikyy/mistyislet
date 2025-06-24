import React from 'react';
import { 
  Target, 
  Eye, 
  Heart
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './BrandStoryPage.css';

const BrandStoryPage: React.FC = () => {
  const { t } = useTranslation();
  
  const timeline = [
    {
      year: '2024',
      title: t('about.timeline.events.2024.title'),
      description: t('about.timeline.events.2024.description')
    },
    {
      year: '2025',
      title: t('about.timeline.events.2025.title'), 
      description: t('about.timeline.events.2025.description')
    },
    {
      year: '2026',
      title: t('about.timeline.events.2026.title'),
      description: t('about.timeline.events.2026.description')
    },
  ];

  return (
    <div className="brand-story-page">
      {/* Hero Section */}
      <section className="brand-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-subtitle">
                {t('about.heroSubtitle')}
              </p>
              
              <h1 className="hero-title">
                {t('about.heroTitle')}
                <br />
                {t('about.heroTitleLine2')}
              </h1>
              
              <div className="hero-description">
                <p>
                  {t('about.heroDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-header">
              <p className="story-subtitle">{t('about.story.subtitle')}</p>
              <h2 className="story-title">
                {t('about.story.title')}
                <br />
                {t('about.story.titleLine2')}
              </h2>
              <div className="story-description">
                <p>
                  {t('about.story.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">{t('about.values.subtitle')}</p>
            <h2 className="section-title">
              {t('about.values.title')}
              <br />
              {t('about.values.titleLine2')}
            </h2>
          </div>
          
          <div className="mission-grid">
            <div className="mission-item">
              <div className="mission-icon">
                <Target size={32} />
              </div>
              <div className="mission-content">
                <h3>{t('about.values.mission.title')}</h3>
                <p>{t('about.values.mission.description')}</p>
              </div>
            </div>
            
            <div className="mission-item">
              <div className="mission-icon">
                <Eye size={32} />
              </div>
              <div className="mission-content">
                <h3>{t('about.values.vision.title')}</h3>
                <p>{t('about.values.vision.description')}</p>
              </div>
            </div>
            
            <div className="mission-item">
              <div className="mission-icon">
                <Heart size={32} />
              </div>
              <div className="mission-content">
                <h3>{t('about.values.coreValues.title')}</h3>
                <p>{t('about.values.coreValues.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">{t('about.timeline.subtitle')}</p>
            <h2 className="section-title">
              {t('about.timeline.title')}
              <br />
              {t('about.timeline.titleLine2')}
            </h2>
            <div className="section-description">
              <p>
                {t('about.timeline.description')}
              </p>
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-track">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <span className="timeline-year">{item.year}</span>
                  </div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandStoryPage; 