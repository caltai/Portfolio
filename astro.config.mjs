import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static output for Cloudflare Pages (build → dist/)
export default defineConfig({
  site: 'https://calvin-portfolio.pages.dev',
  output: 'static',
  integrations: [tailwind()],
});
