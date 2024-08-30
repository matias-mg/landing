import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: "https://matiasm.com",
  integrations: [tailwind(), robotsTxt()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "pt"],
  },
  image: {
    service: passthroughImageService(),
  },
});