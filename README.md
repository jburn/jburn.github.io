# Personal site

J. Bruun's personal website: software projects, media favourites, record collection, designs, and miscellaneous creations. Built with Astro, TypeScript, and CSS; published as a static site on GitHub Pages.

## Development

Use Node.js 24 (matching CI).

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. To test on another device on your network, run `npm run dev -- --host 0.0.0.0`.

Create a local `.env` with the credentials needed for the media pages:

```dotenv
IGDB_CLIENT_ID=
IGDB_CLIENT_SECRET=
TMDB_READ_ACCESS_TOKEN=
DISCOGS_USERNAME=
DISCOGS_TOKEN=
```

The Discogs token is optional for a public collection. Keep credentials out of version control. Metadata and collection data are fetched during development/build. Cover Art Archive images are downloaded before development/build and served locally; other external images and embedded players are loaded by the browser.

Album covers are cached in `public/assets/album-covers/` (gitignored), with 250px thumbnails and 1200px dialog images. The first run takes longer; later runs download only missing covers. Run `npm run cache:album-art` after adding albums while the dev server is running. To refresh a cover, delete its cached files and rerun the command. GitHub Actions restores this cache between builds.

## Content

- `src/content/projects/` — Markdown project pages.
- `src/data/` — media selections, designs, and miscellaneous entries.
- `src/components/` and `src/layouts/` — reusable UI and page layout.
- `src/pages/` — routes.
- `src/styles/global.css` — shared styles and theme colours.
- `public/assets/` — images and icons; `public/fonts/` — fonts.

## Build and deploy

```sh
npm run check
npm run build
npm run preview
```

The build outputs to `dist/`. GitHub Actions validates, builds, and deploys on pushes to `main`, or through a manual workflow run. Configure GitHub Pages to use GitHub Actions and add the environment variables above as repository secrets. Rebuild to refresh fetched media data.
