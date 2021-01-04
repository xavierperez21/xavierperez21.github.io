import React, { useRef, useEffect } from 'react';

import './styles/ProjectCard.css';
import github_icon from '../images/github_icon.svg';
import external_link_icon from '../images/external_link.png'

import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function ProjectCard(props) {
    
    let background_image = props.background_image;
    let orientation = props.orientation;
    let technologies = props.technologies;
    let object_position = props.object_position;

    let github_link = props.github_link;
    let project_link = props.project_link;

    let project_image_container = useRef(null);
    let project_image = useRef(null);
    let project_title = useRef(null);
    let project_description = useRef(null);
    let project_technologies = useRef(null);
    let project_icons = useRef(null);

    let projectRef = useRef(null);

    useEffect(() => {
        project_image_container.style.background = background_image;
        project_image.style.objectPosition = object_position;

        if (orientation === "left") {
            project_image_container.className += " project-image__left";
            project_title.className += " project-title__left";
            project_description.className += " project-description__left";
            project_technologies.className += " project-technologies__list-left";
            project_icons.className += " project-icons__left";
        }

        // Animmation of the projectCard using the ScrollTrigger plugin
        gsap.fromTo(projectRef, {
            autoAlpha: 0,   // From opacity 0
            y: 20           // initial position for the translation
        }, {
            duration: 0.5,
            autoAlpha: 1,   // To opacity of 1
            y: 0,           // To the normal position in y
            ease: Power3.easeInOut,
            scrollTrigger: {                // Using the ScrollTrigger plugin
                id: `section`,
                trigger: projectRef,                // Selecting the corresponding html element, that is inside of this array of refs
                start: 'top center+=100',   // When the animation will start, when the "top" of the section crosses with the "center" of the scroll
                toggleActions: 'play none none reverse' // Resets the animmation when the scroll goes in reverse.
            }
        });
    }, [background_image, orientation, object_position]); // I put the background_color prop as a dependency in the hook useEffect to not obtain a warning

    return (
        <div className="container" ref={el => {projectRef = el}}>
            <div className="project-image" ref={el => {project_image_container = el}}>
                <a href={project_link} target="_blank" rel="noreferrer"></a>
                <img ref={el => {project_image = el}} src={props.image} alt="project_image"/>
            </div>
            <h2 className="project-title" ref={el => {project_title = el}} >{props.title}</h2>
            <div className="project-description" ref={el => {project_description = el}}>
                {props.description}
            </div>
            <ul className="project-technologies__list" ref={el => {project_technologies = el}}>
                {technologies.map(technologie => {
                    return (
                        <li key={technologie.id} className="technologies__list-item">
                            {technologie.name}
                        </li>
                    );
                })}
            </ul>
            <div className="project-icons" ref={el => {project_icons = el}}>
                <a href={github_link} target="_blank" rel="noreferrer"><img className="github-icon" src={github_icon} alt="github-icon"/></a>
                <a href={project_link} target="_blank" rel="noreferrer"><img className="link-icon" src={external_link_icon} alt="link-icon"/></a>
            </div>
        </div>
    );
    
}

export default ProjectCard;