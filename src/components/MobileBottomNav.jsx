import React from 'react';
import '../index.css';

export default function MobileBottomNav({ currentPath, navigateTo, docketCount, openDocket }) {
  const tabs = [
    { id: 'home', label: 'Gallery', icon: 'auto_awesome' },
    { id: 'shop', label: 'Botanical', icon: 'spa' },
    { id: 'contact', label: 'Atelier', icon: 'history_edu' }
  ];

  return (
    <>
      {/* Floating WhatsApp Concierge Floating Action Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20Aenon%20Resin%20Arts,%20I%20would%20like%20to%20discuss%20a%20custom%20resin%20piece."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Concierge"
        className="md:hidden fixed bottom-20 right-4 z-50 w-12 h-12 rounded-full bg-secondary text-white shadow-[0_8px_20px_rgba(124,88,10,0.35)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all text-decoration-none"
      >
        <span className="material-symbols-outlined text-[24px]">chat</span>
      </a>

      {/* Mobile Bottom Tab Bar */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 pb-safe bg-surface/95 backdrop-blur-xl border-t border-outline-variant/30 shadow-[0_-2px_12px_rgba(0,0,0,0.03)]"
        aria-label="Mobile Bottom Navigation"
      >
        <div className="flex justify-around items-center h-16 px-4">
          {tabs.map((tab) => {
            const isActive = currentPath === tab.id || (tab.id === 'shop' && currentPath.startsWith('product-'));
            return (
              <button
                key={tab.id}
                onClick={() => navigateTo(tab.id)}
                className={`flex flex-col items-center justify-center min-w-[54px] min-h-[44px] transition-colors bg-transparent border-0 cursor-pointer ${
                  isActive ? 'text-secondary' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                <span className="font-label-caps text-[10px] mt-1 uppercase tracking-wider">
                  {tab.label}
                </span>
              </button>
            );
          })}

          {/* Docket Tab Button */}
          <button
            onClick={openDocket}
            className="flex flex-col items-center justify-center min-w-[54px] min-h-[44px] transition-colors bg-transparent border-0 cursor-pointer text-on-surface-variant hover:text-secondary relative"
            aria-label="View Commission Docket"
          >
            <span className="material-symbols-outlined text-[20px]">inventory_2</span>
            {docketCount > 0 && (
              <span className="absolute top-1 right-2.5 bg-secondary text-white font-label-caps text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {docketCount}
              </span>
            )}
            <span className="font-label-caps text-[10px] mt-1 uppercase tracking-wider">
              Docket
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
