import React, { useEffect, useState } from 'react';
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

const HomePage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      <section className="hero-section">
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
            <Link to="/" className="nav-item active">首页</Link>
            <Link to="/products" className="nav-item">产品</Link>
            <Link to="/brand-story" className="nav-item">品牌故事</Link>
            <Link to="/partners" className="nav-item">合作伙伴</Link>
            <Link to="/collaboration" className="nav-item">合作</Link>
          </nav>
        </div>

        {/* Main Content Layout */}
        <div className="hero-content-layout">
          {/* Left Side - Main Title */}
          <div className="hero-left-content">
            <div className="hero-number">01 — 我们的使命</div>
            <h1 className="hero-main-title">
              让您的外设业务
              <br />
              卓越非凡 — 这是一门
              <br />
              <span className="title-emphasis">科学</span>
            </h1>
          </div>

          {/* Bottom Left - Description and Buttons */}
          <div className="hero-bottom-left">
            <p className="hero-description-text">
              我们致力于连接世界上最活跃的投资者和家族办公室，
              让他们能够获得专业管理的外设产品投资策略。
            </p>
            <div className="hero-actions-layout">
              <Link to="/collaboration" className="btn-modern primary">
                讨论项目
                <ArrowRight size={18} />
              </Link>
              <button className="btn-modern secondary">
                向下滚动
                <span className="scroll-indicator">↓</span>
              </button>
            </div>
          </div>


        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge glass animate-fadeInUp">
              <Target size={16} />
              <span>核心优势</span>
            </div>
            <h2 className="section-title animate-fadeInUp">
              为什么选择我们的
              <br />
              <span className="text-gradient">供应链解决方案</span>
            </h2>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-card glass animate-fadeInScale">
                  <div className="feature-icon">
                    <Icon size={28} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-arrow">
                    <ChevronRight size={20} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section products-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge glass animate-fadeInUp">
              <Package size={16} />
              <span>产品生态</span>
            </div>
            <h2 className="section-title animate-fadeInUp">
              丰富的产品矩阵
              <br />
              <span className="text-gradient">满足多元化需求</span>
            </h2>
          </div>
          
          <div className="products-showcase">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="product-card-modern glass animate-fadeInScale">
                  <div className="product-header">
                    <div className="product-icon-large">
                      <Icon size={36} />
                    </div>
                    <div className="product-badge">{category.highlight}</div>
                  </div>
                  
                  <div className="product-info">
                    <h3 className="product-title">{category.title}</h3>
                    <p className="product-description">{category.description}</p>
                    <div className="product-stats">{category.stats}</div>
                  </div>
                  
                  <Link to="/products" className="product-explore">
                    探索更多
                    <ArrowRight size={16} />
                  </Link>
                  
                  <div className="product-glow"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-showcase">
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