import { getLocaleName, getLocalizedUrl } from "intlayer";
import type { FC } from "react";
import { useLocale } from "react-intlayer";
import { useNavigate, useLocation } from "react-router-dom";

export const LocaleSwitcher: FC = () => {
  const { pathname, search } = useLocation(); // Get the current URL path. Example: /fr/about
  const navigate = useNavigate();

  const { setLocale, locale, availableLocales } = useLocale({
    onLocaleChange: (locale) => {
      // Construct the URL with the updated locale
      // Example: /es/about
      const pathWithLocale = getLocalizedUrl(`${pathname}${search}`, locale);

      console.log({ pathWithLocale });

      // Update the URL path
      navigate(pathWithLocale);
    },
  });

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
        <button
          key={localeItem}
          type="button"
          onClick={() => {
            setLocale(localeItem);
          }}
          style={{
            display: "flex",
            border: locale === localeItem ? "2px solid" : "1px solid",
          }}
          aria-current={locale === localeItem ? "page" : undefined}
        >
          {/* Language in its own Locale - e.g. Français */}
          {getLocaleName(localeItem, locale)}
        </button>
      ))}
    </div>
  );
};
