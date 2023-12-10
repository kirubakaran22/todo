import { useContext } from "react";
import "./Header.css";
import MoonIcon from "../../assets/icons/MoonIcon";
import SunIcon from "../../assets/icons/SunIcon";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const themeCtx = useContext(ThemeContext);
  const themeHandler = () => {
    themeCtx.toogleTheme();
  };
  return (
    <header className="header">
      <div className="header-content">
        <h1>TODO</h1>
        {!themeCtx.theme && <MoonIcon onClick={themeHandler} />}
        {themeCtx.theme && <SunIcon onClick={themeHandler} />}
      </div>
    </header>
  );
};

export default Header;
