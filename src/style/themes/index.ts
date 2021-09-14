export { MaleTheme } from './male';
export { FemaleTheme } from './female';

export interface Colors {
    name: string;
    colors: ThemeColors
}

export interface ThemeColors {
    primary: string,
    primaryDark?: string,
    primaryLight?: string,
    onPrimaryLight?: string,
    secondary: string,
    secondaryDark?: string,
    secondaryLight?: string,
    background: string,
    surface: string,
    error: string,
    onPrimary: string,
    onSecondary: string,
    onBackground: string,
    onSurface: string,
    onError: string,
}

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string,
        colors: ThemeColors
    }
}