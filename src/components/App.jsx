import React, { useRef, useEffect } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Scroll from './Scroll';
import ProjectCard from './ProjectCard';

import { TweenMax, Power3 } from 'gsap';

import './styles/App.css';

function App() {
    let heroGreeting = useRef(null);
    let heroName = useRef(null);
    let heroCareer = useRef(null);

    useEffect(() => {
        TweenMax.fromTo(heroGreeting, 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeInOut })
        TweenMax.fromTo(heroName, 1.4, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: Power3.easeInOut })
        TweenMax.fromTo(heroCareer, 1.8, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: Power3.easeInOut })
    }, []);

    return (
        <div className="App">
                <header className="header">
                    <Navbar/>
                    <section className="hero">
                        <div className="hero-headline">
                            <p className="headline__greeting" ref={el => {heroGreeting = el}}>Hello!, my name is</p>
                            <h1 className="headline__name" ref={el => {heroName = el}}>Luis Xavier Pérez</h1>
                            <h2 className="headline__career" ref={el => {heroCareer = el}}> Software Developer and Mechatronics Engineer</h2>
                            {/* <p className="headline__description">
                                I'm mostly a software developer based in Jalisco, México. I help convert a vision and an idea 
                                into meaningful and useful software products. Take a look at my portfolio work and let's see if we can work together 
                                on your next project.
                            </p> */}
                        </div>
                        <Scroll/>
                        {/* <img className="image_model" src="https://i.imgur.com/BRIKgoX.jpg" alt="me_posing"/> */}

                    </section>
                </header>

                <section className="portfolio">
                    <h1 className="portfolio-title">Projects</h1>
                    <ProjectCard
                        title = "Sorting Visualizer"
                        description = {
                            <div>
                                A visual project to see graphically the 4 main sorting algorithms: <strong> merge-sort</strong>, <strong> heap-sort</strong>, <strong> quick-sort</strong>, and <strong> bubble-sort.</strong>
                            </div>
                        }
                        image = "https://i.imgur.com/F3VthR8.png"
                        technologies = {[
                            {"id": 1, "name": "HTML5"},
                            {"id": 2, "name": "CSS3"},
                            {"id": 3, "name": "JavaScript"},
                            {"id": 4, "name": "React.js"},
                            {"id": 5, "name": "Algorithms"}
                        ]}
                        background_color = "#172A45"
                    />
                    <ProjectCard
                        title = "Todo List"
                        description = "You can Create, Read, Update, and Delete tasks (CRUD) using Python, Flask, and Firestore as Database. Authentication system: Log In, Log Out and register of users."
                        image = "https://i.imgur.com/aoHoQFR.png"
                        technologies = {[
                            {"id": 6, "name": "HTML5"},
                            {"id": 7, "name": "CSS3"},
                            {"id": 8, "name": "Python"},
                            {"id": 9, "name": "Flask"},
                            {"id": 10, "name": "Firebase"}
                        ]}
                        background_color = "#172A45"
                    />
                    <ProjectCard
                        title = "Personal Portfolio"
                        description = "Design, build and development of my personal website using React.js"
                        image = "https://i.imgur.com/x5gUvXs.png"
                        technologies = {[
                            {"id": 11, "name": "HTML5"},
                            {"id": 12, "name": "CSS3"},
                            {"id": 13, "name": "JavaScript"},
                            {"id": 14, "name": "React.js"}
                        ]}
                        background_color = "#172A45"
                    />
                    <ProjectCard
                        title = "Simon Says Game"
                        description = "Development of a Simon Says game using HTML, CSS3, and JavaScript."
                        image = "https://i.imgur.com/xl0smYx.png"
                        technologies = {[
                            {"id": 15, "name": "HTML5"},
                            {"id": 16, "name": "CSS3"},
                            {"id": 17, "name": "JavaScript"},
                        ]}
                        background_color = "#172A45"
                    />
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
