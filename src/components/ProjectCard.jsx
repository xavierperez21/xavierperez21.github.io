import React, { useRef, useEffect } from 'react';

import './styles/ProjectCard.css';
import github_icon from '../images/github_icon.png';
import external_link_icon from '../images/external_link.png'

function ProjectCard(props) {
    
    let background_color = props.background_color;
    let technologies = props.technologies;
    let project_description = useRef(null);
    
    useEffect(() => {
        project_description.style.backgroundColor = background_color;
    }, [background_color]); // I put the background_color prop as a dependency in the hook useEffect to not obtain a warning

    return (
        <div className="container">
            <div className="project-image">
                <img src={props.image} alt="sorting_visualizer"/>
                {/* <img src="%PUBLIC_URL%/sorting_visualizer.png" alt="sorting_visualizer"/> */}
            </div>
                <h2 className="project-title">{props.title}</h2>
                <div className="project-description" ref={el => {project_description = el}}>
                    {props.description}
                </div>
                <ul className="project-technologies__list">
                    {technologies.map(technologie => {
                        return (
                            <li key={technologie.id} className="technologies__list-item">
                                {technologie.name}
                            </li>
                        );
                    })}
                    {/* <li className="technologies__list-item">HTML5</li>
                    <li className="technologies__list-item">CSS3</li>
                    <li className="technologies__list-item">JavaScript</li>
                    <li className="technologies__list-item">React.js</li>
                    <li className="technologies__list-item">Algorithms</li> */}
                </ul>
                <div className="project-icons">
                    <img className="github-icon" src={github_icon} alt="github-icon"/>
                    <img className="link-icon" src={external_link_icon} alt="link-icon"/>
                </div>
        </div>
    );
    
}

export default ProjectCard;