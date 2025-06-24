import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import PartnersPage from './pages/PartnersPage';
import BrandStoryPage from './pages/BrandStoryPage';
import CollaborationPage from './pages/CollaborationPage';
import Footer from './components/Footer';

// Theme Context
export const ThemeContext = createContext<{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

// Component to handle hash scrolling and page top scrolling
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Handle hash scrolling with offset
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 250; // 向上偏移250px
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      // Scroll to top when no hash is present
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [location]);

  return null;
};

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const { i18n } = useTranslation();

  // 监听语言变化并更新HTML lang属性
  useEffect(() => {
    const updateHtmlLang = () => {
      document.documentElement.setAttribute('lang', i18n.language);
    };

    // 初始设置
    updateHtmlLang();

    // 监听语言变化
    i18n.on('languageChanged', updateHtmlLang);

    // 清理监听器
    return () => {
      i18n.off('languageChanged', updateHtmlLang);
    };
  }, [i18n]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className="App">
          <ScrollToHash />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/brands" element={<ProductsPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/about" element={<BrandStoryPage />} />
              <Route path="/contact" element={<CollaborationPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
