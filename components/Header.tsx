'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircleHeart, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Collections', href: '/collections' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-blush/40 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-36 sm:w-44 h-10 sm:h-12">
              <Image
                src="/assets/brand/logo.png"
                alt="The Gift Edit Logo"
                fill
                priority
                className="object-contain object-left transition-transform group-hover:scale-102"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? 'text-brand-burgundy font-semibold'
                      : 'text-brand-text-muted hover:text-brand-burgundy'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-dusty-rose rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact CTA on the right */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-burgundy text-white hover:bg-brand-burgundy-dark px-5 py-2.5 text-xs font-medium tracking-wider uppercase transition-all shadow-luxury hover:shadow-luxury-hover"
            >
              <MessageCircleHeart className="w-3.5 h-3.5 text-brand-cream" />
              <span>Let&apos;s Talk Gifts</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/contact"
              className="p-2 rounded-full bg-brand-cream text-brand-burgundy"
              aria-label="Enquire"
            >
              <MessageCircleHeart className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-brand-cream-soft hover:bg-brand-blush text-brand-burgundy transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/98 backdrop-blur-xl border-b border-brand-blush px-6 py-6 shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-brand-cream text-brand-burgundy font-semibold'
                      : 'text-brand-text hover:bg-brand-cream-soft'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-brand-blush/40 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-burgundy text-white py-3 text-xs font-medium tracking-wider uppercase shadow-luxury"
              >
                <MessageCircleHeart className="w-4 h-4 text-brand-cream" />
                Let&apos;s Talk Gifts
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
