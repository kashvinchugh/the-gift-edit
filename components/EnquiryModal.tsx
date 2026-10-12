'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Sparkles, Heart } from 'lucide-react';
import { Product } from '@/types';

interface EnquiryModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({
  product,
  isOpen,
  onClose,
}: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    occasion: 'Birthday',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate enquiry registration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      contact: '',
      occasion: 'Birthday',
      message: '',
    });
    onClose();
  };

  // WhatsApp quick link
  const productText = product ? encodeURIComponent(`Hi! I'm interested in "${product.name}" from The Gift Edit. Could you share more details?`) : encodeURIComponent("Hi! I'd love to enquire about gifts from The Gift Edit.");
  const whatsappUrl = `https://wa.me/?text=${productText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-burgundy/40 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-brand-blush/60 p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-brand-cream-soft hover:bg-brand-blush text-brand-burgundy transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-brand-cream flex items-center justify-center text-brand-burgundy">
              <CheckCircle2 className="w-8 h-8 text-brand-burgundy" />
            </div>
            <h3 className="mt-4 font-serif text-2xl text-brand-burgundy font-medium">
              Thank You, {formData.name || 'Friend'}!
            </h3>
            <p className="mt-2 text-sm text-brand-text-muted leading-relaxed max-w-sm mx-auto">
              We received your enquiry for{' '}
              <strong className="text-brand-burgundy">{product ? product.name : 'The Gift Edit'}</strong>.
              Our gifting concierge will get in touch with you shortly via {formData.contact}.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-olive text-white px-5 py-2.5 text-xs font-medium hover:bg-brand-olive-light transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Chat Now on WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="rounded-full border border-brand-blush px-5 py-2.5 text-xs font-medium text-brand-burgundy hover:bg-brand-cream-soft"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-full bg-brand-cream text-brand-burgundy">
                <Heart className="w-4 h-4" />
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-brand-dusty-rose">
                Gifting Enquiry
              </span>
            </div>

            <h2 id="enquiry-modal-title" className="mt-2 font-serif text-2xl text-brand-burgundy font-medium">
              {product ? `Enquire About ${product.name}` : "Let's Find the Perfect Gift"}
            </h2>

            {product && (
              <p className="mt-1 text-xs text-brand-text-muted">
                Verified Price: <strong className="text-brand-burgundy">₹{product.price.toLocaleString('en-IN')}</strong> • Category: {product.category}
              </p>
            )}

            <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-burgundy mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Riya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-blush/80 text-sm text-brand-text focus:outline-none focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy bg-brand-off-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-burgundy mb-1">
                  WhatsApp or Email *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +91 98765 43210 or yourname@gmail.com"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-blush/80 text-sm text-brand-text focus:outline-none focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy bg-brand-off-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-burgundy mb-1">
                  Occasion
                </label>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-blush/80 text-sm text-brand-text focus:outline-none focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy bg-brand-off-white"
                >
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Friendship">Best Friend Surprise</option>
                  <option value="Just Because">Just Because</option>
                  <option value="Celebration">Celebration / Graduation</option>
                  <option value="Custom Order">Custom Bulk / Event</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-burgundy mb-1">
                  Personalisation Notes / Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us any preferred initials, custom song, photo preference, or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-blush/80 text-sm text-brand-text focus:outline-none focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy bg-brand-off-white resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-burgundy text-white hover:bg-brand-burgundy-dark px-6 py-3 text-xs font-medium uppercase tracking-wider transition-all disabled:opacity-60 shadow-luxury"
                >
                  <Send className="w-3.5 h-3.5 text-brand-cream" />
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-cream hover:bg-brand-blush text-brand-burgundy px-4 py-3 text-xs font-medium transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
