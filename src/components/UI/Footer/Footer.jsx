import React from 'react';
import githubIcon from '../../../file/github-icon.png';

const Footer = () => {
  return (
    <footer className='bg-zinc-800 flex flex-col items-center justify-center'>
      <hr className='border-zinc-600 w-[500px] mt-2 mb-2'/>
      <div className='mb-2'>
        <a href='https://github.com/ww-side' target='_blank'><img src={githubIcon} alt='github-icon'/></a>
      </div>
    </footer>
  );
};

export default Footer;