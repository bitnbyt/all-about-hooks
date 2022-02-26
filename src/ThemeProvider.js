import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const ThemeContextUpdate = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const useThemeUpdate = () => {
  return useContext(ThemeContextUpdate)
}

export default function ThemeProvider({children}) {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={dark}>
      <ThemeContextUpdate.Provider value={toggleTheme}>
        {children}
      </ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  );
}
