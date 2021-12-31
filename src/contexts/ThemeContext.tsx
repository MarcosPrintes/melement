import { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { MaleTheme, FemaleTheme } from "../style/themes";

interface ThemeData {
  themeName: string;
  setThemeName: (themeName: "male" | "female") => void;
}

const themes = {
  male: MaleTheme,
  female: FemaleTheme,
};

export const ThemeContext = createContext<ThemeData>({
  themeName: "male",
  setThemeName: () => {
    return "male";
  },
});

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<"male" | "female">("male");
  const [currentTheme, setCurrentTheme] = useState(MaleTheme);

  useEffect(() => {
    setCurrentTheme(themes[themeName]);
  }, [themeName]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
