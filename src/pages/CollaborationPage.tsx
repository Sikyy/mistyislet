import React, { useState } from 'react';
import { 
  Handshake, 
  FileText, 
  Truck, 
  CheckCircle, 
  MessageSquare,
  Users,
  Package,
  DollarSign,
  Clock,
  Shield,
  Star
} from 'lucide-react';
import './CollaborationPage.css';

const CollaborationPage: React.FC = () => {
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

  const collaborationTypes = [
    {
      icon: Package,
      title: '产品供应',
      description: '为您提供高品质的外设产品供应服务',
      features: ['产品采购', '质量控制', '库存管理', '物流配送'],
      suitable: '零售商、经销商'
    },
    {
      icon: Handshake,
      title: '品牌代理',
      description: '成为我们的品牌代理商，共同开拓市场',
      features: ['品牌授权', '市场支持', '培训服务', '营销资源'],
      suitable: '有销售网络的企业'
    },
    {
      icon: Users,
      title: '战略合作',
      description: '建立长期战略合作关系，实现共同发展',
      features: ['定制方案', '优先供货', '价格优惠', '技术支持'],
      suitable: '大型采购商'
    }
  ];

  const process = [
    {
      step: 1,
      icon: MessageSquare,
      title: '初步沟通',
      description: '通过电话、邮件或在线表单与我们取得联系',
      duration: '1-2个工作日'
    },
    {
      step: 2,
      icon: FileText,
      title: '需求评估',
      description: '详细了解您的业务需求和合作意向',
      duration: '3-5个工作日'
    },
    {
      step: 3,
      icon: Handshake,
      title: '方案制定',
      description: '为您量身定制合适的合作方案',
      duration: '5-7个工作日'
    },
    {
      step: 4,
      icon: CheckCircle,
      title: '合同签署',
      description: '确定合作细节，正式签署合作协议',
      duration: '2-3个工作日'
    },
    {
      step: 5,
      icon: Truck,
      title: '服务执行',
      description: '开始提供专业的供应链服务',
      duration: '持续服务'
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: '品质保证',
      description: '严格的质量控制体系，确保产品品质',
      stats: '99.5% 合格率'
    },
    {
      icon: Clock,
      title: '快速响应',
      description: '24小时内响应客户需求',
      stats: '平均2小时响应'
    },
    {
      icon: DollarSign,
      title: '价格优势',
      description: '直接厂商合作，提供具竞争力的价格',
      stats: '节省15-30%成本'
    },
    {
      icon: Star,
      title: '专业服务',
      description: '专业团队提供全方位服务支持',
      stats: '98% 客户满意度'
    }
  ];

  return (
    <div className="collaboration-page">
      {/* Hero Section */}
      <section className="collaboration-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">
              PARTNER
              <br />
              WITH US
            </h1>
            <p className="page-description">
              携手共创美好未来，开启互利共赢的合作之旅。
              专业团队，优质服务，值得信赖的合作伙伴。
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="section types-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              合作模式
              <br />
              多元化选择
            </h2>
            <p className="section-description">
              提供多种合作模式，满足不同客户的个性化需求，
              让每一种合作都能发挥最大价值。
            </p>
          </div>

          <div className="types-grid">
            {collaborationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="type-card">
                  <div className="type-header">
                    <div className="type-icon">
                      <Icon size={32} />
                    </div>
                    <h3 className="type-title">{type.title}</h3>
                  </div>
                  <p className="type-description">{type.description}</p>
                  <div className="type-features">
                    <h4>服务内容</h4>
                    <ul>
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="type-suitable">
                    <strong>适合</strong> {type.suitable}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              合作流程
              <br />
              简单高效
            </h2>
            <p className="section-description">
              标准化的合作流程，确保每一个环节都专业高效，
              让合作变得更加便捷和可靠。
            </p>
          </div>

          <div className="process-timeline">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="process-item">
                  <div className="process-step">
                    <div className="step-number">{item.step}</div>
                    <div className="step-icon">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="process-content">
                    <h3 className="process-title">{item.title}</h3>
                    <p className="process-description">{item.description}</p>
                    <span className="process-duration">{item.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section advantages-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              合作优势
              <br />
              专业可靠
            </h2>
            <p className="section-description">
              多年行业经验积累，形成了完善的服务体系，
              为每一位合作伙伴提供专业保障。
            </p>
          </div>

          <div className="advantages-grid">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="advantage-item">
                  <div className="advantage-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="advantage-title">{advantage.title}</h3>
                  <p className="advantage-description">{advantage.description}</p>
                  <div className="advantage-stats">{advantage.stats}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

            {/* Contact Section */}
      <section className="section contact-section">
        {/* Contact Form */}
        <div className="contact-form-container">
            <h3 className="contact-form-title">Lets Have a Chat 👋</h3>
            <p className="contact-form-description">
              Questions about our products/services, orders, or just want to say hello? We're here to help
            </p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Jonathan"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="James"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jonathan2718@gmail.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hey i have some issues activating my account..."
                  required
                />
              </div>

              <div className="form-submit">
                <button type="submit" className="btn-submit">
                  Send message
                </button>
              </div>
            </form>

            <div className="social-links">
              <a href="https://twitter.com/mistyislet" className="social-link" title="Twitter" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://instagram.com/mistyislet" className="social-link" title="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297-.877-.808-1.297-1.930-1.297-3.326 0-1.297.49-2.448 1.297-3.326.808-.877 1.930-1.297 3.326-1.297s2.448.49 3.326 1.297c.877.808 1.297 1.930 1.297 3.326 0 1.297-.49 2.448-1.297 3.326-.808.877-1.930 1.297-3.326 1.297zm7.718-1.297c-.878.807-2.030 1.297-3.326 1.297s-2.448-.49-3.326-1.297c-.877-.808-1.297-1.930-1.297-3.326 0-1.297.49-2.448 1.297-3.326.808-.877 1.930-1.297 3.326-1.297s2.448.49 3.326 1.297c.877.808 1.297 1.930 1.297 3.326 0 1.297-.49 2.448-1.297 3.326z"/>
                </svg>
              </a>
              <a href="https://discord.gg/mistyislet" className="social-link" title="Discord" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>
      </section>
    </div>
  );
};

export default CollaborationPage; 