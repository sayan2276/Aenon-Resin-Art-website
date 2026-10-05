import React from 'react';
import '../index.css';

export default function AtelierStoryModal({ isOpen, onClose, onStartOrder }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-surface w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-12 border border-secondary/40 shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-surface-container-high hover:bg-secondary hover:text-white text-on-surface flex items-center justify-center border-0 cursor-pointer transition-colors"
          aria-label="Close story"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex flex-col items-center text-center max-w-lg mx-auto mb-8">
          <div className="w-12 h-12 mb-3 rounded-full bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary text-[24px]">spa</span>
          </div>
          <span className="font-label-caps text-secondary text-[11px] tracking-[0.28em] uppercase block mb-1">
            Atelier Philosophy
          </span>
          <h2 className="font-headline-lg text-on-surface text-[32px] font-normal">
            Quiet Artisanal Opulence
          </h2>
          <div className="filament-divider mt-3 max-w-xs">
            <span className="filament-line"></span>
            <span className="material-symbols-outlined text-[12px] text-secondary">diamond</span>
            <span className="filament-line"></span>
          </div>
        </div>

        <div className="space-y-6 font-body-md text-on-surface-variant font-light leading-relaxed text-[15px]">
          <p>
            At <strong className="text-on-surface font-medium">Aenon Resin Arts</strong>, we believe true luxury is born of patience, stillness, and tactile memory. Drawing inspiration from couture wedding stationery, high-end museum curation, and delicate gilded botanical illustrations, our studio treats negative space and luminous crystal clarity as active luxury materials.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 text-center">
            <div className="bg-surface-container-low p-5 border border-outline-variant/30">
              <span className="font-headline-sm text-secondary text-[24px] block mb-1">01</span>
              <h4 className="font-title-editorial text-on-surface text-[15px] mb-1">Silica Dehydration</h4>
              <p className="font-body-sm text-[12px] text-on-surface-variant">
                Petals dried within hours of ceremony arrival to freeze natural chlorophyll &amp; vibrancy.
              </p>
            </div>

            <div className="bg-surface-container-low p-5 border border-outline-variant/30">
              <span className="font-headline-sm text-secondary text-[24px] block mb-1">02</span>
              <h4 className="font-title-editorial text-on-surface text-[15px] mb-1">Degassed Clarity</h4>
              <p className="font-body-sm text-[12px] text-on-surface-variant">
                Multi-stage vacuum chambers eradicate micro-bubbles for an ethereal liquid glass look.
              </p>
            </div>

            <div className="bg-surface-container-low p-5 border border-outline-variant/30">
              <span className="font-headline-sm text-secondary text-[24px] block mb-1">03</span>
              <h4 className="font-title-editorial text-on-surface text-[15px] mb-1">24K Hand Leafing</h4>
              <p className="font-body-sm text-[12px] text-on-surface-variant">
                Genuine pure gold flakes hand-suspended with brass tweezers into curing layers.
              </p>
            </div>
          </div>

          <p>
            Whether preserving an entire bridal varmala, an anniversary ring tray, or a singular commemorative rose, every piece is sculpted to outlive generations. We maintain strict batch limitations each season to give every bloom the individual devotion it deserves.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-on-surface font-label-caps text-[11px] tracking-wider uppercase">
            <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
            <span>Atelier Established in Kerala · Shipping Worldwide</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onStartOrder();
            }}
            className="btn-atelier-primary py-3 px-8 text-[11px]"
          >
            Start a Custom Commission
          </button>
        </div>
      </div>
    </div>
  );
}
