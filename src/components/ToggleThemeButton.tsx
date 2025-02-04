import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ToggleThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light-mode" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};
