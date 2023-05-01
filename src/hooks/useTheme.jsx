import { useState } from "react";

export const useTheme = () => {
  const [isWhiteTheme, setIsWhiteTheme] = useState(
    localStorage.getItem("isWhiteTheme") === "true"
  );

  const handleToggleTheme = () => {
    setIsWhiteTheme(prevState => {
      const newState = !prevState;
      localStorage.setItem("isWhiteTheme", newState.toString());

      return newState;
    });
  };

  return { isWhiteTheme, handleToggleTheme };
};
