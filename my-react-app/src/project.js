import React from 'react';
import './project.css';
import tech from './tech.jpeg';
function Projects({ projects }) {
  console.log(projects);
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <div className={`project-container ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <div className="project-text">
                <strong>{project.name}</strong>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Project Link
                </a>
              </div>
              <div className="project-image">
              <img src={tech} className="App-logo" alt="logo" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
