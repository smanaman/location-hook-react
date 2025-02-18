import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                MyLogo
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/form'>Form</Link>
                    </li>
                    <li>
                        <Link to='/contanct'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/showcard'>Showcard</Link>
                    </li>
                </ul>
            </nav>
        </header>

        
    );
}

export default Header;