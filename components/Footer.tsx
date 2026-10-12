'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Instagram, Mail, MessageCircle, MapPin, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-cream/40 border-t border-brand-blush/60 pt-16 pb-12 text-brand-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative w-44 h-12">
              <Image
                src="/assets/brand/logo.png"
                alt="The Gift Edit Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-brand-text-muted max-w-sm leading-relaxed">
              Thoughtful gifting, beautifully curated, without the luxury price. Made with love for your closest connections, milestones, and everyday surprises.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-brand-blush/60 flex items-center justify-center text-brand-burgundy hover:bg-brand-burgundy hover:text-white transition-all shadow-sm"
                aria-label="Instagram [Placeholder]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-brand-blush/60 flex items-center justify-center text-brand-burgundy hover:bg-brand-burgundy hover:text-white transition-all shadow-sm"
                aria-label="WhatsApp Concierge [Placeholder]"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:concierge@thegiftedit.com"
                className="w-9 h-9 rounded-full bg-white border border-brand-blush/60 flex items-center justify-center text-brand-burgundy hover:bg-brand-burgundy hover:text-white transition-all shadow-sm"
                aria-label="Email Enquiry [Placeholder]"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-brand-burgundy uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-brand-text-muted hover:text-brand-burgundy transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-brand-text-muted hover:text-brand-burgundy transition-colors">
                  About Our Brand
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-brand-text-muted hover:text-brand-burgundy transition-colors">
                  Explore Collections
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-text-muted hover:text-brand-burgundy transition-colors">
                  Enquire & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-brand-burgundy uppercase tracking-wider">
              Collections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/collections?category=Personalized+Gifts" className="text-brand-text-muted hover:text-brand-burgundy transition-colors">
                  Personalised Gifts
                </Link>
              </li>
              <li>
                <Link href="/collections?category=Customized+Frames+%26+Keepsakes" className="text-brand-text-muted hover:text-brand-burgundy transition-colors">
                  Customised Frames & Keepsakes
                </Link>
              </li>
              <li>
                <Link href="/collections?category=Jewellery" className="text-brand-text-muted hover:text-brand-burgundy transition-colors">
                  Dainty Jewellery
                </Link>
              </li>
              <li>
                <Link href="/collections?category=Accessories" className="text-brand-text-muted hover:text-brand-burgundy transition-colors">
                  Silk & Hair Accessories
                </Link>
              </li>
              <li>
                <Link href="/collections?category=Gift+Hampers" className="text-brand-text-muted hover:text-brand-burgundy transition-colors">
                  Curated Gift Hampers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details [Configurable Placeholders] */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-brand-burgundy uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-2.5 text-xs text-brand-text-muted">
              <div className="flex items-start gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-brand-dusty-rose mt-0.5 flex-shrink-0" />
                <span>WhatsApp: <strong className="text-brand-burgundy">+91 90000 00000</strong> <span className="text-[10px] text-brand-text-muted/70">(Configurable)</span></span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-dusty-rose mt-0.5 flex-shrink-0" />
                <span>Email: <strong className="text-brand-burgundy">concierge@thegiftedit.com</strong> <span className="text-[10px] text-brand-text-muted/70">(Placeholder)</span></span>
              </div>
              <div className="flex items-start gap-2">
                <Instagram className="w-3.5 h-3.5 text-brand-dusty-rose mt-0.5 flex-shrink-0" />
                <span>Instagram: <strong className="text-brand-burgundy">@thegiftedit</strong> <span className="text-[10px] text-brand-text-muted/70">(Placeholder)</span></span>
              </div>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded-full bg-brand-cream text-[10px] font-medium text-brand-burgundy">
                  Dispatched Pan-India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-blush/40 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-text-muted gap-4">
          <p>© {new Date().getFullYear()} The Gift Edit. All rights reserved. Thoughtfully created.</p>
          <div className="flex items-center gap-6">
            <span>Affordable Aesthetic & Personalised Gifting</span>
            <span className="hidden sm:inline">•</span>
            <Link href="/contact" className="hover:text-brand-burgundy transition-colors">
              Customer Enquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
