'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Sparkles, MessageCircleHeart, Eye, ArrowUpRight } from 'lucide-react';
import { Product } from '@/types';

interface ProductCard3DProps {
  product: Product;
  onEnquire: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard3D({
  product,
  onEnquire,
  onViewDetails,
}: ProductCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle tilt: max 6 degrees
    const rX = -((y - centerY) / centerY) * 6;
    const rY = ((x - centerX) / centerX) * 6;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl bg-white p-4 transition-all duration-300 ease-out border border-brand-blush/40 hover:border-brand-dusty-rose/60 hover:shadow-luxury-hover"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
          isHovered ? 'scale3d(1.015, 1.015, 1.015)' : 'scale3d(1, 1, 1)'
        }`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Product Image Area */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-brand-cream-soft">
        <Image
          src={product.images[0] || '/assets/brand/brand-kit.png'}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestSeller && (
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-burgundy px-2.5 py-0.5 text-[11px] font-medium tracking-wider uppercase text-white shadow-sm">
              <Sparkles className="w-3 h-3 text-brand-cream" />
              Bestseller
            </span>
          )}
          {product.personalization?.enabled && (
            <span className="rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-medium tracking-wider uppercase text-brand-burgundy shadow-sm border border-brand-blush">
              Personalised
            </span>
          )}
        </div>

        {/* Quick View Floating Trigger */}
        <div className="absolute inset-0 bg-brand-burgundy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            onClick={() => onViewDetails(product)}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-4 py-2 text-xs font-medium text-brand-burgundy shadow-luxury hover:bg-white hover:text-brand-burgundy-dark transition-all transform translate-y-2 group-hover:translate-y-0"
            aria-label={`View details for ${product.name}`}
          >
            <Eye className="w-3.5 h-3.5 text-brand-dusty-rose" />
            View Details
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="mt-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between text-xs text-brand-text-muted">
          <span>{product.category}</span>
          {product.rating && (
            <span className="flex items-center gap-1 font-medium text-brand-burgundy">
              ★ {product.rating.toFixed(1)}
            </span>
          )}
        </div>

        <h3
          onClick={() => onViewDetails(product)}
          className="mt-1.5 font-serif text-lg font-medium text-brand-burgundy line-clamp-1 hover:text-brand-dusty-rose cursor-pointer transition-colors"
        >
          {product.name}
        </h3>

        <p className="mt-1 text-xs text-brand-text-muted line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Price & Action Row */}
        <div className="mt-4 pt-3 border-t border-brand-blush/30 flex items-center justify-between">
          <div>
            <span className="text-xs text-brand-text-muted block">Verified Price</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg font-semibold text-brand-burgundy">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.compareAtPrice && (
                <span className="text-xs text-brand-text-muted line-through">
                  ₹{product.compareAtPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={() => onEnquire(product)}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-cream hover:bg-brand-blush text-brand-burgundy px-3.5 py-1.5 text-xs font-medium transition-all hover:shadow-sm"
            aria-label={`Enquire about ${product.name}`}
          >
            <MessageCircleHeart className="w-3.5 h-3.5 text-brand-burgundy" />
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}
