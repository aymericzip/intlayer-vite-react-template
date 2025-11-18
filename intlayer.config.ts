import { type IntlayerConfig, Locales } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.FRENCH,
      Locales.SPANISH,
      // Vos autres langues
    ],
    defaultLocale: Locales.ENGLISH,
  },
  editor: {
    applicationURL: "http://localhost:5173",
    enabled: true,
    // clientId: process.env.INTLAYER_CLIENT_ID,
    // clientSecret: process.env.INTLAYER_CLIENT_SECRET,
    liveSync: true,
  },
  build: {
    optimize: true,
    importMode: "dynamic",
  },
  ai: {
    apiKey: process.env.OPENAI_API_KEY,
  },
  log:{
    mode: "verbose",
  }
};

export default config;
