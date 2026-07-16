import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Use Cloudflare’s preview/production URL when building on Pages (canonical links, etc.).
const siteFromEnv =
  typeof process.env.CF_PAGES_URL === 'string' && process.env.CF_PAGES_URL.startsWith('http')
    ? process.env.CF_PAGES_URL
    : undefined;

// Static output for Cloudflare Pages (build → dist/). No wrangler deploy step needed.
export default defineConfig({
  site: siteFromEnv ?? 'https://calvin-tai.com',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: true })],
});
