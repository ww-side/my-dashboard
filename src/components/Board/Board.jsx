import React from "react";
import Header from "../UI/Header/Header";
import { useTheme } from "../../hooks/useTheme";
import Main from "../UI/Main/Main";

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
