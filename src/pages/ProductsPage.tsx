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
import { useTranslation } from 'react-i18next';
import './ProductsPage.css';

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
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
    { id: 'all', name: t('brands.categories.all'), icon: Monitor },
    { id: 'keyboard', name: t('brands.categories.keyboard'), icon: Keyboard },
    { id: 'mouse', name: t('brands.categories.mouse'), icon: Mouse },
    { id: 'headphones', name: t('brands.categories.headphones'), icon: Headphones },
    { id: 'mousepad', name: t('brands.categories.mousepad'), icon: Package },
    { id: 'gamepad', name: t('brands.categories.gamepad'), icon: Gamepad2 },
    { id: 'keycaps', name: t('brands.categories.keycaps'), icon: Settings },
    { id: 'switches', name: t('brands.categories.switches'), icon: Cpu },
    { id: 'accessories', name: t('brands.categories.accessories'), icon: Zap },
    { id: 'chair', name: t('brands.categories.chair'), icon: Armchair },
  ];

  // Create category mapping helper function
  const getCategoryMapping = () => {
    return {
      keyboard: t('brands.categories.keyboard'),
      mouse: t('brands.categories.mouse'),
      headphones: t('brands.categories.headphones'),
      mousepad: t('brands.categories.mousepad'),
      gamepad: t('brands.categories.gamepad'),
      keycaps: t('brands.categories.keycaps'),
      switches: t('brands.categories.switches'),
      accessories: t('brands.categories.accessories'),
      chair: t('brands.categories.chair')
    };
  };

  const brandMatrix = [
    {
      id: 1,
      brand: 'AngryMiao',
      logo: 'https://image.siky.me/mistyislet/logo.0bd130c6.png',
      description: t('brands.brandDescriptions.AngryMiao'),
      categories: [getCategoryMapping().keyboard, getCategoryMapping().keycaps, getCategoryMapping().accessories],
      productCount: '30+',
      website: 'https://angrymiao.com',
      status: 'preferred'
    },
    {
      id: 2,
      brand: 'ATK',
      logo: 'https://image.siky.me/mistyislet/ATK.png',
      description: t('brands.brandDescriptions.ATK'),
      categories: [getCategoryMapping().keyboard, getCategoryMapping().mouse, getCategoryMapping().accessories],
      productCount: '45+',
      website: 'https://www.atk.store/',
      status: 'strategic'
    },
    {
      id: 3,
      brand: 'Hachiware',
      logo: 'https://image.siky.me/mistyislet/Hachiware.jpg',
      description: t('brands.brandDescriptions.Hachiware'),
      categories: [getCategoryMapping().keyboard, getCategoryMapping().keycaps, getCategoryMapping().accessories],
      productCount: '25+',
      website: 'https://hachiware.jp',
      status: 'preferred'
    },
    {
      id: 4,
      brand: 'MadLoon',
      logo: 'https://image.siky.me/mistyislet/MadLoon.png',
      description: t('brands.brandDescriptions.MadLoon'),
      categories: [getCategoryMapping().keyboard, getCategoryMapping().mouse, getCategoryMapping().accessories],
      productCount: '35+',
      website: 'https://www.fgg.com.cn/',
      status: 'preferred'
    },
    {
      id: 5,
      brand: 'MelGeek',
      logo: 'https://image.siky.me/mistyislet/MelGeek.png',
      description: t('brands.brandDescriptions.MelGeek'),
      categories: [getCategoryMapping().keyboard, getCategoryMapping().keycaps, getCategoryMapping().accessories],
      productCount: '40+',
      website: 'https://www.melgeek.com/',
      status: 'strategic'
    },
    {
      id: 6,
      brand: 'PMO',
      logo: 'https://image.siky.me/mistyislet/PMO.jpg',
      description: t('brands.brandDescriptions.PMO'),
      categories: [getCategoryMapping().mouse, getCategoryMapping().keyboard, getCategoryMapping().accessories],
      productCount: '50+',
      website: 'https://www.pmolab.cn/',
      status: 'strategic'
    },
    {
      id: 7,
      brand: 'WOBKEY',
      logo: 'https://image.siky.me/mistyislet/WOBKEY.jpg',
      description: t('brands.brandDescriptions.WOBKEY'),
      categories: [getCategoryMapping().keyboard, getCategoryMapping().switches, getCategoryMapping().keycaps],
      productCount: '60+',
      website: 'https://wobkey.com',
      status: 'strategic'
    },
    {
      id: 8,
      brand: 'Razer',
      logo: 'https://image.siky.me/mistyislet/razer.png',
      description: t('brands.brandDescriptions.Razer'),
      categories: [getCategoryMapping().keyboard, getCategoryMapping().mouse, getCategoryMapping().headphones, getCategoryMapping().mousepad],
      productCount: '120+',
      website: 'https://www.razer.com',
      status: 'strategic'
    },
    {
      id: 9,
      brand: 'ROG',
      logo: 'https://image.siky.me/mistyislet/ROG.png',
      description: t('brands.brandDescriptions.ROG'),
      categories: [getCategoryMapping().keyboard, getCategoryMapping().mouse, getCategoryMapping().headphones],
      productCount: '85+',
      website: 'https://rog.asus.com',
      status: 'preferred'
    },
    {
      id: 10,
      brand: 'Sukisora',
      logo: 'https://image.siky.me/mistyislet/Sukisora.jpg',
      description: t('brands.brandDescriptions.Sukisora'),
      categories: [getCategoryMapping().keyboard, getCategoryMapping().keycaps, getCategoryMapping().accessories],
      productCount: '20+',
      website: 'https://sukisora.com',
      status: 'preferred'
    },
    {
      id: 11,
      brand: 'Zowie',
      logo: 'https://image.siky.me/mistyislet/zowie.jpg',
      description: t('brands.brandDescriptions.Zowie'),
      categories: [getCategoryMapping().mouse, getCategoryMapping().mousepad, getCategoryMapping().accessories],
      productCount: '40+',
      website: 'https://zowie.benq.com',
      status: 'strategic'
    },
    {
      id: 12,
      brand: '戟创agkey',
      logo: 'https://image.siky.me/mistyislet/agkey.jpg',
      description: t('brands.brandDescriptions.戟创agkey'),
      categories: [getCategoryMapping().keyboard, getCategoryMapping().switches, getCategoryMapping().accessories],
      productCount: '35+',
      website: 'https://agkey.cn',
      status: 'preferred'
    },
    {
      id: 13,
      brand: 'ANTICATER',
      logo: 'https://image.siky.me/mistyislet/anticater.png',
      description: t('brands.brandDescriptions.ANTICATER'),
      categories: [getCategoryMapping().keyboard, getCategoryMapping().accessories],
      productCount: '25+',
      website: 'https://anticater.com',
      status: 'preferred'
    },
    {
      id: 14,
      brand: 'Logitech',
      logo: 'https://image.siky.me/mistyislet/Logitech.png',
      description: t('brands.brandDescriptions.Logitech'),
      categories: [getCategoryMapping().keyboard, getCategoryMapping().mouse, getCategoryMapping().headphones],
      productCount: '100+',
      website: 'https://www.logitech.com',
      status: 'strategic'
    },
    {
      id: 15,
      brand: 'MoonDROP',
      logo: 'https://image.siky.me/mistyislet/Moondrop.jpg',
      description: t('brands.brandDescriptions.MoonDROP'),
      categories: [getCategoryMapping().headphones, getCategoryMapping().accessories],
      productCount: '30+',
      website: 'https://moondroplab.com/',
      status: 'preferred'
    },
    {
      id: 17,
      brand: 'DRUNKDEER',
      logo: 'https://image.siky.me/mistyislet/drunkdeer.png',
      description: t('brands.brandDescriptions.DRUNKDEER'),
      categories: [getCategoryMapping().keyboard, getCategoryMapping().switches],
      productCount: '25+',
      website: 'https://drunkdeer.com',
      status: 'preferred'
    },
    {
      id: 18,
      brand: 'GAMESIR',
      logo: 'https://image.siky.me/mistyislet/gamesir.jpg',
      description: t('brands.brandDescriptions.GAMESIR'),
      categories: [getCategoryMapping().gamepad, getCategoryMapping().accessories],
      productCount: '40+',
      website: 'https://www.gamesir.com',
      status: 'strategic'
    },
    {
      id: 19,
      brand: 'Mojhon',
      logo: 'https://image.siky.me/mistyislet/Mojhon.jpg',
      description: t('brands.brandDescriptions.Mojhon'),
      categories: [getCategoryMapping().mouse, getCategoryMapping().keyboard, getCategoryMapping().accessories],
      productCount: '35+',
      website: 'https://www.bigbigwon.cn/',
      status: 'preferred'
    },
    {
      id: 20,
      brand: 'MCHOSE',
      logo: 'https://image.siky.me/mistyislet/mchose.jpg',
      description: t('brands.brandDescriptions.MCHOSE'),
      categories: [getCategoryMapping().mouse, getCategoryMapping().mousepad, getCategoryMapping().accessories],
      productCount: '50+',
      website: 'https://www.maicong.cn/',
      status: 'strategic'
    },
    {
      id: 21,
      brand: '8BitDo',
      logo: 'https://image.siky.me/mistyislet/8BitDo.png',
      description: t('brands.brandDescriptions.8BitDo'),
      categories: [getCategoryMapping().gamepad, getCategoryMapping().accessories],
      productCount: '30+',
      website: 'https://www.8bitdo.com/',
      status: 'preferred'
    },
    {
      id: 22,
      brand: 'Flydigi',
      logo: 'https://image.siky.me/mistyislet/flydigi.png',
      description: t('brands.brandDescriptions.Flydigi'),
      categories: [getCategoryMapping().gamepad, getCategoryMapping().accessories],
      productCount: '45+',
      website: 'https://www.flydigi.com/',
      status: 'strategic'
    },
    {
      id: 23,
      brand: 'VGN',
      logo: 'https://image.siky.me/mistyislet/VGN.png',
      description: t('brands.brandDescriptions.VGN'),
      categories: [getCategoryMapping().mouse, getCategoryMapping().keyboard, getCategoryMapping().headphones],
      productCount: '60+',
      website: 'https://vgnlab.com/',
      status: 'strategic'
    },
    {
      id: 24,
      brand: 'ARTISAN',
      logo: 'https://image.siky.me/mistyislet/artisan.png',
      description: t('brands.brandDescriptions.ARTISAN'),
      categories: [getCategoryMapping().mousepad, getCategoryMapping().accessories],
      productCount: '20+',
      website: 'https://artisan-jp.com',
      status: 'strategic'
    },
    {
      id: 25,
      brand: 'betop',
      logo: 'https://image.siky.me/mistyislet/betop.png',
      description: t('brands.brandDescriptions.betop'),
      categories: [getCategoryMapping().gamepad, getCategoryMapping().accessories],
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
      const categoryMapping = getCategoryMapping();
      const categoryName = categoryMapping[activeCategory as keyof typeof categoryMapping];
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
            <div className="header-badge">{t('brands.badge')}</div>
            <h1 className="page-title">{t('brands.title')}</h1>
            <p className="page-description">
              {t('brands.description')}
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
                <span>{t('brands.filters.mobileFilter')}</span>
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
                <h3 className="filter-title">{t('brands.filters.search')}</h3>
                <div className="search-input-wrapper">
                  <Search size={18} />
                  <input
                    type="text"
                    placeholder={t('brands.filters.searchPlaceholder')}
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
                <h3 className="filter-title">{t('brands.filters.categories')}</h3>
                <div className="category-list">
                  {categories.map((category) => {
                    let count = brandMatrix.length;
                    if (category.id !== 'all') {
                      const categoryMapping = getCategoryMapping();
                      const categoryName = categoryMapping[category.id as keyof typeof categoryMapping];
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
                <h3 className="filter-title">{t('brands.filters.brandFilter')}</h3>
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
                  {t('brands.filters.clearFilters')}
                </button>
              </div>

            </aside>

            {/* Right Content - Products */}
            <main className="products-content">
              
              {/* Results Header */}
              <div className="results-header">
                <div className="results-info">
                  <span className="results-count">
                    {t('brands.results.found')} <strong>{filteredBrands.length}</strong> {t('brands.results.partners')}
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
                    <h3>{t('brands.noResults.title')}</h3>
                    <p>{t('brands.noResults.description')}</p>
                    <button className="clear-filters-btn" onClick={clearFilters}>
                      {t('brands.filters.clearAllFilters')}
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
            <h2>{t('brands.cta.title')}</h2>
            <p>{t('brands.cta.description')}</p>
            <div className="cta-actions">
              <a href="mailto:contact@mistyislet.com" className="btn btn-primary">
                {t('brands.cta.contact')}
              </a>
              <a href="/contact" className="btn btn-secondary">
                {t('brands.cta.learnMore')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage; 