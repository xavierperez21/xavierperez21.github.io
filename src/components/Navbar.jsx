import React from 'react';

import './styles/Navbar.css'

class Navbar extends React.Component {

    componentDidMount() {
        const hamburger = document.querySelector('.hamburger');
        const navItems = document.querySelector('.navbar__items');
        const items = document.querySelectorAll('.navbar__items li');
        const lines = document.querySelectorAll('.hamburger div');

        console.log(lines);


        hamburger.addEventListener("click", () => {
            // Introducing the mobile menu
            navItems.classList.toggle('open');

            // Animating every link of the mobile menu
            items.forEach( (item, index) => {
                if (item.style.animation) {
                    item.style.animation = "";
                }
                else {
                    item.style.animation = `navItemFade 0.5s ease forwards ${index/items.length + 0.4}s`;
                }
            });

            // Burger animation
            // hamburger.classList.toggle('toggle');
            lines.forEach(line => {
                line.classList.toggle('active');
            });
        });
    }
    
    render() {
        return (
            <nav>
                <div className="hamburger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
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