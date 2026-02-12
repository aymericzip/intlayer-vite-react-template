import { useEffect } from "react";
import { useLocale } from "react-intlayer";
import { getLocaleLang, getHTMLTextDir } from "intlayer";

/**
 * Hook to update the <html> lang and dir attributes based on the current locale.
 */
export const useI18nHTMLAttributes = () => {
  const { locale } = useLocale();

  useEffect(() => {
    if (locale) {
      document.documentElement.lang = getLocaleLang(locale);
      document.documentElement.dir = getHTMLTextDir(locale);
    }
  }, [locale]);
};
