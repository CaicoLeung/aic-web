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
