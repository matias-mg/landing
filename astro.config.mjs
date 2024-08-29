import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://matiasm.com",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "pt"],
  },
  image: {
    service: passthroughImageService(),
  },
});