import React from "react";
import logo from "../../../assets/img/logo.png";
import githubDark from "../../../assets/img/github-icon.png";
import githubLight from "../../../assets/img/github-icon-white.png";
import darkIcon from "../../../assets/img/dark-theme-icon.png";
import lightIcon from "../../../assets/img/light-theme-icon.png";

const Header = ({ isWhiteTheme, handleToggleTheme }) => {
  const switchButton = (
    <img
      className={
        "transition-all duration-500 ease-in-out transform w-[32px] " +
        "hover:scale-105 cursor-pointer"
      }
      onClick={handleToggleTheme}
      src={isWhiteTheme ? darkIcon : lightIcon}
      alt="switch-icon"
    />
  );

  return (
    <header className={`py-4 ${isWhiteTheme ? "bg-white" : "bg-zinc-900"}`}>
      <nav className="flex justify-between px-6">
        <div className="flex items-center gap-2">
          <img className="w-[32px]" src={logo} alt="favicon" />
          <h1
            className={`text-3xl font-bold ${
              isWhiteTheme ? "text-zinc-900" : "text-white"
            }`}
          >
            My Board
          </h1>
        </div>
        <div className="flex items-center gap-7">
          <a
            className="transition-all duration-500 ease-in-out
            hover:scale-105"
            href="https://github.com/ww-side"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[32px]"
              src={isWhiteTheme ? githubDark : githubLight}
              alt="GitHub"
            />
          </a>
          {switchButton}
        </div>
      </nav>
    </header>
  );
};

export default Header;
