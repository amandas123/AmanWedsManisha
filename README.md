# Aman & Manisha — Ring Ceremony

A single-page invitation built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React. Tap or click the temple to open its two halves and reveal “Welcome to the Ring Ceremony of Aman and Manisha.” Enter and Space work too. Reduced-motion users receive an immediate reveal without the portal animation. Focus moves to the revealed invitation.

## Run

```sh
npm ci --cache /tmp/wedding-npm-cache
npm run dev
```

Node 22+ is recommended. `npm run build` type-checks and builds to `dist/`. `npm run preview` serves the production build.

## Personalize

Edit `src/data/weddingData.ts` for the couple’s names and ceremony copy. Date and venue are omitted until confirmed. Replace `public/temple.svg` to change the transparent temple artwork. Fonts and artwork are bundled locally; no external services or credentials are needed.

The site contains only the temple entrance and ring ceremony invitation. The previous wedding celebrations, story, RSVP, wishes, music, and other sections have been removed. No guest data is collected or stored.

Page title, description, social metadata, and favicon are in `index.html` and `public/`. Update these if changing the couple’s names. For social sharing, use an absolute publicly hosted raster image URL for `og:image`.

## Deploy

Import the repository into Vercel or Netlify. Use `npm run build` as the build command and `dist` as the output directory. Deployments connected to `main` update when changes are pushed there.
