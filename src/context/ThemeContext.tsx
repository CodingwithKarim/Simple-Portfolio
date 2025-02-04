import React, { createContext, useState, useEffect } from "react";
import { ThemeContextType, ThemeProviderProps } from "../types/theme";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light-mode",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "light-mode";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-mode" ? "dark-mode" : "light-mode"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
