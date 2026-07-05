// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Project site URL — used for sitemap, canonical URLs, and OG metadata.
  // Update if a custom domain is wired later (e.g. 'https://aic.caicoleung.dev').
  site: 'https://caicoleung.github.io',
  base: '/aic-web',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
