// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Env-driven dual-target config (one source tree, two builds):
//   • Primary  → cPanel:   SITE_ORIGIN=https://www.lookupapp.net  BASE_PATH=/aic/
//   • Mirror   → Pages:    SITE_ORIGIN=https://caicoleung.github.io BASE_PATH=/aic-web/  NOINDEX=true
// Pages is a noindex mirror (serves old links, doesn't compete for index).
// Keep SITE_ORIGIN in src/config/site.ts in sync with these defaults.
const SITE_ORIGIN = process.env.SITE_ORIGIN ?? 'https://www.lookupapp.net';
const BASE_PATH = process.env.BASE_PATH ?? '/aic/';

// https://astro.build/config
export default defineConfig({
  // Inline all CSS into HTML (ADR-0021): total CSS (~34KB raw / ~6KB br)
  // is below the threshold where a separate render-blocking request pays
  // for itself — first paint = HTML arrival, always dark.
  build: { inlineStylesheets: 'always' },
  // site + base drive sitemap, canonical URLs, OG metadata, and asset paths.
  // Override per-deploy via env; defaults target the primary (cPanel) domain.
  site: SITE_ORIGIN,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  // i18n routing (ADR-0010): `/` stays English (default, no prefix);
  // zh/ja/ko live under path prefixes. redirectToDefaultLocale:false → no
  // server redirect. Locale follows the URL only — navigation chrome uses
  // locale-aware hrefs so visitors stay in their locale across pages;
  // no localStorage preference is stored or forced.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja', 'ko'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    // Emits sitemap-index.xml at the base path — matches the existing
    // robots.txt reference. The `i18n` option emits per-locale
    // <xhtml:link rel="alternate"> blocks (ADR-0010).
    sitemap({
      i18n: {
        defaultLocale: 'en',
        // hreflang codes — must match `LOCALE_HREFLANG` in src/i18n/config.ts
        // so sitemap alternates agree with the per-page hreflang tags.
        locales: {
          en: 'en',
          zh: 'zh-CN',
          ja: 'ja-JP',
          ko: 'ko-KR',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
