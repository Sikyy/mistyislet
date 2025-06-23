import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Keyboard, 
  Mouse, 
  Gamepad2, 
  Headphones, 
  Monitor, 
  Cpu,
  Search,
  Filter,
  Package,
  Zap,
  Settings,
  Armchair,
  ChevronDown,
  X,
  SlidersHorizontal
} from 'lucide-react';
import './ProductsPage.css';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Handle URL parameters for category filtering
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
    // Scroll to top when page loads or category changes
    window.scrollTo(0, 0);
  }, [searchParams]);

  const categories = [
    { id: 'all', name: '全部类别', icon: Monitor },
    { id: 'keyboard', name: '键盘', icon: Keyboard },
    { id: 'mouse', name: '鼠标', icon: Mouse },
    { id: 'headphones', name: '耳机', icon: Headphones },
    { id: 'mousepad', name: '鼠标垫', icon: Package },
    { id: 'gamepad', name: '手柄', icon: Gamepad2 },
    { id: 'keycaps', name: '键帽', icon: Settings },
    { id: 'switches', name: '轴体', icon: Cpu },
    { id: 'accessories', name: '配件', icon: Zap },
    { id: 'chair', name: '电竞桌椅', icon: Armchair },
  ];



  const brandMatrix = [
    {
      id: 1,
      brand: 'AngryMiao',
      logo: 'https://image.siky.me/mistyislet/logo.0bd130c6.png',
      description: '原创设计，极致工艺',
      categories: ['键盘', '键帽', '配件'],
      productCount: '30+',
      website: 'https://angrymiao.com',
      status: 'preferred'
    },
    {
      id: 2,
      brand: 'ATK',
      logo: 'https://image.siky.me/mistyislet/ATK.png',
      description: '专业外设，游戏首选',
      categories: ['键盘', '鼠标', '配件'],
      productCount: '45+',
      website: 'https://www.atk.store/',
      status: 'strategic'
    },
    {
      id: 3,
      brand: 'Hachiware',
      logo: 'https://image.siky.me/mistyislet/Hachiware.jpg',
      description: '日式精工，萌系设计',
      categories: ['键盘', '键帽', '配件'],
      productCount: '25+',
      website: 'https://hachiware.jp',
      status: 'preferred'
    },
    {
      id: 4,
      brand: 'MadLoon',
      logo: 'https://image.siky.me/mistyislet/MadLoon.png',
      description: '疯狂创意，独特体验',
      categories: ['键盘', '鼠标', '配件'],
      productCount: '35+',
      website: 'https://www.fgg.com.cn/',
      status: 'preferred'
    },
    {
      id: 5,
      brand: 'MelGeek',
      logo: 'https://image.siky.me/mistyislet/MelGeek.png',
      description: '甜蜜设计，温馨体验',
      categories: ['键盘', '键帽', '配件'],
      productCount: '40+',
      website: 'https://www.melgeek.com/',
      status: 'strategic'
    },
    {
      id: 6,
      brand: 'PMO',
      logo: 'https://image.siky.me/mistyislet/PMO.jpg',
      description: '性能怪兽，电竞利器',
      categories: ['鼠标', '键盘', '配件'],
      productCount: '50+',
      website: 'https://www.pmolab.cn/',
      status: 'strategic'
    },
    {
      id: 7,
      brand: 'WOBKEY',
      logo: 'https://image.siky.me/mistyislet/WOBKEY.jpg',
      description: '键盘专家，打字利器',
      categories: ['键盘', '轴体', '键帽'],
      productCount: '60+',
      website: 'https://wobkey.com',
      status: 'strategic'
    },
    {
      id: 8,
      brand: 'Razer',
      logo: 'https://image.siky.me/mistyislet/razer.png',
      description: '全球领先的游戏外设品牌',
      categories: ['键盘', '鼠标', '耳机', '鼠标垫'],
      productCount: '120+',
      website: 'https://www.razer.com',
      status: 'strategic'
    },
    {
      id: 9,
      brand: 'ROG',
      logo: 'https://image.siky.me/mistyislet/ROG.png',
      description: '华硕玩家国度，创新先锋',
      categories: ['键盘', '鼠标', '耳机'],
      productCount: '85+',
      website: 'https://rog.asus.com',
      status: 'preferred'
    },
    {
      id: 10,
      brand: 'Sukisora',
      logo: 'https://image.siky.me/mistyislet/Sukisora.jpg',
      description: '樱花设计，唯美体验',
      categories: ['键盘', '键帽', '配件'],
      productCount: '20+',
      website: 'https://sukisora.com',
      status: 'preferred'
    },
    {
      id: 11,
      brand: 'Zowie',
      logo: 'https://image.siky.me/mistyislet/zowie.jpg',
      description: '电竞专用，职业选择',
      categories: ['鼠标', '鼠标垫', '配件'],
      productCount: '40+',
      website: 'https://zowie.benq.com',
      status: 'strategic'
    },
    {
      id: 12,
      brand: '戟创agkey',
      logo: 'https://image.siky.me/mistyislet/agkey.jpg',
      description: '国产精品，匠心制造',
      categories: ['键盘', '轴体', '配件'],
      productCount: '35+',
      website: 'https://agkey.cn',
      status: 'preferred'
    },
    {
      id: 13,
      brand: 'ANTICATER',
      logo: 'https://image.siky.me/mistyislet/anticater.png',
      description: '反传统设计，独特美学',
      categories: ['键盘', '配件'],
      productCount: '25+',
      website: 'https://anticater.com',
      status: 'preferred'
    },
    {
      id: 14,
      brand: 'Logitech',
      logo: 'https://image.siky.me/mistyislet/Logitech.png',
      description: '瑞士精工，全球信赖',
      categories: ['键盘', '鼠标', '耳机'],
      productCount: '100+',
      website: 'https://www.logitech.com',
      status: 'strategic'
    },
    {
      id: 15,
      brand: 'MoonDROP',
      logo: 'https://image.siky.me/mistyislet/Moondrop.jpg',
      description: '月之神韵，听觉盛宴',
      categories: ['耳机', '配件'],
      productCount: '30+',
      website: 'https://moondroplab.com/',
      status: 'preferred'
    },
    // {
    //   id: 16,
    //   brand: 'FUtureMatch',
    //   logo: 'https://via.placeholder.com/200x100/1abc9c/ffffff?text=FM',
    //   description: '未来科技，开放设计',
    //   categories: ['配件', '电竞桌椅'],
    //   productCount: '15+',
    //   website: 'https://futurematch.cn',
    //   status: 'preferred'
    // },
    {
      id: 17,
      brand: 'DRUNKDEER',
      logo: 'https://image.siky.me/mistyislet/drunkdeer.png',
      description: '醉鹿科技，创新体验',
      categories: ['键盘', '轴体'],
      productCount: '25+',
      website: 'https://drunkdeer.com',
      status: 'preferred'
    },
    {
      id: 18,
      brand: 'GAMESIR',
      logo: 'https://image.siky.me/mistyislet/gamesir.jpg',
      description: '游戏手柄专家',
      categories: ['手柄', '配件'],
      productCount: '40+',
      website: 'https://www.gamesir.com',
      status: 'strategic'
    },
    {
      id: 19,
      brand: 'Mojhon',
      logo: 'https://image.siky.me/mistyislet/Mojhon.jpg',
      description: '魔法设计，神奇体验',
      categories: ['鼠标', '键盘', '配件'],
      productCount: '35+',
      website: 'https://www.bigbigwon.cn/',
      status: 'preferred'
    },
    {
      id: 20,
      brand: 'MCHOSE',
      logo: 'https://image.siky.me/mistyislet/mchose.jpg',
      description: '鼠标专家，精准操控',
      categories: ['鼠标', '鼠标垫', '配件'],
      productCount: '50+',
      website: 'https://www.maicong.cn/',
      status: 'strategic'
    },
    {
      id: 21,
      brand: '8BitDo',
      logo: 'https://image.siky.me/mistyislet/8BitDo.png',
      description: '复古手柄，经典重现',
      categories: ['手柄', '配件'],
      productCount: '30+',
      website: 'https://www.8bitdo.com/',
      status: 'preferred'
    },
    {
      id: 22,
      brand: 'Flydigi',
      logo: 'https://image.siky.me/mistyislet/flydigi.png',
      description: '飞智科技，手游利器',
      categories: ['手柄', '配件'],
      productCount: '45+',
      website: 'https://www.flydigi.com/',
      status: 'strategic'
    },
    {
      id: 23,
      brand: 'VGN',
      logo: 'https://image.siky.me/mistyislet/VGN.png',
      description: '电竞装备，性能至上',
      categories: ['鼠标', '键盘', '耳机'],
      productCount: '60+',
      website: 'https://vgnlab.com/',
      status: 'strategic'
    },
    {
      id: 24,
      brand: 'ARTISAN',
      logo: 'https://image.siky.me/mistyislet/artisan.png',
      description: '手工艺人，极致鼠标垫',
      categories: ['鼠标垫', '配件'],
      productCount: '20+',
      website: 'https://artisan-jp.com',
      status: 'strategic'
    },
    {
      id: 25,
      brand: 'betop',
      logo: 'https://image.siky.me/mistyislet/betop.png',
      description: '北通科技，手柄专家',
      categories: ['手柄', '配件'],
      productCount: '40+',
      website: 'https://betop.com.cn',
      status: 'strategic'
    }
  ];

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setActiveCategory('all');
    setSearchTerm('');
  };

  const filteredBrands = brandMatrix.filter(brand => {
    const matchesSearch = brand.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brand.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(brand.brand);
    const matchesCategory = activeCategory === 'all' || (() => {
      const categoryMap = {
        'keyboard': '键盘',
        'mouse': '鼠标',
        'headphones': '耳机',
        'mousepad': '鼠标垫',
        'gamepad': '手柄',
        'keycaps': '键帽',
        'switches': '轴体',
        'accessories': '配件',
        'chair': '电竞桌椅'
      };
      const categoryName = categoryMap[activeCategory as keyof typeof categoryMap];
      return categoryName ? brand.categories.includes(categoryName) : true;
    })();
    
    return matchesSearch && matchesBrand && matchesCategory;
  });

  return (
    <div className="products-page">
      {/* Header */}
      <section className="products-header">
        <div className="container">
          <div className="header-content">
            <div className="header-badge">品牌矩阵</div>
            <h1 className="page-title">全球顶级品牌供应</h1>
            <p className="page-description">
              深度合作12+国际品牌，覆盖全品类外设产品，提供一站式B2B供应链解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="products-main">
        <div className="container">
          <div className="products-layout">
            
            {/* Mobile Filter Toggle */}
            <div className="mobile-filter-toggle">
              <button 
                className="filter-toggle-btn"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
              >
                <SlidersHorizontal size={20} />
                <span>筛选器</span>
                <ChevronDown 
                  size={16} 
                  className={showMobileFilters ? 'rotate-180' : ''} 
                />
              </button>
            </div>

            {/* Left Sidebar - Filters */}
            <aside className={`filters-sidebar ${showMobileFilters ? 'show-mobile' : ''}`}>
              
              {/* Search */}
              <div className="filter-section">
                <h3 className="filter-title">搜索</h3>
                <div className="search-input-wrapper">
                  <Search size={18} />
                  <input
                    type="text"
                    placeholder="搜索产品或品牌..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="clear-search"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* Product Categories */}
              <div className="filter-section">
                <h3 className="filter-title">外设类别</h3>
                <div className="category-list">
                  {categories.map((category) => {
                    let count = brandMatrix.length;
                    if (category.id !== 'all') {
                      const categoryMap = {
                        'keyboard': '键盘',
                        'mouse': '鼠标', 
                        'headphones': '耳机',
                        'mousepad': '鼠标垫',
                        'gamepad': '手柄',
                        'keycaps': '键帽',
                        'switches': '轴体',
                        'accessories': '配件',
                        'chair': '电竞桌椅'
                      };
                      const categoryName = categoryMap[category.id as keyof typeof categoryMap];
                      count = brandMatrix.filter(b => b.categories.includes(categoryName)).length;
                    }
                    const displayCategory = { ...category, count };
                    
                    return displayCategory;
                  }).map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        <Icon size={16} />
                        <span>{category.name}</span>
                        <span className="category-count">{category.count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brands */}
              <div className="filter-section">
                <h3 className="filter-title">品牌筛选</h3>
                <div className="brand-list">
                  {brandMatrix.map((brand) => (
                    <label key={brand.brand} className="brand-item">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand.brand)}
                        onChange={() => toggleBrand(brand.brand)}
                      />
                      <span className="checkmark"></span>
                      <span className="brand-name">{brand.brand}</span>
                      <span className="brand-count">{brand.productCount}</span>
                    </label>
                  ))}
                </div>
              </div>



              {/* Clear Filters */}
              <div className="filter-actions">
                <button className="clear-filters-btn" onClick={clearFilters}>
                  清除筛选
                </button>
              </div>

            </aside>

            {/* Right Content - Products */}
            <main className="products-content">
              
              {/* Results Header */}
              <div className="results-header">
                <div className="results-info">
                  <span className="results-count">
                    共找到 <strong>{filteredBrands.length}</strong> 个合作品牌
                  </span>
                  {(selectedBrands.length > 0 || activeCategory !== 'all' || searchTerm) && (
                    <div className="active-filters">
                      {selectedBrands.map(brand => (
                        <span key={brand} className="filter-tag">
                          {brand}
                          <button onClick={() => toggleBrand(brand)}>
                            <X size={12} />
                          </button>
                        </span>
                      ))}
                      {activeCategory !== 'all' && (
                        <span className="filter-tag">
                          {categories.find(c => c.id === activeCategory)?.name || activeCategory}
                          <button onClick={() => setActiveCategory('all')}>
                            <X size={12} />
                          </button>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Brand Matrix Grid */}
              <div className="partners-grid">
                {filteredBrands.map((brand) => (
                  <a 
                    key={brand.id} 
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-card"
                  >
                    {/* Brand Logo */}
                    <div className="partner-logo">
                      <img 
                        src={brand.logo} 
                        alt={`${brand.brand} logo`}
                        onError={(e) => {
                          console.log(`Logo failed to load for ${brand.brand}: ${brand.logo}`);
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          
                          // 检查是否已经有fallback元素
                          const existingFallback = target.parentElement!.querySelector('.partner-logo-fallback');
                          if (!existingFallback) {
                            const fallback = document.createElement('div');
                            fallback.className = 'partner-logo-fallback';
                            fallback.textContent = brand.brand.length > 6 ? brand.brand.substring(0, 6) : brand.brand;
                            target.parentElement!.appendChild(fallback);
                          }
                        }}
                        onLoad={(e) => {
                          console.log(`Logo loaded successfully for ${brand.brand}: ${brand.logo}`);
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'block';
                          
                          // 移除可能存在的fallback
                          const fallback = target.parentElement!.querySelector('.partner-logo-fallback');
                          if (fallback) {
                            fallback.remove();
                          }
                        }}
                      />
                    </div>
                    
                    {/* Brand Info */}
                    <div className="partner-info">
                      <h3 className="partner-name">{brand.brand}</h3>
                      <p className="partner-description">{brand.description}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              {filteredBrands.length === 0 && (
                <div className="no-results">
                  <div className="no-results-content">
                    <Filter size={48} />
                    <h3>未找到相关品牌</h3>
                    <p>请尝试调整搜索条件或筛选器</p>
                    <button className="clear-filters-btn" onClick={clearFilters}>
                      清除所有筛选
                    </button>
                  </div>
                </div>
              )}

            </main>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container">
          <div className="cta-content">
            <h2>开启品牌合作之旅</h2>
            <p>与全球顶级品牌深度合作，为您提供专业的B2B供应链解决方案</p>
            <div className="cta-actions">
              <a href="mailto:contact@mistyislet.com" className="btn btn-primary">
                咨询合作
              </a>
                              <a href="/contact" className="btn btn-secondary">
                了解详情
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage; 