import React, { useRef, useEffect } from 'react';

import './styles/ProjectCard.css';
import github_icon from '../images/github_icon.svg';
import external_link_icon from '../images/external_link.png'

function ProjectCard(props) {
    
    let background_image = props.background_image;
    let background_description = props.background_description;
    let orientation = props.orientation;
    let technologies = props.technologies;
    let object_position = props.object_position;

    let project_image_container = useRef(null);
    let project_image = useRef(null);
    let project_title = useRef(null);
    let project_description = useRef(null);
    let project_technologies = useRef(null);
    let project_icons = useRef(null);
    
    useEffect(() => {
        project_image_container.style.background = background_image;
        project_image.style.objectPosition = object_position;
        // project_description.style.background = background_description;
        // project_image_container.style.background = background_color;
        // project_technologies.style.color = background_color;

        if (orientation === "left") {
            project_image_container.className += " project-image__left";
            project_title.className += " project-title__left";
            project_description.className += " project-description__left";
            project_technologies.className += " project-technologies__list-left";
            project_icons.className += " project-icons__left";
        }
    }, [background_description, background_image, orientation, object_position]); // I put the background_color prop as a dependency in the hook useEffect to not obtain a warning

    return (
        <div className="container">
            <div className="project-image" ref={el => {project_image_container = el}}>
                <img ref={el => {project_image = el}} src={props.image} alt="project_image"/>
                {/* <img src="%PUBLIC_URL%/sorting_visualizer.png" alt="sorting_visualizer"/> */}
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
                    <img className="github-icon" src={github_icon} alt="github-icon"/>
                    <img className="link-icon" src={external_link_icon} alt="link-icon"/>
                </div>
        </div>
    );
    
}

export default ProjectCard;