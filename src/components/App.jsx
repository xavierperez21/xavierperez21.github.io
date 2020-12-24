import React, { useRef, useEffect } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Scroll from './Scroll';
import ProjectCard from './ProjectCard';

import { TweenMax, Power3 } from 'gsap';

import './styles/App.css';

function App() {
    let headline = useRef(null);

    useEffect(() => {
        TweenMax.fromTo(headline, 1.2, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeInOut })
    }, []);

    return (
        <div className="App">
                <header className="header">
                    <Navbar/>
                    <section className="hero">
                        <div className="hero-headline" ref={el => {headline = el}}>
                            <p className="headline__greeting">Hi!, my name is</p>
                            <h1 className="headline__name">Luis Xavier Pérez</h1>
                            <h2 className="headline__career"> Mechatronics Engineer and Software Developer</h2>
                        </div>
                        <Scroll/>
                        {/* <img className="image_model" src="https://i.imgur.com/BRIKgoX.jpg" alt="me_posing"/> */}

                    </section>
                </header>

                <div className="slider"></div>

                <section className="portfolio">
                    <h1 className="portfolio-title">Projects</h1>
                    <ProjectCard/>
                </section>
                
                <section className="education">
                    EDUCATION
                </section>
                
                <section className="about">
                    ABOUT
                </section>
                
                <section className="contact">
                    CONTACT
                </section>
                
                <Footer/>
        </div>
    );
}

export default App;
