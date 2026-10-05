import React from 'react';
import '../index.css';
import { CARE_GUIDELINES } from '../data/products';

export default function CareGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-surface w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 border border-secondary/40 shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-surface-container-high hover:bg-secondary hover:text-white text-on-surface flex items-center justify-center border-0 cursor-pointer transition-colors"
          aria-label="Close care guide"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="text-center max-w-md mx-auto mb-8">
          <span className="font-label-caps text-secondary text-[11px] tracking-[0.25em] uppercase block mb-1">
            Archival Preservation Protocol
          </span>
          <h2 className="font-headline-md text-on-surface text-[26px]">
            Caring for Your Resin Heirloom
          </h2>
          <div className="filament-divider mt-3">
            <span className="filament-line"></span>
            <span className="filament-glyph">✦</span>
            <span className="filament-line"></span>
          </div>
        </div>

        <div className="space-y-6">
          {CARE_GUIDELINES.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-low p-5 border-l-2 border-secondary space-y-1.5"
            >
              <h3 className="font-title-editorial text-[17px] text-on-surface">
                {idx + 1}. {item.title}
              </h3>
              <p className="font-body-md text-[14px] text-on-surface-variant font-light leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-label-sm text-[11px] text-on-surface-variant italic">
            Certified 100% Museum UV Stability Guarantee included with every piece.
          </p>
          <button
            onClick={onClose}
            className="btn-atelier-primary py-2.5 px-6 text-[10px]"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
