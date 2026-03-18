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
    enabled: true,
    applicationURL: "http://localhost:5173",
    // clientId: process.env.INTLAYER_CLIENT_ID,
    // clientSecret: process.env.INTLAYER_CLIENT_SECRET,
    liveSync: true,
  },
  build: {
    optimize: false,
  },
  dictionary: {
    importMode: "dynamic",
  },
  ai: {
    apiKey: process.env.OPENAI_API_KEY,
  },
  log: {
    mode: "verbose",
  },
};

export default config;
