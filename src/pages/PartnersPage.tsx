import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Globe, 
  Heart,
  CheckCircle,
  ArrowRight,
  Store,
  MapPin
} from 'lucide-react';
import './PartnersPage.css';

const PartnersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'brands' | 'merchants'>('brands');

  // 电竞品牌合作伙伴（供应链上游）
  const gamingBrands = [
    {
      id: 1,
      name: 'Razer',
      type: '全球顶级电竞品牌',
      country: '美国/新加坡',
      products: ['机械键盘', '游戏鼠标', '电竞耳机', '鼠标垫'],
      partnership: '2019年',
      description: '全球领先的电竞外设品牌，专为游戏玩家和电竞选手设计专业设备',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Razer-Logo.png',
      featured: true,
      volume: '月均供应 5000+ 件'
    },
    {
      id: 2,
      name: 'Logitech G',
      type: '专业游戏外设',
      country: '瑞士',
      products: ['游戏键盘', '游戏鼠标', '游戏耳机', '摄像头'],
      partnership: '2018年',
      description: '罗技旗下专业游戏品牌，专注于高性能游戏外设的研发和制造',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Logitech-Logo.png',
      featured: true,
      volume: '月均供应 8000+ 件'
    },
    {
      id: 3,
      name: 'Corsair',
      type: '高端电竞装备',
      country: '美国',
      products: ['机械键盘', '游戏鼠标', '内存条', '电源'],
      partnership: '2020年',
      description: '美海盗船品牌，专注于高端游戏硬件和外设，深受电竞爱好者喜爱',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Corsair-Logo.png',
      featured: true,
      volume: '月均供应 3000+ 件'
    },
    {
      id: 4,
      name: 'SteelSeries',
      type: '专业电竞外设',
      country: '丹麦',
      products: ['游戏耳机', '机械键盘', '游戏鼠标', '鼠标垫'],
      partnership: '2021年',
      description: '丹麦专业电竞外设品牌，为全球顶级电竞选手提供专业装备',
      logo: 'https://1000logos.net/wp-content/uploads/2022/08/SteelSeries-Logo.png',
      featured: false,
      volume: '月均供应 2500+ 件'
    },
    {
      id: 5,
      name: 'HyperX',
      type: '金士顿电竞品牌',
      country: '美国',
      products: ['电竞耳机', '机械键盘', '游戏鼠标', '内存条'],
      partnership: '2020年',
      description: '金士顿旗下电竞品牌，专注于为游戏玩家提供高品质外设产品',
      logo: 'https://logos-world.net/wp-content/uploads/2022/02/HyperX-Logo.png',
      featured: false,
      volume: '月均供应 4000+ 件'
    },
    {
      id: 6,
      name: 'ASUS ROG',
      type: '玩家国度',
      country: '台湾',
      products: ['游戏笔记本', '机械键盘', '游戏鼠标', '显示器'],
      partnership: '2019年',
      description: '华硕玩家国度系列，专为游戏玩家和超频爱好者打造的高端品牌',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/ASUS-ROG-Logo.png',
      featured: true,
      volume: '月均供应 6000+ 件'
    }
  ];

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
      storeCount: '50+ 合作商',
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
    { icon: Building2, number: '15+', label: '电竞品牌合作' },
    { icon: Store, number: '50+', label: '俄罗斯商家伙伴' },
    { icon: Globe, number: '8', label: '联邦区覆盖' },
    { icon: TrendingUp, number: '300%', label: '年增长率' }
  ];

  const testimonials = [
    {
      id: 1,
      company: 'Moscow Gaming Center',
      contact: 'Alexei Petrov',
      position: '采购总监',
      rating: 5,
      content: '与MistyIslet合作三年来，他们的产品质量和服务水平都非常出色。配送及时，产品品质稳定，是我们最信任的合作伙伴。',
      avatar: 'AP'
    },
    {
      id: 2,
      company: 'St. Petersburg Tech Hub',
      contact: 'Elena Volkov',
      position: '运营经理',
      rating: 5,
      content: '专业的团队，优质的产品，合理的价格。MistyIslet帮助我们建立了完善的供应链体系，业务增长了200%。',
      avatar: 'EV'
    },
    {
      id: 3,
      company: 'Far East Gaming Co.',
      contact: 'Dmitri Kozlov',
      position: '贸易总监',
      rating: 5,
      content: '作为远东地区的合作伙伴，MistyIslet为我们提供了专业的跨境贸易服务。清关效率高，风险控制严格。',
      avatar: 'DK'
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
                携手全球顶级品牌，服务俄罗斯优质商家，
                构建专业可靠的外设供应链生态系统。
              </p>
              
              <h1 className="partners-hero-title">
                GLOBAL
                <br />
                PARTNERS
              </h1>
              
              <div className="partners-hero-description">
                <p>
                  六年来，我们与全球15+顶级电竞品牌建立深度合作，
                  为俄罗斯50+优质商家提供专业供应链服务。
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
            <p className="section-subtitle">OUR ACHIEVEMENTS</p>
            <h2 className="section-title">
              合作成果
              <br />
              数据见证实力
            </h2>
            <div className="section-description">
              <p>
                通过专业服务和优质产品，我们在中俄外设贸易领域
                建立了良好的声誉和广泛的合作网络。
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Tabs */}
      <section className="partners-tabs-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">PARTNERSHIPS</p>
            <h2 className="section-title">
              合作伙伴
              <br />
              共创美好未来
            </h2>
          </div>

          <div className="partners-tabs">
            <button
              className={`tab-button ${activeTab === 'brands' ? 'active' : ''}`}
              onClick={() => setActiveTab('brands')}
            >
              <span>品牌供应商</span>
              <span className="tab-subtitle">Global Gaming Brands</span>
            </button>
            <button
              className={`tab-button ${activeTab === 'merchants' ? 'active' : ''}`}
              onClick={() => setActiveTab('merchants')}
            >
              <span>俄罗斯商家</span>
              <span className="tab-subtitle">Russian Merchants</span>
            </button>
          </div>

          {/* Brands Grid */}
          {activeTab === 'brands' && (
            <div className="brands-grid">
              {gamingBrands.map((brand) => (
                <div key={brand.id} className={`brand-card ${brand.featured ? 'featured' : ''}`}>
                  {brand.featured && <span className="featured-badge">核心伙伴</span>}
                  
                  <div className="brand-header">
                    <div className="brand-logo">
                      {brand.name.charAt(0)}
                    </div>
                    <div className="brand-info">
                      <h3 className="brand-name">{brand.name}</h3>
                      <p className="brand-type">{brand.type}</p>
                      <p className="brand-country">{brand.country}</p>
                    </div>
                  </div>
                  
                  <p className="brand-description">{brand.description}</p>
                  
                  <div className="brand-products">
                    <h4>主营产品</h4>
                    <div className="product-tags">
                      {brand.products.map((product, index) => (
                        <span key={index} className="product-tag">{product}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="brand-footer">
                    <span className="partnership-year">合作自 {brand.partnership}</span>
                    <CheckCircle className="verified-icon" size={20} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Merchants Grid */}
          {activeTab === 'merchants' && (
            <div className="merchants-grid">
              {russianMerchants.map((merchant) => (
                <div key={merchant.id} className={`merchant-card ${merchant.featured ? 'featured' : ''}`}>
                  {merchant.featured && <span className="featured-badge">重点伙伴</span>}
                  
                  <div className="merchant-header">
                    <div className="merchant-avatar">
                      {merchant.avatar}
                    </div>
                    <div className="merchant-info">
                      <h3 className="merchant-name">{merchant.name}</h3>
                      <p className="merchant-type">{merchant.type}</p>
                      <p className="merchant-location">
                        <MapPin size={14} />
                        {merchant.city}, {merchant.region}
                      </p>
                    </div>
                  </div>
                  
                  <p className="merchant-description">{merchant.description}</p>
                  
                  <div className="merchant-stats">
                    <div className="stat-item">
                      <span className="stat-label">业务类型:</span>
                      <span className="stat-value">{merchant.businessType}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">规模:</span>
                      <span className="stat-value">{merchant.storeCount}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">采购量:</span>
                      <span className="stat-value">{merchant.monthlyVolume}</span>
                    </div>
                  </div>
                  
                  <div className="merchant-specialties">
                    <h4>专业领域</h4>
                    <div className="specialty-tags">
                      {merchant.specialties.map((specialty, index) => (
                        <span key={index} className="specialty-tag">{specialty}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="merchant-footer">
                    <span className="partnership-year">合作自 {merchant.partnership}</span>
                    <CheckCircle className="verified-icon" size={20} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">TESTIMONIALS</p>
            <h2 className="section-title">
              客户评价
              <br />
              真实反馈见证
            </h2>
            <div className="section-description">
              <p>
                来自合作伙伴的真实评价，见证我们的专业服务
                和优质产品在市场中的良好表现。
              </p>
            </div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="avatar">{testimonial.avatar}</div>
                  <div className="testimonial-info">
                    <div className="contact-name">{testimonial.contact}</div>
                    <div className="contact-position">{testimonial.position}</div>
                    <div className="company-name">{testimonial.company}</div>
                  </div>
                  <div className="rating">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                </div>
                <div className="testimonial-content">
                  "{testimonial.content}"
                </div>
              </div>
            ))}
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
            <h2>成为我们的合作伙伴</h2>
            <p>
              无论您是品牌方还是渠道商，我们都期待与您建立
              长期稳定的合作关系，共同开拓市场机遇。
            </p>
            <div className="cta-actions">
              <a href="/collaboration" className="btn-modern">
                开始合作 <ArrowRight size={16} />
              </a>
              <a href="/contact" className="btn-modern">
                联系我们 <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage; 