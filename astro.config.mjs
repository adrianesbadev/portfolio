// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// URL pública del sitio (para OG, canonical, sitemap).
// En Vercel: usa SITE_URL si la defines, o la URL *.vercel.app automática.
const siteUrl =
  process.env.SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
  'https://adrianesbadev.github.io';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: siteUrl,
});
