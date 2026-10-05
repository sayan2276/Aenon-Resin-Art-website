import React from 'react';
import '../index.css';

export default function ProductCard({
  product,
  onSelectProduct,
  onQuickView,
  onAddToDocket
}) {
  return (
    <article className="specimen-card group flex flex-col cursor-pointer border border-outline-variant/30 hover:border-secondary/40">
      
      {/* Specimen Media Stage */}
      <div
        className="relative w-full aspect-[4/3] bg-surface-container-high overflow-hidden p-3 sm:p-4 flex items-center justify-center transition-all duration-500 group-hover:bg-surface-container-highest"
        onClick={() => onSelectProduct(product.slug)}
      >
        <div className="relative w-full h-full overflow-hidden bg-surface-container-lowest">
          <img
            src={product.primaryImage}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Specimen Badge Overlay */}
        <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-2.5 py-1 border-l-2 border-secondary">
          <span className="font-label-caps text-[9px] tracking-[0.2em] text-secondary font-semibold">
            {product.badge}
          </span>
        </div>

        {/* Quick View Hover Button (Desktop) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="hidden sm:flex absolute bottom-4 right-4 bg-surface-bright/95 hover:bg-secondary hover:text-white text-on-surface px-3 py-1.5 font-label-caps text-[10px] tracking-wider border border-outline-variant/40 shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 items-center gap-1.5"
          aria-label={`Quick view ${product.title}`}
        >
          <span className="material-symbols-outlined text-[14px]">visibility</span>
          <span>Quick View</span>
        </button>
      </div>

      {/* Specimen Caption & Metadata */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-surface">
        <div>
          <div className="flex items-center justify-between w-full mb-1.5">
            <span className="font-label-caps text-[10px] uppercase tracking-[0.2em] text-secondary">
              {product.archiveNo}
            </span>
            <span className="font-label-sm text-on-surface-variant font-light text-[11px]">
              {product.type}
            </span>
          </div>

          <h3
            onClick={() => onSelectProduct(product.slug)}
            className="font-headline-sm text-headline-sm text-on-surface mb-1 group-hover:text-secondary transition-colors"
          >
            {product.title}
          </h3>

          <p className="font-body-sm text-on-surface-variant font-light mb-4 line-clamp-2 leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-outline-variant/25 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-caps text-[9px] text-on-surface-variant/70 uppercase tracking-wider">
              Investment
            </span>
            <span className="font-headline-sm text-[16px] text-on-surface font-medium">
              {product.estimatedPrice}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onAddToDocket(product);
              }}
              title="Add to Commission Docket"
              aria-label={`Add ${product.title} to Commission Docket`}
              className="p-2 bg-surface-container-low hover:bg-secondary hover:text-white text-on-surface transition-colors border border-outline-variant/40 cursor-pointer flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectProduct(product.slug)}
              className="inline-flex items-center gap-1 font-label-caps text-[11px] uppercase tracking-[0.2em] text-on-surface hover:text-secondary bg-transparent border-0 border-b border-secondary/50 hover:border-secondary pb-0.5 cursor-pointer transition-all"
            >
              <span>View</span>
              <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
