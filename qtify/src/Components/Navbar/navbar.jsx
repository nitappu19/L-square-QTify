import React from 'react';
import './navbar.css';
import Logo from '../Logo/logo';
import Button from '../Button/button'
import SearchInput from '../SearchInput/searchInput'

export default function Navbar() {
  return (
    <>
        <nav className='navbar'>
          <Logo/>
          <SearchInput/>
          <Button/>
        </nav>
     </>
  );
}


