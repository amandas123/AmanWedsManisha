# Aman & Manisha — Ring Ceremony

An invitation built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React, with three views:

1. A sky-blue temple cover with a transparent circular “Tap to Open” seal.
2. “Welcome to the Ring Ceremony of Aman and Manisha,” with a button to continue.
3. The ceremony date, Sunday, 6 December 2026, and Hotel Ankita with a Google Maps directions link.

Click, tap, Enter, and Space open the temple. The invitation and date/venue pages turn around a shared left spine like book pages, with perspective and soft paper shadows. Back navigation reverses the turn. Reduced-motion users receive immediate transitions. Focus moves to each page’s heading. The invitation and details use `#invitation` and `#details` URLs, support browser history, and can be refreshed directly.

## Run

```sh
npm ci --cache /tmp/wedding-npm-cache
npm run dev
```

Node 22+ is recommended. `npm run build` type-checks and builds to `dist/`. `npm run preview` serves the production build.

## Personalize

Edit `src/data/weddingData.ts` for the couple’s names, ceremony copy, date, venue, and Google Maps URL. No ceremony time has been supplied, so none is displayed. Replace `public/temple.svg` to change the transparent temple artwork. Fonts and artwork are bundled locally; no external services or credentials are needed.

The site contains only the temple entrance, ring ceremony invitation, and date/venue page. The previous wedding celebrations, story, RSVP, wishes, music, and other sections have been removed. No guest data is collected or stored.

Page title, description, social metadata, and favicon are in `index.html` and `public/`. Update these if changing the couple’s names. For social sharing, use an absolute publicly hosted raster image URL for `og:image`.

## Deploy

Import the repository into Vercel or Netlify. Use `npm run build` as the build command and `dist` as the output directory. Deployments connected to `main` update when changes are pushed there.
