import { useState } from "react";

export const useTheme = () => {
  const [isSwitchTheme, setIsSwitchTheme] = useState(
    localStorage.getItem("isWhiteTheme") === "true"
  );

  const handleToggleTheme = () => {
    setIsSwitchTheme(prevState => {
      const newState = !prevState;
      localStorage.setItem("isWhiteTheme", newState.toString());

      return newState;
    });
  };

  return { isSwitchTheme, handleToggleTheme };
};
