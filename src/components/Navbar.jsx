import React from 'react';

import './styles/Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <ul className="navbar__items">
                    <li className="logo">Logo</li>
                    <li className="navbar__items-item">Home</li>
                    <li className="navbar__items-item">Portfolio</li>
                    <li className="navbar__items-item">Education</li>
                    <li className="navbar__items-item">About</li>
                    <li className="navbar__items-item">Contact</li>
                    <li className="navbar__items-item resume"><span className="resume-text">Resume</span></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;