import React from 'react';
import githubIcon from '../../../file/github-icon.png';

const Footer = ({ isWhiteTheme }) => {
  return (
    <footer
      className={`flex flex-col items-center justify-center ${
        isWhiteTheme ? 'bg-zinc-200' : 'bg-zinc-800'
      }`}
    >
      <hr
        className={`w-[500px] mt-2 mb-2 ${
          isWhiteTheme ? 'border-zinc-400' : 'border-zinc-600'
        }`}
      />
      <div className="mb-2">
        <a
          className="transition-all duration-500 ease-in-out shadow-md
          hover:opacity-70"
          href="https://github.com/ww-side"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="github-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
