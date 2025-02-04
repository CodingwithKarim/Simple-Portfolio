import { ToggleThemeButton } from "./ToggleThemeButton";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Karim's Portfolio</h1>
      <ToggleThemeButton />
    </header>
  );
};
