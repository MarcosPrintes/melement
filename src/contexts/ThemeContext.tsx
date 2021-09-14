import {createContext, useState, useEffect} from 'react';
import {MaleTheme, FemaleTheme } from '../style/themes';
import { ThemeProvider } from 'styled-components';

interface ThemeData {
    themeName: string
    setThemeName: (themeName: 'male' | 'female') => void
}

const themes = {
    male: MaleTheme,
    female: FemaleTheme
}

export const ThemeContext = createContext<ThemeData>({
    themeName: 'male',
    setThemeName: () => {}
});

export const ThemeContextProvider:React.FC = ({children}) => {
    const [themeName, setThemeName] = useState<'male' | 'female'>("male");
    const [currentTheme, setCurrentTheme] = useState(MaleTheme)

    useEffect(() => {
        setCurrentTheme(themes[themeName])
    }, [themeName])

    return (
        <ThemeContext.Provider value={{themeName, setThemeName}}>
            <ThemeProvider theme={currentTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}