'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Sparkles, MessageCircleHeart, Check, Clock, ShieldCheck, Heart } from 'lucide-react';
import { Product } from '@/types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (product: Product) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onEnquire,
}: ProductDetailModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-burgundy/40 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-brand-blush/60 p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-brand-cream-soft hover:bg-brand-blush text-brand-burgundy transition-colors z-20"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-brand-cream-soft border border-brand-blush/40 shadow-sm">
              <Image
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      selectedImageIndex === idx
                        ? 'border-brand-burgundy scale-95 shadow-sm'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Story & Specifications */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-brand-dusty-rose">
                {product.category}
              </span>
              {product.isBestSeller && (
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-burgundy/10 px-2.5 py-0.5 text-[11px] font-medium text-brand-burgundy">
                  <Sparkles className="w-3 h-3 text-brand-dusty-rose" />
                  Bestseller
                </span>
              )}
            </div>

            <h2 id="modal-product-title" className="mt-2 font-serif text-2xl sm:text-3xl text-brand-burgundy font-medium leading-snug">
              {product.name}
            </h2>

            {/* Verified Price */}
            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-serif text-2xl font-bold text-brand-burgundy">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-brand-text-muted line-through">
                  ₹{product.compareAtPrice.toLocaleString('en-IN')}
                </span>
              )}
              {product.discountPercent && (
                <span className="rounded-full bg-brand-cream px-2 py-0.5 text-xs font-semibold text-brand-burgundy">
                  Save {product.discountPercent}%
                </span>
              )}
            </div>

            <p className="mt-4 text-sm text-brand-text leading-relaxed">
              {product.description}
            </p>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div className="mt-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-burgundy">
                  What’s Inside & Highlights
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {product.features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-brand-text">
                      <Check className="w-3.5 h-3.5 text-brand-dusty-rose mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Personalization Note */}
            {product.personalization?.enabled && (
              <div className="mt-5 p-3.5 rounded-2xl bg-brand-cream/60 border border-brand-blush/60">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-burgundy">
                  <Heart className="w-3.5 h-3.5 text-brand-dusty-rose" />
                  Personalisation Available
                </div>
                <p className="mt-1 text-xs text-brand-text-muted leading-relaxed">
                  This piece can be personalized (initials, custom note, song code, or photo). Share your customisation preferences when enquiring!
                </p>
              </div>
            )}

            {/* Packaging & Dispatch Info */}
            {product.details && (
              <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-brand-blush/30 text-xs text-brand-text-muted">
                <div>
                  <span className="font-semibold text-brand-burgundy block">Packaging</span>
                  <span>{product.details.packaging || 'Aesthetic luxury gift packaging'}</span>
                </div>
                <div>
                  <span className="font-semibold text-brand-burgundy block">Dispatch</span>
                  <span>{product.details.shippingTime || 'Dispatched promptly across India'}</span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-6 pt-5 border-t border-brand-blush/40 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onEnquire(product);
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-burgundy text-white hover:bg-brand-burgundy-dark px-6 py-3 text-sm font-medium transition-all shadow-luxury"
              >
                <MessageCircleHeart className="w-4 h-4 text-brand-cream" />
                Enquire About This Product
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-full border border-brand-blush text-xs font-medium text-brand-burgundy hover:bg-brand-cream-soft transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
