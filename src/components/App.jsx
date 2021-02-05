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

import { gsap, TweenMax, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/App.css';


gsap.registerPlugin(ScrollTrigger);


function App() {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [data, setData] = useState([]);
    let linkedin_profile = "https://www.linkedin.com/in/luisxavierpm/";
    let github_profile = "https://github.com/xavierperez21";
    let instagram_profile = "https://www.instagram.com/luisxavperez/";
    let twitter_profile = "https://twitter.com/luisxavperez";

    let heroGreeting = useRef(null);
    let heroName = useRef(null);
    let heroCareer = useRef(null);

    // Creating array of references of sections
    const revealRefs = useRef([]);
    revealRefs.current = [];    // This is how we access to the HTML tags
    
    // This function adds a new element to the array of references.
    // This is passed as reference in the attribute "ref" of the HTML elements.
    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    // we don't have any references here, until the component is mounted, and we can know that in the useEffect() hook
    // console.log(revealRefs);

    useEffect(() => {
        TweenMax.fromTo(heroGreeting, 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeInOut })
        TweenMax.fromTo(heroName, 1.4, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: Power3.easeInOut })
        TweenMax.fromTo(heroCareer, 1.8, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: Power3.easeInOut })
        
        // Now we have all the references, because the component has mounted.
        console.log(revealRefs);

        // Iterating over all the array of refs
        revealRefs.current.forEach((el, index) => {
            gsap.fromTo(el, {
                autoAlpha: 0,   // From opacity 0
                y: 20           // initial position for the translation
            }, {
                duration: 0.5,
                autoAlpha: 1,   // To opacity of 1
                y: 0,           // To the normal position in y
                ease: Power3.easeInOut,
                scrollTrigger: {                // Using the ScrollTrigger plugin
                    id: `section-${index+1}`,
                    trigger: el,                // Selecting the corresponding html element, that is inside of this array of refs
                    start: 'top center+=100',   // When the animation will start, when the "top" of the section crosses with the "center" of the scroll
                    toggleActions: 'play none none reverse' // Resets the animmation when the scroll goes in reverse.
                }
            });
     
        });

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

            <section id="portfolio" className="portfolio">
                <h1 className="section-title" ref={addToRefs}>Projects</h1>
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
                    orientation = "right"
                    github_link = "https://github.com/xavierperez21/Sorting_visualizer"
                    project_link = "https://sorting-visualizer-lxpm.web.app/"
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
                    orientation = "left"
                    object_position = "left"
                    github_link = "https://github.com/xavierperez21/Flask_webapp_ToDolis"
                    project_link = "https://platzi-flask-task-list.ue.r.appspot.com/"
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
                    orientation = "right"
                    object_position = "left"
                    github_link = "https://github.com/xavierperez21/xavierperez21.github.io"
                    project_link = "https://xavierperez21.github.io/"
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
                    orientation = "left"
                    github_link = "https://github.com/xavierperez21/simon_says"
                    project_link = "https://xavierperez21.github.io/simon_says/"
                />  
            </section>
            
            <section id="education" className="education" ref={addToRefs}>
                <h1 className="section-title">Education</h1>
                <div className="education__description">Some courses I've acomplished during my professional career:</div>
                <Courses/>
            </section>
            
            <section id="about" className="about" ref={addToRefs}>
                <h1 className="section-title">About me</h1>
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
                            {/* <div className="description__btn"><span className="resume-text">My work</span></div>
                            <div className="description__btn"><span className="resume-text">Let's talk!</span></div> */}
                        </div>
                    </div>
                    <div className="about__image">
                        <img src="https://i.imgur.com/SAKVgIt.jpg" alt="my_image"/>
                    </div>
                </div>
            </section>
            
            <section id="contact" className="contact">
                {/* <div className="contact__separator"></div> */}
                <div className="contact__title">
                    <h1>Let's work together!</h1>
                </div>
                <div className="contact__links">
                    <p>If you want to build amazing things, contact me in the following links.</p>
                    <ul className="contact__links-list">
                        <li><a href={linkedin_profile} target="_blank" rel="noreferrer"><img className="linkedin_icon" src={linkedin_icon} alt="github-icon"/></a></li>
                        <li><a href={github_profile} target="_blank" rel="noreferrer"><img className="github-icon" src={github_icon} alt="github-icon"/></a></li>
                        <li><a href={instagram_profile} target="_blank" rel="noreferrer"><img className="instagram_icon" src={instagram_icon} alt="github-icon"/></a></li>
                        <li><a href={twitter_profile} target="_blank" rel="noreferrer"><img className="twitter_icon" src={twitter_icon} alt="github-icon"/></a></li>
                    </ul>
                </div>
                <div className="contact__say_hi">
                    <p>Or just send me a message by clicking my email:</p>
                    <a href="mailto:xavierpm1221@gmail.com"><p className="contact__mail">xavierpm1221@gmail.com</p></a>
                </div>
            </section>
            
            <Footer/>
        </div>
    );
}

export default App;
