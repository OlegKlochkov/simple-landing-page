import './Footer.css';
import Logo from './logo.svg';

import React from 'react';

function Footer() {
    return (
        <div className="Footer">
            <div className="Logo">
                <img src={Logo} alt="logo" />
                <h2>Enver</h2>
            </div>
            <nav>
                <h3 className='navLink'>Support</h3>
                <h3 className='navLink'>Privacy Policy</h3>
                <h3 className='navLink'>Terms and Conditions</h3>
                <h3 className='navLink'>About Us</h3>
            </nav>
            <h3 id="copyright">© 2022 Enver, All Rights Reserved</h3>
        </div>
    );
}

export default Footer;
