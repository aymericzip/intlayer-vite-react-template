// intlayer.config.ts

import { Locales, type IntlayerConfig } from "intlayer";

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
    cmsURL: "http://localhost:3000",
    enabled: true,
    clientId: "ec98ac93750bf8a3d45eb6012dfbeb23",
    clientSecret:
      "30cf6b8dcbd0ee7c3c0ab9b95ee43542d8b33fa3eba8e02ee0dd08255fc091da",
  },
};

export default config;
