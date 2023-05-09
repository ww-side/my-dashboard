import React from "react";
import Header from "../UI/Header/Header";
import Main from "../UI/Main/Main";
import { useTheme } from "../../hooks/useTheme";

const Board = () => {
  const { isSwitchTheme, handleToggleTheme } = useTheme(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header
        isSwitchTheme={isSwitchTheme}
        handleToggleTheme={handleToggleTheme}
      />
      <Main isSwitchTheme={isSwitchTheme} />
    </div>
  );
};

export default Board;
