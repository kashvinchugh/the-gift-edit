# The Gift Edit — Informative Brand Website

> **"Thoughtful gifting, beautifully curated, without the luxury price."**  
> An editorial, feminine, and modern informative brand website for *The Gift Edit*, tailored for women and young adults aged 18–25 seeking affordable aesthetic and personalised gifting.

---

## 🌸 Brand Identity & Colour Palette

| Token | Name | Hex Code | Primary Purpose |
| :--- | :--- | :--- | :--- |
| `brand-burgundy` | **Deep Burgundy** | `#5F3848` | Primary editorial headings, key typography, primary CTAs |
| `brand-dusty-rose`| **Dusty Rose** | `#CB9996` | Interactive hover states, badges, decorative details |
| `brand-blush` | **Soft Blush** | `#E5CCC8` | Soft card borders, section accents, subtle dividers |
| `brand-cream` | **Warm Cream** | `#FEDED7` | Highlighted cards, badges, warm background containers |
| `brand-olive` | **Muted Olive Green** | `#505743` | Botanical accents, secondary button states |
| `brand-ivory` | **Soft Ivory** | `#FFFCFA` | Clean whitespace and airy background rhythm |
| `brand-off-white`| **Warm Off-White** | `#FAF7F4` | Primary page canvas background |
| `brand-text` | **Dark Text** | `#321D1B` | High-contrast accessible body text |

---

## 🚀 Key Features & Architectural Highlights

1. **Informative Discovery Model:**
   - Pure brand presentation and inquiry discovery.
   - **No** checkout gates, cart friction, or payment gateways.
   - Direct connection via interactive enquiry modals and one-click WhatsApp pre-fill.
2. **Interactive 3D Hero Experience:**
   - Real-time Three.js WebGL canvas (`components/ThreeHeroBox.tsx`).
   - Deep burgundy velvet gift box with dusty-rose lid, 3D sculpted loops/bow, floating ambient sparkles, soft drop shadows, and interactive pointer/touch parallax tilt.
   - Automatic pauses when out of viewport and respects `prefers-reduced-motion`.
3. **Interactive 3D Product Cards:**
   - Dynamic perspective hover tilt (`perspective: 1000px`), soft elevation, verified prices, category tags, and quick-enquire triggers.
4. **Complete Multi-Page Structure:**
   - **Home (`/`):** 9 rich editorial sections (Hero, Brand Philosophy, Collections Grid, Personalisation Spotlight, Featured Products, Gifting Ritual, 3-Step Process, Contact CTA, Footer).
   - **About Us (`/about`):** Detailed narrative of the brand's affordable luxury philosophy, unboxing ritual, and craftsmanship values.
   - **Collections & Discovery (`/collections`):** Filterable discovery hub with Category tabs, Budget tier dropdown, live text search, and full modal inspector.
   - **Contact Us (`/contact`):** Direct inquiry form with product pre-selection, validation, and direct WhatsApp / Email channels.
5. **Verified Photography Integration:**
   - Utilizes actual uploaded product assets (`jhumka-box.png`, `spotify-frame.png`, `initial-pendant-1.jpeg`, `kitkat-hamper.jpeg`, `youre-special-hamper.jpeg`, `brand-kit.png`, `brand-image.png`, `female-model.png`, `logo.png`).
6. **SEO Foundations:**
   - Semantic HTML5 structure.
   - XML Sitemap generation (`app/sitemap.ts`).
   - Robots crawler guide (`app/robots.ts`).
   - Social Open Graph and Twitter metadata.

---

## 💻 Running Locally

### Prerequisites
The workspace includes a self-contained Node.js runtime and pre-installed dependencies.

### One-Click Launch
```bash
# Start server on http://localhost:3000
./start-site.sh

# Stop server at any time
./stop-site.sh
```

### Manual Command Line Launch
```bash
# Export the bundled runtime
export PATH="./node-runtime/bin:$PATH"

# Development mode
npm run dev

# Or build and launch production mode
npm run build
npm start
```

Once running, open:
- **Home:** [http://localhost:3000](http://localhost:3000)
- **About Us:** [http://localhost:3000/about](http://localhost:3000/about)
- **Collections:** [http://localhost:3000/collections](http://localhost:3000/collections)
- **Contact:** [http://localhost:3000/contact](http://localhost:3000/contact)

---

## 🌐 Deployment Instructions

### 1. Deploying to Vercel (Recommended)
1. Push this directory to your GitHub / GitLab repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset will auto-detect as **Next.js**.
4. Click **Deploy**.

### 2. Deploying to Netlify
1. Connect repository in Netlify dashboard.
2. Build command: `npm run build`
3. Publish directory: `.next`

### 3. Deploying to Node / VPS
```bash
npm run build
npm run start -- -p 3000
```

---

## 📋 Configurable Business Placeholders

Before official commercial launch, update the following placeholders in `components/Footer.tsx`, `app/contact/page.tsx`, and `components/EnquiryModal.tsx`:

- [ ] **WhatsApp Number:** Currently set to `+91 90000 00000` (Configure in `whatsappUrl` links).
- [ ] **Email Address:** Currently set to `concierge@thegiftedit.com`.
- [ ] **Instagram Handle:** Currently set to `@thegiftedit`.
- [ ] **Physical Dispatch Hub / City:** Currently indicated as *"Dispatched Pan-India"*.
- [ ] **Domain Name:** Replace `https://thegiftedit.com` in `app/sitemap.ts` and `app/robots.ts` with your live custom domain.
