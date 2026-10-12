import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Gift Edit | Affordable Aesthetic & Personalised Gifting',
  description:
    'Thoughtful gifting, beautifully curated, without the luxury price. Discover dainty anti-tarnish jewellery, personalised Spotify frames, custom initial pendants, and luxury gift hampers.',
  keywords: [
    'affordable personalised gifts',
    'aesthetic gifts for girls',
    'birthday gifts for best friends',
    'personalised gifts for women',
    'jewellery gifting',
    'customised photo frames',
    'gifts for college friends',
    'The Gift Edit',
  ],
  authors: [{ name: 'The Gift Edit' }],
  openGraph: {
    title: 'The Gift Edit | Affordable Aesthetic & Personalised Gifting',
    description:
      'Thoughtfully curated jewellery, personalised keepsakes, and aesthetic gifts without the luxury price.',
    siteName: 'The Gift Edit',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="bg-brand-off-white text-brand-text font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
