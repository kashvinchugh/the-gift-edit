'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Heart,
  MessageCircleHeart,
  CheckCircle2,
  Gift,
  Layers,
  Smile,
  Compass,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import ThreeHeroBox from '@/components/ThreeHeroBox';
import ProductCard3D from '@/components/ProductCard3D';
import ProductDetailModal from '@/components/ProductDetailModal';
import EnquiryModal from '@/components/EnquiryModal';
import { products } from '@/data/products';
import { collections } from '@/data/collections';
import { Product } from '@/types';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleEnquire = (product: Product) => {
    setEnquiryProduct(product);
    setIsEnquiryOpen(true);
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const featuredProducts = products.slice(0, 6);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      {/* =========================================================================
          SECTION 1: PREMIUM HERO EXPERIENCE
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Soft Background Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cream/60 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-brand-blush/40 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cream border border-brand-blush/80 text-brand-burgundy text-xs font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-brand-dusty-rose" />
                <span>Affordable Aesthetic & Personalised Gifting</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-burgundy font-normal tracking-tight leading-[1.15]">
                Little Gifts. <br />
                <span className="italic font-normal text-brand-burgundy-light">Lasting Feelings.</span>
              </h1>

              <p className="text-base sm:text-lg text-brand-text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Thoughtfully curated jewellery, personalised keepsakes, and aesthetic gifts made to make someone feel special—beautifully crafted without the luxury price tag.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/collections"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-burgundy text-white hover:bg-brand-burgundy-dark px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all shadow-luxury hover:shadow-luxury-hover"
                >
                  <span>Explore Our Collections</span>
                  <ArrowRight className="w-4 h-4 text-brand-cream" />
                </Link>

                <Link
                  href="/contact?interest=Personalisation"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-brand-burgundy/40 text-brand-burgundy hover:bg-brand-cream-soft px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <Heart className="w-3.5 h-3.5 text-brand-dusty-rose" />
                  <span>Create a Personalised Gift</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-brand-blush/40 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-left">
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-semibold text-brand-burgundy">₹349</span>
                  <p className="text-[11px] text-brand-text-muted">Starting From</p>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-semibold text-brand-burgundy">100%</span>
                  <p className="text-[11px] text-brand-text-muted">Anti-Tarnish Finishes</p>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-semibold text-brand-burgundy">Handmade</span>
                  <p className="text-[11px] text-brand-text-muted">With Personal Love</p>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Luxury Gift Box Experience */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-b from-brand-cream/40 via-brand-blush/20 to-transparent p-4 sm:p-6 border border-brand-blush/40 shadow-luxury">
                {/* 3D Canvas */}
                <ThreeHeroBox className="w-full h-full" />

                {/* Floating Micro-Badge */}
                <div className="absolute -bottom-4 -left-4 sm:left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-luxury border border-brand-blush flex items-center gap-3 animate-float-slow">
                  <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-burgundy">
                    <Gift className="w-5 h-5 text-brand-burgundy" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-burgundy">Signature Packaging</p>
                    <p className="text-[11px] text-brand-text-muted">Satin ribbons & handwritten cards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: BRAND INTRODUCTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-cream/50 border border-brand-blush/60 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Supporting Brand Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxury border border-brand-blush/60">
                <Image
                  src="/assets/brand/brand-image.png"
                  alt="The Gift Edit Warm Gifting Moments"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-brand-dusty-rose">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Philosophy</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-brand-burgundy font-normal leading-snug">
                A Little More Thought. <br />
                <span className="italic">A Little More Meaning.</span>
              </h2>

              <p className="text-sm sm:text-base text-brand-text leading-relaxed">
                At The Gift Edit, we believe finding a memorable present should never feel overwhelming or require an extravagant budget. The most cherished gifts are not the most expensive ones—they are the ones that whisper, <em>“I know you, I appreciate you, and this was made just for you.”</em>
              </p>

              <p className="text-sm sm:text-base text-brand-text-muted leading-relaxed">
                From two-letter initial necklaces that stay close to her heart to Spotify keepsake frames preserving your friendship anthem, we blend aesthetic packaging, personal customisation, and everyday durability at student and young-professional friendly prices.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/80 border border-brand-blush/60">
                  <h3 className="font-serif font-semibold text-brand-burgundy text-sm">Budget Without Compromise</h3>
                  <p className="text-xs text-brand-text-muted mt-1">High visual quality with realistic price points under ₹499 to ₹1,599.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/80 border border-brand-blush/60">
                  <h3 className="font-serif font-semibold text-brand-burgundy text-sm">Everyday Wear Durability</h3>
                  <p className="text-xs text-brand-text-muted mt-1">Hypoallergenic, waterproof, anti-tarnish stainless steel and natural wood.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SHOP BY COLLECTION
          ========================================================================= */}
      <section id="collections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-brand-dusty-rose">
            Curated Categories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-burgundy font-normal">
            Shop by Collection
          </h2>
          <p className="text-sm text-brand-text-muted">
            Explore our curated edits designed to make every birthday, friendship surprise, and special occasion unforgettable.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {collections.map((col, idx) => (
            <Link
              key={col.id}
              href={`/collections?category=${encodeURIComponent(col.filterCategory || '')}`}
              className="group relative rounded-2xl overflow-hidden bg-white border border-brand-blush/40 hover:border-brand-dusty-rose shadow-sm hover:shadow-luxury-hover transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream-soft">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {col.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-burgundy border border-brand-blush shadow-sm">
                    {col.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-xl text-brand-burgundy font-medium group-hover:text-brand-dusty-rose transition-colors">
                    {col.title}
                  </h3>
                  <p className="mt-1 text-xs text-brand-dusty-rose font-medium">
                    {col.tagline}
                  </p>
                  <p className="mt-2 text-xs text-brand-text-muted line-clamp-2 leading-relaxed">
                    {col.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-brand-blush/30 flex items-center justify-between text-xs font-semibold text-brand-burgundy">
                  <span>Explore Edits ({col.itemCount} items)</span>
                  <ArrowRight className="w-4 h-4 text-brand-dusty-rose transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PERSONALISATION SPOTLIGHT
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-burgundy text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-dusty-rose/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-brand-cream text-xs font-medium uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-brand-cream" />
                Tailored Details
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-snug">
                Made Personal. <br />
                <span className="italic text-brand-cream">Made Meaningful.</span>
              </h2>

              <p className="text-sm sm:text-base text-brand-blush leading-relaxed">
                Nothing touches the heart like a gift that was crafted specifically for them. We offer verified personalisation options across our signature catalogue:
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-brand-blush/90">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-cream/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cream" />
                  </div>
                  <div>
                    <strong className="text-white">Custom Initial Necklaces:</strong> Select any two initials (A–Z) suspended on 18K gold-finished anti-tarnish chains.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-cream/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cream" />
                  </div>
                  <div>
                    <strong className="text-white">Spotify Wooden Frames:</strong> Your favorite memory photo paired with a playable song code and handwritten quote.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-cream/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cream" />
                  </div>
                  <div>
                    <strong className="text-white">Handwritten Calligraphy Notes:</strong> Every hamper includes a custom dedication sealed with wax.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact?interest=Personalisation"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cream text-brand-burgundy hover:bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageCircleHeart className="w-4 h-4 text-brand-burgundy" />
                  <span>Ask About Customisation</span>
                </Link>

                <Link
                  href="/collections?category=Personalized+Gifts"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white hover:bg-white/10 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <span>View Personalised Gifts</span>
                </Link>
              </div>
            </div>

            {/* Visual Collage of Real Personalisation Assets */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-white/20">
                <Image
                  src="/assets/products/initial-pendant-1.jpeg"
                  alt="Personalised Initial Pendant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-white/20 mt-6">
                <Image
                  src="/assets/products/spotify-frame.png"
                  alt="Spotify Wooden Memory Frame"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FEATURED PRODUCTS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-brand-dusty-rose">
              Handpicked Pieces
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-burgundy font-normal">
              Featured Gifts & Edits
            </h2>
          </div>

          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-burgundy hover:text-brand-dusty-rose transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3D Product Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard3D
              key={product.id}
              product={product}
              onEnquire={handleEnquire}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: THE GIFTING EXPERIENCE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-cream/40 border border-brand-blush/60 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-brand-dusty-rose">
                Unboxing Ritual
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-brand-burgundy font-normal leading-snug">
                Because It&apos;s Never <br />
                <span className="italic">Just a Gift.</span>
              </h2>

              <p className="text-sm sm:text-base text-brand-text leading-relaxed">
                The joy of receiving begins before the box is even opened. We treat the entire unboxing ritual like an intimate, heartwarming celebration.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center text-brand-burgundy flex-shrink-0">
                    🎀
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-brand-burgundy text-sm">Ribbon-Tied Boxes</h3>
                    <p className="text-xs text-brand-text-muted mt-0.5">Heavy rigid keepsake boxes hand-tied with oversized dusty-rose satin ribbon bows.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center text-brand-burgundy flex-shrink-0">
                    ✍️
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-brand-burgundy text-sm">Handwritten Notes</h3>
                    <p className="text-xs text-brand-text-muted mt-0.5">Gold-foiled botanical cards penned in genuine ink calligraphy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center text-brand-burgundy flex-shrink-0">
                    ✨
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-brand-burgundy text-sm">Quote Display Cards</h3>
                    <p className="text-xs text-brand-text-muted mt-0.5">Every jewellery piece is mounted on aesthetic quotes that speak right to the heart.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center text-brand-burgundy flex-shrink-0">
                    🌿
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-brand-burgundy text-sm">Dried Botanicals</h3>
                    <p className="text-xs text-brand-text-muted mt-0.5">Fragrant baby&apos;s breath sprigs and mini dried rose bouquets for added charm.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury border border-brand-blush">
                <Image
                  src="/assets/products/youre-special-hamper.jpeg"
                  alt="The Gift Edit Complete Unboxing Experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: HOW IT WORKS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-brand-dusty-rose">
            Effortless Gifting
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-burgundy font-normal">
            How It Works in 3 Simple Steps
          </h2>
          <p className="text-sm text-brand-text-muted">
            We make ordering and customising gifts easy, transparent, and joyful.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="rounded-2xl bg-white p-8 border border-brand-blush/60 shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-brand-cream flex items-center justify-center font-serif text-xl font-bold text-brand-burgundy">
              01
            </div>
            <h3 className="mt-5 font-serif text-xl font-medium text-brand-burgundy">
              Step 1: Explore
            </h3>
            <p className="mt-2 text-xs text-brand-text-muted leading-relaxed">
              Browse our curated collections, aesthetic jewellery sets, and personalized keepsakes for your recipient.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl bg-white p-8 border border-brand-blush/60 shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-brand-blush flex items-center justify-center font-serif text-xl font-bold text-brand-burgundy">
              02
            </div>
            <h3 className="mt-5 font-serif text-xl font-medium text-brand-burgundy">
              Step 2: Personalise
            </h3>
            <p className="mt-2 text-xs text-brand-text-muted leading-relaxed">
              Tell us your custom initials, favorite Spotify track, dedication message, or preferred box color theme.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl bg-white p-8 border border-brand-blush/60 shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-brand-cream flex items-center justify-center font-serif text-xl font-bold text-brand-burgundy">
              03
            </div>
            <h3 className="mt-5 font-serif text-xl font-medium text-brand-burgundy">
              Step 3: Connect
            </h3>
            <p className="mt-2 text-xs text-brand-text-muted leading-relaxed">
              Message us directly via our form or WhatsApp to confirm availability, dispatch details, and next steps.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FINAL CONTACT CTA
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-cream p-10 sm:p-14 lg:p-16 text-center border border-brand-blush/80 shadow-luxury">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex p-3 rounded-full bg-white shadow-sm text-brand-burgundy">
              <Heart className="w-6 h-6 text-brand-dusty-rose" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-burgundy font-normal">
              Have Someone Special in Mind?
            </h2>

            <p className="text-base sm:text-lg text-brand-text-muted font-normal">
              Let&apos;s find a gift that feels just right. Tell us who you&apos;re celebrating, and we&apos;ll help you assemble a moment they&apos;ll never forget.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-burgundy text-white hover:bg-brand-burgundy-dark px-8 py-4 text-xs font-semibold uppercase tracking-wider transition-all shadow-luxury hover:shadow-luxury-hover"
              >
                <MessageCircleHeart className="w-4 h-4 text-brand-cream" />
                <span>Let&apos;s Talk Gifts</span>
              </Link>

              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-brand-burgundy/40 text-brand-burgundy hover:bg-white px-8 py-4 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span>Read Our Story</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
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
