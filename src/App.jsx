import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import ProductQuickViewModal from './components/ProductQuickViewModal';
import DocketDrawer from './components/DocketDrawer';
import CareGuideModal from './components/CareGuideModal';
import AtelierStoryModal from './components/AtelierStoryModal';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });

  const [docketItems, setDocketItems] = useState(() => {
    try {
      const saved = localStorage.getItem('aenon_docket');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isDocketOpen, setIsDocketOpen] = useState(false);
  const [isCareGuideOpen, setIsCareGuideOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [orderedProduct, setOrderedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync route with window.location.hash for smooth routing & back button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPath(hash);
      } else {
        setCurrentPath('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleAddToDocket = (product) => {
    setDocketItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        showToast(`"${product.title}" is already in your Commission Docket.`);
        return prev;
      }
      const updated = [...prev, product];
      try {
        localStorage.setItem('aenon_docket', JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      showToast(`Added "${product.title}" to Commission Docket.`);
      return updated;
    });
  };

  const handleRemoveFromDocket = (productId) => {
    setDocketItems((prev) => {
      const updated = prev.filter((item) => item.id !== productId);
      try {
        localStorage.setItem('aenon_docket', JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  const handleClearDocket = () => {
    setDocketItems([]);
    try {
      localStorage.removeItem('aenon_docket');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectProduct = (slug) => {
    navigateTo(`product-${slug}`);
  };

  const handleOrderNow = (product) => {
    setOrderedProduct(product);
    navigateTo('contact');
  };

  const handleProceedToInquiry = () => {
    setIsDocketOpen(false);
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-primary text-white border-l-4 border-secondary px-5 py-3 shadow-xl flex items-center gap-3 animate-fade-in font-body-sm text-[13px]">
          <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Luxury Header */}
      <Header
        currentPath={currentPath}
        navigateTo={navigateTo}
        docketCount={docketItems.length}
        openDocket={() => setIsDocketOpen(true)}
      />

      {/* Main Body Viewport */}
      <main className="flex-1 w-full pt-20">
        {currentPath === 'home' && (
          <HomePage
            navigateTo={navigateTo}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
            onAddToDocket={handleAddToDocket}
          />
        )}

        {currentPath === 'shop' && (
          <ShopPage
            navigateTo={navigateTo}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
            onAddToDocket={handleAddToDocket}
          />
        )}

        {currentPath.startsWith('product-') && (
          <ProductDetailPage
            productSlug={currentPath.replace('product-', '')}
            onBackToShop={() => navigateTo('shop')}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
            onAddToDocket={handleAddToDocket}
            onOrderNow={handleOrderNow}
          />
        )}

        {currentPath === 'contact' && (
          <ContactPage
            initialProduct={orderedProduct}
            docketItems={docketItems}
          />
        )}
      </main>

      {/* Luxury Atelier Footer */}
      <Footer
        navigateTo={navigateTo}
        openCareGuide={() => setIsCareGuideOpen(true)}
        openStory={() => setIsStoryOpen(true)}
      />

      {/* Mobile Sticky Bottom Tab Navigation + WhatsApp Concierge FAB */}
      <MobileBottomNav
        currentPath={currentPath}
        navigateTo={navigateTo}
        docketCount={docketItems.length}
        openDocket={() => setIsDocketOpen(true)}
      />

      {/* Flagship Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onViewFullDetails={handleSelectProduct}
        onOrderNow={handleOrderNow}
      />

      {/* Commission Docket Drawer */}
      <DocketDrawer
        isOpen={isDocketOpen}
        onClose={() => setIsDocketOpen(false)}
        docketItems={docketItems}
        onRemoveItem={handleRemoveFromDocket}
        onClearDocket={handleClearDocket}
        onProceedToInquiry={handleProceedToInquiry}
      />

      {/* Care Guide Modal */}
      <CareGuideModal
        isOpen={isCareGuideOpen}
        onClose={() => setIsCareGuideOpen(false)}
      />

      {/* Atelier Story Modal */}
      <AtelierStoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        onStartOrder={() => navigateTo('contact')}
      />

    </div>
  );
}
