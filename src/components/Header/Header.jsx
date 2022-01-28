import './Header.css';
import Logo from './logo.svg';
import Menu from './menu.svg';
import Close from './close.svg';
import React, { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="Header">
      <div className = "Logo">
          <img src={Logo} alt="logo" />
          <h2>Enver</h2>
      </div>
      <nav>
          <h3 id="home" className={window.location.hash === '' ? 'navLinkCurrent' : 'navLink'}>Home</h3>
          <h3 id="services" className={window.location.hash === 'services' ? 'navLinkCurrent' : 'navLink'}>Services</h3>
          <h3 id="ourProject" className={window.location.hash === 'ourProject' ? 'navLinkCurrent' : 'navLink'}>Our Project</h3>
          <h3 id="aboutUs" className={window.location.hash === 'aboutUs' ? 'navLinkCurrent' : 'navLink'}>About Us</h3>
      </nav>
      <img src={!menuOpen ? Menu : Close}
      onClick={() => menuOpen ? setMenuOpen(false) : setMenuOpen(true)}
      alt="" className="burgerMenu" />
      <button id="contactUs" className='navButton'>Contact Us</button>
      {menuOpen && 
        <div className='menu'>
            <h3 id="home" className={window.location.hash === '' ? 'navLinkCurrent' : 'navLink'}>Home</h3>
            <h3 id="services" className={window.location.hash === 'services' ? 'navLinkCurrent' : 'navLink'}>Services</h3>
            <h3 id="ourProject" className={window.location.hash === 'ourProject' ? 'navLinkCurrent' : 'navLink'}>Our Project</h3>
            <h3 id="aboutUs" className={window.location.hash === 'aboutUs' ? 'navLinkCurrent' : 'navLink'}>About Us</h3>
        </div>}
    </div>
  );
}

export default Header;