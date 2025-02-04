import { ToggleThemeButton } from "./ToggleThemeButton";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <ToggleThemeButton />
    </header>
  );
};
