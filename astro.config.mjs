// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Project site URL — used for sitemap, canonical URLs, and OG metadata.
  // Update if a custom domain is wired later (e.g. 'https://aic.caicoleung.dev').
  site: 'https://caicoleung.github.io',
  base: '/aic-web',
  trailingSlash: 'ignore',
  integrations: [
    // Emits sitemap-index.xml at the base path — matches the existing
    // robots.txt reference. Required now that the site is multi-page.
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
