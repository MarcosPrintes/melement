import {Colors, ThemeColors} from '.'
/**
    - primary and secondary => appbars, buttons ...
    - Surface colors => map to components such as cards, sheets, and menus
    - Background color => is found behind scrollable content
    - Error color => indicates errors in components, such as text fields
 */
const PALLETE:ThemeColors = {
    primary: '#949597',
    onPrimary: '#f7f7f7',

    primaryLight: '#949597',
    onPrimaryLight: '',

    secondary: '#f2f2f2',
    onSecondary: '#707070',

    background: '#ffffff',
    onBackground: '#000000',

    surface: '#ffffff',
    onSurface: '#000000',

    error: '#c41230',
    onError: '#ffffff',
}

export const FemaleTheme:Colors = {
    name: 'female',
    colors: PALLETE,
}