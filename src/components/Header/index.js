// Header
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {

  return (
      <header>
      <div className="logo">
        <img src="" alt="the logo for YBS" />
      </div>
      <nav>
        <ul>
          <li className='navTravel'><Link to={'/travel'}>Travel</Link></li>
          <li className='navAbout'><Link to={'/about'}>About</Link></li>
          <li className='navContact'><Link to={'/contact'}>Contact</Link></li>
          <li className='navClients'><Link to={'/ourclients'}>Our Clients</Link></li>
        </ul>
      </nav>
      </header>
  )
}

export default Header;
