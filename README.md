# Momzart - Premium Handmade Candle Ecommerce

Momzart is a production-ready ecommerce storefront built with **Next.js + TypeScript + Tailwind CSS**.
It is designed for zero-backend deployment and works fully with local JSON product data and browser localStorage.

## Highlights

- Premium minimal UI (beige / ivory / soft gold theme)
- Homepage hero, categories, and featured products
- Product listing with:
  - category filter
  - price sorting (low-high / high-low)
  - search
- Product detail page with image gallery, pricing, rating, wishlist/cart actions
- Cart with quantity controls and live totals (stored in `localStorage`)
- Wishlist (stored in `localStorage`)
- Checkout form + order summary flow
- PWA support:
  - `manifest.json`
  - service worker
  - standalone display
  - Add to Home Screen compatibility
  - offline fallback page

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- JSON product catalog (`src/data/products.json`)

## Project Structure

```bash
src/
  app/
    page.tsx
    products/
    cart/
    wishlist/
    checkout/
    order-summary/
    offline/
  components/
  context/
  data/
  lib/
public/
  manifest.json
  sw.js
  icons/
```

## Local Development

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Production Build

```bash
npm install
npm run build
npm run start
```

This project does **not** require Prisma, PostgreSQL, environment variables, or external services.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build`
5. Output: default Next.js output.
6. No environment variables required.
7. Deploy.

## PWA Notes

- Manifest is served from `/manifest.json`.
- Service worker is served from `/sw.js` and registered client-side.
- App supports standalone mode and offline navigation fallback (`/offline`).

