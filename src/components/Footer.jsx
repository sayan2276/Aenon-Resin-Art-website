import React from 'react';
import '../index.css';

export default function Footer({ navigateTo, openCareGuide, openStory }) {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 pt-16 pb-12 mt-20">
      <div className="max-w-atelier mx-auto px-atelier">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* Brand & Atelier Identity */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <button
              onClick={() => navigateTo('home')}
              className="bg-transparent border-0 p-0 cursor-pointer text-left flex items-center gap-3"
            >
              <img
                src="/logo.svg"
                alt="Aenon Resin Arts Official Logo"
                className="h-9 w-auto object-contain opacity-95"
              />
            </button>
            <p className="font-body-sm text-on-surface-variant max-w-sm font-light mt-1 leading-relaxed">
              Handcrafted resin fine art, bespoke wedding bouquet preservation, and architectural floral heirlooms curated with archival museum precision.
            </p>
            <div className="flex flex-wrap items-center gap-5 text-on-surface-variant mt-2">
              <a
                href="https://instagram.com/aenon_resin_arts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-label-sm text-on-surface-variant hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                <span>@aenon_resin_arts</span>
              </a>
              <a
                href="https://wa.me/919876543210?text=Hello%20Aenon%20Resin%20Arts,%20I%20would%20like%20to%20consult%20with%20your%20concierge."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-label-sm text-on-surface-variant hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Curation Links */}
          <div className="md:col-span-3 flex flex-col gap-2.5">
            <span className="font-label-caps uppercase tracking-[0.2em] text-secondary mb-1">
              Curation
            </span>
            <button
              onClick={() => navigateTo('shop')}
              className="text-left bg-transparent border-0 p-0 font-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              Gallery Collection
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="text-left bg-transparent border-0 p-0 font-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              Bridal Preservation
            </button>
            <button
              onClick={openStory}
              className="text-left bg-transparent border-0 p-0 font-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              Atelier Philosophy
            </button>
            <button
              onClick={openCareGuide}
              className="text-left bg-transparent border-0 p-0 font-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              Archival Resin Care
            </button>
          </div>

          {/* Commissions & Inquiries */}
          <div className="md:col-span-4 flex flex-col gap-2.5">
            <span className="font-label-caps uppercase tracking-[0.2em] text-secondary mb-1">
              Commissions &amp; Inquiries
            </span>
            <p className="font-body-sm text-on-surface-variant leading-relaxed">
              Accepting exclusive bespoke bridal and architectural botanical commissions worldwide. Limited seasonal pouring slots.
            </p>
            <button
              onClick={() => navigateTo('contact')}
              className="inline-flex items-center gap-2 font-label-caps uppercase text-on-surface hover:text-secondary transition-colors mt-2 text-left bg-transparent border-0 p-0 cursor-pointer w-fit"
            >
              <span className="border-b border-secondary pb-0.5">Request a Consultation</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </button>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-outline-variant/30 mb-8"></div>

        {/* Bottom Legal & Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-label-sm text-on-surface-variant">
          <p>© 2026 AENON RESIN ARTS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={openCareGuide}
              className="bg-transparent border-0 p-0 font-label-sm text-on-surface-variant hover:text-on-surface cursor-pointer"
            >
              Care Guide
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="bg-transparent border-0 p-0 font-label-sm text-on-surface-variant hover:text-on-surface cursor-pointer"
            >
              Terms of Commission
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
