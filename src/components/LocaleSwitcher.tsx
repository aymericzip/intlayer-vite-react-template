import { getLocaleName, getLocalizedUrl } from "intlayer";
import type { FC } from "react";
import { useLocale } from "react-intlayer";

export const LocaleSwitcher: FC = () => {
  const { locale, availableLocales, setLocale } = useLocale();

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        display: "flex",
        gap: "1rem",
        right: "1rem",
        marginTop: "4rem",
      }}
    >
      {availableLocales.map((localeItem) => (
        <a
          href={getLocalizedUrl(location.pathname, localeItem)}
          hrefLang={localeItem}
          aria-current={locale === localeItem ? "page" : undefined}
          onClick={() => {
            setLocale(localeItem);
          }}
          key={localeItem}
          style={{
            display: "flex",
          }}
        >
          <button type="button">
            {/* Language in its own Locale - e.g. Français */}
            {getLocaleName(localeItem, locale)}
          </button>
        </a>
      ))}
    </div>
  );
};
