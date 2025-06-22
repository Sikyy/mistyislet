import React from 'react';
import { 
  Compass, 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award,
  Calendar,
  MapPin,
  TrendingUp,
  Globe2
} from 'lucide-react';
import './BrandStoryPage.css';

const BrandStoryPage: React.FC = () => {
  const timeline = [
    {
      year: '2018',
      title: '公司成立',
      description: 'MistyIslet在深圳成立，专注于中俄供应链服务',
      milestone: '初创阶段'
    },
    {
      year: '2019',
      title: '首个合作伙伴',
      description: '与德国TechMaster建立战略合作关系，开启国际化征程',
      milestone: '合作开始'
    },
    {
      year: '2020',
      title: '市场拓展',
      description: '在俄罗斯建立本地化服务团队，深耕当地市场',
      milestone: '本地化'
    },
    {
      year: '2021',
      title: '产品线扩展',
      description: '产品类别从键盘扩展到全线外设设备',
      milestone: '多元化'
    },
    {
      year: '2022',
      title: '技术升级',
      description: '引入AI技术优化供应链管理，提升服务效率',
      milestone: '数字化'
    },
    {
      year: '2023',
      title: '规模增长',
      description: '合作伙伴超过50家，服务客户突破1000家',
      milestone: '规模化'
    },
    {
      year: '2024',
      title: '战略升级',
      description: '成为中俄外设贸易领域的重要桥梁',
      milestone: '领军者'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: '诚信为本',
      description: '以诚待人，以信立业，建立长期稳定的合作关系'
    },
    {
      icon: Award,
      title: '品质至上',
      description: '严格的质量控制，确保每一件产品都符合最高标准'
    },
    {
      icon: Users,
      title: '客户第一',
      description: '以客户需求为导向，提供超越期望的服务体验'
    },
    {
      icon: Globe2,
      title: '合作共赢',
      description: '构建互利共赢的生态系统，共同成长发展'
    }
  ];

  const team = [
    {
      name: '张伟明',
      position: '创始人 & CEO',
      background: '10年供应链管理经验，曾任职于知名外贸企业',
      avatar: '👨‍💼',
      specialty: '战略规划'
    },
    {
      name: '李佳音',
      position: '运营总监',
      background: '俄语专业背景，深谙俄罗斯市场文化',
      avatar: '👩‍💼',
      specialty: '市场运营'
    },
    {
      name: '王建国',
      position: '技术总监',
      background: '软件工程专业，专注于供应链数字化解决方案',
      avatar: '👨‍💻',
      specialty: '技术创新'
    },
    {
      name: 'Anna Volkov',
      position: '俄罗斯区域经理',
      background: '本地化服务专家，负责俄罗斯市场拓展',
      avatar: '👩‍🔬',
      specialty: '本地化服务'
    }
  ];

  return (
    <div className="brand-story-page">
      {/* Header */}
      <section className="brand-header">
        <div className="container">
          <div className="header-content animate-fadeInUp">
            <h1 className="page-title">品牌故事</h1>
            <p className="page-description">
              连接中俄两国，用心打造值得信赖的供应链桥梁
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-item animate-fadeInLeft">
              <div className="mission-icon">
                <Target size={48} />
              </div>
              <div className="mission-text">
                <h3>我们的使命</h3>
                <p>
                  成为中俄供应链合作的重要桥梁，为俄罗斯商家提供高品质的外设产品和专业的供应链服务，
                  促进两国商贸往来，实现互利共赢。
                </p>
              </div>
            </div>
            
            <div className="mission-item animate-fadeInRight">
              <div className="mission-icon">
                <Eye size={48} />
              </div>
              <div className="mission-text">
                <h3>我们的愿景</h3>
                <p>
                  成为全球领先的跨境供应链服务提供商，通过技术创新和专业服务，
                  让世界各地的优质产品能够更便捷地触达每一个需要的地方。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title animate-fadeInUp">发展历程</h2>
            <p className="section-description animate-fadeInUp">
              从初创到成长，我们始终坚持初心，砥砺前行
            </p>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className={`timeline-item animate-fadeInUp ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-milestone">{item.milestone}</div>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-description">{item.description}</p>
                </div>
                <div className="timeline-marker">
                  <Calendar size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title animate-fadeInUp">核心价值</h2>
            <p className="section-description animate-fadeInUp">
              这些价值观指引着我们前进的方向
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="value-card animate-fadeInUp">
                  <div className="value-icon">
                    <Icon size={36} />
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title animate-fadeInUp">核心团队</h2>
            <p className="section-description animate-fadeInUp">
              专业的团队是我们成功的基石
            </p>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card animate-fadeInUp">
                <div className="team-avatar">
                  <span>{member.avatar}</span>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-background">{member.background}</p>
                  <div className="team-specialty">
                    <span>专长: {member.specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-banner">
        <div className="container">
          <div className="achievements-content animate-fadeInUp">
            <div className="achievement-stat">
              <TrendingUp size={32} />
              <div>
                <h3>6年</h3>
                <p>专业经验</p>
              </div>
            </div>
            <div className="achievement-stat">
              <Users size={32} />
              <div>
                <h3>50+</h3>
                <p>合作伙伴</p>
              </div>
            </div>
            <div className="achievement-stat">
              <Globe2 size={32} />
              <div>
                <h3>15+</h3>
                <p>覆盖城市</p>
              </div>
            </div>
            <div className="achievement-stat">
              <Award size={32} />
              <div>
                <h3>99%</h3>
                <p>客户满意度</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="section future-section">
        <div className="container">
          <div className="future-content animate-fadeInUp">
            <div className="future-icon">
              <Compass size={64} />
            </div>
            <h2 className="future-title">展望未来</h2>
            <p className="future-description">
              我们将继续深耕中俄供应链服务，拓展更多产品线，
              服务更多客户，成为连接世界的重要桥梁。
              未来，我们计划将业务扩展到更多国家和地区，
              让优质的产品能够无障碍地流通到世界各地。
            </p>
            <div className="future-goals">
              <div className="goal-item">
                <MapPin size={24} />
                <span>拓展至5个新市场</span>
              </div>
              <div className="goal-item">
                <Users size={24} />
                <span>服务10000+客户</span>
              </div>
              <div className="goal-item">
                <Award size={24} />
                <span>成为行业标杆</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandStoryPage; 