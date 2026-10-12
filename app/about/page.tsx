'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Sparkles, CheckCircle2, MessageCircleHeart, ArrowRight, ShieldCheck, Gift } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-24 sm:space-y-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cream border border-brand-blush/80 text-brand-burgundy text-xs font-medium tracking-wide">
            <Heart className="w-3.5 h-3.5 text-brand-dusty-rose" />
            <span>Our Story & Philosophy</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-burgundy font-normal leading-[1.15]">
            Thoughtful Gifting, <br />
            <span className="italic font-normal text-brand-burgundy-light">With a Personal Touch.</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-text-muted leading-relaxed font-normal">
            At The Gift Edit, we believe the best gifts are the ones that make someone feel understood. From personalised keepsakes to jewellery, accessories, and thoughtfully curated gifts, we bring together little things that can create meaningful memories.
          </p>
        </div>
      </section>

      {/* Narrative & Visual Storytelling */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Image Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury border border-brand-blush/60">
                <Image
                  src="/assets/brand/brand-image.png"
                  alt="Aesthetic Packaging & Ritual"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 rounded-2xl bg-brand-cream/60 border border-brand-blush/60 text-center">
                <span className="font-serif text-2xl font-bold text-brand-burgundy block">18–25</span>
                <span className="text-xs text-brand-text-muted mt-1 block">Curated for students & young adults</span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-5 rounded-2xl bg-brand-burgundy text-white text-center">
                <span className="font-serif text-2xl font-bold text-brand-cream block">₹349 – ₹1,799</span>
                <span className="text-xs text-brand-blush mt-1 block">Affordable luxury price points</span>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury border border-brand-blush/60">
                <Image
                  src="/assets/brand/female-model.png"
                  alt="Model wearing The Gift Edit dainty jewellery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Story */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-wider font-semibold text-brand-dusty-rose">
              Why We Exist
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-brand-burgundy font-normal leading-snug">
              Every Gift Deserves to Feel <br />
              <span className="italic">Deeply Personal.</span>
            </h2>

            <p className="text-sm sm:text-base text-brand-text leading-relaxed">
              We started The Gift Edit with a single guiding realization: finding a truly thoughtful gift shouldn’t mean choosing between overpriced luxury boutiques and impersonal mass-market products.
            </p>

            <p className="text-sm sm:text-base text-brand-text-muted leading-relaxed">
              Whether you are shopping for your best friend’s 21st birthday, looking for a sweet “just because” treat for your college roommate, or finding an initial pendant to keep someone close to you—every piece in our edit is chosen to spark joy, warmth, and genuine emotional connection.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-cream flex items-center justify-center flex-shrink-0 mt-0.5 text-brand-burgundy">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-brand-burgundy text-sm">Affordable Luxury Aesthetic</h3>
                  <p className="text-xs text-brand-text-muted">High-end presentation, satin ribbons, and premium materials without the inflated markups.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-cream flex items-center justify-center flex-shrink-0 mt-0.5 text-brand-burgundy">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-brand-burgundy text-sm">Personalisation With Ease</h3>
                  <p className="text-xs text-brand-text-muted">Initial letters, song codes, and custom wax-sealed cards tailored specifically to your story.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-cream flex items-center justify-center flex-shrink-0 mt-0.5 text-brand-burgundy">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-brand-burgundy text-sm">Approachable & Warm</h3>
                  <p className="text-xs text-brand-text-muted">Friendly concierge communication where you can discuss your gifting ideas directly with us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-brand-dusty-rose">
            What Guides Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-burgundy font-normal">
            Our Gifting Pillars
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-white p-8 border border-brand-blush/60 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-xl text-brand-burgundy font-serif">
                01
              </span>
              <h3 className="font-serif text-xl font-medium text-brand-burgundy">
                Thoughtfulness First
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                We believe that intentional details—the choice of an initial, a favorite shared song, a meaningful quote—make a gift unforgettable far more than a brand label.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 border border-brand-blush/60 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="w-12 h-12 rounded-full bg-brand-blush flex items-center justify-center text-xl text-brand-burgundy font-serif">
                02
              </span>
              <h3 className="font-serif text-xl font-medium text-brand-burgundy">
                Aesthetic Packaging Ritual
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                Unboxing is an experience. Each piece arrives enclosed in soft pastel boxes, tied with satin ribbon bows and paired with personalized stationery.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 border border-brand-blush/60 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-xl text-brand-burgundy font-serif">
                03
              </span>
              <h3 className="font-serif text-xl font-medium text-brand-burgundy">
                Fair, Honest Pricing
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                Accessible to college students, young professionals, and thoughtful friends without sacrificing anti-tarnish durability or packaging luxury.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-burgundy text-white p-10 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal">
              Ready to Craft Something Meaningful?
            </h2>
            <p className="text-sm sm:text-base text-brand-blush">
              Explore our collections or reach out to our team to assemble a customized gift set for your loved one.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/collections"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-cream text-brand-burgundy hover:bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span>Browse Collections</span>
                <ArrowRight className="w-4 h-4 text-brand-burgundy" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white hover:bg-white/10 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <MessageCircleHeart className="w-4 h-4 text-brand-cream" />
                <span>Contact Our Concierge</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
