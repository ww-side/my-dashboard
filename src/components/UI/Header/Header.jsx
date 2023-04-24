import React from "react";
import logo from "../../../file/logo.png";

const Header = ({ isWhiteTheme, switchButton }) => {
  return (
    <header className={`py-4 ${isWhiteTheme ? "bg-white" : "bg-zinc-900"}`}>
      <nav className="flex justify-between px-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="favicon" />
          <h1
            className={`text-3xl font-bold ${
              isWhiteTheme ? "text-zinc-900" : "text-white"
            }`}
          >
            My Board
          </h1>
        </div>
        {switchButton}
      </nav>
    </header>
  );
};

export default Header;
