import "styled-components";

// Inspired by https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3

interface IPalette {
  currentTheme: "light";
  background: string;
  foreground: string;
  text: string;
  selection_background: string;
  selection_foreground: string;
  buttons: string;
  second_background: string;
  disabled: string;
  contrast: string;
  active: string;
  border: string;
  highlight: string;
  tree: string;
  notifications: string;
  accent_color: string;
  excluded_files_folor: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: IPalette;
  }
}
