# Ranbir & Alia — Wedding invitation

A mobile-first invitation built with React, TypeScript, Vite, Tailwind CSS 4, Framer Motion, and Lucide React. Includes a naturally scrolling temple portal, reduced-motion support, revealable date, celebrations, carousel, video, live countdown, downloadable calendar reminder, RSVP, and a local wishes wall.

## Run

```sh
npm ci --cache /tmp/wedding-npm-cache
npm run dev
```

`npm run build` type-checks and builds to `dist/`. `npm run preview` serves that production build. Node 22 or newer is recommended.

## Personalize

Edit `src/data/weddingData.ts` for the couple, family names, dates, events, venue, contact email, images, hashtag, YouTube video ID, and soundtrack URL. The sample event dates, family names, story copy, and generated editorial wedding photographs are illustrative; replace them before sharing. Wedding time is configured in India Standard Time. Keep `date`, calendar timestamps, and display date fields synchronized.

Replace `public/temple.svg` with your supplied transparent artwork, preserving that path (or update both image references in `Hero.tsx`). No artwork was supplied, so an original SVG mandap is included. Replace the generated editorial triptych with your own photos. Set each image’s `panel` (and event `imagePanel`) to `undefined` when using a full individual photograph. The film and music controls show a coming-soon state until configured. Audio only starts after user interaction.

Site title, description, Open Graph information, and favicon are in `index.html` and `public/`. Set the Open Graph image to an absolute publicly hosted raster image URL before deployment for broad social sharing compatibility. Fonts are bundled locally; photography is bundled locally. The YouTube embed uses youtube-nocookie.com and is loaded only after pressing play.

## Responses and wishes

RSVPs and wishes are stored in localStorage on the current browser. **They are not submitted to the couple or shared between visitors.** Connect `RSVP.tsx` to a backend or form service before collecting real responses. The local storage keys are `wedding-rsvps` and `wedding-wishes`. Do not use local storage for sensitive guest information.

## Validation

The TypeScript/production build passes. Chromium smoke checks cover date reveal, valid RSVP, wish persistence after reload, reduced-motion rendering, JavaScript errors, and horizontal overflow at a 390px viewport. No external credentials are needed to develop the site. No backend is included.
