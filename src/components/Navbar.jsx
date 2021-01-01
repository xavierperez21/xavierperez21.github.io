import React from 'react';

import './styles/Navbar.css'

class Navbar extends React.Component {
    componentDidMount() {
        const hamburger = document.querySelector('.hamburger');
        const navItems = document.querySelector('.navbar__items');
        const items = document.querySelectorAll('.navbar__items li');

        hamburger.addEventListener("click", () => {
            navItems.classList.toggle('open');
            items.forEach(item => {
                item.classList.toggle('fade');
            });
        });

        items.forEach(item => {
            item.addEventListener("click", () => {
                navItems.classList.remove('open');
                items.forEach(item => {
                    item.classList.remove('fade');
                });
            })
        });
    }
    
    render() {
        return (
            <nav>
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                {/* <div className="logo"><a href="/">Logo</a></div> */}
                <ul className="navbar__items">
                    <li className="navbar__items-item"><a href="/">Home</a></li>
                    <li className="navbar__items-item"><a href="#portfolio">Portfolio</a></li>
                    <li className="navbar__items-item"><a href="#education">Education</a></li>
                    <li className="navbar__items-item"><a href="#about">About</a></li>
                    <li className="navbar__items-item"><a href="#contact">Contact</a></li>
                    <li className="navbar__items-item resume"><a href="/"><span className="resume-text">Resume</span></a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;