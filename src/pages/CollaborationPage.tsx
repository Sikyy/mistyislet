import React, { useState } from 'react';
import { 
  Handshake, 
  FileText, 
  Truck, 
  CheckCircle, 
  Phone, 
  Mail, 
  MessageSquare,
  ArrowRight,
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
    businessType: '',
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
    // Handle form submission here
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
      {/* Header */}
      <section className="collaboration-header">
        <div className="container">
          <div className="header-content animate-fadeInUp">
            <h1 className="page-title">品牌合作</h1>
            <p className="page-description">
              携手共创美好未来，开启互利共赢的合作之旅
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="section types-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title animate-fadeInUp">合作模式</h2>
            <p className="section-description animate-fadeInUp">
              多种合作模式，满足不同客户需求
            </p>
          </div>

          <div className="types-grid">
            {collaborationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="type-card animate-fadeInUp">
                  <div className="type-header">
                    <div className="type-icon">
                      <Icon size={32} />
                    </div>
                    <h3 className="type-title">{type.title}</h3>
                  </div>
                  <p className="type-description">{type.description}</p>
                  <div className="type-features">
                    <h4>服务内容：</h4>
                    <ul>
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="type-suitable">
                    <strong>适合：</strong> {type.suitable}
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
            <h2 className="section-title animate-fadeInUp">合作流程</h2>
            <p className="section-description animate-fadeInUp">
              简单高效的合作流程，让合作变得更加便捷
            </p>
          </div>

          <div className="process-timeline">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="process-item animate-fadeInUp">
                  <div className="process-number">{item.step}</div>
                  <div className="process-icon">
                    <Icon size={24} />
                  </div>
                  <div className="process-content">
                    <h3 className="process-title">{item.title}</h3>
                    <p className="process-description">{item.description}</p>
                    <span className="process-duration">{item.duration}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="process-arrow">
                      <ArrowRight size={20} />
                    </div>
                  )}
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
            <h2 className="section-title animate-fadeInUp">合作优势</h2>
            <p className="section-description animate-fadeInUp">
              选择我们的理由
            </p>
          </div>

          <div className="advantages-grid">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="advantage-card animate-fadeInUp">
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

      {/* Contact Form */}
      <section id="contact-form" className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info animate-fadeInLeft">
              <h2>开始合作</h2>
              <p>
                填写表单或直接联系我们，我们的专业团队将在24小时内与您取得联系，
                为您提供个性化的合作方案。
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Phone size={24} />
                  </div>
                  <div className="method-info">
                    <h4>电话咨询</h4>
                    <p>+86 400-888-0000</p>
                    <span>工作时间：9:00-18:00</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={24} />
                  </div>
                  <div className="method-info">
                    <h4>邮件联系</h4>
                    <p>contact@mistyislet.com</p>
                    <span>24小时内回复</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <MessageSquare size={24} />
                  </div>
                  <div className="method-info">
                    <h4>在线咨询</h4>
                    <p>即时沟通</p>
                    <span>专业顾问在线</span>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form animate-fadeInRight" onSubmit={handleSubmit}>
              <h3>合作咨询表单</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">姓名 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">公司名称 *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">邮箱地址 *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">联系电话</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="businessType">业务类型 *</label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">请选择业务类型</option>
                  <option value="retailer">零售商</option>
                  <option value="distributor">经销商</option>
                  <option value="wholesaler">批发商</option>
                  <option value="manufacturer">制造商</option>
                  <option value="other">其他</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">合作需求 *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="请详细描述您的合作需求..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                提交申请
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollaborationPage; 