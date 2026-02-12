import { type FC, type ReactNode } from "react";
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router-dom";
import { useLocale } from "react-intlayer";
import { getLocalizedUrl } from "intlayer";

export interface LinkProps extends RouterLinkProps {
  children: ReactNode;
}

export const Link: FC<LinkProps> = ({ children, to, ...props }) => {
  const { locale } = useLocale();

  const localizedTo = typeof to === "string" ? getLocalizedUrl(to, locale) : to;

  return (
    <RouterLink {...props} to={localizedTo}>
      {children}
    </RouterLink>
  );
};
