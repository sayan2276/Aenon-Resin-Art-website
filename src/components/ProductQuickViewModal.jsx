import React, { useEffect } from 'react';
import '../index.css';

export default function ProductQuickViewModal({
  product,
  onClose,
  onViewFullDetails,
  onOrderNow
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Aenon Resin Arts! I am inquiring about the ${product.title} (${product.refNo}). Could you provide commission availability and a custom quote?`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-surface w-full max-w-4xl max-h-[92vh] overflow-y-auto border border-secondary/40 shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-surface-container-high hover:bg-secondary hover:text-white text-on-surface flex items-center justify-center border-0 cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left: Specimen Artwork Frame */}
          <div className="md:col-span-6 bg-surface-container-high p-6 sm:p-8 flex items-center justify-center relative">
            <div className="w-full aspect-[4/3] bg-surface-container-lowest overflow-hidden shadow-sm">
              <img
                src={product.primaryImage}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-8 bg-surface/90 backdrop-blur-sm px-3 py-1 border-l-2 border-secondary">
              <span className="font-label-caps text-[9px] tracking-widest text-secondary font-semibold">
                {product.badge}
              </span>
            </div>
          </div>

          {/* Right: Specimen Details & Curation Dossier */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-secondary"></span>
                <span className="font-label-caps text-[10px] tracking-[0.25em] text-secondary uppercase">
                  {product.categoryLabel} · {product.archiveNo}
                </span>
              </div>

              <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
                {product.title}
              </h2>

              <p className="font-body-md text-on-surface-variant font-light mb-4 leading-relaxed">
                {product.shortDescription || product.description}
              </p>

              {/* Price Range Box */}
              <div className="bg-surface-container p-4 mb-5 border-l-2 border-secondary">
                <span className="font-label-caps text-[10px] tracking-wider text-secondary block uppercase">
                  Estimated Investment
                </span>
                <span className="font-headline-md text-[20px] text-on-surface font-medium block mt-0.5">
                  {product.estimatedPrice}
                </span>
                <span className="font-body-sm text-[12px] text-on-surface-variant font-light mt-1 block">
                  Final quote tailored by bloom volume, gold leaf ratio &amp; dimensions.
                </span>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="space-y-2 mb-6 text-[13px] font-body-sm">
                <div className="flex items-start justify-between py-1.5 border-b border-outline-variant/30 gap-4">
                  <span className="text-on-surface-variant shrink-0 font-light">Dimensions</span>
                  <span className="text-on-surface font-medium text-right">{product.dimensions}</span>
                </div>
                <div className="flex items-start justify-between py-1.5 border-b border-outline-variant/30 gap-4">
                  <span className="text-on-surface-variant shrink-0 font-light">Materiality</span>
                  <span className="text-on-surface font-medium text-right">{product.materials}</span>
                </div>
                <div className="flex items-start justify-between py-1.5 border-b border-outline-variant/30 gap-4">
                  <span className="text-on-surface-variant shrink-0 font-light">Florals</span>
                  <span className="text-on-surface font-medium text-right">{product.florals}</span>
                </div>
                <div className="flex items-start justify-between py-1.5 gap-4">
                  <span className="text-on-surface-variant shrink-0 font-light">Timeline</span>
                  <span className="text-on-surface font-medium text-right">{product.curationTimeline}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOrderNow(product);
                }}
                className="btn-atelier-primary w-full text-center justify-center py-3.5"
              >
                <span>Order This Piece</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onViewFullDetails(product.slug);
                  }}
                  className="btn-atelier-outline text-center justify-center py-2.5 text-[10px]"
                >
                  Full Dossier
                </button>

                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-atelier-outline text-secondary border-secondary/60 hover:border-secondary text-center justify-center py-2.5 text-[10px] flex items-center gap-1.5 text-decoration-none"
                >
                  <span className="material-symbols-outlined text-[15px]">chat</span>
                  WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
