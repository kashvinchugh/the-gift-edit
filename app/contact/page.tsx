'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { MessageCircleHeart, Send, CheckCircle2, MessageCircle, Mail, Instagram, Sparkles, Heart } from 'lucide-react';

function ContactContent() {
  const searchParams = useSearchParams();
  const prefilledInterest = searchParams.get('interest') || '';
  const prefilledProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    productOrCollection: prefilledProduct || (prefilledInterest === 'Personalisation' ? 'Personalised Initial Jewellery / Spotify Frame' : 'Curated Gift Hampers'),
    occasion: 'Birthday',
    message: prefilledInterest === 'Personalisation' ? 'Hi! I would love to ask about customisation options for a gift...' : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        productOrCollection: prefilledProduct,
      }));
    }
  }, [prefilledProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi The Gift Edit! My name is ${formData.name || 'a customer'}, and I'd like to enquire about "${formData.productOrCollection}" for a ${formData.occasion}.`
  );
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cream border border-brand-blush/80 text-brand-burgundy text-xs font-medium tracking-wide">
          <Heart className="w-3.5 h-3.5 text-brand-dusty-rose" />
          <span>Gifting Concierge</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl text-brand-burgundy font-normal">
          Let&apos;s Make Someone&apos;s Day.
        </h1>

        <p className="text-sm sm:text-base text-brand-text-muted leading-relaxed font-normal">
          Tell us what you&apos;re looking for, who you&apos;re gifting, and any personal touches you&apos;d love to include. We&apos;ll help you curate the perfect gift.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info & Channels [Configurable Placeholders] */}
        <div className="lg:col-span-5 space-y-8">
          <div className="rounded-3xl bg-brand-cream/60 p-8 border border-brand-blush/80 space-y-6">
            <h2 className="font-serif text-2xl text-brand-burgundy font-medium">
              Direct Contact Channels
            </h2>
            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
              Have a quick question about order timelines, custom initial availability, or express dispatch? Message us directly through our official channels.
            </p>

            <div className="space-y-4 pt-2">
              {/* WhatsApp Placeholder */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-blush/60 hover:border-brand-dusty-rose transition-all shadow-sm group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-burgundy group-hover:bg-brand-burgundy group-hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-brand-burgundy block">WhatsApp Concierge</span>
                  <span className="text-xs text-brand-text-muted">+91 90000 00000 <span className="text-[10px] text-brand-dusty-rose">[Configurable]</span></span>
                </div>
              </a>

              {/* Email Placeholder */}
              <a
                href="mailto:concierge@thegiftedit.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-blush/60 hover:border-brand-dusty-rose transition-all shadow-sm group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-burgundy group-hover:bg-brand-burgundy group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-brand-burgundy block">Email Enquiries</span>
                  <span className="text-xs text-brand-text-muted">concierge@thegiftedit.com <span className="text-[10px] text-brand-dusty-rose">[Placeholder]</span></span>
                </div>
              </a>

              {/* Instagram Placeholder */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-blush/60 hover:border-brand-dusty-rose transition-all shadow-sm group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-burgundy group-hover:bg-brand-burgundy group-hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-brand-burgundy block">Instagram DM</span>
                  <span className="text-xs text-brand-text-muted">@thegiftedit <span className="text-[10px] text-brand-dusty-rose">[Placeholder]</span></span>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 border border-brand-blush/40 text-xs text-brand-text-muted">
              🌸 <strong>Dispatch Guarantee:</strong> We pack every order with bubble cushioning, rigid boxes, and satin ribbons to ensure pristine transit across India.
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-white p-8 sm:p-10 border border-brand-blush shadow-luxury">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-cream flex items-center justify-center text-brand-burgundy">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-brand-burgundy font-medium">
                  We Have Received Your Note!
                </h3>
                <p className="text-xs sm:text-sm text-brand-text-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-brand-burgundy">{formData.name}</strong>. Our team will review your enquiry for <em>{formData.productOrCollection}</em> and respond via {formData.contact} as soon as possible.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-olive text-white px-6 py-3 text-xs font-medium hover:bg-brand-olive-light transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Open WhatsApp Chat Now
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        contact: '',
                        productOrCollection: 'Curated Gift Hampers',
                        occasion: 'Birthday',
                        message: '',
                      });
                    }}
                    className="rounded-full border border-brand-blush px-6 py-3 text-xs font-medium text-brand-burgundy hover:bg-brand-cream-soft"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-burgundy mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Diya Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-blush/80 text-sm text-brand-text bg-brand-cream-soft focus:outline-none focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-burgundy mb-1.5">
                      Preferred Contact Method *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="WhatsApp phone or Email address"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-blush/80 text-sm text-brand-text bg-brand-cream-soft focus:outline-none focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-burgundy mb-1.5">
                      Product or Collection of Interest *
                    </label>
                    <select
                      value={formData.productOrCollection}
                      onChange={(e) => setFormData({ ...formData, productOrCollection: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-blush/80 text-sm text-brand-text bg-brand-cream-soft focus:outline-none focus:border-brand-burgundy"
                    >
                      <option value="Curated Gift Hampers">Curated Gift Hampers</option>
                      <option value="Personalised Gifts">Personalised Gifts (Initial Necklace, etc.)</option>
                      <option value="Customised Frames & Keepsakes">Customised Frames & Keepsakes (Spotify Frame)</option>
                      <option value="Jewellery">Dainty Jewellery (Meenakari Jhumkas, Chains)</option>
                      <option value="Accessories">Silk & Hair Accessories</option>
                      <option value="Bespoke Combination">Custom Bulk / Event Combination</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-burgundy mb-1.5">
                      Gifting Occasion
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-blush/80 text-sm text-brand-text bg-brand-cream-soft focus:outline-none focus:border-brand-burgundy"
                    >
                      <option value="Birthday">Birthday</option>
                      <option value="Best Friend Surprise">Best Friend Surprise</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Graduation / New Milestone">Graduation / New Milestone</option>
                      <option value="Just Because">Just Because</option>
                      <option value="Festive / Other">Festive / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-burgundy mb-1.5">
                    Your Message & Personalisation Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you have in mind—such as recipient name, song preference, specific letter initials, or delivery date requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-blush/80 text-sm text-brand-text bg-brand-cream-soft focus:outline-none focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-burgundy text-white hover:bg-brand-burgundy-dark px-8 py-4 text-xs font-semibold uppercase tracking-wider transition-all disabled:opacity-60 shadow-luxury hover:shadow-luxury-hover"
                  >
                    <Send className="w-4 h-4 text-brand-cream" />
                    <span>{isSubmitting ? 'Sending Your Message...' : 'Submit Gifting Enquiry'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-36 pb-24 text-center">
          <div className="w-10 h-10 border-2 border-brand-burgundy border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
