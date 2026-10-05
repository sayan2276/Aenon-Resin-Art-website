import React, { useState } from 'react';
import '../index.css';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage({
  productSlug,
  onBackToShop,
  onSelectProduct,
  onQuickView,
  onAddToDocket,
  onOrderNow
}) {
  const product = PRODUCTS.find((p) => p.slug === productSlug || p.id === productSlug) ||
                  PRODUCTS[parseInt(productSlug, 10) - 1] ||
                  PRODUCTS[0];
  const [activeImage, setActiveImage] = useState(product.primaryImage);
  const [activeTab, setActiveTab] = useState('process');

  React.useEffect(() => {
    setActiveImage(product.primaryImage);
  }, [product.id]);

  // Related products from same or other categories
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello Aenon Resin Arts! I am interested in commissioning the "${product.title}" (Specimen ${product.refNo}). Could you provide current slot availability and guidance on shipping our celebration flowers?`
  );

  return (
    <div className="w-full flex flex-col pt-4 sm:pt-6">
      <div className="max-w-atelier mx-auto px-atelier pb-20">
        
        {/* Editorial Navigation / Breadcrumb Track */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-8 border-b border-outline-variant/30 mb-8">
          <div className="flex items-center gap-2 font-label-caps text-[10px] tracking-[0.2em] text-on-surface-variant flex-wrap">
            <button
              onClick={onBackToShop}
              className="hover:text-secondary transition-colors bg-transparent border-0 p-0 font-label-caps cursor-pointer"
            >
              SHOP
            </button>
            <span>/</span>
            <button
              onClick={onBackToShop}
              className="hover:text-secondary transition-colors bg-transparent border-0 p-0 font-label-caps cursor-pointer"
            >
              {product.categoryLabel.toUpperCase()}
            </button>
            <span>/</span>
            <span className="text-on-surface font-semibold">{product.title.toUpperCase()}</span>
          </div>

          <button
            onClick={onBackToShop}
            className="inline-flex items-center gap-1.5 font-label-caps text-[11px] text-secondary hover:text-on-surface transition-colors tracking-[0.18em] bg-transparent border-0 p-0 cursor-pointer self-start sm:self-auto"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Back to Creations</span>
          </button>
        </div>

        {/* Main Editorial Display: 12-Column Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Visual Display Pedestal (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Main Specimen Frame */}
            <div className="relative bg-surface-container p-3 sm:p-6 transition-all duration-700 hover:bg-surface-container-high">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container-low shadow-sm">
                <img
                  src={activeImage}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-md px-3.5 py-1.5 border-l-2 border-secondary">
                  <span className="font-label-caps text-[10px] tracking-[0.25em] text-on-surface uppercase font-medium">
                    Specimen No. {product.archiveNo}
                  </span>
                </div>
              </div>
            </div>

            {/* Curatorial Metadata Strip */}
            <div className="flex items-center justify-between px-1 text-on-surface-variant font-label-caps text-[10px] tracking-[0.22em] uppercase flex-wrap gap-2">
              <span>Specimen Ref. #{product.refNo} · Optical Cast Archival Grade</span>
              <span className="text-secondary flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                100% Museum UV Stability
              </span>
            </div>

            {/* Gallery Thumbnails (Angles & Micro Zooms) */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {product.galleryImages && product.galleryImages.map((img, idx) => {
                const isSelected = activeImage === img.url;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img.url)}
                    className={`group relative aspect-[4/3] bg-surface-container p-1.5 focus:outline-none transition-all cursor-pointer text-left border ${
                      isSelected ? 'border-secondary' : 'border-outline-variant/30 hover:border-secondary/60'
                    }`}
                  >
                    <div className="w-full h-full overflow-hidden bg-surface-container-lowest">
                      <img
                        src={img.url}
                        alt={img.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="absolute bottom-2 left-2 font-label-caps text-[9px] bg-background/95 px-1.5 py-0.5 tracking-wider text-on-surface shadow-sm">
                      {img.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Atelier Dossier & Acquisition Suite (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-5 lg:pl-4">
            
            {/* Header & Heritage Typography */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1px] bg-secondary"></span>
                <span className="font-label-caps text-secondary tracking-[0.25em] uppercase">
                  {product.categoryLabel}
                </span>
              </div>
              <h1 className="font-headline-lg text-on-surface tracking-tight leading-[1.12] pt-1">
                {product.title}
              </h1>
              <p className="font-body-md text-on-surface-variant font-light leading-relaxed pt-1">
                {product.description}
              </p>
            </div>

            {/* Gold Filament Separator */}
            <div className="w-full flex items-center justify-between gap-4 py-1">
              <div className="flex-1 h-[1px] bg-outline-variant/50"></div>
              <span className="font-headline-sm text-secondary text-sm">✦</span>
              <div className="flex-1 h-[1px] bg-outline-variant/50"></div>
            </div>

            {/* Archival Valuation / Investment Box */}
            <div className="bg-surface-container p-5 flex flex-col gap-2 relative overflow-hidden border border-outline-variant/30">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-[10px] uppercase tracking-[0.2em] text-secondary">
                  Estimated Investment Range
                </span>
                <span className="font-label-sm text-on-surface-variant bg-surface-container-highest px-2 py-0.5 text-[11px]">
                  Bespoke Quotation
                </span>
              </div>
              <div className="flex items-baseline gap-2 pt-0.5">
                <span className="font-headline-md text-[26px] text-on-surface font-semibold">
                  {product.estimatedPrice}
                </span>
              </div>
              <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed font-light">
                Final commission valuation is determined by ceremonial floral volume, dehydration hydration profile, block volume, and chosen 24k gold leaf density.
              </p>
            </div>

            {/* Archival Specification Matrix */}
            <div className="bg-surface-container-low p-5 flex flex-col gap-2 border border-outline-variant/25">
              <h3 className="font-label-caps text-[11px] text-on-surface uppercase tracking-[0.2em] mb-1">
                Atelier Specifications
              </h3>
              <div className="grid grid-cols-1 gap-1.5 font-body-sm text-[13px]">
                <div className="flex items-start justify-between py-1.5 border-b border-outline-variant/30 gap-4">
                  <span className="text-on-surface-variant shrink-0 font-light">Materiality</span>
                  <span className="text-on-surface text-right font-medium">{product.materials}</span>
                </div>
                <div className="flex items-start justify-between py-1.5 border-b border-outline-variant/30 gap-4">
                  <span className="text-on-surface-variant shrink-0 font-light">Standard Dimensions</span>
                  <span className="text-on-surface text-right font-medium">{product.dimensions}</span>
                </div>
                <div className="flex items-start justify-between py-1.5 border-b border-outline-variant/30 gap-4">
                  <span className="text-on-surface-variant shrink-0 font-light">Supported Florals</span>
                  <span className="text-on-surface text-right font-medium">{product.florals}</span>
                </div>
                <div className="flex items-start justify-between py-1.5 border-b border-outline-variant/30 gap-4">
                  <span className="text-on-surface-variant shrink-0 font-light">Curation Timeline</span>
                  <span className="text-on-surface text-right font-medium">{product.curationTimeline}</span>
                </div>
                <div className="flex items-start justify-between py-1.5 gap-4">
                  <span className="text-on-surface-variant shrink-0 font-light">Heirloom Presentation</span>
                  <span className="text-on-surface text-right font-medium">{product.presentation}</span>
                </div>
              </div>
            </div>

            {/* Ordering & Concierge Call-to-Actions */}
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => onOrderNow(product)}
                className="btn-atelier-primary w-full text-center justify-center py-4 text-[11px]"
              >
                <span>Order This Piece</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => onAddToDocket(product)}
                  className="btn-atelier-outline py-3 text-center justify-center text-[10px] flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">inventory_2</span>
                  <span>Add to Docket</span>
                </button>

                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-atelier-outline text-secondary border-secondary/60 hover:border-secondary py-3 text-center justify-center text-[10px] flex items-center gap-1.5 text-decoration-none"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Tabbed Knowledge Section: Process, Care, Transit */}
        <section className="mt-16 pt-12 border-t border-outline-variant/30">
          <div className="flex items-center justify-center gap-6 border-b border-outline-variant/30 pb-4 mb-8">
            <button
              onClick={() => setActiveTab('process')}
              className={`font-label-caps uppercase text-[11px] tracking-[0.2em] bg-transparent border-0 cursor-pointer pb-2 relative transition-colors ${
                activeTab === 'process'
                  ? 'text-on-surface font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Curation Process
            </button>
            <button
              onClick={() => setActiveTab('care')}
              className={`font-label-caps uppercase text-[11px] tracking-[0.2em] bg-transparent border-0 cursor-pointer pb-2 relative transition-colors ${
                activeTab === 'care'
                  ? 'text-on-surface font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Preservation &amp; Care
            </button>
            <button
              onClick={() => setActiveTab('transit')}
              className={`font-label-caps uppercase text-[11px] tracking-[0.2em] bg-transparent border-0 cursor-pointer pb-2 relative transition-colors ${
                activeTab === 'transit'
                  ? 'text-on-surface font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Shipping &amp; Transit
            </button>
          </div>

          <div className="max-w-3xl mx-auto font-body-md text-on-surface-variant leading-relaxed">
            {activeTab === 'process' && (
              <div className="space-y-4 animate-fade-in">
                <h4 className="font-headline-sm text-on-surface text-[20px] mb-2">
                  Layer-By-Layer Casting Mastery
                </h4>
                <p>
                  Upon receiving your sacred wedding flowers or milestone bouquet, our preservation team performs gentle micro-pore silica dehydration to capture petal saturation before organic oxidation occurs.
                </p>
                <p>
                  Each piece is cast in incremental depths across 4 to 6 weeks. Slow exothermic temperature monitoring ensures zero scorch, no thermal discoloration, and crystal optical transmission that allows ambient morning daylight to illuminate every natural petal vein.
                </p>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="space-y-4 animate-fade-in">
                <h4 className="font-headline-sm text-on-surface text-[20px] mb-2">
                  Archival Longevity Protocol
                </h4>
                <p>
                  Our proprietary optical-grade resin features industrial UV inhibitors to protect against solar degradation. To enjoy your heirloom for a lifetime:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[14px]">
                  <li>Display indoors in indirect or filtered natural sunlight.</li>
                  <li>Clean strictly with dry, ultra-soft microfiber cloths. Avoid harsh abrasive cleaners or ammonia sprays.</li>
                  <li>Keep away from open fireplaces, stovetops, or high-humidity steam zones.</li>
                </ul>
              </div>
            )}

            {activeTab === 'transit' && (
              <div className="space-y-4 animate-fade-in">
                <h4 className="font-headline-sm text-on-surface text-[20px] mb-2">
                  Express Floral Transit &amp; Global Delivery
                </h4>
                <p>
                  We coordinate insured overnight courier collection for fresh ceremony florals across India. Upon completion, finished resin fine art pieces are securely packed inside custom velvet-lined wooden keepsake vaults with multi-layer tamper-evident foam.
                </p>
                <p>
                  Door-to-door courier tracking with signature verification is provided for both domestic and international deliveries.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Related Curations */}
        <section className="mt-20 pt-12 border-t border-outline-variant/30">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-label-caps text-secondary tracking-[0.2em] uppercase block mb-1">
                Complementary Curations
              </span>
              <h3 className="font-headline-sm text-on-surface text-[22px]">
                You May Also Cherish
              </h3>
            </div>
            <button
              onClick={onBackToShop}
              className="font-label-caps text-[11px] text-on-surface hover:text-secondary uppercase tracking-wider bg-transparent border-0 cursor-pointer"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelectProduct={onSelectProduct}
                onQuickView={onQuickView}
                onAddToDocket={onAddToDocket}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
