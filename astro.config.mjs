import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  // Update this to your production domain — required for canonical URLs, sitemap & SEO.
  site: "https://gtastack.com",
  trailingSlash: "ignore",
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  integrations: [
    tailwind({
      // We provide our own base styles in global.css.
      applyBaseStyles: false,
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
