import React, { useState, useMemo } from 'react';
import '../index.css';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ShopPage({
  onSelectProduct,
  onQuickView,
  onAddToDocket,
  navigateTo
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.florals.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.minPrice - b.minPrice;
      if (sortBy === 'price-high') return b.minPrice - a.minPrice;
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return 0; // 'featured' retains natural array order
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const flagshipProduct = PRODUCTS[0]; // Flower Garland Preservation

  return (
    <div className="w-full flex flex-col pt-8">
      
      {/* Editorial Header Section */}
      <section className="max-w-atelier mx-auto px-atelier pt-6 pb-8 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-secondary opacity-60"></span>
          <span className="font-label-caps text-secondary tracking-[0.25em]">
            The Permanent Archive
          </span>
          <span className="w-8 h-[1px] bg-secondary opacity-60"></span>
        </div>

        <h1 className="font-display-xl text-on-surface mb-2 font-normal">
          OUR CREATIONS
        </h1>

        <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto font-light leading-relaxed">
          Handcrafted resin pieces created for memories worth keeping. Encase your sacred blooms, anniversary tokens, and celebration florals in museum-grade clarity.
        </p>

        {/* Minimal Filter Navigation Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2" id="collection-filters">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`font-label-caps tracking-[0.2em] uppercase py-2 px-3 transition-all duration-300 relative bg-transparent border-0 cursor-pointer ${
                  isActive
                    ? 'text-on-surface font-bold after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[1.5px] after:bg-secondary'
                    : 'text-on-surface-variant hover:text-on-surface after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-secondary hover:after:w-full after:transition-all'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & Sort Controls */}
        <div className="mt-6 max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[18px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search florals, shapes, or archives..."
              className="w-full bg-surface-container-low pl-10 pr-4 py-2.5 font-body-sm text-on-surface placeholder:text-on-surface-variant/50 border border-outline-variant/40 focus:border-secondary outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface bg-transparent border-0 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>

          <div className="relative w-full sm:w-auto min-w-[180px]">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none bg-surface-container-low px-4 py-2.5 pr-8 font-body-sm text-on-surface border border-outline-variant/40 focus:border-secondary outline-none cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Alphabetical</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]">
              arrow_drop_down
            </span>
          </div>
        </div>

        {/* Filament Line Separator with Central Diamond */}
        <div className="mt-8 flex items-center justify-center gap-3 max-w-md mx-auto">
          <div className="flex-1 h-[1px] bg-secondary opacity-25"></div>
          <span className="w-2 h-2 rotate-45 border border-secondary bg-background"></span>
          <div className="flex-1 h-[1px] bg-secondary opacity-25"></div>
        </div>
      </section>

      {/* Curated Editorial Product Grid */}
      <section className="max-w-atelier mx-auto px-atelier pb-20">
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center">
            <span className="material-symbols-outlined text-secondary/50 text-[48px] mb-3">
              filter_vintage
            </span>
            <h3 className="font-headline-sm text-on-surface mb-2">No matching creations found</h3>
            <p className="font-body-sm text-on-surface-variant max-w-sm font-light mb-6">
              Try adjusting your search terms or filter selections to view available catalog pieces.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="btn-atelier-outline py-2 px-6 text-[10px]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onQuickView={onQuickView}
                onAddToDocket={onAddToDocket}
              />
            ))}
          </div>
        )}
      </section>

      {/* Flagship Editorial Spotlight (Integrated Feature from Stitch Shop Desktop screen) */}
      <section className="w-full bg-surface-container-low py-16 lg:py-24 border-y border-outline-variant/30">
        <div className="max-w-atelier mx-auto px-atelier">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Heroic Editorial Artwork Presentation */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="relative bg-surface-container-high p-4 sm:p-6 shadow-md transition-all duration-700">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container-lowest">
                  <img
                    src={flagshipProduct.primaryImage}
                    alt={flagshipProduct.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1.5 border-l-2 border-secondary">
                    <span className="font-label-caps text-[10px] tracking-[0.25em] text-on-surface uppercase">
                      Spotlight Ref. {flagshipProduct.archiveNo}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Atelier Dossier */}
            <div className="lg:col-span-5 flex flex-col justify-start gap-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1px] bg-secondary"></span>
                <span className="font-label-caps text-secondary tracking-[0.25em] uppercase">
                  Flagship Botanical Ingot
                </span>
              </div>

              <h2 className="font-headline-lg text-on-surface tracking-tight leading-tight">
                {flagshipProduct.title}
              </h2>

              <p className="font-body-md text-on-surface-variant font-light leading-relaxed">
                {flagshipProduct.description}
              </p>

              {/* Valuation & Specs */}
              <div className="bg-surface p-5 border border-outline-variant/30 space-y-2 mt-2">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-[10px] text-secondary tracking-wider uppercase">
                    Commission Investment
                  </span>
                  <span className="font-label-sm text-secondary bg-surface-container px-2 py-0.5 font-medium">
                    Bespoke Quotation
                  </span>
                </div>
                <div className="font-headline-md text-on-surface text-[22px]">
                  {flagshipProduct.estimatedPrice}
                </div>
                <p className="font-body-sm text-[12px] text-on-surface-variant font-light">
                  Tailored by ceremony floral density, dehydration profile &amp; 24k gold leaf density.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => onSelectProduct(flagshipProduct.slug)}
                  className="btn-atelier-primary flex-1 text-center justify-center py-3.5"
                >
                  <span>Examine Specimen</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
                <button
                  onClick={() => navigateTo('contact')}
                  className="btn-atelier-outline flex-1 text-center justify-center py-3.5"
                >
                  Custom Order
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
