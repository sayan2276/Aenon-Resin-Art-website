import React from 'react';
import '../index.css';

export default function DocketDrawer({
  isOpen,
  onClose,
  docketItems,
  onRemoveItem,
  onClearDocket,
  onProceedToInquiry
}) {
  if (!isOpen) return null;

  const minTotal = docketItems.reduce((acc, item) => acc + (item.minPrice || 0), 0);
  const maxTotal = docketItems.reduce((acc, item) => acc + (item.maxPrice || 0), 0);

  const formattedItems = docketItems.map(
    (item, index) => `${index + 1}. ${item.title} (${item.archiveNo})`
  ).join('%0A');

  const whatsappInquiryUrl = `https://wa.me/919876543210?text=Hello%20Aenon%20Resin%20Arts!%20I%20have%20curated%20the%20following%20commission%20docket%20from%20your%20atelier:%0A${formattedItems}%0A%0ACould%20you%20please%20guide%20me%20on%20the%20preservation%20timeline%20and%20consultation?`;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-surface h-full flex flex-col justify-between border-l border-outline-variant/40 shadow-2xl animate-slide-right overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-secondary text-[22px]">inventory_2</span>
            <div>
              <span className="font-label-caps text-[10px] text-secondary tracking-[0.2em] uppercase block">
                Atelier Portfolio
              </span>
              <h3 className="font-headline-sm text-on-surface text-[18px]">
                Commission Docket
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center bg-transparent hover:bg-surface-container text-on-surface border-0 cursor-pointer transition-colors"
            aria-label="Close docket"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {docketItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary/50 text-[48px] mb-3">
                spa
              </span>
              <h4 className="font-headline-sm text-on-surface text-[17px] mb-1">
                Your Docket is Empty
              </h4>
              <p className="font-body-sm text-[13px] max-w-xs font-light mb-6">
                Explore our Permanent Archive to curate pieces for your bridal preservation or commemorative keepsakes.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="btn-atelier-outline py-2.5 px-6 text-[10px]"
              >
                Browse Creations
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">
                  {docketItems.length} {docketItems.length === 1 ? 'Selection' : 'Selections'} Curated
                </span>
                <button
                  type="button"
                  onClick={onClearDocket}
                  className="font-label-caps text-[10px] text-secondary hover:underline bg-transparent border-0 cursor-pointer uppercase tracking-wider"
                >
                  Clear All
                </button>
              </div>

              {docketItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-surface-container p-3.5 flex gap-3.5 items-center border border-outline-variant/25 transition-all"
                >
                  <img
                    src={item.primaryImage}
                    alt={item.title}
                    className="w-16 h-16 object-cover bg-surface-container-highest shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="font-label-caps text-[9px] text-secondary tracking-wider uppercase block">
                      {item.archiveNo}
                    </span>
                    <h5 className="font-title-editorial text-[15px] text-on-surface truncate">
                      {item.title}
                    </h5>
                    <p className="font-label-sm text-[11px] text-on-surface-variant font-medium mt-0.5">
                      {item.estimatedPrice}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1 text-on-surface-variant hover:text-secondary bg-transparent border-0 cursor-pointer transition-colors"
                    title="Remove item"
                    aria-label={`Remove ${item.title}`}
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {docketItems.length > 0 && (
          <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low space-y-4">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-label-caps text-[10px] text-secondary tracking-[0.2em] uppercase block">
                  Estimated Investment
                </span>
                <span className="font-headline-sm text-on-surface text-[18px] font-medium">
                  ₹{minTotal.toLocaleString()} – ₹{maxTotal.toLocaleString()}
                </span>
              </div>
              <span className="font-label-sm text-[11px] text-on-surface-variant/70 italic">
                Taxes included
              </span>
            </div>

            <p className="font-body-sm text-[11px] text-on-surface-variant font-light leading-snug">
              Every commission enters our handcrafted curing docket. Submit your formal inquiry or initiate an immediate WhatsApp atelier consultation.
            </p>

            <div className="flex flex-col gap-2 pt-1">
              <button
                type="button"
                onClick={onProceedToInquiry}
                className="btn-atelier-primary w-full text-center justify-center py-3.5 text-[11px]"
              >
                <span>Proceed to Custom Order Docket</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-atelier-outline w-full text-center justify-center py-3 text-[11px] text-secondary border-secondary/60 flex items-center gap-2 text-decoration-none"
              >
                <span className="material-symbols-outlined text-[17px]">chat</span>
                <span>Send Docket Via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
