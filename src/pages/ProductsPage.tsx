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
  Star,
  ArrowRight,
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
  const [priceRange, setPriceRange] = useState<string>('all');
  const [minRating, setMinRating] = useState<number>(0);
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
    { id: 'all', name: '全部产品', icon: Monitor },
    { id: 'keyboard', name: '键盘', icon: Keyboard },
    { id: 'mouse', name: '鼠标', icon: Mouse },
    { id: 'mousepad', name: '鼠标垫', icon: Package },
    { id: 'gamepad', name: '游戏手柄', icon: Gamepad2 },
    { id: 'headphones', name: '游戏耳机', icon: Headphones },
    { id: 'keycaps', name: '键帽', icon: Settings },
    { id: 'switches', name: '轴体', icon: Cpu },
    { id: 'accessories', name: '配件', icon: Zap },
  ];

  const brands = [
    'Razer', 'Logitech G', 'Corsair', 'SteelSeries', 'HyperX', 
    'ASUS ROG', 'Cherry MX', 'GMK', 'DXRacer', 'Xbox', 'Anker', 'Cooler Master'
  ];

  const priceRanges = [
    { id: 'all', name: '全部价格', min: 0, max: 9999 },
    { id: 'budget', name: '¥0-299', min: 0, max: 299 },
    { id: 'mid', name: '¥300-699', min: 300, max: 699 },
    { id: 'premium', name: '¥700-1299', min: 700, max: 1299 },
    { id: 'high', name: '¥1300+', min: 1300, max: 9999 },
  ];

  const products = [
    // 键盘类
    {
      id: 1,
      name: 'RGB机械键盘 Pro',
      category: 'keyboard',
      brand: 'Razer',
      price: 1099,
      priceRange: '¥899-1299',
      rating: 4.8,
      features: ['RGB背光', '机械轴体', '无线连接', '可编程'],
      description: '专业级机械键盘，适合游戏和办公使用',
      image: '⌨️',
      popular: true
    },
    {
      id: 2,
      name: '60%紧凑型键盘',
      category: 'keyboard',
      brand: 'Corsair',
      price: 849,
      priceRange: '¥699-999',
      rating: 4.7,
      features: ['紧凑设计', '热插拔', '铝合金外壳', 'USB-C'],
      description: '节省空间的紧凑型机械键盘',
      image: '⌨️',
      popular: false
    },
    // 鼠标类
    {
      id: 3,
      name: '无线游戏鼠标',
      category: 'mouse',
      brand: 'Logitech G',
      price: 549,
      priceRange: '¥399-699',
      rating: 4.9,
      features: ['高精度传感器', '无线连接', '可调DPI', 'RGB灯效'],
      description: '专为电竞玩家设计的高性能游戏鼠标',
      image: '🖱️',
      popular: true
    },
    {
      id: 4,
      name: '轻量化电竞鼠标',
      category: 'mouse',
      brand: 'SteelSeries',
      price: 399,
      priceRange: '¥299-499',
      rating: 4.6,
      features: ['超轻设计', '20000DPI', '蜂窝外壳', '快速充电'],
      description: '超轻量化设计，提供极致手感',
      image: '🖱️',
      popular: false
    },
    // 鼠标垫类
    {
      id: 5,
      name: '超大游戏鼠标垫',
      category: 'mousepad',
      brand: 'HyperX',
      price: 149,
      priceRange: '¥99-199',
      rating: 4.5,
      features: ['防水面料', '防滑底座', '多尺寸', '易清洁'],
      description: '高品质游戏鼠标垫，提供顺滑的使用体验',
      image: '🖥️',
      popular: false
    },
    {
      id: 6,
      name: 'RGB发光鼠标垫',
      category: 'mousepad',
      brand: 'ASUS ROG',
      price: 249,
      priceRange: '¥199-299',
      rating: 4.4,
      features: ['RGB灯效', '硬质表面', 'USB供电', '同步软件'],
      description: 'RGB发光鼠标垫，炫酷灯效提升桌面氛围',
      image: '✨',
      popular: true
    },
    // 游戏手柄类
    {
      id: 7,
      name: '专业游戏手柄',
      category: 'gamepad',
      brand: 'Xbox',
      price: 399,
      priceRange: '¥299-499',
      rating: 4.7,
      features: ['无线连接', '震动反馈', '可编程按键', '长续航'],
      description: '适配多平台的专业游戏手柄',
      image: '🎮',
      popular: false
    },
    // 游戏耳机类
    {
      id: 8,
      name: '降噪电竞耳机',
      category: 'headphones',
      brand: 'SteelSeries',
      price: 799,
      priceRange: '¥599-999',
      rating: 4.6,
      features: ['主动降噪', '7.1环绕声', '可拆卸麦克风', 'RGB灯效'],
      description: '专业电竞耳机，提供沉浸式音频体验',
      image: '🎧',
      popular: true
    },
    {
      id: 9,
      name: '无线头戴式耳机',
      category: 'headphones',
      brand: 'HyperX',
      price: 549,
      priceRange: '¥399-699',
      rating: 4.5,
      features: ['无线2.4G', '50mm驱动器', '记忆海绵', '旋转式麦克风'],
      description: '舒适无线耳机，适合长时间游戏',
      image: '🎧',
      popular: false
    },
    // 键帽类
    {
      id: 10,
      name: 'PBT键帽套装',
      category: 'keycaps',
      brand: 'GMK',
      price: 449,
      priceRange: '¥299-599',
      rating: 4.8,
      features: ['PBT材质', '热升华工艺', '多色搭配', '兼容MX轴'],
      description: '高品质PBT键帽，手感细腻耐用',
      image: '🔤',
      popular: true
    },
    // 轴体类
    {
      id: 11,
      name: '机械键盘轴体套装',
      category: 'switches',
      brand: 'Cherry MX',
      price: 299,
      priceRange: '¥199-399',
      rating: 4.8,
      features: ['多种轴体', '热插拔', '工厂润滑', '静音设计'],
      description: '专业机械键盘轴体，满足不同手感需求',
      image: '⚙️',
      popular: false
    },
    // 配件类
    {
      id: 12,
      name: 'RGB灯带套装',
      category: 'accessories',
      brand: 'Cooler Master',
      price: 149,
      priceRange: '¥99-199',
      rating: 4.3,
      features: ['可裁剪', '多色灯效', '磁吸安装', '遥控器'],
      description: '提升桌面氛围的RGB灯带套装',
      image: '💡',
      popular: false
    },
    // 电竞桌椅类
    {
      id: 13,
      name: '电竞游戏椅',
      category: 'furniture',
      brand: 'DXRacer',
      price: 1899,
      priceRange: '¥1299-2499',
      rating: 4.7,
      features: ['人体工学', '高度调节', '腰部支撑', 'PU皮革'],
      description: '专业电竞椅，提供舒适的游戏体验',
      image: '🪑',
      popular: true
    },
    {
      id: 14,
      name: '升降电竞桌',
      category: 'furniture',
      brand: 'DXRacer',
      price: 1299,
      priceRange: '¥899-1699',
      rating: 4.5,
      features: ['电动升降', '记忆位置', '线缆管理', '碳纤维桌面'],
      description: '可升降电竞桌，打造完美游戏空间',
      image: '🏢',
      popular: false
    },
    // 其他电子产品类
    {
      id: 15,
      name: '游戏显示器',
      category: 'electronics',
      brand: 'ASUS ROG',
      price: 2999,
      priceRange: '¥1999-3999',
      rating: 4.8,
      features: ['144Hz刷新率', '1ms响应', 'HDR支持', 'G-Sync'],
      description: '高刷新率游戏显示器，画面流畅无拖影',
      image: '🖥️',
      popular: true
    },
    {
      id: 16,
      name: 'USB集线器',
      category: 'electronics',
      brand: 'Anker',
      price: 199,
      priceRange: '¥99-299',
      rating: 4.4,
      features: ['USB 3.0', '多端口', '快速充电', '紧凑设计'],
      description: '多功能USB集线器，扩展桌面连接',
      image: '🔌',
      popular: false
    },
  ];

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setActiveCategory('all');
    setSelectedBrands([]);
    setPriceRange('all');
    setMinRating(0);
    setSearchTerm('');
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice = priceRange === 'all' || (() => {
      const range = priceRanges.find(r => r.id === priceRange);
      return range ? product.price >= range.min && product.price <= range.max : true;
    })();
    const matchesRating = product.rating >= minRating;
    
    return matchesCategory && matchesSearch && matchesBrand && matchesPrice && matchesRating;
  });

  return (
    <div className="products-page">
      {/* Header */}
      <section className="products-header">
        <div className="container">
          <div className="header-content animate-fadeInUp">
            <h1 className="page-title">产品展示</h1>
            <p className="page-description">
              精选全球顶级外设品牌，为您提供专业的产品解决方案
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

              {/* Categories */}
              <div className="filter-section">
                <h3 className="filter-title">产品分类</h3>
                <div className="category-list">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        <Icon size={16} />
                        <span>{category.name}</span>
                        <span className="category-count">
                          {category.id === 'all' ? products.length : products.filter(p => p.category === category.id).length}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brands */}
              <div className="filter-section">
                <h3 className="filter-title">品牌</h3>
                <div className="brand-list">
                  {brands.map((brand) => (
                    <label key={brand} className="brand-item">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                      />
                      <span className="checkmark"></span>
                      <span className="brand-name">{brand}</span>
                      <span className="brand-count">
                        {products.filter(p => p.brand === brand).length}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="filter-section">
                <h3 className="filter-title">价格区间</h3>
                <div className="price-list">
                  {priceRanges.map((range) => (
                    <label key={range.id} className="price-item">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={priceRange === range.id}
                        onChange={() => setPriceRange(range.id)}
                      />
                      <span className="radio-mark"></span>
                      <span className="price-name">{range.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="filter-section">
                <h3 className="filter-title">评分</h3>
                <div className="rating-list">
                  {[4.5, 4.0, 3.5, 3.0, 0].map((rating) => (
                    <button
                      key={rating}
                      className={`rating-item ${minRating === rating ? 'active' : ''}`}
                      onClick={() => setMinRating(rating)}
                    >
                      <div className="rating-stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={14}
                            className={star <= rating ? 'filled' : 'empty'}
                            fill={star <= rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <span>{rating === 0 ? '所有评分' : `${rating}+ 星`}</span>
                    </button>
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
                    共找到 <strong>{filteredProducts.length}</strong> 个产品
                  </span>
                  {(activeCategory !== 'all' || selectedBrands.length > 0 || priceRange !== 'all' || minRating > 0 || searchTerm) && (
                    <div className="active-filters">
                      {activeCategory !== 'all' && (
                        <span className="filter-tag">
                          {categories.find(c => c.id === activeCategory)?.name}
                          <button onClick={() => setActiveCategory('all')}>
                            <X size={12} />
                          </button>
                        </span>
                      )}
                      {selectedBrands.map(brand => (
                        <span key={brand} className="filter-tag">
                          {brand}
                          <button onClick={() => toggleBrand(brand)}>
                            <X size={12} />
                          </button>
                        </span>
                      ))}
                      {priceRange !== 'all' && (
                        <span className="filter-tag">
                          {priceRanges.find(r => r.id === priceRange)?.name}
                          <button onClick={() => setPriceRange('all')}>
                            <X size={12} />
                          </button>
                        </span>
                      )}
                      {minRating > 0 && (
                        <span className="filter-tag">
                          {minRating}+ 星
                          <button onClick={() => setMinRating(0)}>
                            <X size={12} />
                          </button>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Products Grid */}
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card animate-fadeInUp">
                    {product.popular && <div className="popular-badge">热门</div>}
                    <div className="product-image">
                      <span className="product-emoji">{product.image}</span>
                    </div>
                    <div className="product-info">
                      <div className="product-meta">
                        <span className="product-brand">{product.brand}</span>
                        <div className="product-rating">
                          <Star size={14} fill="currentColor" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      <div className="product-features">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="feature-tag">{feature}</span>
                        ))}
                      </div>
                      <div className="product-footer">
                        <span className="product-price">{product.priceRange}</span>
                        <button className="inquiry-btn">
                          询价
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="no-results">
                  <div className="no-results-content">
                    <Filter size={48} />
                    <h3>未找到相关产品</h3>
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
          <div className="cta-content animate-fadeInUp">
            <h2>需要定制化解决方案？</h2>
            <p>我们提供个性化的产品采购和供应链服务</p>
            <div className="cta-actions">
              <a href="mailto:contact@mistyislet.com" className="btn btn-primary">
                联系我们
              </a>
              <a href="/collaboration" className="btn btn-secondary">
                了解合作
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage; 