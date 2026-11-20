# Aman & Manisha — Ring Ceremony

A single-page invitation for Aman and Manisha’s Ring Ceremony. Olive botanical doors open onto a peach invitation with calligraphic names, a greeting, a scratch-to-reveal date, a live countdown, and venue directions.

The doors open with a click, tap, or keyboard activation. Guests can scratch the heart with a mouse or touch, or select “Reveal date.” The countdown uses 12:00 PM India Standard Time on 6 December 2026. The `#invitation` and `#details` links open directly to the corresponding sections.

## Run

```sh
npm ci --cache /tmp/wedding-npm-cache
npm run dev
```

Node 22+ is recommended. `npm run build` type-checks and builds to `dist/`. `npm run preview` serves the production build.

## Personalize

Edit `src/data/weddingData.ts` for the couple’s names, ceremony date and time, venue, and Google Maps URL. Fonts are bundled locally. Google Maps opens only when a guest follows the directions link.

Page title, description, social metadata, and favicon are in `index.html` and `public/`. Update these if changing the couple’s names.

## Deploy

Import the repository into Vercel or Netlify. Use `npm run build` as the build command and `dist` as the output directory. Deployments connected to `main` update when changes are pushed there.
