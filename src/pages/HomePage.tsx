import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Globe2, 
  Truck, 
  Award, 
  Keyboard,
  Mouse,
  Gamepad2,
  Headphones,
  Zap,
  Package,
  Settings,
  Cpu,
  Armchair,
  Monitor
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './HomePage.css';



// Custom hook for scroll spy navigation
const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 1000;

      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop;
        
        if (scrollPosition >= sectionTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};

// Smooth scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const HomePage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const activeSection = useScrollSpy();
  const { t } = useTranslation();



  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: Shield,
      title: t('home.features.list.quality.title'),
      description: t('home.features.list.quality.description'),
    },
    {
      icon: Globe2,
      title: t('home.features.list.supply.title'),
      description: t('home.features.list.supply.description'),
    },
    {
      icon: Truck,
      title: t('home.features.list.logistics.title'),
      description: t('home.features.list.logistics.description'),
    },
    {
      icon: Award,
      title: t('home.features.list.service.title'),
      description: t('home.features.list.service.description'),
    },
  ];

  const productCategories = [
    {
      icon: Keyboard,
      title: t('home.products.categories.keyboard'),
      description: '高端机械键盘系列，Cherry MX轴体',
      stats: '500+ 型号',
      highlight: '专业级'
    },
    {
      icon: Mouse,
      title: t('home.products.categories.mouse'),
      description: '高精度游戏鼠标，26000 DPI',
      stats: '300+ 型号', 
      highlight: '电竞级'
    },
    {
      icon: Package,
      title: t('home.products.categories.mousepad'),
      description: '防水面料，防滑底座，多尺寸选择',
      stats: '100+ 型号',
      highlight: '实用级'
    },
    {
      icon: Gamepad2,
      title: t('home.products.categories.gamepad'),
      description: '专业游戏手柄，低延迟设计',
      stats: '80+ 型号',
      highlight: '竞技级'
    },
    {
      icon: Headphones,
      title: t('home.products.categories.headphones'),
      description: 'Hi-Res音质，沉浸式体验',
      stats: '150+ 型号',
      highlight: '发烧级'
    },
    {
      icon: Settings,
      title: t('home.products.categories.keycaps'),
      description: 'PBT材质，热升华工艺，多色搭配',
      stats: '200+ 套装',
      highlight: '定制级'
    },
    {
      icon: Cpu,
      title: t('home.products.categories.switches'),
      description: '多种轴体选择，工厂润滑处理',
      stats: '50+ 类型',
      highlight: '专业级'
    },
    {
      icon: Zap,
      title: t('home.products.categories.accessories'),
      description: 'RGB灯带，线材，工具等周边配件',
      stats: '300+ 配件',
      highlight: '增强级'
    },
    {
      icon: Armchair,
      title: t('home.products.categories.gamingChair'),
      description: '人体工学设计，舒适游戏体验',
      stats: '50+ 款式',
      highlight: '舒适级'
    },
    {
      icon: Monitor,
      title: t('home.products.categories.electronics'),
      description: '显示器，集线器等电子设备',
      stats: '100+ 产品',
      highlight: '扩展级'
    },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-background">
          <div 
            className="hero-orb" 
            style={{ 
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` 
            }}
          />
          <div className="hero-particles"></div>
          <div className="hero-grid-overlay"></div>
        </div>



        {/* Right Navigation Menu */}
        <div className="hero-right-nav">
          <nav className="vertical-nav">
            <button 
              className={`nav-item ${activeSection === 'hero' ? 'active' : ''}`}
              onClick={() => scrollToSection('hero')}
            >
              {t('home.navigation.home')}
            </button>
            <button 
              className={`nav-item ${activeSection === 'product-categories' ? 'active' : ''}`}
              onClick={() => scrollToSection('product-categories')}
            >
              {t('home.navigation.productCategories')}
            </button>
            <button 
              className={`nav-item ${activeSection === 'features' ? 'active' : ''}`}
              onClick={() => scrollToSection('features')}
            >
              {t('home.navigation.coreAdvantages')}
            </button>
            <button 
              className={`nav-item ${activeSection === 'market-stats' ? 'active' : ''}`}
              onClick={() => scrollToSection('market-stats')}
            >
              {t('home.navigation.marketInsights')}
            </button>
            <button 
              className={`nav-item ${activeSection === 'partners' ? 'active' : ''}`}
              onClick={() => scrollToSection('partners')}
            >
              {t('home.navigation.partners')}
            </button>
                            {/* <Link to="/contact" className="nav-item">
              联系我们
            </Link> */}
          </nav>
        </div>

        {/* Main Content Layout */}
        <div className="hero-content-layout">
          {/* Left Side - Main Title */}
          <div className="hero-left-content">
            <h1 className="hero-main-title">
              {t('home.hero.mainTitle')}
              <br />
              {t('home.hero.mainTitleLine2')}
              <br />
              <span className="title-emphasis">{t('home.hero.mainTitleEmphasis')}</span>
            </h1>
          </div>

          {/* Bottom Left - Description and Buttons */}
          <div className="hero-bottom-left">
            <p className="hero-description-text">
            {t('home.hero.description')}
            </p>
            <div className="hero-actions-layout">
                              <Link to="/contact#contact-form" className="btn-modern primary">
                {t('home.hero.discussProject')}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>


        </div>
      </section>

      {/* Product Category Selection Section */}
      <section id="product-categories" className="product-category-section">
        <div className="category-container">
          <div className="category-header">
            <h2 className="category-main-title">{t('home.products.title')}</h2>
            <p className="category-subtitle">{t('home.products.subtitle')}</p>
          </div>
          
          <div className="category-grid">
            {productCategories.slice(0, 8).map((category, index) => {
              const Icon = category.icon;
              // Map category names to category IDs for all languages
              const categoryMap: { [key: string]: string } = {
                // Chinese
                '键盘': 'keyboard',
                '鼠标': 'mouse',
                '鼠标垫': 'mousepad',
                '游戏手柄': 'gamepad',
                '游戏耳机': 'headphones',
                '键帽': 'keycaps',
                '轴体': 'switches',
                '配件': 'accessories',
                '电竞桌椅': 'gamingChair',
                '其他电子产品': 'electronics',
                // English
                'Keyboards': 'keyboard',
                'Mice': 'mouse',
                'Mousepads': 'mousepad',
                'Gamepads': 'gamepad',
                'Gaming Headphones': 'headphones',
                'Keycaps': 'keycaps',
                'Switches': 'switches',
                'Accessories': 'accessories',
                'Gaming Chairs & Desks': 'gamingChair',
                'Other Electronics': 'electronics',
                // Russian
                'Клавиатуры': 'keyboard',
                'Мыши': 'mouse',
                'Коврики для мыши': 'mousepad',
                'Геймпады': 'gamepad',
                'Игровые наушники': 'headphones',
                'Клавиши': 'keycaps',
                'Переключатели': 'switches',
                'Аксессуары': 'accessories',
                'Игровая мебель': 'gamingChair',
                'Другая электроника': 'electronics'
              };
              const categoryId = categoryMap[category.title] || 'all';
              
              return (
                <Link 
                  key={index} 
                  to={`/brands?category=${categoryId}`}
                  className="category-card" 
                  data-category={category.title}
                >
                  <div className="category-inner">
                    <div className="category-image-background">
                      <div className="image-placeholder">
                        <Icon size={64} className="category-icon" />
                        <span className="placeholder-text">{t('home.products.placeholderText')}</span>
                      </div>
                    </div>
                    <div className="category-title-overlay">
                      <h3 className="category-title">{category.title}</h3>
                    </div>
                    <div className="category-overlay">
                      <div className="overlay-gradient"></div>
                      <div className="overlay-pattern"></div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section features-section">
        <div className="container">
          <div className="features-hero-layout">
            {/* Left Side - Main Message */}
            <div className="features-main-content">
              <div className="feature-badge">{t('home.features.badge')}</div>
              <h2 className="feature-title-large">
                <span className="feature-number-large">99.9%</span>
                <span className="feature-text-large">
                  {t('home.features.satisfaction')}
                  <br />
                  {t('home.features.professionalService')}
                </span>
              </h2>
              
              <div className="feature-description-large">
                {t('home.features.description')}
              </div>

              {/* Key Metrics */}
              <div className="feature-metrics">
                <div className="metric-item">
                  <div className="metric-number">500+</div>
                  <div className="metric-label">{t('home.features.metrics.brands')}</div>
                </div>
                <div className="metric-item">
                  <div className="metric-number">15+</div>
                  <div className="metric-label">{t('home.features.metrics.cities')}</div>
                </div>
                <div className="metric-item">
                  <div className="metric-number">25D</div>
                  <div className="metric-label">{t('home.features.metrics.delivery')}</div>
                </div>
              </div>
            </div>

            {/* Right Side - Features Grid */}
            <div className="features-grid-modern">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="feature-card-modern">
                    <div className="feature-icon-modern">
                      <Icon size={24} />
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title-modern">{feature.title}</h3>
                      <p className="feature-desc-modern">{feature.description}</p>
                    </div>
                    <div className="feature-arrow">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Market Statistics Section */}
      <section id="market-stats" className="section market-stats-section">
        <div className="container">
          <div className="market-hero-layout">
            {/* Left Side - Main Insight */}
            <div className="market-main-insight">
              <div className="insight-badge">{t('home.market.badge')}</div>
              <h2 className="insight-title">
                <span className="insight-number-large">57%</span>
                <span className="insight-text-large">
                  {t('home.market.penetration')}
                  <br />
                  {t('home.market.growth')}
                </span>
              </h2>
              
              {/* Bottom Stats */}
              <div className="bottom-stats">
                <div className="stat-big">
                  <div className="stat-number-big">62.5M</div>
                  <div className="stat-label-small">{t('home.market.stats.activePlayersLabel')}</div>
                </div>
                <div className="stat-big">
                  <div className="stat-number-big">$497M</div>
                  <div className="stat-label-small">{t('home.market.stats.marketSizeLabel')}</div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Data */}
            <div className="market-visual-data">
              <div className="visual-title">{t('home.market.usage.title')}</div>
              
              {/* Enhanced Peripheral Icons Grid */}
              <div className="peripheral-grid-enhanced">
                {/* Keyboards - 75% usage */}
                <div className="peripheral-row-enhanced">
                  <div className="row-label-enhanced">{t('home.market.usage.keyboard')}</div>
                  <div className="icon-visualization">
                    <div className="icon-grid">
                      {Array.from({length: 20}, (_, i) => (
                        <div key={i} className={`icon-container ${i < 15 ? 'active' : 'inactive'}`}>
                          <Keyboard size={14} className="peripheral-icon-enhanced" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="percentage-enhanced">75%</div>
                </div>

                {/* Mice - 82% usage */}
                <div className="peripheral-row-enhanced">
                  <div className="row-label-enhanced">{t('home.market.usage.mouse')}</div>
                  <div className="icon-visualization">
                    <div className="icon-grid">
                      {Array.from({length: 20}, (_, i) => (
                        <div key={i} className={`icon-container ${i < 16 ? 'active' : 'inactive'}`}>
                          <Mouse size={14} className="peripheral-icon-enhanced" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="percentage-enhanced">82%</div>
                </div>

                {/* Headphones - 68% usage */}
                <div className="peripheral-row-enhanced">
                  <div className="row-label-enhanced">{t('home.market.usage.headphones')}</div>
                  <div className="icon-visualization">
                    <div className="icon-grid">
                      {Array.from({length: 20}, (_, i) => (
                        <div key={i} className={`icon-container ${i < 14 ? 'active' : 'inactive'}`}>
                          <Headphones size={14} className="peripheral-icon-enhanced" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="percentage-enhanced">68%</div>
                </div>

                {/* Gamepads - 45% usage */}
                <div className="peripheral-row-enhanced">
                  <div className="row-label-enhanced">{t('home.market.usage.gamepad')}</div>
                  <div className="icon-visualization">
                    <div className="icon-grid">
                      {Array.from({length: 20}, (_, i) => (
                        <div key={i} className={`icon-container ${i < 9 ? 'active' : 'inactive'}`}>
                          <Gamepad2 size={14} className="peripheral-icon-enhanced" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="percentage-enhanced">45%</div>
                </div>

                {/* Mousepads - 58% usage */}
                <div className="peripheral-row-enhanced">
                  <div className="row-label-enhanced">{t('home.market.usage.mousepad')}</div>
                  <div className="icon-visualization">
                    <div className="icon-grid">
                      {Array.from({length: 20}, (_, i) => (
                        <div key={i} className={`icon-container ${i < 12 ? 'active' : 'inactive'}`}>
                          <Package size={14} className="peripheral-icon-enhanced" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="percentage-enhanced">58%</div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="partners-showcase">
        <div className="container">
          <div className="partners-content">
            <h3 className="partners-title">{t('home.partners.ecosystem')}</h3>
            
            {/* Auto-scrolling partners strip */}
            <div className="partners-scroll-container">
              <div className="partners-scroll-track">
                {/* First set of partners */}
                {/* Razer */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/razer.png" alt="Razer" className="partner-logo-img" />
                  </div>
                </div>
                {/* AngryMiao */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/logo.0bd130c6.png" alt="AngryMiao" className="partner-logo-img" />
                  </div>
                </div>
                {/* WOBKEY */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/WOBKEY.jpg" alt="WOBKEY" className="partner-logo-img" />
                  </div>
                </div>
                {/* ROG */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/ROG.png" alt="ROG" className="partner-logo-img" />
                  </div>
                </div>
                {/* SukiSora */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/Sukisora.jpg" alt="Sukisora" className="partner-logo-img" />
                  </div>
                </div>
                {/* Hachiware */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/Hachiware.jpg" alt="Hachiware" className="partner-logo-img" />
                  </div>
                </div>
                {/* PMO */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/PMO.jpg" alt="PMO" className="partner-logo-img" />
                  </div>
                </div>
                {/* Zowie */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://1000logos.net/wp-content/uploads/2022/02/Alienware-Logo.png" alt="Alienware" className="partner-logo-img" />
                  </div>
                </div>
                {/* ATK */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/ATK.png" alt="ATK" className="partner-logo-img" />
                  </div>
                </div>
                {/* MelGeek */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/MelGeek.png" alt="MelGeek" className="partner-logo-img" />
                  </div>
                </div>
                
                {/* Duplicate set for seamless scrolling */}
                {/* Razer */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/razer.png" alt="Razer" className="partner-logo-img" />
                  </div>
                </div>
                {/* AngryMiao */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/logo.0bd130c6.png" alt="AngryMiao" className="partner-logo-img" />
                  </div>
                </div>
                {/* WOBKEY */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/WOBKEY.jpg" alt="WOBKEY" className="partner-logo-img" />
                  </div>
                </div>
                {/* ROG */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/ROG.png" alt="ROG" className="partner-logo-img" />
                  </div>
                </div>
                {/* SukiSora */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/Sukisora.jpg" alt="Sukisora" className="partner-logo-img" />
                  </div>
                </div>
                {/* Hachiware */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/Hachiware.jpg" alt="Hachiware" className="partner-logo-img" />
                  </div>
                </div>
                {/* PMO */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/PMO.jpg" alt="PMO" className="partner-logo-img" />
                  </div>
                </div>
                {/* Zowie */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://1000logos.net/wp-content/uploads/2022/02/Alienware-Logo.png" alt="Alienware" className="partner-logo-img" />
                  </div>
                </div>
                {/* ATK */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/ATK.png" alt="ATK" className="partner-logo-img" />
                  </div>
                </div>
                {/* MelGeek */}
                <div className="partner-logo-item">
                  <div className="partner-logo">
                    <img src="https://image.siky.me/mistyislet/MelGeek.png" alt="MelGeek" className="partner-logo-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default HomePage; 