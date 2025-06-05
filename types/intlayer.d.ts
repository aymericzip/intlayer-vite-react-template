/* eslint-disable */
import { Locales } from 'intlayer';
import type { AppContent as _1U6BM4I90yLovfHVxApc } from '../.intlayer/types/app.d.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "app": _1U6BM4I90yLovfHVxApc;
  }

  type ConfigLocales = Locales.ENGLISH | Locales.FRENCH | Locales.SPANISH;
  type ExtractedLocales = Extract<Locales, ConfigLocales>;
  type ExcludedLocales = Exclude<Locales, ConfigLocales>;

  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}