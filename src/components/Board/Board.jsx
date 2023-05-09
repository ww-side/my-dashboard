import React from "react";
import Header from "../UI/Header/Header";
import Main from "../UI/Main/Main";
import { useTheme } from "../../hooks/useTheme";

const Board = () => {
  const { isWhiteTheme, handleToggleTheme } = useTheme(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header
        isWhiteTheme={isWhiteTheme}
        handleToggleTheme={handleToggleTheme}
      />
      <Main isWhiteTheme={isWhiteTheme} />
    </div>
  );
};

export default Board;
