# Bruun personal website

Plain HTML, CSS, and JavaScript. No framework, dependencies, or build step.

## Development

With Node.js installed, run `npm run dev` and open http://localhost:3000.
No `npm install` is needed. Refresh the browser after editing; stop the server with Ctrl+C.
The preview server listens only on your computer and serves only `public/`.

## Files

- `public/index.html`: home page
- `public/projects/index.html`: projects page
- `public/media/index.html`: media page
- `public/styles.css`: shared styles
- `public/main.js`: optional JavaScript
- `public/assets/images/`: logo and content images
- `public/assets/icons/`: social icons and app icons
- `public/assets/flags/`: language flags
- `public/favicon.ico`: browser favicon at the site root
- `public/`: all published files
- `scripts/serve.mjs`: local preview server, not deployed

Edit the navigation in all three HTML files when adding pages. Use root-relative
asset links, such as `/styles.css`, for this repository's root GitHub Pages site.

## Publishing

Work on `v2` until the replacement is ready. The GitHub Pages workflow publishes
`public/` when changes reach `main`; there is no npm or build step in deployment.
The old Next.js site is preserved on `archive/v1`.
