import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  TrendingUp, 
  Globe, 
  Heart,
  CheckCircle,
  ArrowRight,
  Store,

  Handshake, 
  FileText, 
  Truck, 
  MessageSquare,
  Users,
  Package,
  DollarSign,
  Clock,
  Shield,
  Star,

} from 'lucide-react';
import './PartnersPage.css';

const PartnersPage: React.FC = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // 俄罗斯商家伙伴（销售渠道）
  const russianMerchants = [
    {
      id: 1,
      name: 'Moscow Gaming Center',
      type: '莫斯科电竞中心',
      city: '莫斯科',
      region: '中央联邦区',
      businessType: '零售连锁',
      storeCount: '15家门店',
      partnership: '2018年',
      description: '莫斯科最大的电竞外设零售连锁，在市中心拥有15家门店，年销售额超过5000万卢布',
      avatar: '🎮',
      featured: true,
      monthlyVolume: '月均采购 12000+ 件',
      specialties: ['高端键盘', '专业鼠标', '电竞耳机', '定制外设']
    },
    {
      id: 2,
      name: 'St. Petersburg Tech Hub',
      type: '圣彼得堡科技中心',
      city: '圣彼得堡',
      region: '西北联邦区',
      businessType: '批发分销',
      storeCount: '10+ 合作商',
      partnership: '2019年',
      description: '圣彼得堡地区最大的电竞外设批发商，覆盖整个西北联邦区的分销网络',
      avatar: '🏢',
      featured: true,
      monthlyVolume: '月均采购 25000+ 件',
      specialties: ['批发分销', '渠道管理', '物流配送', '售后服务']
    },
    {
      id: 3,
      name: 'Siberian Electronics',
      type: '西伯利亚电子',
      city: '新西伯利亚',
      region: '西伯利亚联邦区',
      businessType: '区域代理',
      storeCount: '8个城市覆盖',
      partnership: '2020年',
      description: '西伯利亚地区领先的电子产品代理商，覆盖新西伯利亚、鄂木斯克等8个主要城市',
      avatar: '🌨️',
      featured: false,
      monthlyVolume: '月均采购 8000+ 件',
      specialties: ['区域代理', '品牌推广', '技术支持', '用户培训']
    },
    {
      id: 4,
      name: 'Volga Gaming Network',
      type: '伏尔加电竞网络',
      city: '下诺夫哥罗德',
      region: '伏尔加联邦区',
      businessType: '网络零售',
      storeCount: '线上+线下',
      partnership: '2021年',
      description: '专注于线上销售的电竞外设商，拥有完善的电商平台和物流体系',
      avatar: '💻',
      featured: false,
      monthlyVolume: '月均采购 15000+ 件',
      specialties: ['电商平台', '网络营销', '客户服务', '快递配送']
    },
    {
      id: 5,
      name: 'Far East Gaming Co.',
      type: '远东电竞公司',
      city: '符拉迪沃斯托克',
      region: '远东联邦区',
      businessType: '进出口贸易',
      storeCount: '跨境业务',
      partnership: '2022年',
      description: '位于远东地区的专业电竞外设进出口商，专门处理中俄贸易业务',
      avatar: '🌅',
      featured: true,
      monthlyVolume: '月均采购 6000+ 件',
      specialties: ['跨境贸易', '海关清关', '汇率管理', '风险控制']
    },
    {
      id: 6,
      name: 'Ural Gaming Supply',
      type: '乌拉尔电竞供应',
      city: '叶卡捷琳堡',
      region: '乌拉尔联邦区',
      businessType: '工业分销',
      storeCount: '工业客户',
      partnership: '2020年',
      description: '专门为工业园区和企业提供批量电竞外设采购服务的专业供应商',
      avatar: '⚙️',
      featured: false,
      monthlyVolume: '月均采购 10000+ 件',
      specialties: ['企业采购', '批量供应', '定制服务', '企业培训']
    }
  ];

  const achievements = [
    { icon: Building2, number: '10+', label: t('partnersPage.achievements.russianPartners'), subtitle: 'Russian Partners' },
    { icon: Store, number: '8', label: t('partnersPage.achievements.federalDistricts'), subtitle: 'Federal Districts' },
    { icon: Globe, number: '76K+', label: t('partnersPage.achievements.annualSales'), subtitle: 'Annual Sales' },
    { icon: TrendingUp, number: '300%', label: t('partnersPage.achievements.annualGrowth'), subtitle: 'Annual Growth' }
  ];

  const collaborationTypes = [
    {
      icon: Package,
      title: t('partnersPage.collaboration.productSupply.title'),
      description: t('partnersPage.collaboration.productSupply.description'),
      features: [t('partnersPage.collaboration.productSupply.features.0'), t('partnersPage.collaboration.productSupply.features.1'), t('partnersPage.collaboration.productSupply.features.2'), t('partnersPage.collaboration.productSupply.features.3')],
      suitable: t('partnersPage.collaboration.productSupply.suitable'),
      stats: t('partnersPage.collaboration.productSupply.stats')
    },
    {
      icon: Handshake,
      title: t('partnersPage.collaboration.brandAgency.title'),
      description: t('partnersPage.collaboration.brandAgency.description'),
      features: [t('partnersPage.collaboration.brandAgency.features.0'), t('partnersPage.collaboration.brandAgency.features.1'), t('partnersPage.collaboration.brandAgency.features.2'), t('partnersPage.collaboration.brandAgency.features.3')],
      suitable: t('partnersPage.collaboration.brandAgency.suitable'),
      stats: t('partnersPage.collaboration.brandAgency.stats')
    },
    {
      icon: Users,
      title: t('partnersPage.collaboration.strategicPartnership.title'),
      description: t('partnersPage.collaboration.strategicPartnership.description'),
      features: [t('partnersPage.collaboration.strategicPartnership.features.0'), t('partnersPage.collaboration.strategicPartnership.features.1'), t('partnersPage.collaboration.strategicPartnership.features.2'), t('partnersPage.collaboration.strategicPartnership.features.3')],
      suitable: t('partnersPage.collaboration.strategicPartnership.suitable'),
      stats: t('partnersPage.collaboration.strategicPartnership.stats')
    }
  ];

  const process = [
    {
      step: 1,
      icon: MessageSquare,
      title: t('partnersPage.process.initialContact.title'),
      description: t('partnersPage.process.initialContact.description'),
      duration: t('partnersPage.process.initialContact.duration'),
      completion: '95%'
    },
    {
      step: 2,
      icon: FileText,
      title: t('partnersPage.process.needsAssessment.title'),
      description: t('partnersPage.process.needsAssessment.description'),
      duration: t('partnersPage.process.needsAssessment.duration'),
      completion: '89%'
    },
    {
      step: 3,
      icon: Handshake,
      title: t('partnersPage.process.solutionDevelopment.title'),
      description: t('partnersPage.process.solutionDevelopment.description'),
      duration: t('partnersPage.process.solutionDevelopment.duration'),
      completion: '92%'
    },
    {
      step: 4,
      icon: CheckCircle,
      title: t('partnersPage.process.contractSigning.title'),
      description: t('partnersPage.process.contractSigning.description'),
      duration: t('partnersPage.process.contractSigning.duration'),
      completion: '98%'
    },
    {
      step: 5,
      icon: Truck,
      title: t('partnersPage.process.serviceExecution.title'),
      description: t('partnersPage.process.serviceExecution.description'),
      duration: t('partnersPage.process.serviceExecution.duration'),
      completion: '100%'
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: t('partnersPage.advantages.qualityAssurance.title'),
      description: t('partnersPage.advantages.qualityAssurance.description'),
      stats: '99.5%',
      label: t('partnersPage.advantages.qualityAssurance.label')
    },
    {
      icon: Clock,
      title: t('partnersPage.advantages.fastResponse.title'),
      description: t('partnersPage.advantages.fastResponse.description'),
      stats: t('partnersPage.advantages.fastResponse.stats'),
      label: t('partnersPage.advantages.fastResponse.label')
    },
    {
      icon: DollarSign,
      title: t('partnersPage.advantages.priceAdvantage.title'),
      description: t('partnersPage.advantages.priceAdvantage.description'),
      stats: '15-30%',
      label: t('partnersPage.advantages.priceAdvantage.label')
    },
    {
      icon: Star,
      title: t('partnersPage.advantages.professionalService.title'),
      description: t('partnersPage.advantages.professionalService.description'),
      stats: '98%',
      label: t('partnersPage.advantages.professionalService.label')
    }
  ];

  const testimonials = [
    {
      id: 1,
      company: 'Moscow Gaming Center',
      contact: 'Alexei Petrov',
      position: t('partnersPage.testimonials.testimonial1.position'),
      rating: 5,
      content: t('partnersPage.testimonials.testimonial1.content'),
      avatar: 'AP',
      logo: 'MGC',
      established: '2018',
      location: t('partnersPage.testimonials.testimonial1.location'),
      businessType: t('partnersPage.testimonials.testimonial1.businessType')
    },
    {
      id: 2,
      company: 'St. Petersburg Tech Hub',
      contact: 'Elena Volkov',
      position: t('partnersPage.testimonials.testimonial2.position'),
      rating: 5,
      content: t('partnersPage.testimonials.testimonial2.content'),
      avatar: 'EV',
      logo: 'SPTH',
      established: '2019',
      location: t('partnersPage.testimonials.testimonial2.location'),
      businessType: t('partnersPage.testimonials.testimonial2.businessType')
    },
    {
      id: 3,
      company: 'Far East Gaming Co.',
      contact: 'Dmitri Kozlov',
      position: t('partnersPage.testimonials.testimonial3.position'),
      rating: 5,
      content: t('partnersPage.testimonials.testimonial3.content'),
      avatar: 'DK',
      logo: 'FEGC',
      established: '2022',
      location: t('partnersPage.testimonials.testimonial3.location'),
      businessType: t('partnersPage.testimonials.testimonial3.businessType')
    }
  ];



  return (
    <div className="partners-page">
      {/* Hero Section */}
      <section className="partners-hero-section">
        <div className="container">
          <div className="partners-hero-content">
            <div className="partners-hero-text">
              <p className="partners-hero-subtitle">
                {t('partnersPage.heroSubtitle')}
              </p>
              
              <h1 className="partners-hero-title">
                {t('partnersPage.heroTitle')}
                <br />
                {t('partnersPage.heroTitleLine2')}
              </h1>
              
              <div className="partners-hero-description">
                <p>
                  {t('partnersPage.heroDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">{t('partnersPage.achievements.subtitle')}</p>
            <h2 className="section-title">
              {t('partnersPage.achievements.title')}
              <br />
              {t('partnersPage.achievements.titleLine2')}
            </h2>
            <div className="section-description">
              <p>
                {t('partnersPage.achievements.description')}
              </p>
            </div>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="achievement-item">
                  <div className="achievement-icon">
                    <Icon size={32} />
                  </div>
                  <div className="achievement-number">{achievement.number}</div>
                  <div className="achievement-label">{achievement.label}</div>
                  {achievement.subtitle && <div className="achievement-subtitle">{achievement.subtitle}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-tabs-section">
        <div className="container">
          <div className="partnerships-layout">
            <div className="partnerships-left">
              <p className="section-subtitle">{t('partnersPage.partnerships.subtitle')}</p>
              <h2 className="section-title">
                10+
                <br />
                <span className="title-accent">{t('partnersPage.partnerships.title')}</span>
              </h2>
              <div className="partnerships-description">
                <p>
                  {t('partnersPage.partnerships.description')}
                </p>
              </div>
              <div className="partnership-metrics">
                <div className="metric-large">
                  <span className="metric-number">76K+</span>
                  <span className="metric-label">{t('partnersPage.partnerships.annualSalesLabel')}</span>
                </div>
                <div className="metric-large">
                  <span className="metric-number">8</span>
                  <span className="metric-label">{t('partnersPage.partnerships.districtsLabel')}</span>
                </div>
              </div>
            </div>
            
            <div className="partnerships-right">
              <div className="partnerships-visual">
                <div className="visual-title">{t('partnersPage.partnerships.marketDistribution')}</div>
                <div className="merchants-visualization">
                  {russianMerchants.map((merchant, index) => (
                    <div key={merchant.id} className={`merchant-visual-item ${merchant.featured ? 'featured' : ''}`}>
                      <div className="merchant-icon">{merchant.avatar}</div>
                      <div className="merchant-info-compact">
                        <div className="merchant-name-compact">{merchant.name}</div>
                        <div className="merchant-region">{merchant.region}</div>
                        <div className="merchant-volume">{merchant.monthlyVolume.replace('月均采购 ', '').replace(' 件', '')}</div>
                      </div>
                      <div className="merchant-status">
                        {merchant.featured && <span className="status-dot"></span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="section types-section">
        <div className="container">
          <div className="collaboration-layout">
            <div className="collaboration-left">
              <p className="section-subtitle">{t('partnersPage.collaboration.subtitle')}</p>
              <h2 className="section-title">
                {t('partnersPage.collaboration.titleNumber')}
                <br />
                <span className="title-accent">{t('partnersPage.collaboration.title')}</span>
              </h2>
              <div className="collaboration-description">
                <p>
                  {t('partnersPage.collaboration.description')}
                </p>
              </div>
              <div className="collaboration-stats">
                <div className="stat-highlight">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">{t('partnersPage.collaboration.brandCooperationLabel')}</span>
                </div>
                <div className="stat-highlight">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">{t('partnersPage.collaboration.channelCoverageLabel')}</span>
                </div>
              </div>
            </div>
            
            <div className="collaboration-right">
              <div className="types-visual-grid">
                {collaborationTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <div key={index} className="type-visual-card">
                      <div className="type-visual-header">
                        <div className="type-icon-modern">
                          <Icon size={24} />
                        </div>
                        <div className="type-stats-badge">{type.stats}</div>
                      </div>
                      <h3 className="type-title-modern">{type.title}</h3>
                      <p className="type-description-compact">{type.description}</p>
                      <div className="type-features-compact">
                        {type.features.slice(0, 2).map((feature, featureIndex) => (
                          <span key={featureIndex} className="feature-tag">{feature}</span>
                        ))}
                      </div>
                      <div className="type-suitable-modern">
                        <span className="suitable-label">{t('partnersPage.collaboration.suitableLabel')}：</span>
                        <span className="suitable-text">{type.suitable}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="container">
          <div className="process-layout">
            <div className="process-left">
              <p className="section-subtitle">{t('partnersPage.process.subtitle')}</p>
              <h2 className="section-title">
                {t('partnersPage.process.titleNumber')}
                <br />
                <span className="title-accent">{t('partnersPage.process.title')}</span>
              </h2>
              <div className="process-description">
                <p>
                  {t('partnersPage.process.description')}
                </p>
              </div>
              <div className="process-completion">
                <div className="completion-stat">
                  <span className="completion-number">95%</span>
                  <span className="completion-label">{t('partnersPage.process.averageCompletionRate')}</span>
                </div>
                <div className="completion-stat">
                  <span className="completion-number">{t('partnersPage.process.averageCycleDays')}</span>
                  <span className="completion-label">{t('partnersPage.process.averageCycle')}</span>
                </div>
              </div>
            </div>
            
            <div className="process-right">
              <div className="process-visual">
                <div className="visual-title">{t('partnersPage.process.processCompletionRate')}</div>
                <div className="process-steps-visual">
                  {process.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="process-step-visual">
                        <div className="step-visual-header">
                          <div className="step-number-modern">{item.step}</div>
                          <div className="step-completion">{item.completion}</div>
                        </div>
                        <div className="step-visual-content">
                          <div className="step-icon-modern">
                            <Icon size={20} />
                          </div>
                          <div className="step-info">
                            <h4 className="step-title-modern">{item.title}</h4>
                            <p className="step-duration-modern">{item.duration}</p>
                          </div>
                        </div>
                        <div className="completion-bar">
                          <div 
                            className="completion-fill" 
                            style={{ width: item.completion }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section advantages-section">
        <div className="container">
          <div className="advantages-layout">
            <div className="advantages-left">
              <p className="section-subtitle">{t('partnersPage.advantages.subtitle')}</p>
              <h2 className="section-title">
                {t('partnersPage.advantages.titleNumber')}
                <br />
                <span className="title-accent">{t('partnersPage.advantages.title')}</span>
              </h2>
              <div className="advantages-description">
                <p>
                  {t('partnersPage.advantages.description')}
                </p>
              </div>
              <div className="advantages-highlight">
                <div className="advantage-big-stat">
                  <span className="big-stat-number">99.5%</span>
                  <span className="big-stat-label">{t('partnersPage.advantages.productQualityLabel')}</span>
                </div>
                <div className="advantage-big-stat">
                  <span className="big-stat-number">98%</span>
                  <span className="big-stat-label">{t('partnersPage.advantages.satisfactionLabel')}</span>
                </div>
              </div>
            </div>
            
            <div className="advantages-right">
              <div className="advantages-visual">
                <div className="visual-title">{t('partnersPage.advantages.performanceMetrics')}</div>
                <div className="advantages-grid-modern">
                  {advantages.map((advantage, index) => {
                    const Icon = advantage.icon;
                    return (
                      <div key={index} className="advantage-visual-card">
                        <div className="advantage-visual-header">
                          <div className="advantage-icon-modern">
                            <Icon size={20} />
                          </div>
                          <div className="advantage-stat-large">{advantage.stats}</div>
                        </div>
                        <h4 className="advantage-title-modern">{advantage.title}</h4>
                        <p className="advantage-label-modern">{advantage.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-layout">
            <div className="testimonials-left">
              <p className="section-subtitle">{t('partnersPage.testimonials.subtitle')}</p>
              <h2 className="section-title">
                {t('partnersPage.testimonials.title')}
                <br />
                <span className="title-accent">{t('partnersPage.testimonials.titleLine2')}</span>
              </h2>
              <div className="testimonials-description">
                <p>
                  {t('partnersPage.testimonials.description')}
                </p>
              </div>
              <div className="testimonials-stats">
                <div className="testimonial-big-stat">
                  <span className="testimonial-stat-number">100%</span>
                  <span className="testimonial-stat-label">{t('partnersPage.testimonials.satisfactionLabel')}</span>
                </div>
                <div className="testimonial-big-stat">
                  <span className="testimonial-stat-number">5.0</span>
                  <span className="testimonial-stat-label">{t('partnersPage.testimonials.ratingLabel')}</span>
                </div>
              </div>
            </div>
            
            <div className="testimonials-right">
              <div className="testimonials-carousel">
                <button 
                  className="carousel-nav-btn carousel-prev"
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                >
                  &lt;
                </button>
                
                <div className="testimonial-card-carousel">
                  <div className="client-logo-carousel">
                    <span className="logo-text-carousel">{testimonials[currentTestimonial].logo}</span>
                  </div>
                  <div className="company-name-carousel">{testimonials[currentTestimonial].company}</div>
                  <div className="testimonial-content-carousel">
                    "{testimonials[currentTestimonial].content}"
                  </div>
                  <div className="testimonial-author-carousel">
                    {testimonials[currentTestimonial].contact}, {testimonials[currentTestimonial].position}
                  </div>
                </div>
                
                <button 
                  className="carousel-nav-btn carousel-next"
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                >
                  &gt;
                </button>
                
                <div className="carousel-indicators">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${index === currentTestimonial ? 'active' : ''}`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="partners-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">
              <Heart size={32} />
            </div>
            <h2>{t('partnersPage.cta.title')}</h2>
            <p>
              {t('partnersPage.cta.description')}
            </p>
            <div className="cta-actions">
              <a href="/contact#contact-form" className="btn-modern">
                {t('partnersPage.cta.startCollaboration')} <ArrowRight size={16} />
              </a>
              <a href="/contact#contact-form" className="btn-modern">
                {t('partnersPage.cta.contactUs')} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage; 