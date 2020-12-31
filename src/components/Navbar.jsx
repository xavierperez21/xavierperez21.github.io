import React from 'react';

import './styles/Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <ul className="navbar__items">
                    <a href="/" className="logo"><li>Logo</li></a>
                    <a href="/"><li className="navbar__items-item">Home</li></a>
                    <a href="#portfolio"><li className="navbar__items-item">Portfolio</li></a>
                    <a href="#education"><li className="navbar__items-item">Education</li></a>
                    <a href="#about"><li className="navbar__items-item">About</li></a>
                    <a href="#contact"><li className="navbar__items-item">Contact</li></a>
                    <a href="/"><li className="navbar__items-item resume"><span className="resume-text">Resume</span></li></a>
                </ul>
            </div>
        );
    }
}

export default Navbar;