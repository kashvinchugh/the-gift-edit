'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Sparkles, SlidersHorizontal, Search, MessageCircleHeart, Heart } from 'lucide-react';
import ProductCard3D from '@/components/ProductCard3D';
import ProductDetailModal from '@/components/ProductDetailModal';
import EnquiryModal from '@/components/EnquiryModal';
import { products } from '@/data/products';
import { collections } from '@/data/collections';
import { Product } from '@/types';

type CategoryFilter =
  | 'All'
  | 'Personalized Gifts'
  | 'Customized Frames & Keepsakes'
  | 'Jewellery'
  | 'Accessories'
  | 'Gift Hampers';

function CollectionsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') as CategoryFilter | null;

  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(
    initialCategory || 'All'
  );
  const [selectedBudget, setSelectedBudget] = useState<'All' | 'under-500' | 'under-1000' | 'luxury'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: 'All Edits', value: 'All' },
    { label: 'Personalised Gifts', value: 'Personalized Gifts' },
    { label: 'Frames & Keepsakes', value: 'Customized Frames & Keepsakes' },
    { label: 'Dainty Jewellery', value: 'Jewellery' },
    { label: 'Accessories', value: 'Accessories' },
    { label: 'Curated Hampers', value: 'Gift Hampers' },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'All') {
        const normSelected = selectedCategory.toLowerCase().replace(/z/g, 's');
        const normCategory = p.category.toLowerCase().replace(/z/g, 's');
        if (normCategory !== normSelected && p.category !== selectedCategory) {
          return false;
        }
      }
      // Budget filter
      if (selectedBudget === 'under-500' && p.price > 500) {
        return false;
      }
      if (selectedBudget === 'under-1000' && p.price > 1000) {
        return false;
      }
      if (selectedBudget === 'luxury' && p.price < 1000) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDesc = p.shortDescription.toLowerCase().includes(q);
        const matchesCat = p.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCat) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedBudget, searchQuery]);

  const handleEnquire = (product: Product) => {
    setEnquiryProduct(product);
    setIsEnquiryOpen(true);
  };

  const handleViewDetails = (product: Product) => {
    setDetailProduct(product);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cream border border-brand-blush/80 text-brand-burgundy text-xs font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-brand-dusty-rose" />
          <span>Curated Product Discovery</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl text-brand-burgundy font-normal">
          The Gifting Edits
        </h1>

        <p className="text-sm sm:text-base text-brand-text-muted leading-relaxed font-normal">
          Explore our collection of dainty jewellery, customisable keepsakes, and lavish gift boxes. Every item is verified, photograph-accurate, and ready for your personal touch.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-6 pt-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-brand-burgundy text-white shadow-luxury'
                    : 'bg-white border border-brand-blush text-brand-text-muted hover:border-brand-dusty-rose hover:text-brand-burgundy'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Secondary Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-brand-blush/60 shadow-sm">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-brand-dusty-rose absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search jhumka, frame, necklace..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-brand-cream-soft border border-brand-blush/80 text-xs text-brand-text focus:outline-none focus:border-brand-burgundy"
            />
          </div>

          {/* Budget Selector */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs text-brand-text-muted">Budget Tier:</span>
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value as any)}
              className="px-3 py-1.5 rounded-xl bg-brand-cream-soft border border-brand-blush/80 text-xs text-brand-burgundy font-medium focus:outline-none focus:border-brand-burgundy"
            >
              <option value="All">All Budgets</option>
              <option value="under-500">Under ₹500</option>
              <option value="under-1000">Under ₹1,000</option>
              <option value="luxury">Luxe Edits (₹1,000+)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Results */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs text-brand-text-muted">
            Showing <strong className="text-brand-burgundy font-semibold">{filteredProducts.length}</strong> thoughtfully curated items
          </p>
          {(selectedCategory !== 'All' || selectedBudget !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedBudget('All');
                setSearchQuery('');
              }}
              className="text-xs text-brand-dusty-rose hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-brand-blush/40 p-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-brand-cream flex items-center justify-center text-brand-burgundy text-2xl">
              🎁
            </div>
            <h3 className="font-serif text-xl text-brand-burgundy font-medium">No Products Found</h3>
            <p className="text-xs text-brand-text-muted max-w-sm mx-auto">
              We couldn&apos;t find any items matching your exact filter combination. Try clearing your filters or search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedBudget('All');
                setSearchQuery('');
              }}
              className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand-burgundy text-white px-5 py-2 text-xs font-medium"
            >
              View All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard3D
                key={product.id}
                product={product}
                onEnquire={handleEnquire}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </div>

      {/* Helpful Customisation Callout */}
      <div className="rounded-3xl bg-brand-cream/60 border border-brand-blush/80 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-serif text-2xl text-brand-burgundy font-medium">
            Looking for a custom combination?
          </h3>
          <p className="text-xs sm:text-sm text-brand-text-muted max-w-xl">
            We happily assemble bespoke hampers combining your choice of jewellery, framed Spotify photo, custom chocolates, and handwritten notes.
          </p>
        </div>

        <button
          onClick={() => {
            setEnquiryProduct(null);
            setIsEnquiryOpen(true);
          }}
          className="inline-flex items-center gap-2 rounded-full bg-brand-burgundy text-white hover:bg-brand-burgundy-dark px-6 py-3 text-xs font-medium uppercase tracking-wider transition-all shadow-luxury flex-shrink-0"
        >
          <MessageCircleHeart className="w-4 h-4 text-brand-cream" />
          Request Custom Edit
        </button>
      </div>

      {/* Modals */}
      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        onEnquire={handleEnquire}
      />

      <EnquiryModal
        product={enquiryProduct}
        isOpen={isEnquiryOpen}
        onClose={() => {
          setIsEnquiryOpen(false);
          setEnquiryProduct(null);
        }}
      />
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-36 pb-24 text-center">
          <div className="w-10 h-10 border-2 border-brand-burgundy border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      }
    >
      <CollectionsContent />
    </Suspense>
  );
}
