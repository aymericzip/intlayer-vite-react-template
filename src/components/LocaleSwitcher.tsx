import { getLocaleName, getLocalizedUrl } from "intlayer";
import type { FC } from "react";
import { useLocale } from "react-intlayer";
import { useNavigate, useLocation } from "react-router-dom";

export const LocaleSwitcher: FC = () => {
  const { locale, availableLocales, setLocale } = useLocale();
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
            navigate(getLocalizedUrl(pathname, localeItem));
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
