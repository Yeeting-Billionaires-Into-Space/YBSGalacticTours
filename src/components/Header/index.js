// Header
import React from 'react';
import './style.css';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';


function Header() {


  return (
    <header>
      <div className='logo'>
        <img src='../../assets/YBSLogo.png' alt='the logo for YBS' />
      </div>
      <nav>
        <MobileNavigation />
        <Navigation />
      </nav>
    </header>
  )
}

export default Header;
