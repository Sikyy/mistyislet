import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play,
  Shield, 
  Globe2, 
  Truck, 
  Award, 
  Users, 
  Keyboard,
  Mouse,
  Gamepad2,
  Headphones,
  Star,
  ChevronRight,
  Zap,
  Package,
  Target,
  Settings,
  Cpu,
  Armchair,
  Monitor
} from 'lucide-react';
import './HomePage.css';

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => new Set(Array.from(prev).concat(entry.target.id)));
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return visibleElements;
};

// Custom hook for scroll spy navigation
const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

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
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const visibleElements = useScrollAnimation();
  const activeSection = useScrollSpy();



  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: Shield,
      title: '品质保证',
      description: '严格的质量控制体系，确保每一件产品都达到国际标准',
    },
    {
      icon: Globe2,
      title: '全球供应链',
      description: '与全球顶级品牌深度合作，整合优质资源',
    },
    {
      icon: Truck,
      title: '高效物流',
      description: '专业的跨境物流网络，智能仓储管理',
    },
    {
      icon: Award,
      title: '专业服务',
      description: '经验丰富的专业团队，提供全链条服务',
    },
  ];

  const productCategories = [
    {
      icon: Keyboard,
      title: '键盘',
      description: '高端机械键盘系列，Cherry MX轴体',
      stats: '500+ 型号',
      highlight: '专业级'
    },
    {
      icon: Mouse,
      title: '鼠标',
      description: '高精度游戏鼠标，26000 DPI',
      stats: '300+ 型号', 
      highlight: '电竞级'
    },
    {
      icon: Package,
      title: '鼠标垫',
      description: '防水面料，防滑底座，多尺寸选择',
      stats: '100+ 型号',
      highlight: '实用级'
    },
    {
      icon: Gamepad2,
      title: '游戏手柄',
      description: '专业游戏手柄，低延迟设计',
      stats: '80+ 型号',
      highlight: '竞技级'
    },
    {
      icon: Headphones,
      title: '游戏耳机',
      description: 'Hi-Res音质，沉浸式体验',
      stats: '150+ 型号',
      highlight: '发烧级'
    },
    {
      icon: Settings,
      title: '键帽',
      description: 'PBT材质，热升华工艺，多色搭配',
      stats: '200+ 套装',
      highlight: '定制级'
    },
    {
      icon: Cpu,
      title: '轴体',
      description: '多种轴体选择，工厂润滑处理',
      stats: '50+ 类型',
      highlight: '专业级'
    },
    {
      icon: Zap,
      title: '配件',
      description: 'RGB灯带，线材，工具等周边配件',
      stats: '300+ 配件',
      highlight: '增强级'
    },
    {
      icon: Armchair,
      title: '电竞桌椅',
      description: '人体工学设计，舒适游戏体验',
      stats: '50+ 款式',
      highlight: '舒适级'
    },
    {
      icon: Monitor,
      title: '其他电子产品',
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
              首页
            </button>
            <button 
              className={`nav-item ${activeSection === 'product-categories' ? 'active' : ''}`}
              onClick={() => scrollToSection('product-categories')}
            >
              产品分类
            </button>
            <button 
              className={`nav-item ${activeSection === 'features' ? 'active' : ''}`}
              onClick={() => scrollToSection('features')}
            >
              核心优势
            </button>
            <button 
              className={`nav-item ${activeSection === 'market-stats' ? 'active' : ''}`}
              onClick={() => scrollToSection('market-stats')}
            >
              市场洞察
            </button>
            <button 
              className={`nav-item ${activeSection === 'partners' ? 'active' : ''}`}
              onClick={() => scrollToSection('partners')}
            >
              合作伙伴
            </button>
            {/* <Link to="/collaboration" className="nav-item">
              联系我们
            </Link> */}
          </nav>
        </div>

        {/* Main Content Layout */}
        <div className="hero-content-layout">
          {/* Left Side - Main Title */}
          <div className="hero-left-content">
            <h1 className="hero-main-title">
              让您的外设业务
              <br />
              卓越非凡 — 这是一门
              <br />
              <span className="title-emphasis">艺术</span>
            </h1>
          </div>

          {/* Bottom Left - Description and Buttons */}
          <div className="hero-bottom-left">
            <p className="hero-description-text">
            我们致力于连接俄罗斯最具潜力的电竞渠道商、职业俱乐部与内容创作者，协同推广高性能外设品牌，推动俄罗斯电竞市场的专业化与商业化发展。
            </p>
            <div className="hero-actions-layout">
              <Link to="/collaboration" className="btn-modern primary">
                讨论项目
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
            <h2 className="category-main-title">产品矩阵</h2>
            <p className="category-subtitle">探索我们丰富的产品生态系统</p>
          </div>
          
          <div className="category-grid">
            {productCategories.slice(0, 8).map((category, index) => {
              const Icon = category.icon;
              // Map Chinese category names to English category IDs
              const categoryMap: { [key: string]: string } = {
                '键盘': 'keyboard',
                '鼠标': 'mouse',
                '鼠标垫': 'mousepad',
                '游戏手柄': 'gamepad',
                '游戏耳机': 'headphones',
                '键帽': 'keycaps',
                '轴体': 'switches',
                '配件': 'accessories'
              };
              const categoryId = categoryMap[category.title] || 'all';
              
              return (
                <Link 
                  key={index} 
                  to={`/products?category=${categoryId}`}
                  className="category-card" 
                  data-category={category.title}
                >
                  <div className="category-inner">
                    <div className="category-image-background">
                      <div className="image-placeholder">
                        <Icon size={64} className="category-icon" />
                        <span className="placeholder-text">产品图片</span>
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
              <div className="feature-badge">核心优势</div>
              <h2 className="feature-title-large">
                <span className="feature-number-large">99.9%</span>
                <span className="feature-text-large">
                  客户满意度
                  <br />
                  专业供应链服务
                </span>
              </h2>
              
              <div className="feature-description-large">
                我们凭借严格的质量控制、全球供应链网络和专业服务团队，
                为俄罗斯客户提供最可靠的外设供应链解决方案。
              </div>

              {/* Key Metrics */}
              <div className="feature-metrics">
                <div className="metric-item">
                  <div className="metric-number">500+</div>
                  <div className="metric-label">合作品牌</div>
                </div>
                <div className="metric-item">
                  <div className="metric-number">15+</div>
                  <div className="metric-label">服务城市</div>
                </div>
                <div className="metric-item">
                  <div className="metric-number">48h</div>
                  <div className="metric-label">平均交付</div>
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
              <div className="insight-badge">俄罗斯电竞市场</div>
              <h2 className="insight-title">
                <span className="insight-number-large">74%</span>
                <span className="insight-text-large">
                  玩家使用专业外设
                  <br />
                  设备普及率持续增长
                </span>
              </h2>
              
              {/* Bottom Stats */}
              <div className="bottom-stats">
                <div className="stat-big">
                  <div className="stat-number-big">12.5M</div>
                  <div className="stat-label-small">活跃电竞玩家，覆盖15+主要城市</div>
                </div>
                <div className="stat-big">
                  <div className="stat-number-big">$420M</div>
                  <div className="stat-label-small">年市场规模，外设占比20.2%</div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Data */}
            <div className="market-visual-data">
              <div className="visual-title">外设使用情况</div>
              
              {/* Enhanced Peripheral Icons Grid */}
              <div className="peripheral-grid-enhanced">
                {/* Keyboards - 75% usage */}
                <div className="peripheral-row-enhanced">
                  <div className="row-label-enhanced">键盘</div>
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
                  <div className="row-label-enhanced">鼠标</div>
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
                  <div className="row-label-enhanced">耳机</div>
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
                  <div className="row-label-enhanced">手柄</div>
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
                  <div className="row-label-enhanced">鼠标垫</div>
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
            <h3 className="partners-title">合作伙伴生态</h3>
            
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