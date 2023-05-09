import React from "react";
import SwitchButton from "./SwitchButton/SwitchButton";
import logo from "../../../assets/img/logo.png";
import githubDark from "../../../assets/img/github-icon.png";
import githubLight from "../../../assets/img/github-icon-white.png";

const Header = ({ isSwitchTheme, handleToggleTheme }) => {
  return (
    <header className={`py-4 ${isSwitchTheme ? "bg-white" : "bg-zinc-900"}`}>
      <nav className="flex justify-between px-6">
        <div className="flex items-center gap-2">
          <img className="w-[32px]" src={logo} alt="favicon" />
          <h1
            className={`text-3xl font-bold ${
              isSwitchTheme ? "text-zinc-900" : "text-white"
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
              src={isSwitchTheme ? githubDark : githubLight}
              alt="GitHub"
            />
          </a>
          <SwitchButton
            isSwitchTheme={isSwitchTheme}
            handleToggleTheme={handleToggleTheme}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
