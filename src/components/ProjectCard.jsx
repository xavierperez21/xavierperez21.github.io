import React from 'react';

import './styles/ProjectCard.css';

class ProjectCard extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="project-image">
                    <img src="https://i.imgur.com/F3VthR8.png" alt="sorting_visualizer"/>
                    {/* <img src="%PUBLIC_URL%/sorting_visualizer.png" alt="sorting_visualizer"/> */}
                </div>
                    <h2 className="project-title">Sorting Visualizer</h2>
                    <div className="project-description">
                        <p>
                            A visual project to see graphically the 4 main sorting algorithms:
                            <strong> merge-sort</strong>,
                            <strong> heap-sort</strong>,
                            <strong> quick-sort</strong>,
                            and <strong> bubble-sort.</strong>
                        </p>
                    </div>
                    <div className="project-icons">
                        <img src="" alt="github-icon"/>
                        <img src="" alt="link-icon"/>
                    </div>
            </div>
        );
    }
}

export default ProjectCard;