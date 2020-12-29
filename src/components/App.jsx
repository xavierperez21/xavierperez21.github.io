import React, { useRef, useEffect } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Scroll from './Scroll';
import ProjectCard from './ProjectCard';
import Courses from './Courses';

import linkedin_icon from '../images/linkedin_icon.svg';
import github_icon from '../images/github_icon.svg';
import instagram_icon from '../images/instagram_icon.svg';
import twitter_icon from '../images/twitter_icon.svg';

import { TweenMax, Power3 } from 'gsap';

import './styles/App.css';

function App() {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [data, setData] = useState([]);

    let heroGreeting = useRef(null);
    let heroName = useRef(null);
    let heroCareer = useRef(null);

    useEffect(() => {
        TweenMax.fromTo(heroGreeting, 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeInOut })
        TweenMax.fromTo(heroName, 1.4, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: Power3.easeInOut })
        TweenMax.fromTo(heroCareer, 1.8, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: Power3.easeInOut })

        // fetch("https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@xavier_perez21")
        // .then(res => res.json())
        // .then(
        //     (result) => {
        //         setIsLoaded(true);
        //         setData(result.userData.courses);
        //     },
        //     // Nota: es importante manejar errores aquí y no en 
        //     // un bloque catch() para que no interceptemos errores
        //     // de errores reales en los componentes.
        //     (error) => {
        //         setIsLoaded(true);
        //         setError(error);
        //     }
        // )

    }, []);

    // if (isLoaded === true && !data) {
    //     return <PageLoading />;
    // }

    // if (error) {
    //     return <PageError error={error} />
    // }

    // console.log(data);
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
                    background_image = "#15036d"
                    background_description = "#001547"
                    orientation = "right"
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
                    background_image = "#099CA9"
                    background_description = "#001547"
                    orientation = "left"
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
                    background_image = "#004346"
                    background_description = "#001547"
                    orientation = "right"
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
                    background_image = "#3C1642"
                    background_description = "#001547"
                    orientation = "left"
                />  
            </section>
            
            <section className="education">
                <h1 className="education__title">EDUCATION</h1>
                <div className="education__description">Some courses I've acomplished:</div>
                <Courses/>
            </section>
            
            <section className="about">
                <h1 className="education__title">About me</h1>
                <div className="about__container">
                    <div className="about__description">
                        <p>
                            Hello! I'm Luis Xavier, a <strong>Software Developer</strong> and <strong>Mechatronics Engineer </strong> 
                            based in Guadalajara, Jalisco, México. <br/><br/> I love to build things for the
                            web and solve problems through programming. In my free time I study more about 
                            Artificial Intelligence and Web technologies. <br/><br/> Here are a few technologies I've been working with recently: <br/><br/>
                        </p>
                        <ul className="description__list">
                            <li>HTML5 & CSS3</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>Vue.js</li>
                            <li>Python, Django</li>
                            <li>PHP, Laravel</li>
                        </ul>
                        <p>
                            Take a look at my portfolio work and let's see if we can work together on your next project!
                        </p>
                        <div className="description__buttons">
                            <div className="description__btn"><span className="resume-text">My work</span></div>
                            <div className="description__btn"><span className="resume-text">Let's talk!</span></div>
                        </div>
                    </div>
                    <div className="about__image">
                        <img src="https://i.imgur.com/zhhuLwo.jpg" alt="my_image"/>
                    </div>
                </div>
            </section>
            
            <section className="contact">
                <div className="contact__separator"></div>
                <div className="contact__title">
                    <h1>Let's work together!</h1>
                </div>
                <div className="contact__links">
                    <p>If you want to build amazing things, contact me in the following links.</p>
                    <ul className="contact__links-list">
                        <li>LinkedIn</li>
                        <li><img className="github-icon" src={github_icon} alt="github-icon"/></li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div className="contact__say_hi">
                    <p>Or just say hi! to:</p>
                    <p>hello@xavierpm.com</p>
                </div>
            </section>
            
            <Footer/>
        </div>
    );
}

export default App;
