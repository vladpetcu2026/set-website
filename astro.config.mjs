// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sustainabletech.ro',
  trailingSlash: 'never',
  integrations: [
    tailwind({
      // Tinem global.css ca punct unic de inclusie (@tailwind directives + tokens).
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  i18n: {
    locales: ['ro', 'en'],
    defaultLocale: 'ro',
    routing: {
      prefixDefaultLocale: false, // / = RO, /en/ = EN
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
