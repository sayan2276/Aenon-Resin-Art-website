import React from 'react';
import '../index.css';
import { PRODUCTS, ATELIER_STEPS, INSTAGRAM_MOMENTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage({
  navigateTo,
  onSelectProduct,
  onQuickView,
  onAddToDocket
}) {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="w-full flex flex-col">
      
      {/* ========================================================
          HERO SECTION: Luxury Typography & Curated Specimen Showcase
          ======================================================== */}
      <section className="relative w-full pt-12 lg:pt-16 pb-16 lg:pb-28 overflow-hidden bg-background">
        
        {/* Ambient Delicate Gold Filament Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-center items-center">
          <svg
            className="w-full max-w-6xl h-auto"
            fill="none"
            viewBox="0 0 1000 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="text-secondary"
              cx="500"
              cy="300"
              r="280"
              stroke="currentColor"
              strokeDasharray="4 6"
              strokeWidth="0.75"
            />
            <path className="text-secondary" d="M500 50 V550" stroke="currentColor" strokeWidth="0.5" />
            <path className="text-secondary" d="M200 300 H800" stroke="currentColor" strokeWidth="0.5" />
            <path
              className="text-secondary"
              d="M500 120 C540 220 540 380 500 480 C460 380 460 220 500 120 Z"
              stroke="currentColor"
              strokeWidth="0.75"
            />
          </svg>
        </div>

        <div className="max-w-atelier mx-auto px-atelier relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[75vh]">
            
            {/* Left: Editorial Typography Block */}
            <div className="lg:col-span-6 flex flex-col justify-center items-start lg:pr-6">
              
              {/* Monogram crest accent */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-secondary opacity-60"></span>
                <span className="font-label-caps text-secondary tracking-[0.28em]">
                  Atelier Curations
                </span>
              </div>

              <h1 className="font-display-xl text-on-surface mb-6 select-none">
                MEMORIES,<br />
                BEAUTIFULLY<br />
                <span className="italic font-normal text-secondary">PRESERVED.</span>
              </h1>

              <p className="font-body-lg text-on-surface-variant max-w-md font-light mb-8 leading-relaxed">
                Handcrafted resin pieces made for life’s most meaningful moments. We encase bridal blooms, sacred garlands, and personal milestones in timeless crystal clarity.
              </p>

              {/* Action Buttons with pure luxury geometry */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => navigateTo('shop')}
                  className="btn-atelier-primary px-10 py-4 text-center justify-center"
                >
                  Explore Shop
                </button>
                <button
                  onClick={() => navigateTo('contact')}
                  className="btn-atelier-outline px-10 py-4 text-center justify-center"
                >
                  Custom Order
                </button>
              </div>

              {/* Micro Botanical Metadata */}
              <div className="mt-12 pt-6 border-t border-outline-variant/30 flex flex-wrap items-center gap-6 text-on-surface-variant font-label-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                  <span>Optical-Grade Archival Resins</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">eco</span>
                  <span>Botanical Extraction Mastery</span>
                </div>
              </div>
            </div>

            {/* Right: Curated Hero Artwork Showcase */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0">
              <div className="relative w-full aspect-[4/5] max-w-[520px] mx-auto p-4 lg:p-6 bg-surface-container-low shadow-md">
                
                {/* Delicate inner mat border */}
                <div
                  className="relative w-full h-full overflow-hidden bg-surface-container cursor-pointer group"
                  onClick={() => onSelectProduct('flower-garland-preservation')}
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6yIviWooHNf-RWd5kysnbk-3aZWokONLGYpSyn_hwlKDyIzAXWEnleg6FAB6OodlM6LiUgVU5s9Jxy7o-4mllVTvUU3lHOB9CzSMUujxwCv2eH6L_ENer6N2H1lDBUZeGzcY0tE45trlPOtgcO3af2G2Emv5Ueq2DfO5c52PEys0XQJbGGqK6Q_9_rB78YOo9uQst3Kj8cAiAy2rT0k7ALyEmiKYW6u8p3M5oCaPTdT05hszmRGB3"
                    alt="Editorial luxury resin art preserving vermilion petals and 24k gold leaf"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                </div>

                {/* Floated archival specimen label */}
                <div className="absolute -bottom-5 -left-2 sm:-left-6 bg-surface-bright/95 backdrop-blur-md px-6 py-4 border border-outline-variant/40 shadow-sm max-w-[280px]">
                  <span className="font-label-caps text-[10px] tracking-[0.25em] text-secondary block mb-1">
                    Plate No. 01 · Archive #081
                  </span>
                  <p className="font-headline-sm text-[16px] text-on-surface font-light leading-snug">
                    Varmala Botanical Block
                  </p>
                  <p className="font-body-sm text-[11px] text-on-surface-variant mt-1 font-light">
                    Suspended 24K leaf &amp; heirloom florals
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          BRAND INTRO: Ultra-Breathable Quiet Sanctuary
          ======================================================== */}
      <section className="w-full py-20 lg:py-32 bg-surface-container-low border-y border-outline-variant/25">
        <div className="max-w-2xl mx-auto px-atelier text-center flex flex-col items-center">
          
          {/* Logo Arch Motif Glyph */}
          <div className="mb-4 flex flex-col items-center opacity-85">
            <svg
              className="text-secondary"
              fill="none"
              height="48"
              viewBox="0 0 36 48"
              width="36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 47V18C1 8.61116 8.61116 1 18 1C27.3888 1 35 8.61116 35 18V47"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle cx="18" cy="18" fill="currentColor" r="4" />
              <line stroke="currentColor" strokeWidth="0.8" x1="18" x2="18" y1="26" y2="40" />
            </svg>
          </div>

          <span className="font-label-caps tracking-[0.3em] text-secondary mb-2">
            AENON RESIN ARTS
          </span>

          <h2 className="font-headline-lg text-on-surface mb-4 font-light">
            Made to be remembered.
          </h2>

          <p className="font-body-lg text-on-surface-variant font-light max-w-xl mx-auto leading-relaxed">
            Thoughtfully handcrafted resin pieces created to preserve flowers, memories and meaningful moments for generations to come.
          </p>

          {/* Filament Flourish */}
          <div className="filament-divider mt-8 max-w-xs">
            <span className="filament-line"></span>
            <span className="material-symbols-outlined text-[14px] text-secondary">diamond</span>
            <span className="filament-line"></span>
          </div>
        </div>
      </section>

      {/* ========================================================
          FEATURED CREATIONS: Spacious Curated Exhibition
          ======================================================== */}
      <section className="w-full py-16 lg:py-28 bg-background">
        <div className="max-w-atelier mx-auto px-atelier">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-outline-variant/30 pb-4">
            <div>
              <span className="font-label-caps tracking-[0.24em] text-secondary block mb-1">
                Curated Catalog
              </span>
              <h2 className="font-headline-lg text-on-surface font-light">
                Selected Creations
              </h2>
            </div>

            <button
              onClick={() => navigateTo('shop')}
              className="inline-flex items-center gap-2 font-label-caps uppercase text-on-surface tracking-[0.2em] group hover:text-secondary transition-colors bg-transparent border-0 cursor-pointer p-0"
            >
              <span>View All Pieces</span>
              <span className="material-symbols-outlined text-[18px] transform group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>

          {/* 4 Editorial Products in an Uncluttered Rhythm */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-20">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onQuickView={onQuickView}
                onAddToDocket={onAddToDocket}
              />
            ))}
          </div>

          {/* Center CTA button */}
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => navigateTo('shop')}
              className="btn-atelier-primary px-12 py-4"
            >
              View Complete Archive
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          THE PROCESS: Horizontal 4-Step Narrative
          ======================================================== */}
      <section className="w-full py-16 lg:py-28 bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-atelier mx-auto px-atelier">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-label-caps tracking-[0.26em] text-secondary block mb-1">
              The Atelier Method
            </span>
            <h2 className="font-headline-lg text-on-surface font-light mb-2">
              How it becomes yours.
            </h2>
            <p className="font-body-md text-on-surface-variant font-light leading-relaxed">
              From your initial consultation to a pristine handcrafted keepsake, every step is executed with reverence.
            </p>
          </div>

          {/* Connecting line container */}
          <div className="relative w-full">
            {/* Thin antique-gold connecting filament (visible on lg screens) */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-secondary/35 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {ATELIER_STEPS.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-background border border-secondary/40 flex items-center justify-center mb-4 shadow-sm">
                    <span className="font-title-editorial text-secondary text-[20px]">
                      {step.step}
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-[18px] text-on-surface font-normal mb-2">
                    {step.title}
                  </h4>
                  <p className="font-body-sm text-on-surface-variant font-light leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <button
              onClick={() => navigateTo('contact')}
              className="btn-atelier-outline px-10 py-4"
            >
              Start a Custom Order
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SOCIAL / INSTAGRAM: Studio Atmosphere 3x2 Editorial Grid
          ======================================================== */}
      <section className="w-full py-16 lg:py-28 bg-background">
        <div className="max-w-atelier mx-auto px-atelier">
          
          <div className="flex flex-col items-center text-center mb-10">
            <span className="font-label-caps tracking-[0.28em] text-secondary mb-1">
              Visual Chronicle
            </span>
            <h2 className="font-headline-lg text-on-surface font-light mb-1">
              From our studio
            </h2>
            <a
              href="https://instagram.com/aenon_resin_arts"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body-sm text-secondary hover:underline tracking-wider font-medium text-decoration-none"
            >
              @aenon_resin_arts
            </a>
          </div>

          {/* 3x2 Grid of Curated Studio Moments */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {INSTAGRAM_MOMENTS.map((item, idx) => (
              <a
                key={idx}
                href="https://instagram.com/aenon_resin_arts"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group bg-surface-container-high block text-decoration-none"
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <span className="material-symbols-outlined text-white text-[28px] mb-2">photo_camera</span>
                  <span className="font-label-caps text-[10px] text-white/90 uppercase tracking-widest line-clamp-2">
                    {item.caption}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://instagram.com/aenon_resin_arts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-label-caps uppercase text-on-surface tracking-[0.2em] border-b border-secondary pb-1 hover:text-secondary transition-colors text-decoration-none"
            >
              <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          FINAL CTA: Ultra-Luxe Near Black Sanctuary (#080808)
          ======================================================== */}
      <section className="w-full py-20 lg:py-36 bg-[#080808] text-[#F7F2E8] relative overflow-hidden">
        
        {/* Fine Antique Gold hairline framing border */}
        <div className="absolute inset-4 sm:inset-10 pointer-events-none border border-secondary/25"></div>

        <div className="relative z-10 max-w-2xl mx-auto px-atelier text-center flex flex-col items-center">
          
          {/* Arch Icon */}
          <div className="mb-4 opacity-80">
            <svg
              className="text-secondary-dim"
              fill="none"
              height="52"
              viewBox="0 0 40 52"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 51V20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20V51"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle cx="20" cy="20" fill="currentColor" r="3.5" />
              <line stroke="currentColor" strokeWidth="0.75" x1="20" x2="20" y1="28" y2="44" />
            </svg>
          </div>

          <span className="font-label-caps tracking-[0.3em] text-secondary-dim mb-2">
            Bespoke Reservations
          </span>

          <h2 className="font-headline-lg text-[#F7F2E8] tracking-tight font-light mb-3 leading-tight">
            Have something meaningful in mind?
          </h2>

          <p className="font-body-lg text-outline-variant font-light mb-8 max-w-md leading-relaxed">
            Let’s create something made just for you. Every bespoke commission receives individualized floral dehydration, custom gold balance, and personal artisan updates.
          </p>

          <button
            onClick={() => navigateTo('contact')}
            className="btn-atelier-gold px-12 py-4 tracking-[0.24em] shadow-lg"
          >
            Start Custom Order
          </button>

          <p className="mt-8 font-label-sm text-[11px] tracking-widest text-[#cbc5c2]/60 uppercase">
            Limited seasonal slots · Hand-cured in small batches
          </p>
        </div>
      </section>

    </div>
  );
}
