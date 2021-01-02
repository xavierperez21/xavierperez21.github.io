import React from 'react';

import './styles/Navbar.css'

class Navbar extends React.Component {

    componentDidMount() {
        const app = document.querySelector('.App');
        const hamburger = document.querySelector('.hamburger');
        const navItems = document.querySelector('.navbar__items');
        const items = document.querySelectorAll('.navbar__items li');
        const lines = document.querySelectorAll('.hamburger div');
        const nav = document.getElementById("nav");

        let hamburgerIsClicked = true;

        hamburger.addEventListener("click", () => {
            // Burger animation
            lines.forEach(line => {
                line.classList.toggle('active');
            });

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


            // Prevent scroll when burger menu is clicked
            if (hamburgerIsClicked) {
                // add listener to disable scroll
                // console.log("click");
                console.log(window.scrollY);
                // console.log(window.pageYOffset);
                app.style.top = `-${window.scrollY}px`;
                app.style.position = 'fixed';
                app.style.paddingRight = '15px';
                hamburgerIsClicked = false;
                console.log(window.scrollY);
            }
            else {
                // Remove listener to re-enable scroll
                const scrollY = app.style.top;
                app.style.position = '';
                app.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
                console.log(window.scrollY);
                app.style.paddingRight = '0';
                hamburgerIsClicked = true;
            }

        });

        // For every item of the menu we have to do the same transistions...
        // ... we did with the click of the burger menu
    
        items.forEach(item => {
            item.addEventListener("click", () => {
                if (window.innerWidth <= 768) {
                    // Renable scroll first
                    const scrollY = app.style.top;
                    app.style.position = '';
                    app.style.top = '';
                    window.scrollTo(0, parseInt(scrollY || '0') * -1);
                    app.style.paddingRight = '0';
                    hamburgerIsClicked = true;
    
                    // Removing the clip path of the burger menu
                    navItems.classList.remove('open');
    
                    // 
                    items.forEach( (item, index) => {
                        if (item.style.animation) {
                            item.style.animation = "";
                        }
                        else {
                            item.style.animation = `navItemFade 0.5s ease forwards ${index/items.length + 0.4}s`;
                        }
                    });
                    lines.forEach(line => {
                        line.classList.toggle('active');
                    });
                }
            })
        });


        // Hiding the navbar when the user scrolls
        let prevScrollpos = window.pageYOffset;
    
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;
            
            if (prevScrollpos >= currentScrollPos) {
                // If the nav has reached the top of the page, we reset the styles
                if (window.pageYOffset === 0){
                    nav.style.height = "100px";
                    nav.style.background = "";
                    nav.style.boxShadow = "";
                }
                else {
                    nav.style.height = "80px";
                    nav.style.top = "0";
                    nav.style.background = "#030335";
                    nav.style.boxShadow = "0px 5px 10px 0px rgba(0,0,0,0.94)";
                } 
            }
            else {
                nav.style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;
        }
    }
    
    render() {
        return (
            <nav id="nav">
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