import { t, type Dictionary } from "intlayer";
import React, { type ReactNode } from "react";

const appContent = {
  key: "app",

  content: {
    test: t({
      en: "Vite logo",
    }),
  },
} satisfies Dictionary;

export default appContent;
