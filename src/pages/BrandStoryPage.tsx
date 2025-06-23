import React from 'react';
import { 
  Target, 
  Eye, 
  Heart
} from 'lucide-react';
import './BrandStoryPage.css';

const BrandStoryPage: React.FC = () => {
  const timeline = [
    {
      year: '2018',
      title: '公司成立',
      description: 'MistyIslet在深圳成立，专注于中俄供应链服务'
    },
    {
      year: '2020',
      title: '市场拓展', 
      description: '在俄罗斯建立本地化服务团队'
    },
    {
      year: '2022',
      title: '技术升级',
      description: '引入AI技术优化供应链管理'
    },
    {
      year: '2024',
      title: '战略升级',
      description: '成为中俄外设贸易领域的重要桥梁'
    }
  ];

  return (
    <div className="brand-story-page">
      {/* Hero Section */}
      <section className="brand-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-subtitle">
                我们专注为俄罗斯商家提供高端外设设备供应链服务，
                致力于打造最专业、最可靠的跨境贸易桥梁。
              </p>
              
              <h1 className="hero-title">
                ABOUT
                <br />
                MISTYISLET
              </h1>
              
              <div className="hero-description">
                <p>
                  连接中俄两国市场四年来，我们始终坚持以品质为核心，
                  以创新为驱动，为客户创造价值。
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
              <p className="story-subtitle">SINCE 2018</p>
              <h2 className="story-title">
                我们一直在为中俄跨境贸易
                <br />
                书写新的历史篇章
              </h2>
              <div className="story-description">
                <p>
                  六年来，我们专注于外设设备供应链服务，
                  通过不断创新和优化，为客户提供最优质的产品和服务体验。
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
            <p className="section-subtitle">OUR VALUES</p>
            <h2 className="section-title">
              企业核心价值
              <br />
              与发展理念
            </h2>
          </div>
          
          <div className="mission-grid">
            <div className="mission-item">
              <div className="mission-icon">
                <Target size={32} />
              </div>
              <div className="mission-content">
                <h3>我们的使命</h3>
                <p>成为中俄供应链合作的重要桥梁，为俄罗斯商家提供高品质的外设产品和专业的供应链服务。</p>
              </div>
            </div>
            
            <div className="mission-item">
              <div className="mission-icon">
                <Eye size={32} />
              </div>
              <div className="mission-content">
                <h3>我们的愿景</h3>
                <p>成为全球领先的跨境供应链服务提供商，让世界各地的优质产品能够更便捷地流通。</p>
              </div>
            </div>
            
            <div className="mission-item">
              <div className="mission-icon">
                <Heart size={32} />
              </div>
              <div className="mission-content">
                <h3>核心价值</h3>
                <p>诚信为本，品质至上，客户第一，构建互利共赢的生态系统。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">HISTORY</p>
            <h2 className="section-title">
              发展历程
              <br />
              砥砺前行六年路
            </h2>
            <div className="section-description">
              <p>
                从初创到成长，我们始终坚持初心，
                用专业和坚持书写着跨境贸易的新篇章。
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