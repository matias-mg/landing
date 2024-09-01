import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: "https://matiasm.com",
  integrations: [tailwind(), robotsTxt(), sitemap({
    i18n: {
      defaultLocale: "en",
      locales: {
        en: "en",
        es: "es",
        pt: "pt",
      },
    }
  })],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "pt"]
  },
  image: {
    service: passthroughImageService()
  },
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});