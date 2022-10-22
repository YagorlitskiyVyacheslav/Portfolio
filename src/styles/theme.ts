import { DefaultTheme } from "styled-components";

export const defaultColorConfig = {};

export type TTheme = "light";

type TThemingConfig = Record<TTheme, DefaultTheme>;

export const theming: TThemingConfig = {
  light: {
    palette: {
      currentTheme: "light",
      background: "#F5F5F5",
      foreground: "#005761",
      text: "#01579B",
      selection_background: "#ade2eb",
      selection_foreground: "#FFFFFF",
      buttons: "#c9eef2",
      second_background: "#e7f2f3",
      disabled: "#e7f2f3",
      contrast: "#E4F2F2",
      active: "#caedf2",
      border: "#d0edf1",
      highlight: "#d1eafa",
      tree: "#b6e1e780",
      notifications: "#e0eff1",
      accent_color: "#00c6e0",
      excluded_files_folor: "#c1def0",
    },
  },
};
