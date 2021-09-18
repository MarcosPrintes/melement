import {Colors, ThemeColors} from './';
/**
    - primary and secondary => appbars, buttons ...
    - Surface colors => map to components such as cards, sheets, and menus
    - Background color => is found behind scrollable content
    - Error color => indicates errors in components, such as text fields
 */
const PALLETE:ThemeColors = {
    primary: '#242424',
    onPrimary: '#f7f7f7',

    secondary: '#000000',
    onSecondary: '#ffffff',

    primaryLight: '#262626',
    onPrimaryLight: '#ffffff',

    background: '#ffffff',
    onBackground: '#000000',

    surface: '#ffffff',
    onSurface: '#000000',

    error: '#c41230',
    onError: '#ffffff'
}

export const MaleTheme:Colors = {
    name: 'male',
    colors: PALLETE,
}