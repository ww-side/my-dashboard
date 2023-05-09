import React from "react";
import darkIcon from "../../../../assets/img/dark-theme-icon.png";
import lightIcon from "../../../../assets/img/light-theme-icon.png";

const SwitchButton = ({ isSwitchTheme, handleToggleTheme }) => {
  return (
    <img
      className="transition-all duration-500 ease-in-out transform
      w-[32px] hover:scale-105 cursor-pointer"
      onClick={handleToggleTheme}
      src={isSwitchTheme ? darkIcon : lightIcon}
      alt="switch-icon"
    />
  );
};

export default SwitchButton;
