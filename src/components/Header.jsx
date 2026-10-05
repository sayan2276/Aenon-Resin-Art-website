import React, { useState } from 'react';
import '../index.css';

export default function Header({ currentPath, navigateTo, docketCount, openDocket }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'contact', label: 'Contact & Custom Order' }
  ];

  const handleNav = (id) => {
    navigateTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header-glass fixed top-0 left-0 right-0 z-50">
        <div className="max-w-atelier mx-auto px-atelier h-20 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 bg-transparent border-0 cursor-pointer p-0 text-left group"
            aria-label="Aenon Resin Arts Home"
          >
            <img
              src="/logo.svg"
              alt="Aenon Resin Arts Official Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-12" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.id || (link.id === 'shop' && currentPath.startsWith('product-'));
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`font-label-caps uppercase py-2 bg-transparent border-0 cursor-pointer transition-colors duration-200 tracking-[0.24em] relative ${
                    isActive
                      ? 'text-on-surface font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.id === 'contact' ? 'Contact' : link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Suite (Docket Trigger & Custom Order) */}
          <div className="flex items-center gap-4">
            {/* Docket / Inquiry Bag Trigger */}
            <button
              onClick={openDocket}
              className="relative p-2.5 bg-transparent border border-outline-variant/40 hover:border-secondary text-on-surface hover:text-secondary transition-all cursor-pointer flex items-center justify-center"
              aria-label={`View Commission Docket (${docketCount} items)`}
              title="Commission Docket"
            >
              <span className="material-symbols-outlined text-[20px]">inventory_2</span>
              {docketCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-secondary text-white font-label-caps text-[10px] w-5 h-5 flex items-center justify-center font-bold">
                  {docketCount}
                </span>
              )}
            </button>

            {/* Desktop Custom Order CTA */}
            <button
              onClick={() => handleNav('contact')}
              className="hidden lg:inline-flex btn-atelier-primary text-[10px] py-3 px-6 tracking-[0.2em]"
            >
              Custom Order
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-on-surface hover:text-secondary bg-transparent border-0 cursor-pointer flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              <span className="material-symbols-outlined text-[26px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface/98 backdrop-blur-xl border-b border-outline-variant/40 px-atelier py-6 flex flex-col gap-4 animate-fade-in shadow-lg">
            {navLinks.map((link) => {
              const isActive = currentPath === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-left py-2.5 font-label-caps tracking-[0.2em] uppercase border-b border-outline-variant/20 bg-transparent cursor-pointer flex items-center justify-between ${
                    isActive ? 'text-secondary font-bold' : 'text-on-surface'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-[16px] text-secondary">east</span>
                </button>
              );
            })}
            
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => handleNav('contact')}
                className="btn-atelier-primary w-full text-center justify-center py-3.5"
              >
                Start Custom Order
              </button>
              <a
                href="https://wa.me/919876543210?text=Hello%20Aenon%20Resin%20Arts,%20I%20would%20like%20to%20inquire%20about%20a%20custom%20resin%20piece."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-atelier-outline w-full text-center justify-center py-3 text-secondary border-secondary/50 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                WhatsApp Concierge
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
