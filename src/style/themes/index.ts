export { MaleTheme } from "./male";
export { FemaleTheme } from "./female";
export interface ThemeColors {
  primary: string;
  primaryDark?: string;
  primaryLight?: string;
  onPrimaryLight?: string;
  secondary: string;
  secondaryDark?: string;
  secondaryLight?: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
}

export interface Colors {
  name: string;
  colors: ThemeColors;
}

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: ThemeColors;
  }
}
