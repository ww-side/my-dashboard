import React from 'react';
import logo from '../../../file/logo.png';

const Header = () => {
  return (
    <header className='bg-zinc-900 py-4'>
      <nav className='flex items-center gap-3 px-6'>
        <img src={logo} alt="favicon"/>
        <h1 className='text-white text-2xl font-bold'>My Board</h1>
      </nav>
    </header>
  );
};

export default Header;