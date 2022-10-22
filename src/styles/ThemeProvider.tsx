import React, { ReactNode, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { theming, TTheme } from "@/styles/theme";

type TThemedSection = {
  theme: TTheme;
  children: ReactNode;
};

export const ThemeAppProvider: React.FC<TThemedSection> = (props) => {
  const { children, theme } = props;

  const themeConfig = useMemo(() => {
    if (theme === "light") {
      return theming.light;
    }
    return theming.light;
  }, [theme]);

  return <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>;
};
