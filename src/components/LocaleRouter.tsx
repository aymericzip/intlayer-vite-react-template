import { type FC, type ReactNode, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { IntlayerProvider, useLocale } from "react-intlayer";
import { type Locale, getPathWithoutLocale } from "intlayer";

const LocaleLoader: FC<{ children: ReactNode }> = ({ children }) => {
  const { locale, setLocale } = useLocale();
  const { locale: pathLocale } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathLocale && pathLocale !== locale) {
      setLocale(pathLocale as Locale);
    }
  }, [pathLocale, locale, setLocale]);

  useEffect(() => {
    if (!pathLocale) {
      const pathWithoutLocale = getPathWithoutLocale(pathname);
      navigate(`/${locale}${pathWithoutLocale}`, { replace: true });
    }
  }, [pathLocale, locale, navigate, pathname]);

  return <>{children}</>;
};

export const LocaleRouter: FC<{ children: ReactNode }> = ({ children }) => (
  <BrowserRouter>
    <IntlayerProvider>
      <Routes>
        <Route
          path="/:locale/*"
          element={<LocaleLoader>{children}</LocaleLoader>}
        />
        <Route path="*" element={<LocaleLoader>{children}</LocaleLoader>} />
      </Routes>
    </IntlayerProvider>
  </BrowserRouter>
);
