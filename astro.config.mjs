import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jburn.github.io',
  // Static files in assets/ are served from the site root.
  publicDir: './assets',
  output: 'static',
  trailingSlash: 'always',
});
